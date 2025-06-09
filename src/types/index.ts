export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface QaSkill {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: React.ElementType;
}
