import { personalInfo } from "@/data/resume";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white">
            A<span className="text-cyan-500">.</span>S
          </span>
          <span className="text-sm text-slate-500">
            &copy; {currentYear} {personalInfo.name}
          </span>
        </div>

        <p className="text-sm text-slate-600">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
