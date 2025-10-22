import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      name: "Куриная грудка",
      calories: 165,
      protein: 31,
      fats: 3.6,
      carbs: 0,
      category: "Мясо",
      benefits: "Высокое содержание белка, низкое содержание жира",
    },
    {
      name: "Овсянка",
      calories: 389,
      protein: 16.9,
      fats: 6.9,
      carbs: 66.3,
      category: "Крупы",
      benefits: "Богата клетчаткой, медленные углеводы",
    },
    {
      name: "Лосось",
      calories: 206,
      protein: 22,
      fats: 13,
      carbs: 0,
      category: "Рыба",
      benefits: "Источник Омега-3, витамин D",
    },
    {
      name: "Брокколи",
      calories: 34,
      protein: 2.8,
      fats: 0.4,
      carbs: 7,
      category: "Овощи",
      benefits: "Витамины C, K, антиоксиданты",
    },
    {
      name: "Яйца",
      calories: 155,
      protein: 13,
      fats: 11,
      carbs: 1.1,
      category: "Яйца",
      benefits: "Полноценный белок, витамины группы B",
    },
    {
      name: "Авокадо",
      calories: 160,
      protein: 2,
      fats: 15,
      carbs: 9,
      category: "Фрукты",
      benefits: "Полезные жиры, калий, витамины",
    },
    {
      name: "Киноа",
      calories: 368,
      protein: 14.1,
      fats: 6.1,
      carbs: 64.2,
      category: "Крупы",
      benefits: "Полноценный белок, все аминокислоты",
    },
    {
      name: "Греческий йогурт",
      calories: 59,
      protein: 10,
      fats: 0.4,
      carbs: 3.6,
      category: "Молочные",
      benefits: "Пробиотики, высокое содержание белка",
    },
    {
      name: "Шпинат",
      calories: 23,
      protein: 2.9,
      fats: 0.4,
      carbs: 3.6,
      category: "Овощи",
      benefits: "Железо, витамины A, C, K",
    },
  ];

  const categories = ["Все", "Мясо", "Рыба", "Овощи", "Фрукты", "Крупы", "Молочные", "Яйца"];
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">База знаний о продуктах</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Полная информация о калорийности и пищевой ценности продуктов
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Поиск продукта..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Продукты не найдены. Попробуйте изменить параметры поиска.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <Badge variant="outline">{product.category}</Badge>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Калории</span>
                          <span className="font-semibold">{product.calories} ккал</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Белки</span>
                          <span className="font-semibold">{product.protein} г</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Жиры</span>
                          <span className="font-semibold">{product.fats} г</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Углеводы</span>
                          <span className="font-semibold">{product.carbs} г</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <strong>Преимущества:</strong> {product.benefits}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
