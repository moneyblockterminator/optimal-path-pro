import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 главных мифов о правильном питании",
      excerpt: "Разбираем самые распространённые заблуждения о здоровом питании и объясняем, как всё обстоит на самом деле.",
      category: "Питание",
      date: "15 марта 2024",
      readTime: "5 мин",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
    },
    {
      title: "Как рассчитать калории для похудения",
      excerpt: "Пошаговое руководство по расчёту калорийности рациона с учётом ваших целей и образа жизни.",
      category: "Похудение",
      date: "12 марта 2024",
      readTime: "7 мин",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=400&fit=crop",
    },
    {
      title: "Белки, жиры и углеводы: баланс макронутриентов",
      excerpt: "Всё, что нужно знать о макронутриентах и как правильно распределить их в своём рационе.",
      category: "Основы",
      date: "8 марта 2024",
      readTime: "6 мин",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop",
    },
    {
      title: "Питание для набора мышечной массы",
      excerpt: "Как правильно составить рацион для эффективного роста мышц и восстановления после тренировок.",
      category: "Спорт",
      date: "5 марта 2024",
      readTime: "8 мин",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop",
    },
    {
      title: "Витамины и минералы: что действительно нужно организму",
      excerpt: "Обзор важнейших микронутриентов и их роли в поддержании здоровья.",
      category: "Здоровье",
      date: "1 марта 2024",
      readTime: "10 мин",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&h=400&fit=crop",
    },
    {
      title: "Здоровые перекусы: 15 идей для работы и дома",
      excerpt: "Подборка полезных и вкусных перекусов, которые помогут поддерживать энергию в течение дня.",
      category: "Рецепты",
      date: "25 февраля 2024",
      readTime: "4 мин",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=400&fit=crop",
    },
  ];

  const categories = ["Все", "Питание", "Похудение", "Основы", "Спорт", "Здоровье", "Рецепты"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="mb-6">Блог о здоровом питании</h1>
              <p className="text-xl text-muted-foreground">
                Полезные статьи, советы и рецепты от профессионального нутрициолога
              </p>
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
                  variant={category === "Все" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <h3 className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
