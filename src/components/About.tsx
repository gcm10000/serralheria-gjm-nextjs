
import { Hammer, Clock, Award, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Hammer className="h-10 w-10 text-gjm-yellow" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência no mercado de serralheria, garantindo qualidade e confiabilidade em cada projeto."
    },
    {
      icon: <Clock className="h-10 w-10 text-gjm-yellow" />,
      title: "Compromisso com Prazos e Entregas",
      description: "Na nossa serralheria no Rio de Janeiro, o respeito aos prazos é prioridade. Garantimos a entrega de todos os projetos e consertos no tempo combinado, sem atrasos ou surpresas, sempre com a qualidade que você merece."
    },
    {
      icon: <Award className="h-10 w-10 text-gjm-yellow" />,
      title: "Qualidade Superior em Serralheria",
      description: "Trabalhamos com materiais de primeira linha e aplicamos técnicas modernas para garantir um acabamento perfeito em todos os nossos projetos de serralheria no Rio de Janeiro. Nosso compromisso é entregar durabilidade, beleza e excelência em cada serviço."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-gjm-yellow" />,
      title: "Atendimento Personalizado em Serralheria",
      description: "Oferecemos projetos de serralheria personalizados, desenvolvidos de acordo com as necessidades específicas de cada cliente no Rio de Janeiro. Cada trabalho é único, com soluções sob medida para garantir total satisfação."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gjm-dark mb-4">
            Sobre a <span className="text-gjm-green">Serralheria</span> <span className="text-gjm-yellow">GJM</span>
          </h2>
          <div className="w-24 h-1 bg-gjm-yellow mx-auto mb-6"></div>
          <p className="text-gjm-gray max-w-3xl mx-auto text-lg">
            Somos especialistas em soluções personalizadas em serralheria, 
            com foco em portões de aço, portas, galpões, grades, mezaninos e coberturas.
            Trabalhamos com os melhores materiais do mercado, incluindo ferro, alumínio e blindex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 rounded-lg transition-all hover:shadow-lg hover:border-gjm-yellow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gjm-dark">{feature.title}</h3>
              <p className="text-gjm-gray">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gjm-dark max-w-3xl mx-auto mb-8">
            Serralheria GJM: Tradição, Inovação e Qualidade - Na Serralheria GJM, unimos tradição e inovação para entregar soluções metálicas duráveis, seguras e esteticamente atraentes. Nossa equipe é formada por serralheiros experientes e altamente qualificados, comprometidos com a excelência em cada detalhe do seu projeto de serralheria no Rio de Janeiro.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gjm-green hover:bg-gjm-green/90 text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
