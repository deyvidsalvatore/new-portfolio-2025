import { signal } from '@angular/core';
import { Testimonial } from '../shared/models/testimonial.model';

export const TESTIMONIALS_EN: Array<Testimonial> = [
  {
    fullName: 'Paulo Henrique',
    profileImg: 'assets/img/paulo_pic.png',
    jobTitle: 'Data Analyst | Excel | Power BI',
    relationship: {
      relationDate: new Date('Dec 12, 2025 00:00:00'),
      relationDescription:
        'Well, Diego was the one who helped me at the beginning of my journey, always there with valuable tips, guidance on resumes, important advice, and even course recommendations that made all the difference. He always had a lot of calm and patience to teach, explain his ideas, and answer all my questions, no matter how simple they were.',
    },
    profileLink: 'https://www.linkedin.com/in/paulo-henri/',
  },
  {
    fullName: 'Deyvid Santos',
    profileImg: 'assets/img/deyvid_pic.jpg',
    jobTitle: 'Web Developer | Java, AWS & Angular Expert',
    relationship: {
      relationDate: new Date('June 23, 2025 00:00:00'),
      relationDescription:
        "Diego has been a key person in my learning journey and guidance into the data field. Even though I haven't fully transitioned yet, his tips, advice, and encouragement have helped me better understand the path to follow. Always clear, attentive, and willing to share his knowledge, he played an important role in keeping me motivated to keep studying and believing in my potential. I’m truly grateful for all his support!",
    },
    profileLink: 'https://www.linkedin.com/in/deyvidsantosdevops/',
  },
  {
    fullName: 'Mirraely M.',
    profileImg: 'assets/img/mirraely_pic.jpg',
    jobTitle: 'Web Developer | Front-end',
    relationship: {
      relationDate: new Date('October 11, 2024 00:00:00'),
      relationDescription:
        "I had the pleasure of working with Diego during his time as an administrative assistant on our team in the collections department at Riachuelo Contact Center. He stood out for his proactivity, dedication, and collaboration in all the tasks he was assigned. His creativity and constant commitment to meeting deadlines made a difference in many situations that benefited our department. I highly recommend Diego, as I'm certain he will be a valuable asset to any team's success.",
    },
    profileLink: 'https://www.linkedin.com/in/mirraely/',
  },
  {
    fullName: 'Lucas Silva',
    profileImg: 'assets/img/lucas_pic.jpg',
    jobTitle: 'Data Engineer | ETL | Azure | AWS',
    relationship: {
      relationDate: new Date('July 3, 2024 00:00:00'),
      relationDescription:
        "Diego is a great professional. Collaborative, he's always willing to support his teammates, providing relevant information for their professional and personal development. He's highly dedicated and strives for continuous development to contribute even more to his work. He's a very calm and pleasant person to work with.",
    },
    profileLink: 'https://www.linkedin.com/in/lucas-de-lima-silva/',
  },
  {
    fullName: 'Anderson Torres Bessa',
    profileImg: 'assets/img/anderson_pic.png',
    jobTitle: 'Data Engineer | 2x Microsoft Certified',
    relationship: {
      relationDate: new Date('June 24, 2024 00:00:00'),
      relationDescription:
        "I've been working with Diego on a project for a year now, and I can say he's a dedicated person who's always seeking new knowledge, especially in the data field. He's one of those people who never stops learning and always wants to learn more. He's quick to learn and apply new concepts, which was crucial to the success of our work. Congratulations!",
    },
    profileLink: 'https://www.linkedin.com/in/anderson-torres-bessa/',
  },
];

export const TESTIMONIALS_PT: Array<Testimonial> = [
  {
    fullName: 'Paulo Henrique',
    profileImg: 'assets/img/paulo_pic.png',
    jobTitle: 'Análista de Dados | Excel | Power BI',
    relationship: {
      relationDate: new Date('Dec 12, 2025 00:00:00'),
      relationDescription:
        'Bom, o Diego foi quem me ajudou no começo da minha jornada, sempre presente com dicas valiosas, orientações sobre currículo, conselhos importantes e até indicações de cursos que fizeram toda a diferença. Ele sempre teve muita calma e paciência para ensinar, explicar suas ideias e tirar todas as minhas dúvidas, por mais simples que fossem. Eu digo com tranquilidade que, sem a ajuda do Diego, minha trajetória na área de dados provavelmente demoraria mais para ganhar forma e seria marcada por muito mais incertezas. A presença dele tornou o caminho mais claro, mais leve e cheio de aprendizados. Sou muito grato por todo o apoio e pela dedicação que ele sempre demonstrou.',
    },
    profileLink: 'https://www.linkedin.com/in/paulo-henri/',
  },
  {
    fullName: 'Deyvid Santos',
    profileImg: 'assets/img/deyvid_pic.jpg',
    jobTitle: 'Desenvolvedor Web | Especialista em Java, AWS & Angular',
    relationship: {
      relationDate: new Date('June 23, 2025 00:00:00'),
      relationDescription:
        'O Diego tem sido uma pessoa-chave na minha jornada de aprendizado e orientação na área de dados. Mesmo ainda não tendo feito a transição completa, suas dicas, conselhos e incentivos me ajudaram a entender melhor o caminho a seguir. Sempre claro, atencioso e disposto a compartilhar seu conhecimento, ele teve um papel importante em me manter motivado a continuar estudando e acreditando no meu potencial. Sou realmente grato por todo o apoio dele!',
    },
    profileLink: 'https://www.linkedin.com/in/deyvidsantosdevops/',
  },
  {
    fullName: 'Mirraely M.',
    profileImg: 'assets/img/mirraely_pic.jpg',
    jobTitle: 'Desenvolvedora Web | Front-end',
    relationship: {
      relationDate: new Date('October 11, 2024 00:00:00'),
      relationDescription:
        'Tive o prazer de trabalhar com o Diego durante seu período como assistente administrativo em nossa equipe no setor de cobrança do Riachuelo Contact Center. Ele se destacou pela proatividade, dedicação e colaboração em todas as tarefas que lhe foram atribuídas. Sua criatividade e compromisso constante com prazos fizeram a diferença em muitas situações que beneficiaram nosso departamento. Recomendo fortemente o Diego, pois tenho certeza de que será um grande diferencial para o sucesso de qualquer equipe.',
    },
    profileLink: 'https://www.linkedin.com/in/mirraely/',
  },
  {
    fullName: 'Lucas Silva',
    profileImg: 'assets/img/lucas_pic.jpg',
    jobTitle: 'Engenheiro de Dados | ETL | Azure | AWS',
    relationship: {
      relationDate: new Date('July 3, 2024 00:00:00'),
      relationDescription:
        'O Diego é um excelente profissional. Colaborativo, está sempre disposto a apoiar os colegas de equipe, oferecendo informações relevantes para o desenvolvimento profissional e pessoal deles. É extremamente dedicado e busca constantemente se desenvolver para contribuir ainda mais com seu trabalho. Além disso, é uma pessoa muito tranquila e agradável de se trabalhar.',
    },
    profileLink: 'https://www.linkedin.com/in/lucas-de-lima-silva/',
  },
  {
    fullName: 'Anderson Torres Bessa',
    profileImg: 'assets/img/anderson_pic.png',
    jobTitle: 'Engenheiro de Dados | 2x Certificado Microsoft',
    relationship: {
      relationDate: new Date('June 24, 2024 00:00:00'),
      relationDescription:
        'Estou trabalhando com o Diego em um projeto há um ano, e posso dizer que ele é uma pessoa dedicada, que está sempre em busca de novos conhecimentos, especialmente na área de dados. É daqueles que nunca param de aprender e estão sempre querendo saber mais. Aprende rápido e aplica os conceitos com agilidade, o que foi crucial para o sucesso do nosso trabalho. Parabéns!',
    },
    profileLink: 'https://www.linkedin.com/in/anderson-torres-bessa/',
  },
];

export const TESTIMONIALS_EN_SIGNAL = signal<Testimonial[]>(TESTIMONIALS_EN);
export const TESTIMONIALS_PT_SIGNAL = signal<Testimonial[]>(TESTIMONIALS_PT);
