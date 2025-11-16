import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "Новые исследования о пользе средиземноморской диеты",
    excerpt: "Последние научные данные подтверждают положительное влияние средиземноморской диеты на здоровье сердца и долголетие.",
    category: "Исследования",
    date: "2024-03-15",
    readTime: "5 мин",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Как правильно читать этикетки продуктов",
    excerpt: "Разбираемся в составах и маркировках, чтобы делать осознанный выбор в магазине.",
    category: "Полезные советы",
    date: "2024-03-12",
    readTime: "7 мин",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Сезонные продукты марта: что включить в рацион",
    excerpt: "Весенние овощи и фрукты, которые помогут восполнить запас витаминов после зимы.",
    category: "Сезонное питание",
    date: "2024-03-10",
    readTime: "4 мин",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Мифы о белковых диетах: что правда, а что нет",
    excerpt: "Развенчиваем популярные заблуждения о высокобелковом питании.",
    category: "Разбор мифов",
    date: "2024-03-08",
    readTime: "6 мин",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Питание для улучшения качества сна",
    excerpt: "Какие продукты помогают засыпать быстрее и спать крепче.",
    category: "Здоровье",
    date: "2024-03-05",
    readTime: "5 мин",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Гидратация: сколько воды действительно нужно пить",
    excerpt: "Научный подход к вопросу о водном балансе организма.",
    category: "Исследования",
    date: "2024-03-01",
    readTime: "4 мин",
    image: "/placeholder.svg"
  }
];

const categories = ["Все", "Исследования", "Полезные советы", "Сезонное питание", "Разбор мифов", "Здоровье"];

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Новости и статьи
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Актуальная информация о питании, здоровье и научных исследованиях
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <Card key={news.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(news.date).toLocaleDateString('ru-RU')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {news.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{news.title}</CardTitle>
                  <CardDescription className="text-base">{news.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="group" asChild>
                    <Link to={`/news/${news.id}`}>
                      Читать далее
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">По вашему запросу ничего не найдено</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
