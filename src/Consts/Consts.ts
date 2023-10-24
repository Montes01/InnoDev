import type {
  Fact,
  Company,
  Service,
  PackageList,
  FeaturedProject,
  Question,
  Package,
} from "./Types";

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
  LANDING_PAGES: [
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
    { title: "Landing pages", description: "Landing pages mas", price: 1500 },
  ],
  PAGINA_INFORMATIVA: [
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
  SITIO_A_LA_MEDIDA: [
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
  SERVICE: (service: string) => `InnoDev - ${service}`,
};
export const services: Service[] = [
  {
    title: "E-Commerce",
    description:
      "un E-Commerce Es una tienda en línea donde puedes comprar y vender productos o servicios a través de Internet en lugar de hacerlo en una tienda física.",
    prevDescription:
      "Ofrece tus productos o servicios en linea mejorando la experiencia de tus clientes",
    image: "/Images/e-commerce.jpg",
    packages: packageList.E_COMMERCE as PackageList,
    characteristics: [
      "Catálogo en línea",
      "Carrito de Compras",
      "Proceso de Pago en Línea",
      "Seguridad",
      "Proceso de Compra Simplificado",
      "Opciones de Envío y Entrega",
      "Atención al Cliente en Línea",
      "Gestión de Devoluciones y Reembolsos",
      "Integración de Redes de Pago",
    ],
    finality:
      "Agiliza y hace más accesible el proceso de comercio, beneficiando tanto a compradores como a vendedores\n  Ofrece a los vendedores una plataforma para llegar a una audiencia más amplia, reduciendo los costos asociados con las tiendas físicas.",
    examples: [
      {} as FeaturedProject,
      {} as FeaturedProject,
      {} as FeaturedProject,
    ],
  },
  {
    title: "Blogs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    prevDescription:
      "Publica tus propios articulos, guias, e historias sobre temas que mas te gusten",
    image: null,
    packages: packageList.BLOGS as PackageList,
    characteristics: [],
    finality: "",
    examples: [
      {} as FeaturedProject,
      {} as FeaturedProject,
      {} as FeaturedProject,
    ],
  },
  {
    title: "Landing pages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    prevDescription:
      "Captura posibles clientes potenciales con la mejor estrategia de marketing",
    image: null,
    packages: packageList.LANDING_PAGES as PackageList,
    characteristics: [],
    finality: "",
    examples: [
      {} as FeaturedProject,
      {} as FeaturedProject,
      {} as FeaturedProject,
    ],
  },
  {
    title: "Página informativa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    prevDescription:
      "Ofrece contenido util y relevante para todos los visitantes de tu pagina",
    image: null,
    packages: packageList.PAGINA_INFORMATIVA as PackageList,
    characteristics: [],
    finality: "",
    examples: [
      {} as FeaturedProject,
      {} as FeaturedProject,
      {} as FeaturedProject,
    ],
  },
  {
    title: "Sitio a la medida",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    prevDescription:
      "Has realidad la pagina de tus sueños compartiendo con nosotros tus expectativas",
    image: null,
    packages: packageList.SITIO_A_LA_MEDIDA as PackageList,
    characteristics: [],
    finality: "",
    examples: [
      {} as FeaturedProject,
      {} as FeaturedProject,
      {} as FeaturedProject,
    ],
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
    name: "MyBuss",
  },
  {
    name: "Facebook",
  },
  {
    name: "Amazon",
  },
  {
    name: "StartedUp",
  },
  {
    name: "Venecia",
  },
  {
    name: "InnoDev",
  },
  {
    name: "MyBuss",
  },
  {
    name: "Facebook",
  },
  {
    name: "Amazon",
  },
  {
    name: "StartedUp",
  },
  {
    name: "Venecia",
  },
  {
    name: "StartedUp",
  },
  {
    name: "Venecia",
  },
];

export const Messages = {
  ALERT_CONTACT:
    "La continuación de tu compra y detalles adicionales se gestionarán a través de WhatsApp o Gmail. Estamos aquí para ayudarte.",
  NOT_FOUND: "La pagina a la que intentas acceder no existe",
  FEATURED: "Más de 1'000.000 de personas hacen parte de estas empresas",
};

export const FeaturedProjects: FeaturedProject[] = [
  {
    title: "Snaggy",
    description: "Snaggy es un sitio web para comprar y vender productos",
  },
  {
    title: "MyBuss",
    description:
      "MyBuss es una empresa que nos informa sobre las rutas en armenia - Colombia",
  },
  {
    title: "Snaggy",
    description: "Snaggy es un sitio web para comprar y vender productos",
  },
];

export const Questions: Question[] = [
  {
    question: "¿Cómo funciona InnoDev?",
    response:
      "InnoDev es una empresa de desarrollo de software que ofrece aplicativos software.",
  },
  {
    question: "¿Cómo funciona InnoDev?",
    response:
      "InnoDev es una empresa de desarrollo de software que ofrece aplicativos software.",
  },
];
