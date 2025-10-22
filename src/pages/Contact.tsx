import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar as CalendarIcon } from "lucide-react";

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [questionForm, setQuestionForm] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast.error("Пожалуйста, выберите дату и время");
      return;
    }

    // Здесь будет отправка данных в CRM через backend
    console.log("Appointment:", { ...appointmentForm, date: selectedDate, time: selectedTime });
    
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    
    setAppointmentForm({ name: "", phone: "", email: "" });
    setSelectedDate(undefined);
    setSelectedTime("");
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь будет отправка данных в CRM через backend
    console.log("Question:", questionForm);
    
    toast.success("Вопрос отправлен! Специалист свяжется с вами в ближайшее время.");
    
    setQuestionForm({ name: "", phone: "", question: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Свяжитесь со мной</h1>
              <p className="text-xl text-muted-foreground">
                Запишитесь на консультацию или задайте вопрос - я всегда рада помочь!
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-primary to-primary-glow w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-primary to-primary-glow w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@nutribalance.ru</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-primary to-primary-glow w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="appointment" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="appointment" className="text-base">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Записаться на приём
                </TabsTrigger>
                <TabsTrigger value="question" className="text-base">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Задать вопрос
                </TabsTrigger>
              </TabsList>

              <TabsContent value="appointment">
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <h2 className="text-2xl">Запись на консультацию</h2>
                    <p className="text-muted-foreground">
                      Выберите удобную дату и время для консультации
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Имя *</Label>
                            <Input
                              id="name"
                              placeholder="Ваше имя"
                              value={appointmentForm.name}
                              onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Телефон *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+7 (999) 123-45-67"
                              value={appointmentForm.phone}
                              onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={appointmentForm.email}
                              onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                            />
                          </div>

                          {selectedDate && selectedTime && (
                            <div className="bg-primary/10 p-4 rounded-lg">
                              <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium">
                                  {selectedDate.toLocaleDateString("ru-RU")} в {selectedTime}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="space-y-4">
                          <Label>Выберите дату</Label>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            className="rounded-md border"
                          />

                          {selectedDate && (
                            <div className="space-y-2">
                              <Label>Доступное время</Label>
                              <div className="grid grid-cols-3 gap-2">
                                {availableTimes.map((time) => (
                                  <Button
                                    key={time}
                                    type="button"
                                    variant={selectedTime === time ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedTime(time)}
                                  >
                                    {time}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Записаться на консультацию
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="question">
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <h2 className="text-2xl">Задайте вопрос специалисту</h2>
                    <p className="text-muted-foreground">
                      Оставьте свой вопрос и контактные данные - я свяжусь с вами в ближайшее время
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleQuestionSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="question-name">Имя *</Label>
                        <Input
                          id="question-name"
                          placeholder="Ваше имя"
                          value={questionForm.name}
                          onChange={(e) => setQuestionForm({ ...questionForm, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="question-phone">Телефон *</Label>
                        <Input
                          id="question-phone"
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={questionForm.phone}
                          onChange={(e) => setQuestionForm({ ...questionForm, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="question-text">Ваш вопрос *</Label>
                        <Textarea
                          id="question-text"
                          placeholder="Расскажите подробнее о вашем вопросе..."
                          value={questionForm.question}
                          onChange={(e) => setQuestionForm({ ...questionForm, question: e.target.value })}
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Отправить вопрос
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Я отвечу на ваш вопрос в течение 24 часов
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
