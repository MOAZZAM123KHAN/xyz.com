import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
    experience: string;
  };
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const handleCall = () => {
    window.open(`tel:${member.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${member.email}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hi ${member.name}, I would like to discuss property requirements.`;
    const whatsappUrl = `https://wa.me/${member.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-60 h-60 object-cover object-center rounded-xl mx-auto mt-2 mb-4 shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm font-medium bg-red-600 px-2 py-1 rounded">
            {member.experience}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-red-600 font-medium mb-4">
          {member.role}
        </p>
        {!(member.role && member.role.toLowerCase().includes('ceo')) && member.phone && (
          <div className="flex flex-col gap-2 items-center">
            <Button 
              className="w-full bg-red-600 hover:bg-red-700"
              onClick={() => {
                const message = `Hi ${member.name}, I would like to discuss property requirements.`;
                const whatsappUrl = `https://wa.me/${member.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              WhatsApp
            </Button>
            <Button
              className="border-red-600 text-red-600 hover:bg-red-50"
              onClick={() => {
                window.open(`tel:${member.phone}`, '_self');
              }}
            >
              Call
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMember;
