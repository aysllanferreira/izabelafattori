import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
        {/* Project image */}
        <Image src={project.image} alt={project.title} fill />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-purple-600 hover:bg-purple-100 transition-colors transform hover:scale-110"
              aria-label="View project"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-purple-600 hover:bg-purple-100 transition-colors transform hover:scale-110"
              aria-label="View source"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
