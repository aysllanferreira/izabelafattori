/* eslint-disable @typescript-eslint/no-explicit-any */
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { SocialLink } from "@/types";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const iconMap: Record<string, any> = {
  linkedin: Linkedin,
  github: Github,
  behance: ExternalLink,
  dribbble: ExternalLink,
  email: Mail,
};

export default function SocialLinks({
  links,
  className = "",
}: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon.toLowerCase()] || ExternalLink;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label={link.name}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
