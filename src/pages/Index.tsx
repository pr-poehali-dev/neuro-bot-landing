import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🤖 Антошкабот.рф
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Возможности</a>
              <a href="#audience" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Для кого</a>
              <a href="#howto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Как начать</a>
              <a href="#seo" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">SEO</a>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full"
                onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Антошкабот
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 py-4 space-y-4">
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
                href="#seo" 
                className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SEO
              </a>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://t.me/iimoi_bot', '_blank');
                }}
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Антошкабот
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16">
        <div className="container mx-auto px-6 py-24">
          <div className="animate-fade-in max-w-6xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
              🤖 Антошка Бот: ваш персональный нейросетевой ассистент прямо в Telegram
            </h1>
            
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6 mb-12">
              <p>
                В эпоху искусственного интеллекта каждый стремится автоматизировать рутинные задачи, ускорить рабочие процессы и получать качественный контент без лишних усилий. Но где найти надёжный, простой и бесплатный инструмент, который не требует установки программ, регистрации на сомнительных сайтах или изучения сложных интерфейсов? Ответ — Антошка Бот, ваш умный нейросетевой помощник, доступный прямо в Telegram.
              </p>
              
              <p>
                Этот бот — не просто очередной чат-бот. Это полноценная нейросеть в Telegram, способная генерировать тексты, изображения и даже видео по вашему запросу. Независимо от того, являетесь ли вы блогером, копирайтером, маркетологом, студентом или предпринимателем, Антошка станет вашим незаменимым союзником в создании контента.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
                onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" />
                Начать использовать Антошкабот
              </Button>
            </div>

            <div className="animate-slide-up text-center">
              <img 
                src="img/8883f4b6-9150-4d1e-b176-1d746e7ddc03.jpg" 
                alt="Антошка Бот" 
                className="mx-auto max-w-md rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-16 text-center">
            💡 Почему именно Антошка Бот?
          </h2>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Feature 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl">
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                1. Полная интеграция в Telegram — никаких лишних действий
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Большинство нейросетевых сервисов требуют открытия браузера, авторизации, оплаты подписки или даже установки приложений. С Антошкой всё иначе. Достаточно найти бота в Telegram, начать диалог — и вы уже создаёте контент. Никаких паролей, email'ов, SMS-подтверждений. Просто введите команду — и получите результат за секунды.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl">
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                2. Генерация текста любого типа и стиля
              </h3>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  Нужен бот для генерации текста в Telegram, который пишет быстро, грамотно и по делу? Хотите создать текст нейросетью бесплатно, не переходя на сторонние сайты и не вводя данные карты? Или, может, вы ищете чат бот нейросеть для копирайтинга, способный писать продающие описания, статьи и посты в стиле вашего бренда?
                </p>
                
                <p>Антошка справится с любым запросом. Бот использует современные языковые модели, обученные на миллионах текстов, что позволяет ему:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Писать в разных тонах: от официального до дружелюбного;</li>
                  <li>Адаптировать стиль под целевую аудиторию;</li>
                  <li>Генерировать SEO-тексты с естественным вхождением ключевых слов;</li>
                  <li>Переписывать, сокращать или расширять уже существующий контент.</li>
                </ul>
                
                <p>
                  Просто напишите: «Напиши пост про утреннюю рутину для Instagram» — и получите готовый, структурированный и визуально приятный текст с эмодзи и хештегами.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl">
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                3. Создание изображений по текстовому описанию
              </h3>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>Хотите создать фото нейросетью, не имея навыков дизайнера? Просто опишите, что вы хотите увидеть — и нейросеть сгенерирует уникальное изображение. Это может быть:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Обложка для поста в соцсетях;</li>
                  <li>Иллюстрация к статье;</li>
                  <li>Концепт-арт для проекта;</li>
                  <li>Фон для презентации;</li>
                  <li>Даже портрет в стиле ван Гога или киберпанк!</li>
                </ul>
                
                <p>
                  Нет необходимости искать стоки или платить иллюстратору. Всё, что нужно — это чёткое описание. Например: «Создай фото уютного кафе в Париже под дождём, акварельный стиль» — и через несколько секунд вы получите готовое изображение.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-3xl">
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                4. Генерация видео из текста и изображений
              </h3>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>Мечтаете сделать видео из текста, но не умеете монтировать? Антошка умеет превращать ваши идеи в короткие, динамичные ролики — идеально для Reels, TikTok или сторис. Вы можете:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Преобразовать текст в видео с озвучкой;</li>
                  <li>Добавить анимацию к сгенерированному изображению;</li>
                  <li>Создать слайд-шоу с музыкой и плавными переходами.</li>
                </ul>
                
                <p>
                  Достаточно написать: «Сделай видео из этого текста с фоновой музыкой» — и бот соберёт всё за вас. Это особенно ценно для тех, кто хочет регулярно публиковать визуальный контент, но не располагает временем на монтаж.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="text-center bg-gradient-to-r from-indigo-50 to-cyan-50 p-12 rounded-3xl">
              <div className="text-6xl mb-4">🆓</div>
              <h3 className="font-heading text-3xl font-bold text-gray-800 mb-4">
                5. Бесплатно и без ограничений (на старте)
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Многие сервисы сразу предлагают платную подписку. Антошка же даёт вам бесплатный доступ к базовым функциям. Вы можете генерировать тексты, изображения и даже короткие видео без оплаты — идеально для тестирования и повседневного использования. При необходимости доступны премиум-функции, но даже в бесплатной версии бот остаётся мощным инструментом.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold mb-16 text-center">
            🎯 Для кого создан Антошка Бот?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-lg border-0 text-white hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="PenTool" size={28} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-center">
                ✍️ Копирайтеры и контент-мейкеры
              </h3>
              <p className="opacity-90 leading-relaxed text-center">
                Устали от творческого кризиса? Антошка подскажет идеи, напишет черновик, переформулирует текст или создаст заголовки. Это не замена вам — это ваш ускоритель.
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-lg border-0 text-white hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Smartphone" size={28} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-center">
                📱 Блогеры и SMM-специалисты
              </h3>
              <p className="opacity-90 leading-relaxed text-center">
                Нужны ежедневные посты, сторис, описания? Бот генерирует контент под ваш стиль, добавляет эмодзи, хештеги и даже предлагает визуал.
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-lg border-0 text-white hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Building2" size={28} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-center">
                🏢 Предприниматели и владельцы бизнеса
              </h3>
              <p className="opacity-90 leading-relaxed text-center">
                Создавайте описания товаров, email-рассылки, рекламные тексты, лендинги — всё это без найма копирайтера. Экономия времени и бюджета.
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-lg border-0 text-white hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="GraduationCap" size={28} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-center">
                🎓 Студенты и преподаватели
              </h3>
              <p className="opacity-90 leading-relaxed text-center">
                Рефераты, эссе, презентации, пояснения сложных тем — нейросеть помогает учиться и преподавать эффективнее.
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-lg border-0 text-white hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Brain" size={28} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-center">
                🧠 Любители экспериментов с ИИ
              </h3>
              <p className="opacity-90 leading-relaxed text-center">
                Хотите поиграть с генерацией арта, написать сценарий для короткометражки или создать персонажа для игры? Антошка — ваш цифровой соавтор.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section id="howto" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-16 text-center">
            🛠 Как начать работать с Антошкой?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 mb-12">
              <ol className="list-decimal list-inside space-y-4 ml-4">
                <li>Откройте Telegram.</li>
                <li>В поиске введите @AntoshkaBot (или название, указанное на вашем сайте).</li>
                <li>Нажмите «Начать».</li>
                <li>Введите команду или просто опишите, что вам нужно:</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-blue-600 font-semibold mb-2">📝 Текст:</div>
                <div className="text-gray-700">«Напиши пост про здоровое питание»</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-purple-600 font-semibold mb-2">🎨 Изображение:</div>
                <div className="text-gray-700">«Создай изображение кофе на рассвете в стиле акварели»</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-pink-600 font-semibold mb-2">🎥 Видео:</div>
                <div className="text-gray-700">«Сделай видео из этого текста с фоновой музыкой»</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8">
                Получите результат — и используйте его мгновенно! Интерфейс интуитивно понятен даже новичкам. Все функции доступны через простые текстовые команды или меню.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-8">
              🔒 Конфиденциальность и безопасность
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Мы понимаем, насколько важна приватность. Антошка не хранит ваши запросы дольше необходимого времени для обработки. Все данные шифруются, а генерация происходит на защищённых серверах. Вы полностью владеете созданным контентом — его можно свободно использовать в коммерческих целях.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-8 text-center">
              📈 Почему Антошка выделяется среди других нейроботов?
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 mb-12">
              <p>На рынке появляется всё больше Telegram-ботов с ИИ, но большинство из них:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>Ограничены только текстом;</li>
                <li>Требуют оплаты за каждую генерацию;</li>
                <li>Работают медленно;</li>
                <li>Имеют устаревшие модели ИИ;</li>
                <li>Не поддерживают мультимедиа.</li>
              </ul>
              
              <p>
                Антошка же — это комплексное решение. Он объединяет текст, графику и видео в одном месте, использует актуальные нейросетевые архитектуры (включая аналоги Stable Diffusion для изображений и TTS/STT для аудио), и при этом остаётся доступным каждому.
              </p>
              
              <p>
                Кроме того, бот постоянно обновляется: добавляются новые стили, голоса, форматы видео, поддержка разных языков и даже возможность настройки «личности» бота под ваш бренд.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section id="seo" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-8 text-center">
              🌐 SEO и нейросети: как Антошка помогает в продвижении
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 mb-12">
              <p>
                Если вы занимаетесь продвижением сайтов или ведёте блог, вы знаете, насколько важен качественный и релевантный контент. Антошка помогает:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>Генерировать SEO-оптимизированные статьи с правильной структурой (H1, H2, списки, ключевые слова);</li>
                <li>Создавать уникальные мета-описания и title'ы;</li>
                <li>Писать альт-тексты для изображений;</li>
                <li>Формировать контент-планы на месяц вперёд.</li>
              </ul>
              
              <p>
                При этом тексты проходят проверку на уникальность и естественность — никакой «тошноты» или переспама. Поисковые системы (Яндекс и Google) ценят именно такой контент.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-8 text-center">
              🚀 Будущее уже здесь
            </h2>
            
            <div className="text-lg leading-relaxed space-y-6 opacity-90 mb-12">
              <p>
                Искусственный интеллект перестал быть фантастикой. Он стал повседневным инструментом, как смартфон или ноутбук. Антошка Бот — это не просто «ещё один бот», а персональный ИИ-ассистент, который растёт вместе с вами, учится вашему стилю и помогает достигать целей быстрее.
              </p>
              
              <p>
                Не тратьте время на рутину. Доверьте создание контента нейросети, которая работает 24/7, не устаёт и всегда готова помочь.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-3" size={24} />
                Начать использовать Антошкабот
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-8 text-center">
              Заключение: ИИ — ваш союзник, а не конкурент
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 text-center">
              <p>
                Многие боятся, что нейросети заменят людей. Но на деле они усиливают наши способности. Антошка Бот — это не замена креативности, а её катализатор. Он берёт на себя техническую часть, чтобы вы могли сосредоточиться на главном — на идеях, стратегии и эмоциях.
              </p>
              
              <p className="text-xl font-semibold text-gray-800">
                Попробуйте Антошку сегодня — и вы удивитесь, сколько времени, сил и ресурсов можно сэкономить, имея под рукой умного, быстрого и бесплатного нейросетевого помощника прямо в Telegram.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-3" size={24} />
                Начать использовать Антошкабот
              </Button>
            </div>
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
            <div className="flex space-x-6">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
                onClick={() => window.open('https://t.me/iimoi_bot', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Telegram
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Антошкабот.рф. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}