export interface Stack {
  name: string;
  icon: string;
  category: 'Front-end' | 'Back-end' | 'Banco de Dados' | 'DevOps/Infra' | 'Outros';
  level?: 'Iniciante' | 'Intermediário' | 'Avançado';
}
