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

export type Repository = {
  name: string,//
  full_name: string,//
  html_url: string,//
  description?: string,//
  url: string,//
  languages_url: string,
  languages?: string[],
  commits_url: string,
  commit_amount?: number,
  created_at: Date,
  updated_at: Date,
  pushed_at: Date,
  ssh_url: string,
  clone_url: string,
  language: string,
  private: boolean
}

export type OmitMultiple<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
