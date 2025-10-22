import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenDiscountPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasSeenDiscountPopup", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="text-center space-y-4 py-6">
          <div className="bg-gradient-to-r from-primary to-accent text-white text-6xl font-bold py-4 px-6 rounded-lg inline-block">
            -20%
          </div>
          
          <h3 className="text-2xl font-bold">Специальное предложение!</h3>
          
          <p className="text-muted-foreground">
            Получите скидку 20% на первую консультацию. Начните свой путь к здоровому питанию прямо сейчас!
          </p>
          
          <div className="space-y-2">
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="/contact" onClick={() => setIsOpen(false)}>
                Записаться со скидкой
              </a>
            </Button>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Может быть позже
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            *Предложение действует только для новых клиентов
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
