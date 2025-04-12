"use client"

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gjm-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">SERRALHERIA</span>{" "}
              <span className="text-gjm-yellow">GJM</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Especialista em portão de aço, portas, galpões, grades, mezaninos e coberturas.
              Trabalhamos com ferro, alumínio e blindex.
            </p>
            <p className="text-gray-300">
              Qualidade, durabilidade e segurança para sua residência ou empresa.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-gjm-yellow transition-colors">Portões de Aço</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gjm-yellow transition-colors">Portas de Aço</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gjm-yellow transition-colors">Galpões e Estruturas</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gjm-yellow transition-colors">Grades e Proteções</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gjm-yellow transition-colors">Mezaninos</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gjm-yellow transition-colors">Coberturas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <p className="text-gray-300 mb-2">Av. Canal das Tachas 54 - Terreirão</p>
            <p className="text-gray-300 mb-2">Recreio, Rio de Janeiro - Rio de Janeiro</p>
            <p className="text-gray-300 mb-4">(21) 99348-9060</p>
            
            <a 
              href="#contact" 
              className="inline-block bg-gjm-yellow hover:bg-gjm-yellow/90 text-gjm-dark font-bold py-2 px-4 rounded-md transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Serralheria GJM. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-gjm-green/20 hover:bg-gjm-green/30 p-3 rounded-full transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
