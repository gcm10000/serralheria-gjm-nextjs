"use client"
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "Estou interessado nos serviços da Serralheria GJM."
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission

    setTimeout(() => {
      console.log("Form data submitted:", formData);
      setFormStatus("success");
    
      const { name, phone, service, message } = formData;
    
      const msg = `
Nome: ${name}
Telefone: ${phone}
Serviço: ${service}
Mensagem: 
${message}`;
    
      const encodedMessage = encodeURIComponent(msg);
      const phoneNumber = "5521993489060";
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
      window.open(waUrl, '_blank');
    
      // Reset form
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: ""
      });
    
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1000);
    

  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-gjm-yellow" />,
      title: "Telefone",
      details: "(21) 99348-9060"
    },
    {
      icon: <MapPin className="h-5 w-5 text-gjm-yellow" />,
      title: "Endereço",
      details: "Av. Canal das Tachas 54 - Terreirão - Recreio, Rio de Janeiro - Rio de Janeiro"
    },
    {
      icon: <Clock className="h-5 w-5 text-gjm-yellow" />,
      title: "Horário de Funcionamento",
      details: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gjm-dark mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-gjm-yellow mx-auto mb-6"></div>
          <p className="text-gjm-gray max-w-3xl mx-auto text-lg">
            Estamos prontos para atender sua necessidade. Entre em contato para um orçamento 
            sem compromisso ou para tirar qualquer dúvida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gjm-dark">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gjm-dark">{item.title}</h4>
                    <p className="text-gjm-gray">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gjm-dark">Horário de Atendimento</h3>
              <p className="text-gjm-gray mb-2">
                Estamos disponíveis para atender você nos seguintes horários:
              </p>
              <ul className="space-y-2 text-gjm-gray">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gjm-dark">Envie uma Mensagem</h3>
            
            {formStatus === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h4 className="font-bold text-green-800 mb-1">Mensagem enviada com sucesso!</h4>
                  <p className="text-green-700">Agradecemos seu contato. Retornaremos em breve.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium text-gjm-dark">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gjm-green"
                  />
                </div>
                
                <div>
                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium text-gjm-dark">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gjm-green"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-1 font-medium text-gjm-dark">Serviço de interesse</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gjm-green"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Portão de Aço">Portão de Aço</option>
                    <option value="Porta de Aço">Porta de Aço</option>
                    <option value="Galpão">Galpão</option>
                    <option value="Grade">Grade</option>
                    <option value="Mezanino">Mezanino</option>
                    <option value="Cobertura">Cobertura</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium text-gjm-dark">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gjm-green"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-gjm-green hover:bg-gjm-green/90 text-white font-bold py-3 px-8 rounded-md transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
