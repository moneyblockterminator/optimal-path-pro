import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  const achievements = [
    { icon: Award, text: "Сертифицированный нутрициолог" },
    { icon: BookOpen, text: "7+ лет практики" },
    { icon: Users, text: "500+ довольных клиентов" },
    { icon: Heart, text: "Индивидуальный подход" },
  ];

  const qualifications = [
    "Высшее медицинское образование",
    "Сертификат нутрициолога международного образца",
    "Специализация по спортивному питанию",
    "Курс по детскому питанию",
    "Постоянное повышение квалификации",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">О специалисте</h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный нутрициолог с индивидуальным подходом к каждому клиенту
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-up">
                <img
                  src={consultationImage}
                  alt="Нутрициолог"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              
              <div className="space-y-6">
                <h2>Мария Петрова</h2>
                <p className="text-lg text-muted-foreground">
                  Здравствуйте! Я - профессиональный нутрициолог с более чем 7-летним опытом работы. 
                  Моя миссия - помочь людям достичь здоровья и благополучия через правильное питание.
                </p>
                <p className="text-muted-foreground">
                  За годы практики я помогла более 500 клиентам изменить их отношение к питанию и достичь 
                  своих целей - будь то снижение веса, набор мышечной массы, улучшение здоровья или 
                  просто переход на более сбалансированное питание.
                </p>
                <p className="text-muted-foreground">
                  Я верю в индивидуальный подход. Каждый человек уникален, и программа питания должна 
                  учитывать не только физиологические особенности, но и образ жизни, предпочтения и цели.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {achievements.map((item, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-primary to-primary-glow w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-medium">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Qualifications */}
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="text-center mb-8">Образование и квалификация</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Services */}
            <div className="bg-muted/30 rounded-2xl p-12">
              <h2 className="text-center mb-8">Что я предлагаю</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-3">
                  <h3 className="text-xl">Консультации</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Первичная консультация с полным анализом</li>
                    <li>• Составление индивидуального плана питания</li>
                    <li>• Регулярные встречи для корректировки программы</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl">Программы</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Снижение веса</li>
                    <li>• Набор мышечной массы</li>
                    <li>• Питание для спортсменов</li>
                    <li>• Здоровое питание для семьи</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <h3 className="text-2xl mb-6">Готовы начать?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="hero">
                  <Link to="/quiz">Подобрать программу</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Записаться на консультацию</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
