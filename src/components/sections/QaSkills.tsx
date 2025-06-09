import FadeIn from "@/components/animations/FadeIn";
import { qaSkills } from "@/lib/data";
import { QaSkill } from "@/types";

export default function QaSkills() {
  return (
    <section id="qa-skills" className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              QA <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Minha experiência em Engenharia de Qualidade, destacando
              habilidades em automação de testes e garantia de qualidade de
              software.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {qaSkills.map((skill: QaSkill, index: number) => (
            <FadeIn key={skill.id} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="mb-4 text-purple-600">
                  <skill.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.tools.map((tool: string) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
