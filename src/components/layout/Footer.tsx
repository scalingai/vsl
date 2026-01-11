import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 mt-16 border-t border-gray-200 bg-gray-100/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">

                {/* Logo */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                        src="/logo.png"
                        alt="Navia Cloud Logo"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">Navia Cloud</h3>
                    <p className="text-gray-500">Impulsando negocios con IA.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-600 font-medium">
                    <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Política de Privacidad</Link>
                    <Link href="/terms-conditions" className="hover:text-blue-600 transition-colors">Términos y Condiciones</Link>
                </div>

                <div className="h-px w-full bg-gray-200 max-w-2xl" />

                <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
                    Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca comercial de FACEBOOK, Inc.
                </p>
            </div>
        </footer>
    );
}
