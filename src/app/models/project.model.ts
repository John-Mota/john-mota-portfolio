export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  tags: string[];
  role: string | null;
  link: string | null;
  repo: string | null;
  status?: string;
  details?: string;
}

