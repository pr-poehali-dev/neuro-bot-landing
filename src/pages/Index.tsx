import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in">
            <h1 className="font-heading text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Антошкабот.рф
            </h1>
            <h2 className="font-heading text-4xl font-semibold mb-8 text-gray-800">
              Умный помощник в Telegram
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Революционный ИИ-ассистент, который понимает контекст, генерирует контент 
              и автоматизирует рутинные задачи прямо в вашем любимом мессенджере
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
                <Icon name="MessageCircle" className="mr-2" />
                Начать в Telegram
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300">
                Посмотреть демо
              </Button>
            </div>

            <div className="animate-slide-up">
              <img 
                src="img/8883f4b6-9150-4d1e-b176-1d746e7ddc03.jpg" 
                alt="Нейро Бот" 
                className="mx-auto max-w-md rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              Возможности
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мощный функционал для решения любых задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "ИИ Генерация",
                description: "Создание текстов, изображений и идей с помощью передовых нейросетей"
              },
              {
                icon: "Zap",
                title: "Мгновенные ответы",
                description: "Быстрая обработка запросов и получение результатов за секунды"
              },
              {
                icon: "Users",
                title: "Командная работа",
                description: "Добавляйте бота в групповые чаты для коллективного использования"
              },
              {
                icon: "Settings",
                title: "Персонализация",
                description: "Настройка под ваши задачи и предпочтения"
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Защита данных и конфиденциальность переписки"
              },
              {
                icon: "Smartphone",
                title: "Доступность",
                description: "Работает на всех устройствах через Telegram"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50 group animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold mb-4">
              Преимущества
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Почему выбирают наш нейро-бот
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Экономия времени",
                  description: "Автоматизируйте рутинные задачи и фокусируйтесь на важном"
                },
                {
                  number: "02", 
                  title: "Высокое качество",
                  description: "Результаты на уровне профессиональных копирайтеров и дизайнеров"
                },
                {
                  number: "03",
                  title: "Простота использования",
                  description: "Интуитивный интерфейс, не требующий специальных навыков"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-6 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="text-4xl font-bold opacity-30 font-heading">
                    {benefit.number}
                  </div>
                  <div>
                    <h4 className="font-heading text-2xl font-semibold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 animate-fade-in">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4 bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    🚀
                  </div>
                  <h4 className="font-heading text-2xl font-semibold mb-4">
                    +500% продуктивности
                  </h4>
                  <p className="text-lg opacity-90">
                    Средний прирост эффективности наших пользователей
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              Тарифы
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий план
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Базовый",
                price: "₽990",
                period: "/мес",
                features: ["1000 запросов", "Базовые функции ИИ", "Поддержка в чате"]
              },
              {
                name: "Профи", 
                price: "₽2490",
                period: "/мес",
                features: ["10000 запросов", "Все функции ИИ", "Приоритетная поддержка", "Командная работа"],
                popular: true
              },
              {
                name: "Бизнес",
                price: "₽4990", 
                period: "/мес",
                features: ["Безлимитные запросы", "Персональная настройка", "Менеджер поддержки", "API доступ"]
              }
            ].map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 scale-105' 
                    : 'border border-gray-200 bg-white hover:border-purple-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold py-2">
                    Популярный
                  </div>
                )}
                
                <div className={plan.popular ? "mt-8" : ""}>
                  <h4 className="font-heading text-2xl font-bold text-gray-800 mb-4">
                    {plan.name}
                  </h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gray-800 hover:bg-gray-900'
                    } text-white font-semibold py-3 rounded-full transition-all duration-300`}
                  >
                    Выбрать план
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              Отзывы
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят наши пользователи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Маркетолог",
                text: "Невероятно удобно! Теперь создаю тексты для соцсетей в разы быстрее.",
                rating: 5
              },
              {
                name: "Михаил Сидоров", 
                role: "Предприниматель",
                text: "Бот помогает с бизнес-идеями и презентациями. Рекомендую всем!",
                rating: 5
              },
              {
                name: "Елена Иванова",
                role: "Дизайнер",
                text: "Отличный помощник для мозгового штурма и генерации креативных решений.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Icon key={starIndex} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <div className="text-gray-600 text-sm">{review.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h3 className="font-heading text-4xl font-bold mb-6">
            Готовы начать?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже используют наш нейро-бот
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Icon name="MessageCircle" className="mr-2" />
            Запустить бота сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="font-heading text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Антошкабот.рф
          </div>
          <p className="text-gray-400 mb-6">
            Умный помощник для современного мира
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="MessageCircle" size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            <Icon name="Mail" size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            <Icon name="Phone" size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;