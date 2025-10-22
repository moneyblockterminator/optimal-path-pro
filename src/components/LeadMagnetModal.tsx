import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Download, BookOpen, Calculator, FileText } from "lucide-react";

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
}

const LeadMagnetModal = ({ isOpen, onClose, programName }: LeadMagnetModalProps) => {
  const [step, setStep] = useState<"select" | "form">("select");
  const [selectedMagnet, setSelectedMagnet] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const leadMagnets = [
    {
      id: "meal-plan",
      icon: FileText,
      title: "План питания на неделю",
      description: "Готовое меню с рецептами и списком покупок",
    },
    {
      id: "guide",
      icon: BookOpen,
      title: "Гид по правильному питанию",
      description: "PDF с основами здорового питания",
    },
    {
      id: "calculator",
      icon: Calculator,
      title: "Калькулятор БЖУ",
      description: "Таблица для расчёта макронутриентов",
    },
    {
      id: "checklist",
      icon: Download,
      title: "Чек-лист здоровых привычек",
      description: "30-дневный трекер привычек",
    },
  ];

  const handleMagnetSelect = (magnetId: string) => {
    setSelectedMagnet(magnetId);
    setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь будет отправка в CRM
    console.log("Lead Magnet Request:", {
      magnet: selectedMagnet,
      program: programName,
      ...formData,
    });

    toast.success("Отлично! Материалы отправлены на ваш email");
    
    onClose();
    setStep("select");
    setSelectedMagnet("");
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleBack = () => {
    setStep("select");
    setSelectedMagnet("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {step === "select" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Получите бесплатные материалы</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-3">
              <RadioGroup value={selectedMagnet} onValueChange={handleMagnetSelect}>
                {leadMagnets.map((magnet) => (
                  <div
                    key={magnet.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary ${
                      selectedMagnet === magnet.id
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                    onClick={() => handleMagnetSelect(magnet.id)}
                  >
                    <RadioGroupItem value={magnet.id} id={magnet.id} className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <magnet.icon className="h-5 w-5 text-primary" />
                        <Label htmlFor={magnet.id} className="cursor-pointer font-semibold">
                          {magnet.title}
                        </Label>
                      </div>
                      <p className="text-sm text-muted-foreground">{magnet.description}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Оставьте контактные данные</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Вы выбрали:</strong>{" "}
                  {leadMagnets.find((m) => m.id === selectedMagnet)?.title}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-name">Имя *</Label>
                <Input
                  id="lead-name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-email">Email *</Label>
                <Input
                  id="lead-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-phone">Телефон</Label>
                <Input
                  id="lead-phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                  Назад
                </Button>
                <Button type="submit" variant="hero" className="flex-1">
                  Получить материалы
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetModal;
