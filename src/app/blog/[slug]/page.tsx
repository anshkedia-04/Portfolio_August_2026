import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Placeholder data generator
const getPaperData = (slug: string) => {
  if (slug === "paper-1") {
    return {
      title: "Real-Time Face Recognition Based Attendance System",
      date: "2026",
      tag: "Computer Vision",
      pdfUrl: "/Paper_1_Attendance_System.pdf",
      content: (
        <>
          <p className="text-lg leading-relaxed text-fg/90 mb-8 font-medium">
            Abstract—Automated attendance tracking is a critical task in educational and corporate environments, yet traditional methods are often inefficient and unhygienic. This paper presents FaceMask 360°, a real-time, contactless attendance system that addresses these challenges by combining modern computer vision techniques.
          </p>
          
          <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6">Introduction</h2>
          <p className="text-base leading-relaxed text-fg/80 mb-6">
            The demand for automated, efficient, and hygienic systems for monitoring human presence has surged in recent years. Traditional methods of attendance tracking, such as manual roll calls or fingerprint biometrics, suffer from significant drawbacks, including being time-consuming, prone to human error, and posing public health risks due to shared physical contact. Computer vision (CV) offers a compelling alternative, enabling contactless, scalable, and transparent solutions using only standard webcam hardware.
          </p>
          <p className="text-base leading-relaxed text-fg/80 mb-6">
            This paper introduces FaceMask 360°, a complete, real-time facial recognition attendance system. Our primary contribution is the design and rigorous evaluation of a pipeline built on FaceNet embeddings and a Support Vector Machine (SVM) classifier.
          </p>

          <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6">System Architecture and Methodology</h2>
          <p className="text-base leading-relaxed text-fg/80 mb-6">
            The FaceMask 360° system is designed as a modular, end-to-end pipeline that handles student enrollment, model training, and real-time attendance marking. The architecture is composed of three primary stages:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-fg/80 mb-6">
            <li><strong>Data Acquisition and Preprocessing:</strong> Capturing 30 facial images for each student using a live webcam feed and Haar Cascade classifier, followed by data augmentation.</li>
            <li><strong>Feature Extraction and Model Training:</strong> Converting face images into a compact 128-dimensional numerical representation (embedding) using InceptionResnetV1 (FaceNet).</li>
            <li><strong>Identity Classification with SVM:</strong> Training a Support Vector Machine classifier to find optimal hyperplanes separating embedding clusters in the 128-dimensional space.</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6">Results</h2>
          <p className="text-base leading-relaxed text-fg/80 mb-6">
            The simple CNN performed poorly (18-20% accuracy). The fine-tuned MobileNetV2 performed better (40%) but was still inadequate for a reliable system. The FaceNet+SVM model, by contrast, achieved an outstanding <strong>98% accuracy</strong>. This is because it leverages knowledge learned from millions of faces, allowing it to produce highly discriminative features even for subjects it has never seen during its initial training.
          </p>
        </>
      )
    };
  } else {
    return {
      title: "HCI Systems for Gesture Control, Communication and Affective Computing",
      date: "2026",
      tag: "Human-Computer Interaction",
      pdfUrl: "/Paper_2_Gesture_Based_Systems.pdf",
      content: (
        <>
          <p className="text-lg leading-relaxed text-fg/90 mb-8 font-medium">
            Abstract—The proliferation of high-quality webcams and advancements in real-time computer vision have paved the way for a new generation of Natural User Interfaces (NUIs). This paper presents five distinct Human-Computer Interaction (HCI) systems built upon a shared, reusable, and webcam-first technology stack.
          </p>
          
          <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6">Introduction</h2>
          <p className="text-base leading-relaxed text-fg/80 mb-6">
            Human-Computer Interaction (HCI) has continuously evolved towards more intuitive and natural forms of input. The transition from command-line interfaces to graphical user interfaces (GUIs), and subsequently to touchscreens, has progressively lowered the barrier to technology adoption. The next frontier in this evolution is the Natural User Interface (NUI), which allows users to interact with digital systems through familiar, everyday actions like speech, gaze, and gestures.
          </p>
          <p className="text-base leading-relaxed text-fg/80 mb-6">
            This paper introduces a portfolio of five functional HCI systems, to demonstrate the power and reusability of a unified CV software stack. Instead of presenting a deep dive into a single problem, our work showcases the breadth of applications that can be built from a common architectural pattern.
          </p>

          <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6">The Portfolio Systems</h2>
          <ul className="list-disc pl-6 space-y-3 text-fg/80 mb-6">
            <li><strong>AirTune (Volume Control):</strong> Allows the user to control the system's master volume by changing the distance between their thumb and index finger.</li>
            <li><strong>VisionMouse (Cursor Control):</strong> Enables the user to control the mouse cursor with their index finger and perform clicks with a pinching gesture.</li>
            <li><strong>Air Writing (In-Air Drawing):</strong> Allows users to draw on a virtual canvas by moving their index finger in the air.</li>
            <li><strong>ASLNet (Static Letter Recognition):</strong> Recognizes static handshapes corresponding to letters of the American Sign Language alphabet.</li>
            <li><strong>Facial Emotion Recognition (FER):</strong> Identifies the user's emotional state from their facial expression (7 emotion classes).</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6">Methodology</h2>
          <p className="text-base leading-relaxed text-fg/80 mb-6">
            All five systems are built upon a common ”perception-action” loop that processes webcam input in real time. This stack can be conceptually divided into a Perception Module (Frame Capture and Object Detection) and an Interpretation Module, with two distinct pathways for feature extraction:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-fg/80 mb-6">
            <li><strong>Pathway A (Landmark-Based Extraction):</strong> Relies on the MediaPipe Hands framework to generate a high-fidelity 21-point skeleton of the detected hand in real time. Used for the continuous control systems.</li>
            <li><strong>Pathway B (Image-Based Extraction):</strong> The Region of Interest (ROI) containing the detected hand or face is cropped, preprocessed, and fed into a trained Convolutional Neural Network (CNN). Used for the classification systems.</li>
          </ul>
        </>
      )
    };
  }
};

export function generateStaticParams() {
  return [
    { slug: 'paper-1' },
    { slug: 'paper-2' },
  ];
}

export default async function PaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const paper = getPaperData(resolvedParams.slug);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-fg pb-24 pt-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Sidebar */}
        <aside className="lg:col-span-4 relative">
          <div className="sticky top-32 flex flex-col gap-12">
            
            {/* Profile Card */}
            <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden p-4">
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/anshkedia.jpg" 
                  alt="Ansh Kedia" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Ansh Kedia</h3>
              <p className="text-sm text-fg-muted mb-4 leading-relaxed">
                Software engineer in India. I design and build fully custom web experiences end to end, from first Figma frame to production build.
              </p>
              <Link href="/about" className="inline-block px-4 py-2 bg-white/10 hover:bg-white/15 transition-colors text-sm font-medium rounded-lg">
                About me
              </Link>
            </div>

            {/* More Posts */}
            <div>
              <span className="text-xs text-fg-muted uppercase tracking-widest mb-4 block font-semibold">More posts</span>
              <div className="flex flex-col gap-4">
                <Link href="/blog/paper-1" className="group border-b border-white/5 pb-4 last:border-0">
                  <h4 className="font-medium group-hover:text-accent transition-colors mb-1">Reference Paper 1</h4>
                  <p className="text-xs text-fg-muted">Research · Aug 2026</p>
                </Link>
                <Link href="/blog/paper-2" className="group border-b border-white/5 pb-4 last:border-0">
                  <h4 className="font-medium group-hover:text-accent transition-colors mb-1">Reference Paper 2</h4>
                  <p className="text-xs text-fg-muted">Research · Aug 2026</p>
                </Link>
              </div>
            </div>

          </div>
        </aside>

        {/* Right Content */}
        <article className="lg:col-span-8">
          <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <span className="text-sm text-fg-muted">{paper.tag}</span>
              <a href={paper.pdfUrl} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:text-accent transition-colors w-fit bg-white/5 px-3 py-1.5 rounded hover:bg-white/10">
                Read Full PDF <ExternalLink size={14} />
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-6">
              {paper.title}
            </h1>
            <time className="text-sm text-fg-muted">{paper.date}</time>
          </header>

          <div className="prose prose-invert max-w-none">
            {paper.content}
          </div>
        </article>

      </div>
    </div>
  );
}
