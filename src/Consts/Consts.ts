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
      description: [
        "Diseño básico de la tienda en línea.",
        "Integración de hasta 20 productos.",
        "Carrito de compras y sistema de pago básico.",
        "Optimización para dispositivos móviles.",
        "Hosting por 3 meses.",
        "Dominio",
        "Soporte técnico básico por 3 meses.",
      ],

      price: 1200000,
    },
    {
      title: "Intermedio",
      description: [
        "Diseño personalizado y atractivo de la tienda en línea.",
        "Integración de hasta 100 productos.",
        "Carrito de compras avanzado y sistema de pago seguro.",
        "Optimización SEO básica para productos.",
        "Integración de redes sociales.",
        "Hosting por 6 meses.",
        "Dominio",
        "Soporte técnico básico por 6 meses.",
      ],

      price: 3000000,
    },
    {
      title: "Avanzado",
      description: [
        "Diseño premium y altamente personalizado de la tienda en línea.",
        "Integración de catálogo ilimitado de productos.",
        "Carrito de compras avanzado, sistema de pago seguro y gestión de inventario.",
        "Optimización SEO avanzada para productos.",
        "Integración con CRM y herramientas de análisis.",
        "Hosting por 1 año.",
        "Dominio",
        "Soporte técnico avanzado por 6 meses.",
      ],

      price: 6000000,
    },
  ],
  LANDING_PAGES: [
    {
      title: "Landing pages",
      description: [
        "Hosting x 1 año GRATIS",
        "Dominio",
        "Identificar modelo de negocio",
        "Diseño atractivo y funcional",
        "Adaptacion a dispositivos moviles",
        "Propuesta de valor",
        "SEO -> Estrategia de posicionamiento en linea",
        "Certificado Seguridad",
        "5 Secciones",
      ],

      price: 350000,
    },
  ],
  PAGINA_INFORMATIVA: [
    {
      title: "Sitio informativo",
      description: [
        "Hosting x 1 año GRATIS",
        "Dominio",
        "Diseño sencillo y profesional",
        "Contenido estatico",
        "Optimización para Dispositivos",
        "Formulario de Contacto",
        "Integracion de Redes Sociales",
        "Asesoramiento en Contenido",
        "Escalabilidad ",
        "Seguridad avanzada",
        "Soporte",
        "Capacitaciones",
      ],

      price: 1000000,
    },
  ],
  SITIO_A_LA_MEDIDA: [
    {
      title: "App musica",
      description: [
        "Hosting x 1 año GRATIS",
        "Dominio",
        "Diseño personalizado, atractivo y funcional",
        "Adaptacion a dispositivos moviles",
        "Gestion de Contenidos Personalizada",
        "Integraciones Avanzadas",
        "Integracion de Redes Sociales",
        "SEO -> Estrategia de posicionamiento en linea",
        "Escalabilidad",
        "Seguridad avanzada",
        "Soporte",
        "Capacitaciones",
        "Publicaciones personalizadas, texto, imagenes, audios, etc.",
      ],

      price: 1500000,
    },
  ],
  BLOGS: [
    {
      title: "App musica",
      description: [
        "Hosting x 1 año GRATIS",
        "Dominio",
        "Diseño personalizado, atractivo y funcional",
        "Adaptacion a dispositivos moviles",
        "Estructura de navegacion, hasta 5 rutas (Inicio, contacto, publicaciones, sobre mi, etc)",
        "Integracion de Redes Sociales",
        "SEO -> Estrategia de posicionamiento en linea",
        "Publicaciones personalizadas, texto, imagenes, audios, etc.",
      ],

      price: 1500000,
    },
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
