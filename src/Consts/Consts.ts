import type { Fact, Company, Service } from "./Types";

const packageList = {
  E_COMMERCE: [
    { title: "Basico", description: "Incluye una diseño estandar de un E-Commerce sin funcionalidades avanzadas", price: 1500 },
  ],
  SITIO_WEB: [
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
    { title: "Sitio web", description: "Sitio web mas", price: 1500 },
  ],
  LANDING_PAGES: [
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
  ],
  SITIO_INFORMAIVO: [
    {
      title: "Sitio informativo",
      description: "Sitio informativo mas",
      price: 1500,
    },
  ],
  APP_MUSICA: [
    { title: "App musica", description: "App musica mas", price: 1500 },
  ],
  BLOGS: null,
};

export const Titles = {
  PRINCIPAL: "InnoDev - Bienvenido a nuestra compañía",
  TRABAJOS: "InnoDev - Nuestros trabajos",
};
export const services: Service[] = [
  {
    title: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/Images/e-commerce.jpg",
      packages: packageList.E_COMMERCE,
  },
  {
    title: "Sitio web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "/Images/sitio-web.jpg",
    packages: packageList.SITIO_WEB,
  },
  {
    title: "Landing pages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.LANDING_PAGES,
  },
  {
    title: "Sitio informativo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.SITIO_INFORMAIVO,
  },
  {
    title: "App musica",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.APP_MUSICA,
  },
  {
    title: "Blogs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: null,
    packages: packageList.BLOGS,
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
};
