import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import SpecialistCard from "@/components/SpecialistCard";

const Index = () => {
  const featuredProjects = [
    {
      title: "Редизайн корпоративного сайта",
      description: "Требуется обновить дизайн и функциональность корпоративного сайта компании в сфере логистики. Необходима адаптивная верстка и оптимизация для мобильных устройств.",
      budget: "от 150 000 ₽",
      deadline: "30 дней",
      teamSize: 3,
      categories: ["Дизайн", "Веб-разработка"]
    },
    {
      title: "Мобильное приложение для фитнес-клуба",
      description: "Создание приложения для iOS и Android с функциями бронирования тренировок, отслеживания прогресса и интеграцией с фитнес-трекерами.",
      budget: "от 300 000 ₽",
      deadline: "60 дней",
      teamSize: 4,
      categories: ["Мобильная разработка", "UI/UX"]
    },
    {
      title: "SEO-оптимизация интернет-магазина",
      description: "Требуется провести комплексную SEO-оптимизацию интернет-магазина косметики для улучшения позиций в поисковой выдаче и увеличения органического трафика.",
      budget: "от 80 000 ₽",
      deadline: "45 дней",
      teamSize: 2,
      categories: ["SEO", "Маркетинг"]
    }
  ];

  const topSpecialists = [
    {
      name: "Анна Соколова",
      avatar: "/placeholder.svg",
      role: "UI/UX дизайнер",
      rating: 4.9,
      hourlyRate: "от 2 000 ₽/час",
      skills: ["Figma", "Sketch", "Prototyping", "UI Design"]
    },
    {
      name: "Максим Петров",
      avatar: "/placeholder.svg",
      role: "Frontend разработчик",
      rating: 4.8,
      hourlyRate: "от 2 500 ₽/час",
      skills: ["React", "TypeScript", "Next.js", "TailwindCSS"]
    },
    {
      name: "Елена Иванова",
      avatar: "/placeholder.svg",
      role: "Project Manager",
      rating: 4.7,
      hourlyRate: "от 3 000 ₽/час",
      skills: ["Agile", "Scrum", "Jira", "Team Lead"]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-light to-purple py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Найдите идеальную команду для вашего проекта
              </h1>
              <p className="mb-8 text-xl">
                Наша платформа соединяет заказчиков с профессионалами для реализации проектов любой сложности
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/create-brief">Создать бриф</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/find-specialists">Найти специалистов</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Как это работает</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple/10 text-2xl font-bold text-purple">1</div>
                <h3 className="mb-2 text-xl font-semibold">Создайте бриф</h3>
                <p className="text-muted-foreground">Опишите ваш проект, укажите бюджет и сроки выполнения</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple/10 text-2xl font-bold text-purple">2</div>
                <h3 className="mb-2 text-xl font-semibold">Выберите специалистов</h3>
                <p className="text-muted-foreground">Подберите подходящих исполнителей или готовую команду для проекта</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple/10 text-2xl font-bold text-purple">3</div>
                <h3 className="mb-2 text-xl font-semibold">Управляйте проектом</h3>
                <p className="text-muted-foreground">Контролируйте этапы работы, вносите изменения и комментируйте результаты</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Актуальные проекты</h2>
              <Button variant="outline" asChild>
                <Link to="/briefs">Смотреть все</Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Top Specialists */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Топ специалистов</h2>
              <Button variant="outline" asChild>
                <Link to="/specialists">Смотреть всех</Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topSpecialists.map((specialist, index) => (
                <SpecialistCard key={index} {...specialist} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">Готовы начать работу?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl">
              Присоединяйтесь к нашей платформе и находите лучших специалистов для ваших проектов или предлагайте свои услуги заказчикам.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">Зарегистрироваться</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link to="/how-it-works">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">ТимФорс</h3>
              <p className="text-sm text-muted-foreground">
                Платформа для создания и управления проектами с профессиональными специалистами
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Заказчикам</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/create-brief" className="text-muted-foreground hover:text-foreground">Создать бриф</Link></li>
                <li><Link to="/find-specialists" className="text-muted-foreground hover:text-foreground">Найти специалистов</Link></li>
                <li><Link to="/how-it-works" className="text-muted-foreground hover:text-foreground">Как это работает</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Исполнителям</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/find-projects" className="text-muted-foreground hover:text-foreground">Найти проекты</Link></li>
                <li><Link to="/create-profile" className="text-muted-foreground hover:text-foreground">Создать профиль</Link></li>
                <li><Link to="/create-team" className="text-muted-foreground hover:text-foreground">Создать команду</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Поддержка</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">Частые вопросы</Link></li>
                <li><Link to="/contacts" className="text-muted-foreground hover:text-foreground">Контакты</Link></li>
                <li><Link to="/support" className="text-muted-foreground hover:text-foreground">Техподдержка</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2023 ТимФорс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
