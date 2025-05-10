"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Project {
  title: string;
  image: string;
  category: string;
  alt: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Portão de aço com fechamento automático",
      image: "/images/1.jpg",
      category: "Portão",
      alt: "Portão de aço moderno instalado em residência"
    },
    {
      title: "Porta de alumínio com visor de vidro",
      image: "/images/2.jpg",
      category: "Porta",
      alt: "Porta de alumínio com visor de vidro instalada"
    },
    {
      title: "Grade ornamental para área externa",
      image: "/images/3.jpg",
      category: "Grade",
      alt: "Grade ornamental instalada em varanda"
    },
    {
      title: "Cobertura metálica para garagem",
      image: "/images/4.jpg",
      category: "Cobertura",
      alt: "Cobertura metálica instalada sobre garagem"
    },
    {
      title: "Mezanino metálico para depósito",
      image: "/images/5.jpg",
      category: "Mezanino",
      alt: "Mezanino metálico em depósito industrial"
    },
    {
      title: "Galpão em estrutura metálica",
      image: "/images/6.jpg",
      category: "Galpão",
      alt: "Galpão industrial em estrutura metálica"
    }
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gjm-dark mb-4">
            Projetos Realizados
          </h2>
          <div className="w-24 h-1 bg-gjm-yellow mx-auto mb-6"></div>
          <p className="text-gjm-gray max-w-3xl mx-auto text-lg">
            Conheça Nossos Trabalhos e a Qualidade dos Nossos Serviços. Explore alguns dos nossos projetos e veja a qualidade das soluções em serralheria que oferecemos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => openModal(project.image)}
            >
              <div className="relative h-64">
                {/* imagem real com alt para SEO */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gjm-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <span className="text-gjm-yellow">{project.category}</span>
                  <span className="mt-4 text-white text-sm">Clique para ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gjm-green hover:bg-gjm-green/90 text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gjm-yellow"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt={
                projects.find((p) => p.image === selectedImage)?.alt ||
                "Projeto ampliado - Serralheria GJM"
              }
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
