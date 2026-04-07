export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  role: string | null;
  link: string | null;
  repo: string | null;
  status?: string; // e.g., "Em desenvolvimento", "Concluído"
}
