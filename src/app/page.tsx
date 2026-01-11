import Image from "next/image";
import ParticlesBackground from "@/components/background/ParticlesBackground";
import VideoPlayer from "@/components/vsl/VideoPlayer";
import TimedButton from "@/components/cta/TimedButton";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col font-sans selection:bg-purple-200">
      <ParticlesBackground />

      <div className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-12 flex flex-col items-center">

        {/* Headline */}
        {/* Gemini Style: Gradient Text, strict 3 lines on mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-center text-gray-900 leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
          <span>Llena tu</span>{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Agenda
          </span>
          <br className="block" /> {/* Force break for 2nd line */}
          <span>de</span>{" "}
          <span className="font-bold bg-gradient-to-r from-purple-500 to-rose-500 bg-clip-text text-transparent">
            Clientes Pagos
          </span>
          <br className="block" /> {/* Force break for 3rd line */}
          <span className="whitespace-nowrap text-3xl sm:text-4xl md:text-6xl block mt-1">en Piloto Automático</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-center text-gray-600 font-normal max-w-2xl mb-4 leading-relaxed mx-auto">
          Tendrás un <span className="font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">asistente IA</span> que responde, califica, agenda y cobra a tus clientes.
        </p>

        {/* Video Player */}
        <div className="w-full max-w-3xl mb-2 relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>
          <VideoPlayer />
        </div>

        {/* CTA Section */}
        <TimedButton />

      </div>

      <Footer />
    </main>
  );
}
