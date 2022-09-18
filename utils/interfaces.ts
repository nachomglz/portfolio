export interface Project {
  name: string;
  description: string | null;
  link?: string;
  clone_url?: string;
  language?: string;
  html_url?: string;
  pushed_at?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  currentPercentage: number;
}
