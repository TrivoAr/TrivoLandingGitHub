import { WhatsAppGroupCard } from "@/components/WhatsAppGroupCard";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Calendar, BikeIcon, } from "lucide-react";
import heroImage from "@/assets/hero-outdoor-sports.jpg";

const Index = () => {
  const whatsappGroups = [
    {
      title: "Trekking",
      description: "Únete a nuestras aventuras de montaña y descubre nuevos senderos cada fin de semana.",
      whatsappUrl: "https://wa.me/your-number-here",
      icon: <Mountain size={32} />
    },
    {
      title: "Ciclismo",
      description: "Rutas en bicicleta para todos los niveles. Explora la naturaleza sobre ruedas.",
      whatsappUrl: "https://wa.me/your-number-here",
      icon: <BikeIcon size={32} />
    },
    {
      title: "Running",
      description: "Grupos de running donde compartimos rutas y motivación para correr juntos.",
      whatsappUrl: "https://wa.me/your-number-here",
      icon: <Users size={32} />
    },
    {
      title: "Salidas Especiales",
      description: "Actividades con salidas informales, y sociales",
      whatsappUrl: "https://wa.me/your-number-here",
      icon: <Calendar size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-background ">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            TRIVO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Conecta con grupos deportivos outdoors y vive aventuras increíbles en la naturaleza
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
          >
            Explorar Grupos
          </Button>
        </div>
      </section>

      {/* Groups Section */}
      <section className="py-16 px-4  bg-[#FEFBF9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Únite a Nuestros Grupos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra tu grupo ideal y conecta con personas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsappGroups.map((group, index) => (
              <WhatsAppGroupCard
                key={index}
                title={group.title}
                description={group.description}
                whatsappUrl={group.whatsappUrl}
                icon={group.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
