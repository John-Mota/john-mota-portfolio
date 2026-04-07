import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    name: 'Sistema de Gestão Financeira (ERP)',
    description: 'Plataforma web para gestão corporativa, englobando módulos de faturamento, controle de estoque e relatórios financeiros em tempo real.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
    role: 'Full Stack Developer',
    link: '#',
    repo: null
  },
  {
    id: '2',
    name: 'E-commerce B2B Premium',
    description: 'Arquitetura e desenvolvimento de uma solução de vendas online com catálogo de mais de 10.000 produtos e integração com ERP legado.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'NestJS', 'MongoDB', 'AWS'],
    role: 'Front-end Lead',
    link: '#',
    repo: null
  },
  {
    id: '3',
    name: 'App de Telemedicina',
    description: 'Aplicativo voltado para agendamentos de consultas médicas e videocall integradas, com foco em segurança (HIPAA compliance).',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Angular', 'WebRTC', 'Express', 'Redis'],
    role: 'Front-end Developer',
    link: '#',
    repo: null
  },
  {
    id: '4',
    name: 'Dashboard Analytics SaaS',
    description: 'Criação de um painel de visualização de dados focado em UX, com gráficos dinâmicos de alta performance para tomada de decisão.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Angular', 'D3.js', 'Python', 'FastAPI'],
    role: 'Full Stack Developer',
    link: '#',
    repo: null
  }
];
