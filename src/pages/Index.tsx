import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [glucoseLevel, setGlucoseLevel] = useState<string>('');
  const [result, setResult] = useState<{
    level: number;
    status: 'normal' | 'warning' | 'critical';
    message: string;
    color: string;
    foods: string[];
  } | null>(null);

  const analyzeGlucose = () => {
    const level = parseFloat(glucoseLevel);
    
    if (isNaN(level) || level <= 0) {
      return;
    }

    let status: 'normal' | 'warning' | 'critical';
    let message: string;
    let color: string;
    let foods: string[] = [];

    if (level < 3.9) {
      status = 'critical';
      message = 'Критически низкий уровень глюкозы (гипогликемия)';
      color = 'hsl(0 84% 60%)';
      foods = [
        'Быстрые углеводы: мёд, фруктовый сок (150-200 мл)',
        'Сахар или глюкоза в таблетках (15-20 г)',
        'Сладкий чай или газировка',
        'Изюм или финики',
        'После нормализации: сложные углеводы (хлеб, каша)'
      ];
    } else if (level >= 3.9 && level <= 5.5) {
      status = 'normal';
      message = 'Нормальный уровень глюкозы натощак';
      color = 'hsl(142 71% 45%)';
      foods = [
        'Поддерживайте сбалансированное питание',
        'Овощи и зелень',
        'Цельнозерновые продукты',
        'Нежирные белки (рыба, курица, бобовые)',
        'Орехи и семена в умеренных количествах'
      ];
    } else if (level > 5.5 && level <= 6.9) {
      status = 'warning';
      message = 'Повышенный уровень глюкозы (преддиабет)';
      color = 'hsl(38 92% 50%)';
      foods = [
        'Снизить потребление: сладости, белый хлеб, картофель',
        'Увеличить: овощи, зелень, бобовые',
        'Цельнозерновые крупы (гречка, овсянка)',
        'Белковые продукты: рыба, курица, творог',
        'Пить больше воды, избегать сладких напитков'
      ];
    } else if (level >= 7.0 && level <= 10.0) {
      status = 'critical';
      message = 'Высокий уровень глюкозы (возможный диабет)';
      color = 'hsl(0 84% 60%)';
      foods = [
        'Срочно исключить: сахар, сладости, белый хлеб',
        'Листовые зелёные овощи (шпинат, капуста)',
        'Авокадо и орехи',
        'Бобовые и чечевица',
        'Рыба богатая омега-3',
        'Обратитесь к врачу для назначения лечения'
      ];
    } else {
      status = 'critical';
      message = 'Критически высокий уровень глюкозы';
      color = 'hsl(0 84% 60%)';
      foods = [
        '⚠️ НЕМЕДЛЕННО обратитесь к врачу!',
        'Пейте больше воды',
        'Не занимайтесь самолечением',
        'Возможно требуется экстренная помощь',
        'Следуйте рекомендациям врача'
      ];
    }

    setResult({ level, status, message, color, foods });
  };

  const getProgressValue = () => {
    if (!result) return 0;
    const normalized = Math.min((result.level / 15) * 100, 100);
    return normalized;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">ГлюкоКонтроль</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors font-medium">
                Калькулятор
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
                О диабете
              </a>
              <a href="#education" className="text-foreground hover:text-primary transition-colors font-medium">
                Обучение
              </a>
              <a href="#articles" className="text-foreground hover:text-primary transition-colors font-medium">
                Статьи
              </a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Контроль диабета начинается здесь
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональные инструменты для мониторинга уровня глюкозы и управления здоровьем
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calculator" className="w-5 h-5 mr-2" />
                Проверить уровень
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="BookOpen" className="w-5 h-5 mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <section id="calculator" className="mb-16">
          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-3xl">
                <Icon name="Gauge" className="w-8 h-8 mr-3 text-primary" />
                Проверка уровня глюкозы
              </CardTitle>
              <CardDescription className="text-base">
                Введите показатель глюкометра для получения персональных рекомендаций
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">
                    Уровень глюкозы (ммоль/л)
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    placeholder="Например: 5.2"
                    value={glucoseLevel}
                    onChange={(e) => setGlucoseLevel(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={analyzeGlucose}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 h-12"
                  >
                    <Icon name="Search" className="w-5 h-5 mr-2" />
                    Анализировать
                  </Button>
                </div>
              </div>

              {result && (
                <div className="space-y-4 animate-fade-in">
                  <div className="relative">
                    <Progress
                      value={getProgressValue()}
                      className="h-6"
                      style={{
                        background: 'hsl(var(--secondary))',
                      }}
                    />
                    <div
                      className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${getProgressValue()}%`,
                        backgroundColor: result.color,
                      }}
                    />
                  </div>

                  <Alert
                    className="border-2"
                    style={{
                      borderColor: result.color,
                      backgroundColor: `${result.color}15`,
                    }}
                  >
                    <Icon
                      name={
                        result.status === 'normal'
                          ? 'CheckCircle'
                          : result.status === 'warning'
                          ? 'AlertTriangle'
                          : 'AlertCircle'
                      }
                      className="w-6 h-6"
                      style={{ color: result.color }}
                    />
                    <AlertDescription className="font-medium text-lg">
                      <span style={{ color: result.color }} className="font-bold">{result.level} ммоль/л</span> — {result.message}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-xl border-2 mt-6 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl">
                  <Icon name="Apple" className="w-8 h-8 mr-3 text-primary" />
                  Рекомендации по питанию
                </CardTitle>
                <CardDescription className="text-base">
                  {result.status === 'critical' && result.level < 3.9
                    ? 'Продукты для повышения глюкозы'
                    : result.status === 'critical' && result.level >= 7.0
                    ? 'Продукты для снижения глюкозы'
                    : 'Рекомендации для поддержания нормы'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {result.foods.map((food, index) => (
                    <li
                      key={index}
                      className="flex items-start p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all hover:scale-[1.01]"
                    >
                      <Icon
                        name={
                          result.level < 3.9
                            ? 'ArrowUp'
                            : result.level >= 7.0
                            ? 'ArrowDown'
                            : 'Check'
                        }
                        className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                        style={{ color: result.color }}
                      />
                      <span className="text-base leading-relaxed">{food}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </section>

        <section id="products" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">О диабете и контроле глюкозы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Heart" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Что такое диабет?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Диабет — хроническое заболевание, при котором организм не может правильно регулировать уровень глюкозы в крови.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Target" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Целевые показатели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Нормальный уровень глюкозы натощак: 3.9-5.5 ммоль/л. После еды: до 7.8 ммоль/л через 2 часа.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Регулярный контроль</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ежедневный мониторинг глюкозы помогает предотвратить осложнения и поддерживать здоровье.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="education" className="mb-16">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Icon name="GraduationCap" className="w-8 h-8 mr-3 text-primary" />
                Образовательные материалы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basics">Основы</TabsTrigger>
                  <TabsTrigger value="nutrition">Питание</TabsTrigger>
                  <TabsTrigger value="lifestyle">Образ жизни</TabsTrigger>
                </TabsList>
                <TabsContent value="basics" className="space-y-4 mt-6">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="BookOpen" className="w-5 h-5 mr-2 text-primary" />
                      Типы диабета
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Диабет 1 типа — аутоиммунное заболевание, при котором поджелудочная железа не вырабатывает инсулин. 
                      Диабет 2 типа — организм не может эффективно использовать инсулин.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="Syringe" className="w-5 h-5 mr-2 text-primary" />
                      Методы контроля
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Глюкометры позволяют измерять уровень глюкозы в капле крови из пальца. 
                      Современные системы мониторинга обеспечивают непрерывный контроль 24/7.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="nutrition" className="space-y-4 mt-6">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="Salad" className="w-5 h-5 mr-2 text-primary" />
                      Правильное питание
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Выбирайте продукты с низким гликемическим индексом: овощи, цельнозерновые, нежирные белки. 
                      Избегайте быстрых углеводов и сладких напитков.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="Clock" className="w-5 h-5 mr-2 text-primary" />
                      Режим питания
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Регулярные приёмы пищи каждые 3-4 часа помогают поддерживать стабильный уровень глюкозы. 
                      Не пропускайте завтрак.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="lifestyle" className="space-y-4 mt-6">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="Dumbbell" className="w-5 h-5 mr-2 text-primary" />
                      Физическая активность
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Умеренные физические нагрузки 30 минут в день улучшают чувствительность к инсулину 
                      и помогают контролировать вес.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="Moon" className="w-5 h-5 mr-2 text-primary" />
                      Здоровый сон
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Недостаток сна повышает уровень гормонов стресса и может ухудшить контроль глюкозы. 
                      Спите 7-8 часов ежедневно.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section id="articles" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Полезные статьи</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="FileText" className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-xl">Гипогликемия: симптомы и первая помощь</CardTitle>
                <CardDescription>5 минут чтения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Узнайте, как распознать низкий уровень сахара и что делать в экстренной ситуации.
                </p>
                <Button variant="outline" className="w-full">
                  Читать статью
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-r from-success/20 to-success/10 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Utensils" className="w-16 h-16 text-success" />
                </div>
                <CardTitle className="text-xl">Диета при диабете: 10 правил</CardTitle>
                <CardDescription>7 минут чтения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Практические рекомендации по составлению здорового меню для контроля глюкозы.
                </p>
                <Button variant="outline" className="w-full">
                  Читать статью
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Card className="shadow-xl bg-gradient-to-r from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center justify-center text-center">
              <Icon name="Info" className="w-8 h-8 mr-3 text-primary" />
              Справочная информация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-lg border-2 border-success bg-white shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded-full bg-success mr-3" />
                  <span className="font-bold text-lg text-success">Норма</span>
                </div>
                <p className="text-muted-foreground text-lg">3.9 - 5.5 ммоль/л натощак</p>
              </div>

              <div className="p-6 rounded-lg border-2 border-warning bg-white shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded-full bg-warning mr-3" />
                  <span className="font-bold text-lg text-warning">Предупреждение</span>
                </div>
                <p className="text-muted-foreground text-lg">5.6 - 6.9 ммоль/л</p>
              </div>

              <div className="p-6 rounded-lg border-2 border-destructive bg-white shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded-full bg-destructive mr-3" />
                  <span className="font-bold text-lg text-destructive">Критично</span>
                </div>
                <p className="text-muted-foreground text-lg">&lt; 3.9 или ≥ 7.0 ммоль/л</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border-2 border-primary/20">
              <p className="text-muted-foreground leading-relaxed text-center">
                <Icon name="Stethoscope" className="w-5 h-5 inline mr-2 text-primary" />
                <strong>Важно:</strong> Данный калькулятор предназначен только для информационных целей. 
                Для точной диагностики и лечения обязательно обратитесь к врачу-эндокринологу.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-foreground text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Activity" className="w-6 h-6" />
                <span className="text-xl font-bold">ГлюкоКонтроль</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональный контроль диабета для здоровой жизни
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">О диабете</a></li>
                <li><a href="#education" className="hover:text-white transition-colors">Обучение</a></li>
                <li><a href="#articles" className="hover:text-white transition-colors">Статьи</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  8 (800) 555-35-35
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  info@glucocontrol.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            <p>© 2024 ГлюкоКонтроль. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
