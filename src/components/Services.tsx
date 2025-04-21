
import { cn } from "@/lib/utils";

type ServiceProps = {
  title: string;
  description: string;
  imagePath: string;
  reverse?: boolean;
};

const ServiceItem = ({ title, description, imagePath, reverse = false }: ServiceProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-8 py-12",
      reverse && "md:flex-row-reverse"
    )}>
      <div className="w-full md:w-1/2">
        <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
          <div className={`w-full h-full bg-cover bg-center bg-no-repeat`} 
            style={{ backgroundImage: `url(${imagePath})` }}></div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-4 text-gjm-dark">{title}</h3>
        <p className="text-gjm-gray">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Portões de Aço",
      description: "Fabricamos portões de aço sob medida, com designs modernos ou tradicionais, automáticos ou manuais. Nossos portões combinam segurança, funcionalidade e estética para valorizar sua propriedade.",
      imagePath: "/images/portoes-de-aco.jpg"
    },
    {
      title: "Portas de Aço",
      description: "Nossas portas de aço oferecem alta resistência e durabilidade, ideais para residências, comércios e indústrias. Disponíveis em diversos acabamentos e sistemas de fechamento para garantir segurança máxima.",
      imagePath: "/images/portas-de-aco.jpg"
    },
    {
      title: "Galpões e Estruturas Metálicas",
      description: "Projetamos e construímos galpões e estruturas metálicas para diversos fins, garantindo resistência, durabilidade e otimização de espaço. Soluções personalizadas para indústrias, comércios e agronegócio.",
      imagePath: "/images/estrutura-para-galpao.jpg"
    },
    {
      title: "Grades e Proteções",
      description: "Desenvolvemos grades decorativas e de segurança para janelas, portas e áreas externas. Nossos produtos aliam proteção e estética, com designs que valorizam o ambiente.",
      imagePath: "/images/grades-e-protecao.jpg"
    },
    {
      title: "Mezaninos",
      description: "Nossas soluções em mezaninos permitem o aproveitamento vertical do espaço, ideais para ambientes comerciais e industriais. Estruturas seguras, funcionais e com excelente custo-benefício.",
      imagePath: "images/mezaninos.jpg"
    },
    {
      title: "Coberturas",
      description: "Fabricamos coberturas metálicas para áreas externas, garagens, pátios e espaços comerciais. Produtos resistentes às intempéries, com design moderno e instalação rápida.",
      imagePath: "images/coberturas.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gjm-dark mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-gjm-yellow mx-auto mb-6"></div>
          <p className="text-gjm-gray max-w-3xl mx-auto text-lg">
            Oferecemos soluções completas em serralheria, trabalhando com ferro, alumínio e blindex
            para atender todas as suas necessidades.
          </p>
        </div>

        <div className="space-y-8 divide-y divide-gray-200">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              imagePath={service.imagePath}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
