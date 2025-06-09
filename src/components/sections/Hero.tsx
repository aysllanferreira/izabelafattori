"use client";

import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import FadeIn from "@/components/animations/FadeIn";
import { socialLinks } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-purple-50 to-white"
    >
      <div className="max-width-container section-padding py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
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

          <FadeIn
            delay={0.4}
            className="relative order-1 md:order-2 mx-auto md:mx-0"
          >
            <div className="relative flex justify-center">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main frame */}
              <div className="relative bg-white p-3 rounded-xl shadow-xl w-72 md:w-80 overflow-hidden">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-50 rounded-xl"></div>

                {/* Photo wrapper */}
                <div className="relative z-10 bg-white p-3 rounded-lg overflow-hidden">
                  {/* Photo container with custom aspect ratio */}
                  <div className="relative w-full h-[380px] overflow-hidden rounded-md">
                    <Image
                      src="/images/iza.jpg"
                      alt="Izabela Fattori"
                      fill
                      priority
                      style={{
                        objectFit: "cover",
                        objectPosition:
                          "center 15%" /* Adjusted to show more of the top */,
                      }}
                    />
                  </div>
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
