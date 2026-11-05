import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

// next/font/google runs inside the Next build only; outside it the loaders
// don't exist. Each returns an inert handle carrying the CSS variable name.
vi.mock("next/font/google", () => {
  const font = (fallback: string) => (options?: { variable?: string }) => ({
    variable: options?.variable ?? fallback,
    className: "font-mock",
    style: { fontFamily: "mock" },
  });
  return {
    Plus_Jakarta_Sans: font("--font-sans"),
    JetBrains_Mono: font("--font-mono"),
  };
});

// next/image mock for jsdom
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const img = { ...props };
    for (const key of [
      "fill",
      "priority",
      "sizes",
      "quality",
      "loader",
      "placeholder",
    ]) {
      delete img[key];
    }
    return React.createElement("img", img);
  },
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => React.createElement("a", { href, ...rest }, children),
}));

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/",
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

// Mock IntersectionObserver for scroll-triggered animations (useCountUp, etc.)
class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  observe(target: Element) {
    this.callback(
      [
        {
          isIntersecting: true,
          target,
          intersectionRatio: 1,
          boundingClientRect: target.getBoundingClientRect(),
          intersectionRect: target.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now(),
        } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock matchMedia + dynamic viewport width evaluation for Desktop & Mobile tests
const mediaListeners = new Set<() => void>();
let reducedMotion = false;
let currentViewportWidth = 1440;

function evaluateMediaQuery(query: string): boolean {
  if (query.includes("prefers-reduced-motion")) {
    return reducedMotion;
  }
  const maxMatch = query.match(/max-width:\s*(\d+)px/);
  if (maxMatch) {
    return currentViewportWidth <= Number(maxMatch[1]);
  }
  const minMatch = query.match(/min-width:\s*(\d+)px/);
  if (minMatch) {
    return currentViewportWidth >= Number(minMatch[1]);
  }
  return false;
}

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: evaluateMediaQuery(query),
    media: query,
    onchange: null,
    addEventListener: (_: string, cb: () => void) => mediaListeners.add(cb),
    removeEventListener: (_: string, cb: () => void) =>
      mediaListeners.delete(cb),
    addListener: (cb: () => void) => mediaListeners.add(cb),
    removeListener: (cb: () => void) => mediaListeners.delete(cb),
    dispatchEvent: () => false,
  }),
});

export function setPrefersReducedMotion(value: boolean) {
  reducedMotion = value;
  for (const cb of mediaListeners) cb();
}

export function setViewport(width: number, height: number = 812) {
  currentViewportWidth = width;
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, "innerHeight", {
    writable: true,
    configurable: true,
    value: height,
  });
  window.dispatchEvent(new Event("resize"));
  for (const cb of mediaListeners) cb();
}
