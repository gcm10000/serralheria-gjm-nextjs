
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
      title: "Portões de Aço Sob Medida",
      description: "Fabricamos portões de aço sob medida, com designs modernos ou tradicionais, automáticos ou manuais, para atender às suas necessidades específicas. Nossos portões de aço oferecem segurança, funcionalidade e estética, valorizando sua propriedade e garantindo durabilidade e resistência.",
      imagePath: "/images/portoes-de-aco.jpg"
    },
    {
      title: "Portas de Aço Sob Medida",
      description: "Nossas portas de aço oferecem alta resistência e durabilidade, sendo ideais para residências, comércios e indústrias no Rio de Janeiro. Disponíveis em diversos acabamentos e sistemas de fechamento, garantimos segurança máxima e excelente desempenho, adaptando-se perfeitamente às suas necessidades.",
      imagePath: "/images/portas-de-aco.jpg"
    },
    {
      title: "Galpões e Estruturas Metálicas Sob Medida",
      description: "Projetamos e construímos galpões e estruturas metálicas no Rio de Janeiro para diversos fins, garantindo resistência, durabilidade e otimização de espaço. Oferecemos soluções personalizadas para indústrias, comércios e o agronegócio, com foco na eficiência e segurança em cada projeto.",
      imagePath: "/images/estrutura-para-galpao.jpg"
    },
    {
      title: "Grades e Proteções Sob Medida",
      description: "Desenvolvemos grades decorativas e de segurança para janelas, portas e áreas externas no Rio de Janeiro. Nossos produtos combinam proteção e estética, oferecendo designs exclusivos que valorizam o ambiente, sem abrir mão da segurança e resistência.",
      imagePath: "/images/grades-e-protecao.jpg"
    },
    {
      title: "Mezaninos Sob Medida",
      description: "Nossas soluções em mezaninos permitem o aproveitamento vertical do espaço, sendo ideais para ambientes comerciais e industriais no Rio de Janeiro. Oferecemos estruturas seguras, funcionais e com excelente custo-benefício, garantindo otimização do espaço e máxima eficiência.",
      imagePath: "images/mezaninos.jpg"
    },
    {
      title: "Coberturas Metálicas Sob Medida",
      description: "Fabricamos coberturas metálicas para áreas externas, garagens, pátios e espaços comerciais no Rio de Janeiro. Nossos produtos são resistentes às intempéries, com design moderno e instalação rápida, oferecendo proteção e durabilidade com excelente custo-benefício.",
      imagePath: "images/coberturas.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gjm-dark mb-4">Nossos Serviços de Serralheria</h2>
          <div className="w-24 h-1 bg-gjm-yellow mx-auto mb-6"></div>
          <p className="text-gjm-gray max-w-3xl mx-auto text-lg">
            Na Serralheria GJM, oferecemos soluções completas em serralheria no Rio de Janeiro, trabalhando com ferro e alumínio para atender todas as suas necessidades. Realizamos projetos sob medida, fabricação, instalação e manutenção de estruturas metálicas, sempre com qualidade e acabamento de excelência.
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
