import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnetModal from "@/components/LeadMagnetModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Star, TrendingDown, TrendingUp, Heart, Gift, Calendar } from "lucide-react";
import weightLossImage from "@/assets/program-weight-loss.jpg";
import muscleGainImage from "@/assets/program-muscle-gain.jpg";
import healthyLifestyleImage from "@/assets/program-healthy-lifestyle.jpg";

const ProgramDetails = () => {
  const { programId } = useParams<{ programId: string }>();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const programsData: Record<string, any> = {
    "weight-loss": {
      title: "Программа снижения веса",
      subtitle: "Похудение без стресса и голода",
      description: "Индивидуальная программа для эффективного и безопасного снижения веса с долгосрочным результатом. Без жёстких диет и голодания.",
      image: weightLossImage,
      icon: TrendingDown,
      color: "from-primary to-primary-glow",
      duration: "12 недель",
      price: "15 000 ₽",
      oldPrice: "20 000 ₽",
    },
    "muscle-gain": {
      title: "Программа набора массы",
      subtitle: "Эффективный набор мышечной массы",
      description: "Научно обоснованная программа питания для набора качественной мышечной массы с минимальным набором жира.",
      image: muscleGainImage,
      icon: TrendingUp,
      color: "from-accent to-secondary",
      duration: "16 недель",
      price: "18 000 ₽",
      oldPrice: "24 000 ₽",
    },
    "healthy-lifestyle": {
      title: "Здоровый образ жизни",
      subtitle: "Баланс и энергия каждый день",
      description: "Комплексный подход к здоровью: сбалансированное питание, режим дня и улучшение общего самочувствия.",
      image: healthyLifestyleImage,
      icon: Heart,
      color: "from-primary to-accent",
      duration: "8 недель",
      price: "12 000 ₽",
      oldPrice: "16 000 ₽",
    },
  };

  const program = programsData[programId || "weight-loss"];

  const results = [
    {
      metric: "Средняя потеря веса",
      value: "8-12 кг",
      progress: 85,
    },
    {
      metric: "Улучшение самочувствия",
      value: "92%",
      progress: 92,
    },
    {
      metric: "Сохранение результата",
      value: "89%",
      progress: 89,
    },
    {
      metric: "Удовлетворённость",
      value: "98%",
      progress: 98,
    },
  ];

  const testimonials = [
    {
      name: "Анна К.",
      result: "-14 кг за 3 месяца",
      text: "Никогда не думала, что похудение может быть таким комфортным! Ем вкусно, не голодаю, и вес уходит стабильно.",
      rating: 5,
    },
    {
      name: "Дмитрий М.",
      result: "+7 кг мышц",
      text: "Отличная программа для набора массы. Результаты видны уже через месяц. Рекомендую всем, кто хочет набрать качественную массу.",
      rating: 5,
    },
    {
      name: "Елена П.",
      result: "Энергия вернулась",
      text: "После программы чувствую себя на 10 лет моложе! Появилась энергия, ушла постоянная усталость, нормализовался сон.",
      rating: 5,
    },
  ];

  const whatIncluded = [
    "Детальный анализ текущего питания и образа жизни",
    "Индивидуальный план питания с рецептами",
    "Еженедельные корректировки программы",
    "Списки покупок на каждую неделю",
    "Доступ к базе из 500+ рецептов",
    "Поддержка в мессенджере 24/7",
    "Трекинг прогресса и достижений",
    "Рекомендации по физической активности",
  ];

  const stages = [
    {
      week: "Неделя 1-2",
      title: "Адаптация",
      description: "Плавный переход на новый режим питания, изучение основ",
    },
    {
      week: "Неделя 3-6",
      title: "Активная фаза",
      description: "Максимальные результаты, формирование привычек",
    },
    {
      week: "Неделя 7-12",
      title: "Закрепление",
      description: "Стабилизация результата, переход к самостоятельности",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LeadMagnetModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        programName={program.title}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${program.image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-90`} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
            <div className={`bg-gradient-to-r ${program.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
              <program.icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-4">{program.title}</h1>
            <p className="text-2xl mb-6">{program.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" onClick={() => setIsLeadModalOpen(true)}>
                <Gift className="mr-2 h-5 w-5" />
                Получить бесплатные материалы
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Записаться на консультацию
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary mb-2">{result.value}</p>
                    <p className="text-sm text-muted-foreground mb-3">{result.metric}</p>
                    <Progress value={result.progress} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="process">Как это работает</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h2 className="mb-6">О программе</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {program.description}
                      </p>
                      <p className="text-muted-foreground">
                        Эта программа создана на основе научных исследований и многолетнего опыта работы с клиентами. 
                        Я учту все ваши особенности: пищевые предпочтения, режим дня, уровень активности и состояние здоровья.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-4">Что входит в программу</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {whatIncluded.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
                      <h3 className="mb-6">Этапы программы</h3>
                      <div className="space-y-6">
                        {stages.map((stage, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-semibold mb-1">{stage.week}: {stage.title}</p>
                              <p className="text-sm text-muted-foreground">{stage.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-none shadow-xl sticky top-24">
                      <CardContent className="p-6 space-y-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Длительность</p>
                          <p className="text-2xl font-bold">{program.duration}</p>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground mb-2">Стоимость</p>
                          <div className="flex items-baseline gap-2">
                            <p className="text-3xl font-bold text-primary">{program.price}</p>
                            <p className="text-lg text-muted-foreground line-through">{program.oldPrice}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            Специальная цена при записи в этом месяце
                          </p>
                        </div>

                        <div className="space-y-3">
                          <Button
                            variant="hero"
                            size="lg"
                            className="w-full"
                            onClick={() => setIsLeadModalOpen(true)}
                          >
                            <Gift className="mr-2 h-5 w-5" />
                            Начать бесплатно
                          </Button>
                          
                          <Button asChild variant="outline" size="lg" className="w-full">
                            <Link to="/contact">
                              Записаться на консультацию
                            </Link>
                          </Button>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-center text-muted-foreground">
                            💚 Первые 3 дня - пробный период<br />
                            Если программа не подойдёт, вернём деньги
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="process">
                <div className="max-w-3xl mx-auto space-y-12">
                  <div className="text-center mb-12">
                    <h2 className="mb-4">Как проходит работа</h2>
                    <p className="text-lg text-muted-foreground">
                      Пошаговый процесс от первой консультации до достижения цели
                    </p>
                  </div>

                  {[
                    {
                      step: 1,
                      title: "Первичная консультация",
                      description: "Знакомимся, обсуждаем ваши цели, анализируем текущий рацион и образ жизни. Выявляем все важные нюансы.",
                      duration: "60 минут",
                    },
                    {
                      step: 2,
                      title: "Создание программы",
                      description: "Разрабатываю индивидуальный план питания с учётом всех ваших особенностей и предпочтений.",
                      duration: "2-3 дня",
                    },
                    {
                      step: 3,
                      title: "Запуск программы",
                      description: "Получаете готовый план, рецепты, списки покупок. Начинаем работу, отвечаю на все вопросы.",
                      duration: "Старт",
                    },
                    {
                      step: 4,
                      title: "Сопровождение",
                      description: "Еженедельные созвоны, корректировка плана, поддержка в мессенджере. Отслеживаем прогресс.",
                      duration: program.duration,
                    },
                    {
                      step: 5,
                      title: "Достижение цели",
                      description: "Получаете результат и навыки для его сохранения. Готовы продолжать самостоятельно!",
                      duration: "Финал",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="bg-gradient-to-r from-primary to-primary-glow text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl">{item.title}</h3>
                          <span className="text-sm text-muted-foreground">{item.duration}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="mb-4">Отзывы клиентов</h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                      ))}
                      <span className="text-2xl font-bold ml-2">4.9/5</span>
                    </div>
                    <p className="text-muted-foreground">На основе 200+ отзывов</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((review, index) => (
                      <Card key={index} className="border-none shadow-lg">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-sm italic">&ldquo;{review.text}&rdquo;</p>
                          <div className="pt-4 border-t border-border">
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-sm text-primary">{review.result}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="mb-6">Готовы начать менять свою жизнь?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите бесплатные материалы и узнайте, как программа может помочь именно вам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => setIsLeadModalOpen(true)}
              >
                <Gift className="mr-2 h-5 w-5" />
                Получить бесплатные материалы
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Записаться на консультацию</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramDetails;
