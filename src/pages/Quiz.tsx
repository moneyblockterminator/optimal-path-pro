import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "goal",
      question: "Какая ваша основная цель?",
      options: [
        { value: "lose", label: "Снижение веса" },
        { value: "gain", label: "Набор мышечной массы" },
        { value: "maintain", label: "Поддержание веса и здоровья" },
        { value: "energy", label: "Повышение энергии и работоспособности" },
      ],
    },
    {
      id: "experience",
      question: "Ваш опыт с правильным питанием?",
      options: [
        { value: "none", label: "Никогда не пробовал(а)" },
        { value: "beginner", label: "Есть базовые знания" },
        { value: "intermediate", label: "Пробовал(а) несколько диет" },
        { value: "advanced", label: "Хорошо разбираюсь в питании" },
      ],
    },
    {
      id: "restrictions",
      question: "Есть ли у вас пищевые ограничения?",
      options: [
        { value: "none", label: "Нет ограничений" },
        { value: "vegetarian", label: "Вегетарианство" },
        { value: "vegan", label: "Веганство" },
        { value: "allergies", label: "Аллергии или непереносимость" },
      ],
    },
    {
      id: "activity",
      question: "Ваш уровень физической активности?",
      options: [
        { value: "sedentary", label: "Сидячий образ жизни" },
        { value: "light", label: "Лёгкие тренировки 1-3 раза в неделю" },
        { value: "moderate", label: "Умеренные тренировки 3-5 раз в неделю" },
        { value: "active", label: "Интенсивные тренировки 6-7 раз в неделю" },
      ],
    },
    {
      id: "time",
      question: "Сколько времени вы готовы уделять приготовлению пищи?",
      options: [
        { value: "minimal", label: "Минимум (быстрые рецепты)" },
        { value: "moderate", label: "30-60 минут в день" },
        { value: "significant", label: "1-2 часа в день" },
        { value: "flexible", label: "Готов(а) уделять много времени" },
      ],
    },
  ];

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;
  const isLastStep = step === questions.length - 1;
  const isCompleted = step === questions.length;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (isLastStep) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-primary-glow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="mb-6">Спасибо! Ваш тест пройден</h1>
            
            <Card className="border-none shadow-xl mb-8">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-muted-foreground">
                  На основе ваших ответов мы подобрали оптимальную программу питания, которая поможет вам достичь ваших целей.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg space-y-3 text-left">
                  <h3 className="font-semibold">Рекомендуемая программа:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Индивидуальный план питания на 4 недели</li>
                    <li>• Еженедельные консультации и корректировки</li>
                    <li>• Список покупок и рецепты</li>
                    <li>• Постоянная поддержка в мессенджере</li>
                  </ul>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Запишитесь на первую консультацию, чтобы обсудить детали и начать путь к вашей цели!
                </p>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Записаться на консультацию</a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => { setStep(0); setAnswers({}); }}>
                Пройти тест заново
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Вопрос {step + 1} из {questions.length}
              </span>
              <span className="text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="border-none shadow-xl animate-fade-in">
            <CardContent className="p-8 space-y-8">
              <h2 className="text-2xl">{currentQuestion.question}</h2>
              
              <RadioGroup
                value={answers[currentQuestion.id]}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.value}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary ${
                      answers[currentQuestion.id] === option.value
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-4 pt-4">
                {step > 0 && (
                  <Button
                    variant="outline"
                    onClick={handlePrev}
                    className="flex-1"
                  >
                    Назад
                  </Button>
                )}
                <Button
                  variant={isLastStep ? "hero" : "default"}
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  className="flex-1"
                >
                  {isLastStep ? "Завершить" : "Далее"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
