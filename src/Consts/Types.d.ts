export type Fact = {
  value: `+${number}` | `+${number}%` | `-${number}` | `-${number}%`;
  fact: string;
};
export type Company = {
  name: string;
  image?: string;
};
export type Service = {
  title: string;
  description: string;
  prevDescription?: string;
  image?: `/${string}.${string}`;
  packages?: PackageList;
  characteristics?: string[];
  finality?: string;
  examples?: [FeaturedProject, FeaturedProject, FeaturedProject]
};

export type PackageList = [Package, Package, Package];

export type Package = {
  title: string;
  description:  string[];
  price: number;
};

export type FeaturedProject = {
  title: string;
  description: string;
  image?: string;
  logo?: string;
};

export type Question = {
  question: string;
  response: string;
};

export type Feature = {
  title: string
  popover:string
}
