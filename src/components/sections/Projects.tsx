import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/animations/FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work in UI/UX design and QA engineering,
              showcasing my approach to solving complex design challenges and
              ensuring software quality.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
