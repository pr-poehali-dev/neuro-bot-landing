import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🤖 Антошкабот.рф
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Возможности</a>
              <a href="#audience" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Для кого</a>
              <a href="#howto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Как начать</a>
              <a href="#reviews" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Отзывы</a>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full"
                onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                @AntoshkaBot
              </Button>
            </div>

            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/50">
            <div className="px-6 py-4 space-y-4">
              <a 
                href="#features" 
                className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Возможности
              </a>
              <a 
                href="#audience" 
                className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Для кого
              </a>
              <a 
                href="#howto" 
                className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Как начать
              </a>
              <a 
                href="#reviews" 
                className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Отзывы
              </a>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://t.me/iimoi_bot', '_blank');
                }}
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                @AntoshkaBot
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in">
            <h1 className="font-heading text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              🤖 Антошкабот.рф
            </h1>
            <h2 className="font-heading text-4xl font-semibold mb-8 text-gray-800">
              Ваш персональный нейросетевой ассистент прямо в Telegram
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              В эпоху искусственного интеллекта каждый стремится автоматизировать рутинные задачи, ускорить рабочие процессы и получать качественный контент без лишних усилий. Антошка Бот — ваш умный нейросетевой помощник, доступный прямо в Telegram.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
                onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" />
                @AntoshkaBot
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300">
                Посмотреть примеры
              </Button>
            </div>

            <div className="animate-slide-up">
              <img 
                src="img/8883f4b6-9150-4d1e-b176-1d746e7ddc03.jpg" 
                alt="Антошка Бот" 
                className="mx-auto max-w-md rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Why Antoshka Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              💡 Почему именно Антошка Бот?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Этот бот — не просто очередной чат-бот. Это полноценная нейросеть в Telegram, способная генерировать тексты, изображения и даже видео по вашему запросу.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Smartphone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                      1. Полная интеграция в Telegram
                    </h4>
                    <p className="text-gray-600">
                      Никаких лишних действий. Достаточно найти бота в Telegram, начать диалог — и вы уже создаёте контент. Никаких паролей, email'ов, SMS-подтверждений.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                      2. Генерация текста любого типа и стиля
                    </h4>
                    <p className="text-gray-600">
                      От официального до дружелюбного тона, SEO-тексты с естественным вхождением ключевых слов, переписывание и расширение контента.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Image" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                      3. Создание изображений
                    </h4>
                    <p className="text-gray-600">
                      Обложки для постов, иллюстрации к статьям, концепт-арт для проекта, фоны для презентаций — всё по текстовому описанию.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-3xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Video" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                      4. Генерация видео
                    </h4>
                    <p className="text-gray-600">
                      Превращайте идеи в короткие динамичные ролики — идеально для Reels, TikTok или сторис. Видео с озвучкой, анимацией и музыкой.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 p-12 rounded-3xl">
            <div className="text-6xl mb-4">🆓</div>
            <h4 className="font-heading text-3xl font-bold text-gray-800 mb-4">
              5. Бесплатно и без ограничений
            </h4>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Антошка даёт вам бесплатный доступ к базовым функциям. Генерируйте тексты, изображения и короткие видео без оплаты — идеально для тестирования и повседневного использования.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold mb-4">
              🎯 Для кого создан Антошка Бот?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "PenTool",
                title: "✍️ Копирайтеры и контент-мейкеры",
                description: "Устали от творческого кризиса? Антошка подскажет идеи, напишет черновик, переформулирует текст или создаст заголовки."
              },
              {
                icon: "Smartphone",
                title: "📱 Блогеры и SMM-специалисты",
                description: "Нужны ежедневные посты, сторис, описания? Бот генерирует контент под ваш стиль, добавляет эмодзи и хештеги."
              },
              {
                icon: "Building2",
                title: "🏢 Предприниматели",
                description: "Создавайте описания товаров, email-рассылки, рекламные тексты, лендинги — всё без найма копирайтера."
              },
              {
                icon: "GraduationCap",
                title: "🎓 Студенты и преподаватели", 
                description: "Рефераты, эссе, презентации, пояснения сложных тем — нейросеть помогает учиться эффективнее."
              },
              {
                icon: "Brain",
                title: "🧠 Любители экспериментов с ИИ",
                description: "Поиграть с генерацией арта, написать сценарий или создать персонажа для игры? Антошка — ваш соавтор."
              },
              {
                icon: "Users",
                title: "👥 Команды и агентства",
                description: "Ускорьте рабочие процессы, создавайте больше качественного контента за меньшее время."
              }
            ].map((audience, index) => (
              <Card 
                key={index}
                className="p-8 bg-white/10 backdrop-blur-lg border-0 text-white hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={audience.icon} size={28} className="text-white" />
                </div>
                <h4 className="font-heading text-xl font-semibold mb-4">
                  {audience.title}
                </h4>
                <p className="opacity-90 leading-relaxed">
                  {audience.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section id="howto" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              🛠 Как начать работать с Антошкой?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Интерфейс интуитивно понятен даже новичкам. Все функции доступны через простые текстовые команды.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Откройте Telegram",
                description: "Запустите мессенджер на любом устройстве",
                icon: "MessageCircle"
              },
              {
                step: "2", 
                title: "Найдите @AntoshkaBot",
                description: "Введите в поиске имя бота и выберите его",
                icon: "Search"
              },
              {
                step: "3",
                title: "Нажмите «Начать»",
                description: "Активируйте бота одним нажатием кнопки",
                icon: "Play"
              },
              {
                step: "4",
                title: "Введите команду",
                description: "Опишите что нужно и получите результат за секунды",
                icon: "Zap"
              }
            ].map((step, index) => (
              <Card key={index} className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <div className="mb-4">
                  <Icon name={step.icon} size={32} className="text-purple-600 mx-auto" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-3xl">
            <h4 className="font-heading text-2xl font-bold text-gray-800 mb-6 text-center">
              Примеры команд:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-purple-600 font-semibold mb-2">💬 Текст:</div>
                <div className="text-gray-700">«Напиши пост про здоровое питание»</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-blue-600 font-semibold mb-2">🎨 Изображение:</div>
                <div className="text-gray-700">«Создай изображение кофе на рассвете в стиле акварели»</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-pink-600 font-semibold mb-2">🎥 Видео:</div>
                <div className="text-gray-700">«Сделай видео из этого текста с фоновой музыкой»</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              💬 Отзывы пользователей
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария",
                role: "SMM-менеджер",
                text: "Раньше тратила часы на написание постов. Теперь Антошка делает это за 2 минуты — и тексты даже лучше моих!",
                rating: 5
              },
              {
                name: "Алексей", 
                role: "Блогер",
                text: "Сгенерировал обложку для YouTube-видео по описанию \"космос и кофе\". Получилось шедеврально!",
                rating: 5
              },
              {
                name: "Игорь",
                role: "Предприниматель", 
                text: "Использую бота для создания описаний товаров в Wildberries. Продажи выросли на 30% за месяц!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Icon key={starIndex} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">{review.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="text-gray-600 text-sm">{review.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-4xl font-bold mb-8">
              🚀 Будущее уже здесь
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Искусственный интеллект перестал быть фантастикой. Он стал повседневным инструментом, как смартфон или ноутбук. Антошка Бот — это не просто «ещё один бот», а персональный ИИ-ассистент, который растёт вместе с вами, учится вашему стилю и помогает достигать целей быстрее.
            </p>
            <p className="text-xl mb-12 opacity-90">
              Не тратьте время на рутину. Доверьте создание контента нейросети, которая работает 24/7, не устаёт и всегда готова помочь.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-3" size={24} />
              Начать использовать @AntoshkaBot
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-heading text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                🤖 Антошкабот.рф
              </div>
              <p className="text-gray-400">
                Персональный нейросетевой ассистент в Telegram
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-4">
                <Icon name="MessageCircle" size={24} className="text-blue-400" />
                <span className="text-gray-300">@AntoshkaBot</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Shield" size={24} className="text-green-400" />
                <span className="text-gray-300">Конфиденциальность гарантирована</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Clock" size={24} className="text-purple-400" />
                <span className="text-gray-300">Работает 24/7</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Антошкабот.рф. Искусственный интеллект для повседневных задач
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;