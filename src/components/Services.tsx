
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
      imagePath: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80"
    },
    {
      title: "Portas de Aço",
      description: "Nossas portas de aço oferecem alta resistência e durabilidade, ideais para residências, comércios e indústrias. Disponíveis em diversos acabamentos e sistemas de fechamento para garantir segurança máxima.",
      imagePath: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80"
    },
    {
      title: "Galpões e Estruturas Metálicas",
      description: "Projetamos e construímos galpões e estruturas metálicas para diversos fins, garantindo resistência, durabilidade e otimização de espaço. Soluções personalizadas para indústrias, comércios e agronegócio.",
      imagePath: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80"
    },
    {
      title: "Grades e Proteções",
      description: "Desenvolvemos grades decorativas e de segurança para janelas, portas e áreas externas. Nossos produtos aliam proteção e estética, com designs que valorizam o ambiente.",
      imagePath: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80"
    },
    {
      title: "Mezaninos",
      description: "Nossas soluções em mezaninos permitem o aproveitamento vertical do espaço, ideais para ambientes comerciais e industriais. Estruturas seguras, funcionais e com excelente custo-benefício.",
      imagePath: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80"
    },
    {
      title: "Coberturas",
      description: "Fabricamos coberturas metálicas para áreas externas, garagens, pátios e espaços comerciais. Produtos resistentes às intempéries, com design moderno e instalação rápida.",
      imagePath: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80"
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
