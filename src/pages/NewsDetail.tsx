import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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

const NewsDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const article = newsData.find(news => news.id === Number(id));

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

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Статья не найдена</h1>
            <Button asChild>
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
      <Navbar />
      
      {/* Article Header */}
      <article className="pt-24 pb-16 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к новостям
              </Link>
            </Button>
          </div>

          <div className="animate-fade-in">
            {/* Category and Metadata */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <Badge variant="secondary" className="text-sm">{article.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date(article.date).toLocaleDateString('ru-RU', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8">
              {article.excerpt}
            </p>

            {/* Share Button */}
            <div className="mb-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Поделиться
              </Button>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-12">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Понравилась статья? Поделитесь с друзьями!</p>
                <Button onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Поделиться
                </Button>
              </div>
            </div>

            {/* Back to News */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Вернуться к новостям
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsDetail;
