import age from "@/utils/variables/age";

export const ptBR = {
  navbar: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    languages: {
      "en-US": "Inglês",
      "pt-BR": "Português",
    },
    burger: {
      theme: {
        light: "Claro",
        dark: "Escuro",
      },
    },
  },
  home: {
    name: "Paulo Edney",
    office: {
      frontend: "Desenvolvedor Frontend",
      backend: "Desenvolvedor Backend",
      web: "Desenvolvedor Full Stack",
      softwareEngineer: "Engenheiro de Software",
    },
    description:
      "Eu construo produtos e experiências digitais acessíveis e inclusivas.",
    download: "Baixar Curriculo",
  },
  modal: {
    about: {
      title: "Sobre",
      aboutList: [
        "Graduado em Ciência da Computação pelo Centro Universitário Maurício de Nassau em 2023, iniciei minha jornada como Estagiário em Desenvolvimento Full Stack no Laboratório para Computação Embarcada e Tecnologias Industriais do Centro de Informática da UFPE em 2021.",
        "Durante esse período, estive envolvido em projetos de desenvolvimento em eletrônica industrial e sistemas embarcados para a indústria 4.0, atendendo clientes da indústria brasileira. Em abril de 2024, assumi o cargo de Desenvolvedor Full Stack na mesma instituição, desempenhando um papel fundamental desde a concepção do software até sua entrega.",
        "Tenho um interesse especial pela Engenharia de Software e sua aplicação nas áreas de Inteligência Artificial e Big Data.",
      ],
      skillsList: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Next.js",
        "Svelte",
        "Angular",
        "Node.js",
        "Express",
        "Prisma",
        "Java",
        "Maven",
        "Gradle",
        "Spring Boot",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "AWS (EC2, S3, IOT)",
        "Git",
        "GitHub",
      ],
    },
    experience: {
      title: "Experiência",
      list: [
        {
          title: "Desenvolvedor Full Stack",
          company:
            "Laboratorio de Computação Embarcada e Tecnologias Industriais do Cin-UFPE",
          location: "Recife, PE",
          date: "04/2024 - Atual",
          description: [
            "· Desenvolvimento de aplicações full-stack para sistemas embarcados e tecnologias industriais",
            "· Implementação de infraestrutura na AWS (EC2, S3, IOT)",
            "· Writing documentation, drafting new tasks, and code reviewing",
            "· Metodologias Ágeis e TDD",
          ],
        },
        {
          title: "Estágio em Desenvolvimento Full Stack",
          company:
            "Laboratorio de Computação Embarcada e Tecnologias Industriais do Cin-UFPE",
          location: "Recife, PE",
          date: "11/2021 - 04/2024",
          description: [
            "· Desenvolvimento de interfaces responsivas e dinâmicas para aplicações web",
            "· Desenvolvimento de APIs RESTful e GraphQL",
            "· Desenvolvimento de aplicativos mobile para iOS e Android",
            "· Desenvolvimento de aplicativos web para desktop e web",
          ],
        },
        {
          title: "Técnico em Instalação e Configuração de Sistemas",
          company: "FASTi - Soluções em T.I",
          location: "Recife, PE",
          date: "12/2021 - 03/2022",
          description: [
            "· Realizar instalação e configuração de sistemas farmacêuticos",
            "· Configuração de banco de dados e rede",
            "· Instalação de impressoras fiscais e não fiscais",
            "· Auxiliar usuários na utilização dos sistemas",
          ],
        },
        {
          title: "Suporte Técnico",
          company: "Evolution - Tecnologia funerária com sustentabilidade",
          location: "Igarassu, PE",
          date: "03/2021 - 08/2021",
          description: [
            "· Suporte e monitoramento as estações de tratamento de necrochorumes",
            "· Realizar emissão de relatórios e solicitação de materiais eletrônicos",
            "· Auxiliar usuários na manuntenção e utilização dos sistemas",
            "· Auxiliar no desenvolvimento de novas funcionalidades",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos",
      list: [
        {
          name: "LaCETI Website",
          description:
            "Website desenvolvido para a empresa LaCETI, servindo como vitrine para seus projetos e áreas de atuação. Fui responsável pelo design, desenvolvimento e hospedagem do site.",
          link: "https://laceti.com.br",
          img: "",
          stack: ["WordPress", "PHP", "Figma", "GItHub"],
        },
        {
          name: "Plugow",
          description:
            "Sistema para monitoramento da qualidade da água, desenvolvido pela LaCETI em parceria com a startup PLUVI, permitindo o uso da água da chuva como potável. Fui responsável por toda a parte de software do projeto, desde a criação da aplicação web até o deploy completo (backend na AWS e frontend na Vercel).",
          link: "https://plugow.vercel.app",
          img: "",
          stack: [
            "Svelte",
            "Node",
            "Prisma",
            "PostgreSQL",
            "Docker",
            "AWS",
            "Vercel",
            "Mqtt",
            "Figma",
            "GitHub",
          ],
        },
        {
          name: "M3S",
          description:
            "Sistema integrado para controle e monitoramento da manufatura de baterias, desenvolvido pela LaCETI em parceria com o ITEMM, garantindo rastreabilidade e eficiência. Atuei ativamente no desenvolvimento, implementando e corrigindo funcionalidades para garantir um software escalável, seguro e confiável.",
          link: "https://m3s.moura.com.br/",
          img: "",
          stack: [
            "React",
            "Storybook",
            "Node",
            "Prisma",
            "MongoDB",
            "PostgreSQL",
            "Docker",
            "AWS",
            "Mqtt",
            "Figma",
            "GitHub",
          ],
        },
      ],
      projectsButtonName: "Ver projeto",
    },
  },
};
