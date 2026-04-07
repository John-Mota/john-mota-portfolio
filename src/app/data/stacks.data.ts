import { Stack } from '../models/stack.model';

export const STACKS_DATA: Stack[] = [
  // Front-end
  { name: 'Angular', icon: 'angular/angular-original.svg', category: 'Front-end', level: 'Avançado' },
  { name: 'React', icon: 'react/react-original.svg', category: 'Front-end', level: 'Intermediário' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg', category: 'Front-end', level: 'Avançado' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg', category: 'Front-end', level: 'Avançado' },
  { name: 'HTML5', icon: 'html5/html5-original.svg', category: 'Front-end', level: 'Avançado' },
  { name: 'CSS3/SCSS', icon: 'css3/css3-original.svg', category: 'Front-end', level: 'Avançado' },
  
  // Back-end
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg', category: 'Back-end', level: 'Avançado' },
  { name: 'NestJS', icon: 'nestjs/nestjs-original.svg', category: 'Back-end', level: 'Intermediário' },
  { name: 'Express', icon: 'express/express-original.svg', category: 'Back-end', level: 'Avançado' },
  { name: 'Python', icon: 'python/python-original.svg', category: 'Back-end', level: 'Intermediário' },
  { name: 'Java', icon: 'java/java-original.svg', category: 'Back-end', level: 'Iniciante' },

  // Banco de Dados
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', category: 'Banco de Dados', level: 'Avançado' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg', category: 'Banco de Dados', level: 'Intermediário' },
  { name: 'MySQL', icon: 'mysql/mysql-original.svg', category: 'Banco de Dados', level: 'Avançado' },

  // DevOps/Infra
  { name: 'Docker', icon: 'docker/docker-original.svg', category: 'DevOps/Infra', level: 'Intermediário' },
  { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'DevOps/Infra', level: 'Intermediário' },
  { name: 'Git', icon: 'git/git-original.svg', category: 'DevOps/Infra', level: 'Avançado' },

  // Outros
  { name: 'Figma', icon: 'figma/figma-original.svg', category: 'Outros', level: 'Intermediário' },
  { name: 'Jira', icon: 'jira/jira-original.svg', category: 'Outros', level: 'Intermediário' }
];
