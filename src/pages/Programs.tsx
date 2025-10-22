import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, TrendingDown, TrendingUp, Heart } from "lucide-react";
import weightLossImage from "@/assets/program-weight-loss.jpg";
import muscleGainImage from "@/assets/program-muscle-gain.jpg";
import healthyLifestyleImage from "@/assets/program-healthy-lifestyle.jpg";

const Programs = () => {
  const programs = [
    {
      id: "weight-loss",
      title: "Программа снижения веса",
      subtitle: "Похудение без стресса и голода",
      description: "Индивидуальная программа для эффективного и безопасного снижения веса с сохранением результата",
      image: weightLossImage,
      icon: TrendingDown,
      color: "from-primary to-primary-glow",
      duration: "12 недель",
      price: "от 15 000 ₽",
      features: [
        "Персональный план питания",
        "Еженедельные консультации",
        "Рецепты и списки покупок",
        "Поддержка 24/7 в мессенджере",
        "Трекинг прогресса",
      ],
      results: {
        avgWeightLoss: "8-12 кг",
        satisfaction: "98%",
        clients: "200+",
      },
    },
    {
      id: "muscle-gain",
      title: "Программа набора массы",
      subtitle: "Эффективный набор мышечной массы",
      description: "Сбалансированное питание для роста мышц и увеличения силовых показателей",
      image: muscleGainImage,
      icon: TrendingUp,
      color: "from-accent to-secondary",
      duration: "16 недель",
      price: "от 18 000 ₽",
      features: [
        "План питания для роста мышц",
        "Расчёт калорий и БЖУ",
        "Рекомендации по спортпиту",
        "График приёма пищи",
        "Контроль прогресса",
      ],
      results: {
        avgWeightLoss: "+5-8 кг мышц",
        satisfaction: "96%",
        clients: "150+",
      },
    },
    {
      id: "healthy-lifestyle",
      title: "Здоровый образ жизни",
      subtitle: "Баланс и энергия каждый день",
      description: "Комплексный подход к здоровью: питание, режим, энергия и хорошее самочувствие",
      image: healthyLifestyleImage,
      icon: Heart,
      color: "from-primary to-accent",
      duration: "8 недель",
      price: "от 12 000 ₽",
      features: [
        "Сбалансированный рацион",
        "Улучшение пищеварения",
        "Повышение энергии",
        "Нормализация сна",
        "Укрепление иммунитета",
      ],
      results: {
        avgWeightLoss: "Улучшение на 85%",
        satisfaction: "99%",
        clients: "300+",
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Программы питания</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Выберите программу, которая подходит именно вам. Каждая программа адаптируется под ваши особенности и цели.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${program.color} p-2 rounded-lg`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{program.duration}</Badge>
                      <Badge variant="outline">{program.results.clients} клиентов</Badge>
                    </div>
                    <h3 className="text-2xl mb-2">{program.title}</h3>
                    <p className="text-lg font-semibold text-primary">{program.subtitle}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{program.description}</p>
                    
                    <div className="space-y-2">
                      <p className="font-semibold">Что входит:</p>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Средний результат:</span>
                        <span className="font-semibold">{program.results.avgWeightLoss}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Удовлетворённость:</span>
                        <span className="font-semibold text-primary">{program.results.satisfaction}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold">{program.price}</span>
                      </div>
                      
                      <Button asChild variant="hero" size="lg" className="w-full group/btn">
                        <Link to={`/programs/${program.id}`}>
                          Узнать подробнее
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6">Не знаете, какая программа вам подходит?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Пройдите короткий тест, и я помогу подобрать оптимальную программу
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/quiz">Пройти тест бесплатно</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
