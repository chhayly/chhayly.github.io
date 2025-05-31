export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  category: string[];
  github: string | null;
  demo: string | null;
  features?: string[];
  icon?: string;
}
