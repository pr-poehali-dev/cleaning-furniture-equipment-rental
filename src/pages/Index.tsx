import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">КлинМастер</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#rental"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Аренда
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  🏆 #1 во Владикавказе
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Химчистка мебели
                  <span className="text-blue-600"> с выездом</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Профессиональная чистка диванов, кресел и матрасов. Аренда
                  оборудования Karcher без залога.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на чистку
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
                >
                  <Icon name="Wrench" size={20} className="mr-2" />
                  Арендовать оборудование
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-gray-600">работаем без выходных</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    5 лет
                  </div>
                  <div className="text-gray-600">опыт работы</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-3xl blur-3xl"></div>
              <img
                src="/img/c5b6eeeb-1881-41ed-bd5d-0ab8f2d7481b.jpg"
                alt="Профессиональная химчистка мебели"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональная химчистка мебели с выездом на дом. Используем
              безопасные средства и современное оборудование.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sofa" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Чистка диванов</CardTitle>
                <CardDescription>
                  Глубокая очистка мягкой мебели
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Удаление пятен
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Дезинфекция
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Защитная обработка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bed" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Чистка матрасов</CardTitle>
                <CardDescription>
                  Гигиеническая обработка спального места
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Антибактериальная обработка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Удаление клещей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Устранение запахов
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Armchair" size={32} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl">Чистка кресел</CardTitle>
                <CardDescription>
                  Восстановление первоначального вида
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Любые материалы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Бережная чистка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Быстрое высыхание
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rental Section */}
      <section
        id="rental"
        className="py-20 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Аренда оборудования Karcher
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Арендуйте профессиональный пылесос для химчистки мягкой мебели.
                Без залога, с договором, всего 1000 рублей в сутки.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Без залога</h3>
                    <p className="text-gray-600">Только договор и паспорт</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      1000₽ в сутки
                    </h3>
                    <p className="text-gray-600">Выгодная цена аренды</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Профессиональное оборудование
                    </h3>
                    <p className="text-gray-600">Karcher - мировой лидер</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-8 bg-green-600 hover:bg-green-700 text-white"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать аренду
              </Button>
            </div>

            <div className="relative">
              <img
                src="/img/3b052513-b392-4260-85de-047178095ccd.jpg"
                alt="Пылесос Karcher для аренды"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">Что говорят о нашей работе</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Отличная работа! Диван как новый, все пятна исчезли. Приехали
                  вовремя, работали аккуратно."
                </p>
                <div className="font-semibold text-gray-900">Анна Петрова</div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Взял в аренду пылесос Karcher. Все честно - без залога, по
                  договору. Отличное оборудование!"
                </p>
                <div className="font-semibold text-gray-900">Михаил Иванов</div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Почистили детский матрас после 'аварии'. Результат превзошел
                  ожидания - ни запаха, ни пятен!"
                </p>
                <div className="font-semibold text-gray-900">
                  Екатерина Смирнова
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-blue-400" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-300">+7 (928) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-green-400" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-300">
                      г. Владикавказ, ул. Ленина, 1
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-purple-400" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-gray-300">
                      Круглосуточно, без выходных
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-yellow-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      info@klinmaster-vladikavkaz.ru
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Заказать услугу</h3>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Услуга
                      </label>
                      <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                        <option>Химчистка мебели</option>
                        <option>Аренда оборудования</option>
                      </select>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={24} className="text-blue-400" />
              <span className="font-bold">КлинМастер Владикавказ</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
