import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, MessageCircleMoreIcon } from "lucide-react";

interface WhatsAppGroupCardProps {
  title: string;
  description: string;
  whatsappUrl: string;
  icon?: React.ReactNode;
}

export const WhatsAppGroupCard = ({ title, description, whatsappUrl, icon }: WhatsAppGroupCardProps) => {
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border hover:border-primary/50 shadow-md bg-white" >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-[20px] flex items-center justify-center text-primary">
          {icon || <MessageCircle size={32} />}
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col items-center">
        <Button 
          onClick={handleClick}
          className="w-[70%] bg-[#C95100] hover:bg-[#ab4501] text-white font-semibold py-3 rounded-[20px] transition-colors duration-200"
        >
          <MessageCircleMoreIcon className="mr-2" size={20} />
          Unirse al Grupo
        </Button>
      </CardContent>
    </Card>
  );
};