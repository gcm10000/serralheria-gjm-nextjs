"use client"

import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "Portão Automático Residencial",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80",
      category: "Portões"
    },
    {
      title: "Estrutura Metálica Industrial",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80",
      category: "Estruturas"
    },
    {
      title: "Grade Decorativa",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80",
      category: "Grades"
    },
    {
      title: "Escada Metálica com Mezanino",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80",
      category: "Mezaninos"
    },
    {
      title: "Cobertura para Área Externa",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80",
      category: "Coberturas"
    },
    {
      title: "Porta de Aço Comercial",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80",
      category: "Portas"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gjm-dark mb-4">Projetos Realizados</h2>
          <div className="w-24 h-1 bg-gjm-yellow mx-auto mb-6"></div>
          <p className="text-gjm-gray max-w-3xl mx-auto text-lg">
            Conheça alguns dos nossos trabalhos e a qualidade dos nossos serviços
            em diferentes tipos de projetos.
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
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeModal}>
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
              alt="Projeto ampliado" 
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
