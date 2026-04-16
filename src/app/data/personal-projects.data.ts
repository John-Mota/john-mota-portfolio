import { Project } from '../models/project.model';

export const PERSONAL_PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    name: 'Kanban Task Manager',
    description: 'Um aplicativo de gestão de tarefas estilo Trello com drag and drop (Angular CDK), focado em usabilidade.',
    images: ['https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    tags: ['Angular 17', 'Tailwind CSS', 'Firebase'],
    role: null,
    link: 'https://demo-link.com',
    repo: 'https://github.com/john-mota/kanban',
    status: 'Concluído'
  },
  {
    id: 'p2',
    name: 'DevBlog Engine',
    description: 'Um CMS headless minimalista construído para desenvoledores publicarem artigos em Markdown renderizados via SSG.',
    images: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    role: null,
    link: null,
    repo: 'https://github.com/john-mota/devblog',
    status: 'Em desenvolvimento'
  },
  {
    id: 'p3',
    name: 'Pomodoro Timer CLI',
    description: 'Ferramenta de linha de comando para produtividade utilizando a técnica pomodoro.',
    images: ['https://images.unsplash.com/photo-1495364141860-b0d03dea4557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    tags: ['Node.js', 'CLI', 'TypeScript'],
    role: null,
    link: null,
    repo: 'https://github.com/john-mota/pomodoro-cli',
    status: 'Concluído'
  }
];
