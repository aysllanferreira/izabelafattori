import TimelineItem from "@/components/ui/TimelineItem";
import FadeIn from "@/components/animations/FadeIn";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-width-container section-padding">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Minha trajetória profissional mostrando a evolução da minha
              carreira, desde o início como QA Engineer até meu papel atual
              combinando UI/UX Design e Engenharia de Qualidade.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timeline.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-purple-600 font-medium">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.company && (
                    <p className="text-purple-600 font-medium mb-2">
                      {item.company}
                    </p>
                  )}
                  {item.institution && (
                    <p className="text-purple-600 font-medium mb-2">
                      {item.institution}
                    </p>
                  )}
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {timeline.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <TimelineItem item={item} isLeft={index % 2 === 0} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
