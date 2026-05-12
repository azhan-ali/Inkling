import { Pen } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-ink/10 py-8 px-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Pen className="w-4 h-4 text-pencil" />
          <span className="font-handwritten text-xl text-pencil">Inkling</span>
          <span className="font-body-hand text-sm text-pencil/60 ml-2">
            Built for Colosseum Hackathon · SagaPad
          </span>
        </div>

        <div className="flex items-center gap-4 font-body-hand text-sm text-pencil">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition"
          >
            GitHub
          </a>
          <span className="text-pencil/30">·</span>
          <a
            href="https://sagapad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition"
          >
            SagaPad
          </a>
          <span className="text-pencil/30">·</span>
          <span>Topic 1 — Social Playbook</span>
        </div>
      </div>
    </footer>
  );
}
