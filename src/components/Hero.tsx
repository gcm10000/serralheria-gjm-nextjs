
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
<section
  id="home"
  className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gjm-green text-white overflow-hidden min-h-screen"
>
  <div className="absolute inset-0 bg-gradient-to-r from-gjm-dark/70 to-gjm-green/50 z-10"></div>
  <div className="absolute inset-0 bg-[url('/images/hero-section.jpg')] bg-center bg-no-repeat bg-cover opacity-50"></div>

  <div className="container mx-auto px-4 relative z-20 flex items-center justify-center min-h-screen">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="text-white">SERRALHERIA</span>{" "}
        <span className="text-gjm-yellow">GJM</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-white/90">
        Especialista em portão de aço, portas, galpões, grades, mezaninos e coberturas
      </p>
      <p className="text-lg mb-10 text-white/80">
        Soluções em ferro, alumínio e blindex com qualidade, segurança e durabilidade
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#services"
          className="bg-gjm-yellow hover:bg-gjm-yellow/90 text-gjm-dark font-bold py-3 px-8 rounded-md transition-colors flex items-center justify-center"
        >
          Nossos Serviços
          <ArrowRight size={18} className="ml-2" />
        </a>
        <a
          href="#contact"
          className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition-colors"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;
