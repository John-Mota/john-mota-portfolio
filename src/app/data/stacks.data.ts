import { Stack } from '../models/stack.model';

export const STACKS_DATA: Stack[] = [
  // Backend
  { 
    name: 'Java / Spring Boot', 
    icon: 'spring/spring-original.svg', 
    category: 'Backend', 
    level: 'Intermediário',
    description: '3+ anos, projetos reais em produção, sabe OOP, REST, arquitetura de microsserviços'
  },
  { 
    name: 'SQL / PostgreSQL', 
    icon: 'postgresql/postgresql-original.svg', 
    category: 'Backend', 
    level: 'Intermediário',
    description: 'Usa no dia a dia, mas reconheceu gaps em fundamentos como JOINs complexos'
  },
  { 
    name: 'Quarkus', 
    icon: 'quarkus/quarkus-original.svg', 
    category: 'Backend', 
    level: 'Iniciante',
    description: 'Autoestudo, zero produção'
  },
  { 
    name: 'Microsserviços / Docker', 
    icon: 'docker/docker-original.svg', 
    category: 'Backend', 
    level: 'Intermediário',
    description: 'Usa na stack, tem pós em arquitetura'
  },
  { 
    name: 'CI/CD / Observabilidade', 
    icon: 'grafana/grafana-original.svg', 
    category: 'Backend', 
    level: 'Iniciante-Intermediário',
    description: 'Conhecimento teórico sólido, prática mais limitada'
  },

  // Frontend
  { 
    name: 'Angular', 
    icon: 'angular/angular-original.svg', 
    category: 'Frontend', 
    level: 'Intermediário',
    description: 'Uso profissional, projeto de portfólio ativo com PrimeNG'
  },
  { 
    name: 'Vue.js', 
    icon: 'vuejs/vuejs-original.svg', 
    category: 'Frontend', 
    level: 'Intermediário',
    description: 'Faz parte da stack da Colmeia'
  },
  { 
    name: 'React', 
    icon: 'react/react-original.svg', 
    category: 'Frontend', 
    level: 'Iniciante-Intermediário',
    description: 'Decisão recente de aprender para ampliar mercado, ainda construindo'
  },
  { 
    name: 'TypeScript / JavaScript', 
    icon: 'typescript/typescript-original.svg', 
    category: 'Frontend', 
    level: 'Iniciante-Intermediário',
    description: 'Gaps identificados em fundamentos'
  },

  // Arquitetura / Engenharia
  { 
    name: 'Software Architecture', 
    icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg', 
    category: 'Arquitetura / Engenharia', 
    level: 'Intermediário',
    description: 'Pós-graduação, aplica no trabalho'
  },
  { 
    name: 'Software Engineering', 
    icon: 'bash/bash-original.svg', 
    category: 'Arquitetura / Engenharia', 
    level: 'Intermediário',
    description: 'Pós-graduação'
  },

  // DevOps / Infra
  { 
    name: 'WSL2 / Linux', 
    icon: 'linux/linux-original.svg', 
    category: 'DevOps / Infra', 
    level: 'Iniciante-Intermediário',
    description: 'Setup recente, resolve problemas mas ainda aprendendo'
  },
  { 
    name: 'Kubernetes', 
    icon: 'kubernetes/kubernetes-plain.svg', 
    category: 'DevOps / Infra', 
    level: 'Teórico',
    description: 'Estudou para EY, pouca prática'
  }
];
