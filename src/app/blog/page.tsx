import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Writing | Ansh Kedia",
  description: "Research papers and articles by Ansh Kedia",
};

// Placeholder data for the papers to be added later
const papers = [
  {
    id: "paper-1",
    title: "Real-Time Face Recognition Based Attendance System",
    date: "2026",
    summary: "A real-time, contactless attendance system that addresses traditional challenges by combining FaceNet's deep metric learning with a Support Vector Machine (SVM).",
    type: "Computer Vision"
  },
  {
    id: "paper-2",
    title: "HCI Systems for Gesture Control, Communication and Affective Computing",
    date: "2026",
    summary: "A portfolio of five functional Human-Computer Interaction (HCI) systems built upon a shared, reusable, and webcam-first technology stack.",
    type: "Human-Computer Interaction"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-12 max-w-5xl mx-auto w-full">
      <div className="mb-16">
        <span className="oi-xs oi-faint block mb-4">Research & Thoughts</span>
        <h1 className="oi-h2">
          Technical <span className="font-serif italic font-light">writing</span> and <span className="font-serif italic font-light">research papers</span>.
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {papers.map((paper, index) => (
          <div key={paper.id} className="group flex flex-col md:flex-row gap-6 md:gap-12 p-8 rounded-2xl border border-border bg-fg/5 hover:bg-fg/10 transition-colors">
            
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-bg border border-border text-fg-muted group-hover:text-fg transition-colors">
              <FileText size={24} />
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-2 text-xs uppercase tracking-widest text-fg-muted font-semibold">
                <span>{paper.type}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{paper.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3">
                {paper.title}
              </h3>
              <p className="text-fg-muted text-sm md:text-base leading-relaxed mb-6">
                {paper.summary}
              </p>
              
              <Link href={`/blog/${paper.id}`} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors w-fit">
                Read paper <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
