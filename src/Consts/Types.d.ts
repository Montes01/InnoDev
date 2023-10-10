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
  image?: `/${string}.${string}`;
  
  packages?:Package[]
};
export type Package = {
  title: string;
  description: string;
  price: number;
};
