import { signal } from '@angular/core';
import { Experience } from '../shared/models/experience.model';

export const EXPERIENCES_EN = signal<Experience[]>([
  {
    title: 'Data Analyst',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Apr 2025 – Present',
    location: 'Remote',
    description: `Working as a Data Analyst in a quality and auditing team at Petrobras, focusing on data accuracy and process improvement.
I build and automate reports and dashboards using Power BI (DAX), Excel, and Power Automate, enabling data-driven decisions that improve operational efficiency.
Also involved in ETL processes and data validation, ensuring information reliability for key stakeholders.`,
    tools: [
      'Power BI',
      'Excel',
      'Power Automate',
      'DAX',
      'ETL',
      'Data Quality',
      'Process Optimization',
      'Audit Analytics',
    ],
    logo: 'assets/img/enterprise/tata_consultancy_services_logo.jpg',
  },
  {
    title: 'Data Analyst',
    company: 'Capgemini',
    period: 'Sep 2024 – Mar 2025',
    location: 'Remote',
    description: `Developed interactive dashboards and analytical reports using Power BI, Tableau, and SQL to provide actionable insights to operational teams.
Optimized data extraction and transformation (ETL) pipelines across Azure and Databricks, improving performance and consistency.
Explored low-code solutions with PegaSystems to deliver faster and more scalable analytical tools.`,
    tools: [
      'Power BI',
      'Tableau',
      'SQL',
      'Azure',
      'Databricks',
      'ETL',
      'Low-Code',
      'PegaSystems',
      'Business Intelligence',
      'Data Analytics',
    ],
    logo: 'assets/img/enterprise/capgemini_logo.jpg',
  },
  {
    title: 'Data Analyst / Assistant Data Engineer',
    company: 'Programmers – Beyond IT Brazil',
    period: 'Aug 2023 – Aug 2024',
    location: 'Remote',
    description: `Worked on Data Engineering and Artificial Intelligence projects using SuperAnnotate to label and describe images for Machine Learning model training in Natural Language Processing (NLP).
Supported data preprocessing and validation tasks, improving dataset quality and enhancing the accuracy of AI model outputs.
Collaborated with engineering teams to ensure data consistency and automation throughout the annotation workflow.`,
    tools: [
      'Python',
      'Data Engineering',
      'Machine Learning',
      'NLP',
      'SuperAnnotate',
      'Data Labeling',
      'Data Quality',
      'AI Automation',
    ],
    logo: 'assets/img/enterprise/programmersbeyondit_logo.jpg',
  },
  {
    title: 'Developer Trainee',
    company: 'Wipro',
    period: 'Jul 2022 – Oct 2023',
    location: 'Remote',
    description: `Completed the Java Full Stack Development Program at Impacta College, learning HTML, CSS, Bootstrap, TypeScript, Angular, Spring Boot, MongoDB, and Java.
Developed web applications and APIs, gaining strong foundations in software architecture and system integration.
Additionally, studied cloud technologies such as Azure, AWS, and GCP, broadening my understanding of cloud-based data ecosystems.`,
    tools: [
      'Java',
      'Spring Boot',
      'Angular',
      'TypeScript',
      'MongoDB',
      'APIs',
      'Cloud Computing',
      'Azure',
      'AWS',
      'GCP',
      'System Integration',
    ],
    logo: 'assets/img/enterprise/wipro_logo.jpg',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Banco PAN',
    period: 'Feb 2023 – Jun 2023',
    location: 'Remote',
    description: `Worked on front-end development of landing pages and promotional banners, using HTML, CSS, and JavaScript to deliver a smooth and responsive user experience (UX).
Contributed to page deployment and approval processes through the Lumis platform, ensuring code quality and design consistency.
This experience strengthened my focus on performance, process automation, and continuous improvement in corporate environments.`,
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'UX',
      'Lumis Platform',
      'Front-End Development',
      'Process Automation',
      'Continuous Improvement',
    ],
    logo: 'assets/img/enterprise/banco_pan_logo.jpg',
  },
]);

export const EXPERIENCES_PT = signal<Experience[]>([
  {
    title: 'Analista de Dados',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Abr 2025 – Presente',
    location: 'Remoto',
    description: `Atuo como Analista de Dados em uma equipe de qualidade e auditoria na Petrobras, com foco em precisão dos dados e melhoria de processos.
Crio e automatizo relatórios e dashboards usando Power BI (DAX), Excel e Power Automate, permitindo decisões orientadas por dados que aumentam a eficiência operacional.
Também participo de processos de ETL e validação de dados, garantindo a confiabilidade das informações para stakeholders chave.`,
    tools: [
      'Power BI',
      'Excel',
      'Power Automate',
      'DAX',
      'ETL',
      'Qualidade de Dados',
      'Otimização de Processos',
      'Análise de Auditoria',
    ],
    logo: 'assets/img/enterprise/tata_consultancy_services_logo.jpg',
  },
  {
    title: 'Analista de Dados',
    company: 'Capgemini',
    period: 'Set 2024 – Mar 2025',
    location: 'Remoto',
    description: `Desenvolvi dashboards interativos e relatórios analíticos com Power BI, Tableau e SQL para fornecer insights acionáveis às equipes operacionais.
Otimizei pipelines de ETL em Azure e Databricks, melhorando desempenho e consistência dos dados.
Explorei soluções low-code com PegaSystems para entregar ferramentas analíticas mais rápidas e escaláveis.`,
    tools: [
      'Power BI',
      'Tableau',
      'SQL',
      'Azure',
      'Databricks',
      'ETL',
      'Low-Code',
      'PegaSystems',
      'Business Intelligence',
      'Análise de Dados',
    ],
    logo: 'assets/img/enterprise/capgemini_logo.jpg',
  },
  {
    title: 'Analista de Dados / Assistente de Engenheiro de Dados',
    company: 'Programmers – Beyond IT Brazil',
    period: 'Ago 2023 – Ago 2024',
    location: 'Remoto',
    description: `Atuei em projetos de Engenharia de Dados e Inteligência Artificial usando o SuperAnnotate para rotular e descrever imagens para treinamento de modelos de NLP.
Dei suporte em tarefas de pré-processamento e validação de dados, melhorando a qualidade dos conjuntos de dados e a acurácia dos modelos.
Colaborei com times de engenharia para garantir consistência dos dados e automação em todo o fluxo de anotação.`,
    tools: [
      'Python',
      'Engenharia de Dados',
      'Machine Learning',
      'NLP',
      'SuperAnnotate',
      'Rotulagem de Dados',
      'Qualidade de Dados',
      'Automação com IA',
    ],
    logo: 'assets/img/enterprise/programmersbeyondit_logo.jpg',
  },
  {
    title: 'Desenvolvedor Trainee',
    company: 'Wipro',
    period: 'Jul 2022 – Out 2023',
    location: 'Remoto',
    description: `Concluí o programa de Java Full Stack na Faculdade Impacta, estudando HTML, CSS, Bootstrap, TypeScript, Angular, Spring Boot, MongoDB e Java.
Desenvolvi aplicações web e APIs, obtendo fundamentos sólidos em arquitetura de software e integração de sistemas.
Também estudei tecnologias em nuvem como Azure, AWS e GCP, ampliando minha visão sobre ecossistemas de dados na nuvem.`,
    tools: [
      'Java',
      'Spring Boot',
      'Angular',
      'TypeScript',
      'MongoDB',
      'APIs',
      'Computação em Nuvem',
      'Azure',
      'AWS',
      'GCP',
      'Integração de Sistemas',
    ],
    logo: 'assets/img/enterprise/wipro_logo.jpg',
  },
  {
    title: 'Desenvolvedor Júnior',
    company: 'Banco PAN',
    period: 'Fev 2023 – Jun 2023',
    location: 'Remoto',
    description: `Atuei no desenvolvimento front-end de landing pages e banners promocionais, utilizando HTML, CSS e JavaScript para garantir uma boa experiência do usuário (UX).
Contribuí nos processos de publicação e aprovação de páginas via plataforma Lumis, garantindo qualidade de código e consistência visual.
Essa experiência reforçou meu foco em performance, automação de processos e melhoria contínua em ambientes corporativos.`,
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'UX',
      'Plataforma Lumis',
      'Desenvolvimento Front-End',
      'Automação de Processos',
      'Melhoria Contínua',
    ],
    logo: 'assets/img/enterprise/banco_pan_logo.jpg',
  },
]);

