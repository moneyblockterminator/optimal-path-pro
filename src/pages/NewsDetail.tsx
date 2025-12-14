import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Heart, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Extended news data with full content
const newsData = [
  {
    id: 1,
    title: "Новые исследования о пользе средиземноморской диеты",
    excerpt: "Последние научные данные подтверждают положительное влияние средиземноморской диеты на здоровье сердца и долголетие.",
    category: "Исследования",
    date: "2024-03-15",
    readTime: "5 мин",
    author: "Анна Петрова",
    authorRole: "Главный нутрициолог",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=800&fit=crop",
    content: `
      <h2>Преимущества средиземноморской диеты</h2>
      <p>Средиземноморская диета давно признана одной из самых полезных систем питания в мире. Новые исследования, проведенные международной группой ученых, подтвердили множество преимуществ этого подхода к питанию.</p>
      
      <h3>Основные выводы исследования</h3>
      <p>В ходе 10-летнего наблюдения за более чем 25,000 участниками было выявлено, что люди, придерживающиеся средиземноморской диеты, имеют:</p>
      <ul>
        <li>На 25% ниже риск развития сердечно-сосудистых заболеваний</li>
        <li>Улучшенные показатели холестерина и артериального давления</li>
        <li>Более низкий уровень воспалительных процессов в организме</li>
        <li>Повышенную продолжительность жизни</li>
      </ul>
      
      <blockquote>
        «Средиземноморская диета — это не просто система питания, это образ жизни, который помогает поддерживать здоровье на протяжении многих лет»
      </blockquote>
      
      <h3>Ключевые компоненты диеты</h3>
      <p>Средиземноморская диета включает:</p>
      <ul>
        <li>Оливковое масло как основной источник жиров</li>
        <li>Обилие овощей, фруктов и цельнозерновых продуктов</li>
        <li>Умеренное количество рыбы и морепродуктов</li>
        <li>Ограниченное потребление красного мяса</li>
        <li>Орехи и бобовые в качестве источника белка</li>
      </ul>
      
      <h3>Практические рекомендации</h3>
      <p>Чтобы начать придерживаться средиземноморской диеты, эксперты рекомендуют постепенно вводить изменения в рацион, начиная с замены сливочного масла на оливковое и увеличения количества овощей в ежедневном меню.</p>
    `
  },
  {
    id: 2,
    title: "Как правильно читать этикетки продуктов",
    excerpt: "Разбираемся в составах и маркировках, чтобы делать осознанный выбор в магазине.",
    category: "Полезные советы",
    date: "2024-03-12",
    readTime: "7 мин",
    author: "Мария Соколова",
    authorRole: "Эксперт по питанию",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop",
    content: `
      <h2>Руководство по чтению этикеток</h2>
      <p>Понимание информации на этикетках продуктов — важный навык для поддержания здорового образа жизни.</p>
      
      <h3>На что обращать внимание</h3>
      <ul>
        <li><strong>Список ингредиентов:</strong> Компоненты перечислены в порядке убывания по весу</li>
        <li><strong>Пищевая ценность:</strong> Калории, белки, жиры, углеводы на 100г продукта</li>
        <li><strong>Добавленные сахара:</strong> Могут скрываться под разными названиями</li>
        <li><strong>Срок годности:</strong> Разница между "употребить до" и "годен до"</li>
      </ul>
      
      <blockquote>
        «Осознанный выбор продуктов — первый шаг к здоровому питанию»
      </blockquote>
      
      <h3>Скрытые сахара</h3>
      <p>Сахар может быть указан как: сироп глюкозы, фруктоза, декстроза, мальтоза, патока и другие.</p>
      
      <h3>Трансжиры и насыщенные жиры</h3>
      <p>Важно ограничивать потребление насыщенных жиров и полностью избегать трансжиров для здоровья сердца.</p>
    `
  },
  {
    id: 3,
    title: "Сезонные продукты марта: что включить в рацион",
    excerpt: "Весенние овощи и фрукты, которые помогут восполнить запас витаминов после зимы.",
    category: "Сезонное питание",
    date: "2024-03-10",
    readTime: "4 мин",
    author: "Анна Петрова",
    authorRole: "Главный нутрициолог",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=800&fit=crop",
    content: `
      <h2>Весенние продукты для здоровья</h2>
      <p>Март — время обновления рациона свежими сезонными продуктами.</p>
      
      <h3>Овощи марта</h3>
      <ul>
        <li><strong>Шпинат:</strong> Богат железом и витаминами A, C, K</li>
        <li><strong>Зеленый лук:</strong> Источник витамина C и антиоксидантов</li>
        <li><strong>Редис:</strong> Низкокалорийный, содержит витамин C</li>
        <li><strong>Капуста:</strong> Много клетчатки и витаминов группы B</li>
      </ul>
      
      <h3>Как использовать</h3>
      <p>Добавляйте свежую зелень в салаты, смузи и гарниры. Молодые овощи содержат максимум питательных веществ.</p>
    `
  },
  {
    id: 4,
    title: "Мифы о белковых диетах: что правда, а что нет",
    excerpt: "Развенчиваем популярные заблуждения о высокобелковом питании.",
    category: "Разбор мифов",
    date: "2024-03-08",
    readTime: "6 мин",
    author: "Дмитрий Волков",
    authorRole: "Спортивный нутрициолог",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1200&h=800&fit=crop",
    content: `
      <h2>Разбор популярных мифов</h2>
      <p>Белковые диеты окружены множеством мифов и заблуждений.</p>
      
      <h3>Миф 1: Много белка вредит почкам</h3>
      <p>У здоровых людей умеренное повышение потребления белка безопасно. Проблемы могут возникнуть только при существующих заболеваниях почек.</p>
      
      <h3>Миф 2: Белок только из мяса</h3>
      <p>Отличные источники белка: бобовые, орехи, семена, молочные продукты, яйца.</p>
      
      <h3>Миф 3: Чем больше белка, тем лучше</h3>
      <p>Избыток белка не приносит дополнительной пользы. Рекомендуется 1.2-2г на кг веса тела для активных людей.</p>
    `
  },
  {
    id: 5,
    title: "Питание для улучшения качества сна",
    excerpt: "Какие продукты помогают засыпать быстрее и спать крепче.",
    category: "Здоровье",
    date: "2024-03-05",
    readTime: "5 мин",
    author: "Елена Морозова",
    authorRole: "Нутрициолог-консультант",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=1200&h=800&fit=crop",
    content: `
      <h2>Связь питания и сна</h2>
      <p>То, что мы едим, напрямую влияет на качество нашего сна.</p>
      
      <h3>Продукты, улучшающие сон</h3>
      <ul>
        <li><strong>Киви:</strong> Содержит серотонин и антиоксиданты</li>
        <li><strong>Миндаль:</strong> Источник мелатонина и магния</li>
        <li><strong>Ромашковый чай:</strong> Успокаивающее действие</li>
        <li><strong>Жирная рыба:</strong> Омега-3 и витамин D</li>
        <li><strong>Бананы:</strong> Магний и триптофан</li>
      </ul>
      
      <blockquote>
        «Правильный ужин — залог крепкого и восстанавливающего сна»
      </blockquote>
      
      <h3>Чего избегать перед сном</h3>
      <ul>
        <li>Кофеин за 6 часов до сна</li>
        <li>Обильная тяжелая пища</li>
        <li>Алкоголь (нарушает фазы сна)</li>
        <li>Острая и жирная еда</li>
      </ul>
      
      <h3>Оптимальное время ужина</h3>
      <p>Рекомендуется ужинать за 2-3 часа до сна, чтобы пищеварение не мешало засыпанию.</p>
    `
  },
  {
    id: 6,
    title: "Гидратация: сколько воды действительно нужно пить",
    excerpt: "Научный подход к вопросу о водном балансе организма.",
    category: "Исследования",
    date: "2024-03-01",
    readTime: "4 мин",
    author: "Анна Петрова",
    authorRole: "Главный нутрициолог",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&h=800&fit=crop",
    content: `
      <h2>Научный взгляд на гидратацию</h2>
      <p>Миф о "8 стаканах воды в день" не имеет научного обоснования.</p>
      
      <h3>Индивидуальные потребности</h3>
      <p>Количество необходимой воды зависит от:</p>
      <ul>
        <li>Веса тела и роста</li>
        <li>Уровня физической активности</li>
        <li>Климата и температуры</li>
        <li>Состояния здоровья</li>
      </ul>
      
      <h3>Признаки обезвоживания</h3>
      <ul>
        <li>Темная моча</li>
        <li>Сухость во рту</li>
        <li>Усталость и головные боли</li>
        <li>Головокружение</li>
      </ul>
      
      <h3>Практические рекомендации</h3>
      <p>Ориентируйтесь на чувство жажды и цвет мочи. Светло-желтый цвет указывает на хорошую гидратацию.</p>
    `
  }
];

// Related articles
const getRelatedArticles = (currentId: number, category: string) => {
  return newsData
    .filter(news => news.id !== currentId)
    .slice(0, 3);
};

const NewsDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  
  const article = newsData.find(news => news.id === Number(id));
  const relatedArticles = article ? getRelatedArticles(article.id, article.category) : [];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadProgress(progress);
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Ссылка скопирована",
        description: "Ссылка на статью скопирована в буфер обмена",
      });
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Убрано из избранного" : "Добавлено в избранное",
    });
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Удалено из закладок" : "Сохранено в закладки",
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6 text-foreground">Статья не найдена</h1>
            <p className="text-muted-foreground mb-8 text-lg">К сожалению, запрашиваемая статья не существует</p>
            <Button asChild size="lg">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Вернуться к новостям
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150"
        style={{ width: `${readProgress}%` }}
      />
      
      <Navbar />
      
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-slide-up">
              {/* Category Badge */}
              <Badge 
                className="mb-6 px-4 py-1.5 text-sm font-medium bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm"
              >
                {article.category}
              </Badge>
              
              {/* Title */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-foreground leading-tight">
                {article.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{article.author}</p>
                    <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString('ru-RU', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {article.readTime} чтения
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="absolute top-24 left-4 md:left-8">
          <Button 
            variant="outline" 
            size="sm" 
            asChild 
            className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
          >
            <Link to="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Excerpt/Lead */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 font-serif italic">
              {article.excerpt}
            </p>
            
            {/* Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-border" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground prose-strong:font-semibold
                prose-li:text-foreground/85 prose-li:mb-2
                prose-ul:my-6 prose-ul:pl-0
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
                prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-foreground/90
                prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Action Bar */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleLike}
                  className={`gap-2 ${isLiked ? 'text-red-500 border-red-200 bg-red-50 hover:bg-red-100' : ''}`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Понравилось' : 'Нравится'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleSave}
                  className={`gap-2 ${isSaved ? 'text-primary border-primary/30 bg-primary/5 hover:bg-primary/10' : ''}`}
                >
                  <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Сохранено' : 'Сохранить'}
                </Button>
              </div>
              <Button onClick={handleShare} size="lg" className="gap-2">
                <Share2 className="h-5 w-5" />
                Поделиться
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Читайте также
              </h2>
              <p className="text-muted-foreground">Другие статьи, которые могут вас заинтересовать</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <Link 
                  key={relatedArticle.id} 
                  to={`/news/${relatedArticle.id}`}
                  className="group block animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <Badge variant="secondary" className="mb-3">{relatedArticle.category}</Badge>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{relatedArticle.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Хотите персональные рекомендации?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Запишитесь на консультацию и получите индивидуальную программу питания
            </p>
            <Button size="lg" asChild className="px-8">
              <Link to="/contact">Записаться на консультацию</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300 animate-fade-in z-40"
          aria-label="Наверх"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default NewsDetail;