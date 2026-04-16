import { Project } from '../models/project.model';

export const PERSONAL_PROJECTS_DATA: Project[] = [
  {
    id: 'taskflow-api',
    name: 'TaskFlow API',
    description: 'API REST estruturada com Quarkus focada em altíssima performance para gerenciamento de tarefas em tempo real.',
    images: [],
    tags: ['Quarkus', 'Java', 'PostgreSQL', 'Flyway', 'Hibernate Panache', 'Redis', 'WebSockets', 'Swagger'],
    role: null,
    link: null,
    repo: 'https://github.com/John-Mota/taskflow-api',
    status: 'Em andamento'
  },
  {
    id: 'autoflex-inventory-back',
    name: 'Autoflex Inventory API',
    description: 'API estruturada em camadas com algoritmo de produção (RF008) que resolve conflitos e otimiza rentabilidade baseada no estoque.',
    images: [],
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Spring Data JPA', 'Docker'],
    role: null,
    link: null,
    repo: 'https://github.com/John-Mota/inventory-back',
    status: 'Concluído'
  },
  {
    id: 'autoflex-inventory-front',
    name: 'Autoflex Manager UI',
    description: 'Dashboard SPA focado na alta eficiência do chão de fábrica, com gestão dinâmica de receitas industriais baseadas em Redux.',
    images: [],
    tags: ['React 19', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS 4', 'Vite'],
    role: null,
    link: null,
    repo: 'https://github.com/John-Mota/inventory-front',
    status: 'Concluído'
  },
  {
    id: 'production-optimizer-back',
    name: 'Production Optimizer API',
    description: 'API REST robusta de otimização de produção industrial maximizando o lucro da operação contra o custo de insumos.',
    images: [],
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Swagger UI'],
    role: null,
    link: null,
    repo: 'https://github.com/John-Mota/production-optimizer-back',
    status: 'Concluído'
  },
  {
    id: 'production-optimizer-front',
    name: 'Production Optimizer UI',
    description: 'Interface responsiva com suporte a internacionalização (i18n), para a visualização dos planos de otimização de lucro da fábrica.',
    images: [],
    tags: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Axios', 'Vue Router'],
    role: null,
    link: null,
    repo: 'https://github.com/John-Mota/production-optimizer-front',
    status: 'Concluído'
  },
  {
    id: 'gemini-commit-generator',
    name: 'Gemini Commit Tool',
    description: 'Extensão para VS Code integrando IA do Google Gemini. Analisa diffs e gera mensagens semânticas pelo Conventional Commits.',
    images: [],
    tags: ['VS Code Ext', 'TypeScript', 'Gemini API'],
    role: null,
    link: null,
    repo: 'https://github.com/John-Mota/gemini-commit-generator',
    status: 'Concluído'
  }
];
