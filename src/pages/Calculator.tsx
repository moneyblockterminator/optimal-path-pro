import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator as CalcIcon } from "lucide-react";

const Calculator = () => {
  const [result, setResult] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    activity: "1.375",
    goal: "maintain",
  });

  const calculateCalories = () => {
    const { age, gender, weight, height, activity, goal } = formData;
    
    if (!age || !weight || !height) {
      return;
    }

    // Формула Миффлина-Сан Жеора
    let bmr;
    if (gender === "male") {
      bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5;
    } else {
      bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;
    }

    // Учёт уровня активности
    let tdee = bmr * parseFloat(activity);

    // Учёт цели
    if (goal === "lose") {
      tdee = tdee * 0.8; // Дефицит 20%
    } else if (goal === "gain") {
      tdee = tdee * 1.1; // Профицит 10%
    }

    setResult(Math.round(tdee));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-primary-glow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalcIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="mb-6">Калькулятор калорий</h1>
              <p className="text-xl text-muted-foreground">
                Рассчитайте свою суточную норму калорий с учётом ваших целей
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <h2 className="text-2xl">Введите ваши данные</h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Пол</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Мужской</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Женский</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Возраст (лет)</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="30"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Вес (кг)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="height">Рост (см)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="175"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="activity">Уровень активности</Label>
                    <Select
                      value={formData.activity}
                      onValueChange={(value) => setFormData({ ...formData, activity: value })}
                    >
                      <SelectTrigger id="activity">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1.2">Минимальная (сидячий образ жизни)</SelectItem>
                        <SelectItem value="1.375">Низкая (1-3 тренировки в неделю)</SelectItem>
                        <SelectItem value="1.55">Средняя (3-5 тренировок в неделю)</SelectItem>
                        <SelectItem value="1.725">Высокая (6-7 тренировок в неделю)</SelectItem>
                        <SelectItem value="1.9">Очень высокая (тяжёлый физический труд)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goal">Ваша цель</Label>
                    <Select
                      value={formData.goal}
                      onValueChange={(value) => setFormData({ ...formData, goal: value })}
                    >
                      <SelectTrigger id="goal">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lose">Снижение веса</SelectItem>
                        <SelectItem value="maintain">Поддержание веса</SelectItem>
                        <SelectItem value="gain">Набор массы</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={calculateCalories}
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Рассчитать
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {result !== null ? (
                  <Card className="border-none shadow-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <CardContent className="p-8 text-center space-y-6">
                      <div>
                        <p className="text-muted-foreground mb-2">Ваша суточная норма:</p>
                        <p className="text-6xl font-bold text-primary">{result}</p>
                        <p className="text-2xl text-muted-foreground">калорий</p>
                      </div>
                      
                      <div className="space-y-4 pt-6 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Рекомендуемое распределение макронутриентов:</p>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold text-primary">{Math.round(result * 0.3 / 4)}г</p>
                              <p className="text-sm text-muted-foreground">Белки</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-accent">{Math.round(result * 0.25 / 9)}г</p>
                              <p className="text-sm text-muted-foreground">Жиры</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-secondary">{Math.round(result * 0.45 / 4)}г</p>
                              <p className="text-sm text-muted-foreground">Углеводы</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-none shadow-xl">
                    <CardContent className="p-8">
                      <h3 className="text-xl mb-4">Как это работает?</h3>
                      <p className="text-muted-foreground mb-4">
                        Калькулятор использует формулу Миффлина-Сан Жеора - один из самых точных методов расчёта базового обмена веществ (BMR).
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Затем мы умножаем BMR на коэффициент физической активности и корректируем результат в зависимости от вашей цели.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Важно:</strong> Это приблизительный расчёт. Для составления персонализированного плана питания рекомендуем проконсультироваться со специалистом.
                      </p>
                    </CardContent>
                  </Card>
                )}

                <Card className="border-none shadow-xl bg-muted/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-3">Нужна персональная программа?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Получите индивидуальный план питания с учётом всех ваших особенностей
                    </p>
                    <Button variant="default" size="lg" className="w-full" asChild>
                      <a href="/quiz">Пройти тест и подобрать программу</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calculator;
