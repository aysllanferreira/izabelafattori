import FadeIn from "@/components/animations/FadeIn";
import { qaSkills } from "@/lib/data";
import { QaSkill } from "@/types";

export default function QaSkills() {
  return (
    <section id="qa-skills" className="py-24 bg-white">
      <div className="max-width-container section-padding">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              QA <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My quality engineering experience, highlighting skills in test
              automation and software quality assurance across different
              platforms and technologies.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {qaSkills.map((skill: QaSkill, index: number) => (
            <FadeIn key={skill.id} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col transform hover:-translate-y-1 hover:border-purple-200">
                <div className="mb-5 text-purple-600">
                  <skill.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-5 flex-grow">
                  {skill.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {skill.tools.map((tool: string) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full hover:bg-purple-200 transition-colors"
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
