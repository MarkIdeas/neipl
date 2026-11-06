export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface StatItem {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly sub: string;
}

export interface ProductLine {
  readonly name: string;
  readonly desc: string;
  readonly img: string;
  readonly items: readonly string[];
  readonly filterCat?: string;
  readonly badge?: string;
}

export interface CatalogueItem {
  readonly name: string;
  readonly cat: string;
  readonly part: string;
  readonly img: string;
  readonly brand?: string;
  readonly specs?: string;
}

export interface Industry {
  readonly name: string;
  readonly desc: string;
  readonly img?: string;
}

export interface ServiceItem {
  readonly n: string;
  readonly title: string;
  readonly anchor: string;
  readonly desc: string;
  readonly bullets?: readonly string[];
  readonly img?: string;
}

export interface CertificateItem {
  readonly client: string;
  readonly doc: string;
  readonly href: string;
  readonly category?: "psu-railways" | "industrial-oem" | "agro-export";
  readonly sector?: string;
  readonly scope?: string;
  readonly logo?: string;
  readonly featured?: boolean;
}

export interface PartnerBrand {
  readonly name: string;
  readonly type: string;
  readonly desc: string;
  readonly src?: string;
}

export interface GalleryItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly img: string;
  readonly desc?: string;
}

export interface PlanStepItem {
  readonly number: string;
  readonly title: string;
  readonly outcome: string;
  readonly description: string;
  readonly deliverable: string;
}

