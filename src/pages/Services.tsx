import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Calendar, FileText, Users, Video, MessageCircle, TrendingUp } from "lucide-react";
import LeadMagnetModal from "@/components/LeadMagnetModal";

const services = [
  {
    id: 1,
    icon: Video,
    title: "Онлайн консультация",
    description: "Персональная видео-встреча для обсуждения ваших целей и составления индивидуального плана питания",
    duration: "60 минут",
    price: "3 500 ₽",
    features: [
      "Детальный анализ текущего рациона",
      "Постановка реалистичных целей",
      "Индивидуальные рекомендации",
      "План действий на первый месяц",
      "Запись консультации"
    ],
    popular: true
  },
  {
    id: 2,
    icon: FileText,
    title: "Анализ рациона питания",
    description: "Подробный разбор вашего текущего рациона с рекомендациями по улучшению",
    duration: "3-5 дней",
    price: "2 500 ₽",
    features: [
      "Анализ дневника питания (3-7 дней)",
      "Оценка баланса макро- и микронутриентов",
      "Выявление дефицитов и избытков",
      "Письменные рекомендации",
      "Список продуктов для замены"
    ],
    popular: false
  },
  {
    id: 3,
    icon: Users,
    title: "Программа сопровождения",
    description: "Комплексная поддержка на пути к вашим целям с регулярными консультациями",
    duration: "1 месяц",
    price: "12 000 ₽",
    features: [
      "4 онлайн консультации",
      "Индивидуальный план питания",
      "Еженедельные корректировки",
      "Поддержка в мессенджерах",
      "Трекинг прогресса",
      "Список покупок и рецепты"
    ],
    popular: false
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Консультация в чате",
    description: "Быстрые ответы на ваши вопросы о питании в удобном текстовом формате",
    duration: "24 часа",
    price: "1 500 ₽",
    features: [
      "Ответы на 3-5 вопросов",
      "Рекомендации по конкретной ситуации",
      "Подбор продуктов-заменителей",
      "Советы по планированию рациона"
    ],
    popular: false
  },
  {
    id: 5,
    icon: Calendar,
    title: "Составление меню",
    description: "Готовое сбалансированное меню на неделю или месяц с учетом ваших предпочтений",
    duration: "5-7 дней",
    price: "4 500 ₽",
    features: [
      "Меню на 7 или 30 дней",
      "Учет пищевых предпочтений и аллергий",
      "Расчет КБЖУ для каждого приема пищи",
      "Список покупок",
      "Простые пошаговые рецепты"
    ],
    popular: false
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Корректировка веса",
    description: "Специализированная программа для достижения и поддержания желаемого веса",
    duration: "3 месяца",
    price: "30 000 ₽",
    features: [
      "12 онлайн консультаций",
      "Персональный план питания",
      "Еженедельный мониторинг прогресса",
      "Психологическая поддержка",
      "Рекомендации по физической активности",
      "Кулинарные мастер-классы"
    ],
    popular: false
  }
];

const Services = () => {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4">Профессиональные услуги</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Услуги нутрициолога
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Индивидуальный подход к каждому клиенту. Выберите формат, который подходит именно вам
            </p>
            <Button size="lg" onClick={() => setIsLeadMagnetOpen(true)}>
              Получить бесплатную консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className={`hover:shadow-xl transition-all duration-300 animate-fade-in relative ${
                    service.popular ? 'border-2 border-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Популярное</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <div className="flex items-baseline gap-2 pt-4">
                      <span className="text-3xl font-bold text-foreground">{service.price}</span>
                      <span className="text-sm text-muted-foreground">/ {service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full group" onClick={() => setIsLeadMagnetOpen(true)}>
                      Записаться
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Не знаете, какая услуга вам подойдет?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Запишитесь на бесплатную 15-минутную консультацию, и я помогу определиться
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsLeadMagnetOpen(true)}
              className="shadow-lg"
            >
              Записаться на бесплатную консультацию
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={() => setIsLeadMagnetOpen(false)} />
    </div>
  );
};

export default Services;
