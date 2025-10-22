import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Calendar, Calculator, BookOpen, MessageSquare, Award, Users, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscountPopup from "@/components/DiscountPopup";
import heroImage from "@/assets/hero-nutrition.jpg";
import consultationImage from "@/assets/consultation.jpg";
import mealPlanningImage from "@/assets/meal-planning.jpg";

const Index = () => {
  const benefits = [
    {
      icon: Award,
      title: "Профессионализм",
      description: "Сертифицированный специалист с 7+ лет опыта",
    },
    {
      icon: Users,
      title: "500+ клиентов",
      description: "Довольных клиентов достигли своих целей",
    },
    {
      icon: Heart,
      title: "Индивидуальный подход",
      description: "Программы с учётом ваших особенностей",
    },
  ];

  const services = [
    {
      icon: Calculator,
      title: "Калькулятор калорий",
      description: "Рассчитайте свою норму калорий",
      link: "/calculator",
      color: "from-primary to-primary-glow",
    },
    {
      icon: BookOpen,
      title: "База знаний",
      description: "Полезная информация о продуктах",
      link: "/products",
      color: "from-accent to-secondary",
    },
    {
      icon: MessageSquare,
      title: "Задать вопрос",
      description: "Получите консультацию специалиста",
      link: "/contact",
      color: "from-primary to-accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <DiscountPopup />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
            <h1 className="mb-6">Здоровое питание – путь к вашей цели</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Индивидуальные программы питания от профессионального нутрициолога
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="hero" className="text-lg">
                <Link to="/quiz">Подобрать программу</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary text-lg backdrop-blur-sm">
                <Link to="/contact">Записаться на консультацию</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-primary to-primary-glow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-up">
                <img
                  src={consultationImage}
                  alt="Консультация нутрициолога"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2>Профессиональный подход к здоровью</h2>
                <p className="text-lg text-muted-foreground">
                  Я помогаю людям достигать своих целей через сбалансированное питание. 
                  Каждая программа создаётся индивидуально с учётом ваших особенностей, образа жизни и предпочтений.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Детальный анализ вашего рациона и образа жизни</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Индивидуальное меню с рецептами и списками покупок</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Постоянная поддержка и корректировка программы</span>
                  </li>
                </ul>
                <Button asChild size="lg" variant="default">
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Полезные инструменты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Воспользуйтесь нашими онлайн-инструментами для достижения ваших целей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} to={service.link}>
                  <Card className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full cursor-pointer group">
                    <CardContent className="p-8 text-center">
                      <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url(${mealPlanningImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="mb-6">Готовы начать путь к здоровью?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Пройдите короткий тест и получите персональные рекомендации
            </p>
            <Button asChild size="lg" variant="hero" className="text-lg">
              <Link to="/quiz">
                <Calendar className="mr-2 h-5 w-5" />
                Пройти тест и записаться
              </Link>
            </Button>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Полезные статьи</h2>
              <p className="text-lg text-muted-foreground">
                Читайте наш блог о здоровом питании и образе жизни
              </p>
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">Перейти в блог</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
