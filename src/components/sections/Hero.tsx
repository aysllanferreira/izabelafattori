"use client";

import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import FadeIn from "@/components/animations/FadeIn";
import { socialLinks } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-purple-50 to-white"
    >
      <div className="max-width-container section-padding py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                Hi, I&apos;m <span className="gradient-text">Izabela</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-2xl md:text-3xl text-gray-700">
                UI/UX Designer & QA Engineer
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 3 years of experience creating intuitive digital
                experiences and ensuring software quality. I combine my design
                skills with testing expertise to deliver beautiful, reliable
                solutions that users love.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <SocialLinks links={socialLinks} className="pt-4" />
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-full w-80 h-80 mx-auto overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-purple-600 opacity-20"></div>
                {/* Profile image placeholder */}
                <div className="flex items-center justify-center h-full text-white text-6xl font-bold">
                  IF
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-purple-400" size={32} />
      </div>
    </section>
  );
}
