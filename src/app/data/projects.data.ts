import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'matricula-online',
    name: 'Matrícula Online - SEDUC/CE',
    description: 'Portal oficial da Secretaria da Educação do Ceará para solicitação de matrículas na rede estadual, integrando o cadastro de alunos ao sistema de alocação escolar.',
    images: [
      'images/projects/matricula-online/img-matricula-online-01.png',
      'images/projects/matricula-online/matricula-1.png'
    ],
    tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    role: 'Desenvolvedor Full Stack',
    link: 'https://matricula.seduc.ce.gov.br',
    repo: null,
    details: 'Atuei no desenvolvimento de funcionalidades para o processo de solicitação de vagas e consulta de resultados. Trabalhei na implementação de regras de negócio para validação de vínculos escolares e na integração do frontend em Angular com os serviços backend em Spring Boot, garantindo a estabilidade necessária para o período de alta demanda da rede estadual.'
  },
  {
    id: 'cidade-mais-infancia',
    name: 'Cidade Mais Infância',
    description: 'Plataforma institucional e de gestão do Governo do Ceará voltada para o fomento e acompanhamento de políticas públicas de desenvolvimento infantil.',
    images: [
      'images/projects/cidade-mais-infancia/img-cidade-mais-infancia-01.png',
      'images/projects/cidade-mais-infancia/img-cidade-mais-infancia-02.png'
    ],
    tags: ['Angular', 'Node.js', 'PostgreSQL', 'TypeScript'],
    role: 'Desenvolvedor Front-end',
    link: 'https://cidademaisinfancia.sps.ce.gov.br',
    repo: null,
    details: 'Desenvolvimento da interface responsiva utilizando Angular, com foco na criação de componentes interativos e dashboards para visualização de indicadores sociais. O projeto exigiu atenção especial à experiência do usuário (UX) para facilitar o monitoramento de atividades e metas relacionadas à saúde e educação infantil por parte dos gestores públicos.'
  },
  {
    id: 'barber',
    name: 'Barber Star',
    description: 'Sistema SaaS de gestão e agendamento para barbearias, apresentando integração com chatbot para marcações via WhatsApp.',
    images: [
      'images/projects/barber/img-barber-01.png',
      'images/projects/barber/img-barber-02.png'
    ],
    tags: ['Node.js', 'Firebase', 'WhatsApp API', 'TypeScript'],
    role: 'Desenvolvedor Back-end (Manutenção)',
    link: null,
    repo: null,
    details: 'Atuei na manutenção evolutiva e corretiva do back-end, focando na estabilidade do fluxo de agendamentos e na integração do chatbot via WhatsApp. Garanti o funcionamento das regras de negócio para controle de estoque e faturamento, além de otimizar a sincronização de dados em tempo real entre o bot e o painel administrativo.'
  },
  {
    id: 'resolva-ja',
    name: 'Resolva Já',
    description: 'Ecossistema de intermediação de serviços locais que conecta prestadores autônomos a moradores da cidade, com gestão governamental e painéis administrativos.',
    images: [
      'images/projects/resolva-ja/img-resolva-ja-01.png'
    ],
    tags: ['Java', 'Spring Boot', 'Flutter', 'PostgreSQL', 'IA'],
    role: 'Desenvolvedor Back-end / Mobile',
    link: 'https://resolvajaguaribara.colmeia.tec.br/#/register/register-form',
    repo: null,
    details: 'Desenvolvi o núcleo da plataforma no Back-end com Spring Boot, implementando o fluxo de aprovação de serviços pelo painel administrativo e a gestão de perfis de prestadores. No mobile, atuei no desenvolvimento de telas e funcionalidades com Flutter, utilizando ferramentas de IA para otimização do código e agilidade na entrega de componentes de cadastro e dashboards.'
  },
];
