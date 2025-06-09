import SocialLinks from "@/components/ui/SocialLinks";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-width-container section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Izabela Fattori</span>
            </h3>
            <p className="text-gray-400">
              UI/UX Designer • Creating Digital Experiences
            </p>
          </div>

          <SocialLinks links={socialLinks} className="justify-center" />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Izabela Fattori. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed & Built with 💜 using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
