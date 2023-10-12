import type { Fact, Company, Service, PackageList, FeaturedProject, Question } from "./Types";

const packageList = {
  E_COMMERCE: [
    {
      title: "Basico",
      description:
        "Incluye una diseño estandar de un E-Commerce sin funcionalidades avanzadas",
      price: 1500,
    },
    {
      title: "Basico",
      description:
        "Incluye una diseño estandar de un E-Commerce sin funcionalidades avanzadas",
      price: 1500,
    },
    {
      title: "Basico",
      description:
        "Incluye una diseño estandar de un E-Commerce sin funcionalidades avanzadas",
      price: 1500,
    },
  ],
  SITIO_WEB: [
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
  ],
  LANDING_PAGES: [
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
  ],
  SITIO_INFORMAIVO: [
    {
      title: "Sitio informativo",
      description: "Sitio informativo mas",
      price: 1500,
    },
    {
      title: "Sitio informativo",
      description: "Sitio informativo mas",
      price: 1500,
    },
    {
      title: "Sitio informativo",
      description: "Sitio informativo mas",
      price: 1500,
    },
  ],
  APP_MUSICA: [
    { title: "App musica", description: "App musica mas", price: 1500 },
    { title: "App musica", description: "App musica mas", price: 1500 },
    { title: "App musica", description: "App musica mas", price: 1500 },
  ],
  BLOGS: [
    { title: "App musica", description: "App musica mas", price: 1500 },
    { title: "App musica", description: "App musica mas", price: 1500 },
    { title: "App musica", description: "App musica mas", price: 1500 },
  ],
};

export const Titles = {
  PRINCIPAL: "InnoDev - Bienvenido a nuestra compañía",
  TRABAJOS: "InnoDev - Nuestros trabajos",
  NOT_FOUND: "InnoDev - Página no encontrada",
};
export const services: Service[] = [
  {
    title: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "/Images/e-commerce.jpg",
    packages: packageList.E_COMMERCE as PackageList,
  },
  {
    title: "Sitio web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "/Images/sitio-web.jpg",
    packages: packageList.SITIO_WEB as PackageList,
  },
  {
    title: "Landing pages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.LANDING_PAGES as PackageList,
  },
  {
    title: "Sitio informativo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.SITIO_INFORMAIVO as PackageList,
  },
  {
    title: "App musica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.APP_MUSICA as PackageList,
  },
  {
    title: "Blogs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.BLOGS as PackageList,
  },
];

export const Facts: Fact[] = [
  {
    value: "+10",
    fact: "Años de experiencia",
  },
  {
    value: "+100",
    fact: "Clientes con nosotros",
  },
  {
    value: "+130",
    fact: "Clientes activos",
  },
  {
    value: "+80%",
    fact: "Satisfaccion general",
  },
];

export const Companies: Company[] = [
  {
    name: "InnoDev",
  },
  {
    name: "Amazon",
  },
  {
    name: "Facebook",
  },
  {
    name: "Amazon",
  },
  {
    name: "Facebook",
  },
];

export const Messages = {
  ALERT_CONTACT:
    "La continuación de tu compra y detalles adicionales se gestionarán a través de WhatsApp o Gmail. Estamos aquí para ayudarte.",
  NOT_FOUND: "La pagina a la que intentas acceder no existe",
  FEATURED: "Más de 1'000.000 de personas hacen parte de estas empresas"
};

export const FeaturedProjects:FeaturedProject[] = [
  {
    title: "Snaggy",
    description: "Snaggy es un sitio web para comprar y vender productos"
  },
  {
    title: "Snaggy",
    description: "Snaggy es un sitio web para comprar y vender productos"
  }
]

export const Questions:Question[] = [
  {
    question: "¿Cómo funciona InnoDev?",
    response: "InnoDev es una empresa de desarrollo de software que ofrece aplicativos software."
  },
  {
    question: "¿Cómo funciona InnoDev?",
    response: "InnoDev es una empresa de desarrollo de software que ofrece aplicativos software."
  }

]