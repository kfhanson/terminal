import { FileText } from "lucide-react"

export function CV() {
  // Replace this URL with the actual link to your CV PDF
  const cvUrl = "\cv_KARLDRITZ FARREL HANSON.pdf"

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Curriculum Vitae</h2>

      <div className="space-y-3">
        <p>You can view or download my complete CV using the link below:</p>

        <div className="mt-4 flex items-center">
          <FileText className="text-yellow-400 mr-3" size={20} />
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 hover:bg-zinc-700 text-blue-400 hover:text-blue-300 px-4 py-2 rounded border border-zinc-700 inline-flex items-center transition-colors"
          >
            View/Download CV
          </a>
        </div>

        <div className="mt-4 p-3 border border-zinc-700 rounded-md bg-zinc-800/50">
          <h3 className="text-yellow-400 font-semibold mb-2">CV Highlights</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Currently studying in BINUS University, Bachelor in Computer Science</li>
            <li>Studied abroad in Taiwan&apos;s Chang Gung University, studied implementations of AI in the healthcare field.</li>
            <li>Previous roles as research interns in Jakarta</li>
            <li>Experiences in leadership, coordination and teaching through activity clubs.</li>
            <li>My research publication in AI</li>
            <li>Certifications in relevant technologies</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-zinc-400 italic">
          Type <span className="text-yellow-400">about</span> to learn more about me or{" "}
          <span className="text-yellow-400">projects</span> to see my work.
        </p>
      </div>
    </div>
  )
}
