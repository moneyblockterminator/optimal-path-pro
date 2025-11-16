import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import LeadMagnetModal from "@/components/LeadMagnetModal";

export const FloatingConsultationButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Button
        size="lg"
        onClick={() => setIsLeadMagnetOpen(true)}
        className={`fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300 hover:scale-105 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Записаться на консультацию"
      >
        <Calendar className="mr-2" size={20} />
        Записаться на консультацию
      </Button>
      
      <LeadMagnetModal 
        isOpen={isLeadMagnetOpen} 
        onClose={() => setIsLeadMagnetOpen(false)} 
      />
    </>
  );
};
