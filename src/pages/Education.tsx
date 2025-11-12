import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Activity" className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">ГлюкоКонтроль</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </Link>
              <Link to="/about-diabetes" className="text-foreground hover:text-primary transition-colors font-medium">
                О диабете
              </Link>
              <Link to="/education" className="text-primary font-bold">
                Обучение
              </Link>
              <Link to="/articles" className="text-foreground hover:text-primary transition-colors font-medium">
                Статьи
              </Link>
            </nav>
            <Button>
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
              Обучение и образование
            </h1>
            <p className="text-xl text-muted-foreground">
              Всё, что нужно знать для успешного управления диабетом
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Tabs defaultValue="basics" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="basics">Основы</TabsTrigger>
            <TabsTrigger value="nutrition">Питание</TabsTrigger>
            <TabsTrigger value="lifestyle">Образ жизни</TabsTrigger>
            <TabsTrigger value="monitoring">Мониторинг</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <Icon name="BookOpen" className="w-8 h-8 mr-3 text-primary" />
                  Основы управления диабетом
                </CardTitle>
                <CardDescription className="text-base">
                  Фундаментальные знания для каждого пациента с диабетом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center">
                        <Icon name="Droplet" className="w-5 h-5 mr-2 text-primary" />
                        Что такое инсулин и как он работает?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-3 pt-4">
                      <p>
                        Инсулин — это гормон, который вырабатывается бета-клетками поджелудочной железы. 
                        Его основная функция — помогать глюкозе из крови проникать в клетки организма, 
                        где она используется как источник энергии.
                      </p>
                      <p>
                        При диабете 1 типа организм не производит инсулин, поэтому требуются ежедневные инъекции. 
                        При диабете 2 типа организм либо не вырабатывает достаточно инсулина, либо клетки 
                        становятся резистентными к нему.
                      </p>
                      <div className="p-4 bg-primary/5 rounded-lg mt-4">
                        <p className="font-medium mb-2">Типы инсулина:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Ультракороткий (действует через 10-15 минут)</li>
                          <li>Короткий (через 30 минут)</li>
                          <li>Средней продолжительности (через 1-2 часа)</li>
                          <li>Длительного действия (через 1-2 часа, работает до 24 часов)</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center">
                        <Icon name="Target" className="w-5 h-5 mr-2 text-primary" />
                        Как правильно измерять уровень глюкозы?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-3 pt-4">
                      <p className="font-medium">Пошаговая инструкция:</p>
                      <ol className="list-decimal list-inside space-y-2 ml-2">
                        <li>Вымойте руки тёплой водой с мылом и высушите</li>
                        <li>Подготовьте глюкометр и тест-полоску</li>
                        <li>Проколите боковую поверхность подушечки пальца ланцетом</li>
                        <li>Выдавите небольшую каплю крови</li>
                        <li>Приложите тест-полоску к капле крови</li>
                        <li>Дождитесь результата (обычно 5-10 секунд)</li>
                        <li>Запишите результат в дневник</li>
                      </ol>
                      <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg mt-4">
                        <p className="font-medium mb-2 flex items-center">
                          <Icon name="AlertTriangle" className="w-4 h-4 mr-2 text-warning" />
                          Важные правила:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Не используйте спирт для дезинфекции — он искажает результаты</li>
                          <li>Меняйте ланцеты после каждого использования</li>
                          <li>Чередуйте пальцы для прокола</li>
                          <li>Храните тест-полоски в закрытой упаковке</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center">
                        <Icon name="Clock" className="w-5 h-5 mr-2 text-primary" />
                        Когда нужно измерять глюкозу?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-3 pt-4">
                      <p>
                        Частота измерений зависит от типа диабета и назначенного лечения. 
                        Обсудите индивидуальный график с вашим врачом.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <p className="font-medium mb-2">Диабет 1 типа:</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Перед каждым приёмом пищи</li>
                            <li>Через 2 часа после еды</li>
                            <li>Перед сном</li>
                            <li>Перед физической нагрузкой</li>
                            <li>При плохом самочувствии</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <p className="font-medium mb-2">Диабет 2 типа:</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Натощак утром</li>
                            <li>Перед ужином</li>
                            <li>Иногда через 2 часа после еды</li>
                            <li>По рекомендации врача</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center">
                        <Icon name="AlertCircle" className="w-5 h-5 mr-2 text-primary" />
                        Гипогликемия: симптомы и помощь
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-3 pt-4">
                      <p>
                        Гипогликемия — опасное состояние, когда уровень глюкозы падает ниже 3.9 ммоль/л. 
                        Важно быстро распознать симптомы и принять меры.
                      </p>
                      <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                        <p className="font-medium mb-2">Симптомы:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Дрожь, потливость</li>
                          <li>Учащённое сердцебиение</li>
                          <li>Голод, тошнота</li>
                          <li>Раздражительность, тревога</li>
                          <li>Слабость, головокружение</li>
                          <li>Спутанность сознания</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
                        <p className="font-medium mb-2">Первая помощь (правило 15/15):</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Съешьте 15 г быстрых углеводов (3-4 кусочка сахара, 150 мл сока)</li>
                          <li>Подождите 15 минут</li>
                          <li>Измерьте глюкозу снова</li>
                          <li>Если уровень всё ещё низкий — повторите</li>
                          <li>После нормализации съешьте сложные углеводы (хлеб, печенье)</li>
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <Icon name="Apple" className="w-8 h-8 mr-3 text-primary" />
                  Питание при диабете
                </CardTitle>
                <CardDescription className="text-base">
                  Правильное питание — основа успешного контроля диабета
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Принципы здорового питания</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-success/5 border-success/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center text-success">
                          <Icon name="Check" className="w-5 h-5 mr-2" />
                          Рекомендуется
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-success" />
                            <span>Овощи (некрахмалистые): брокколи, шпинат, помидоры, огурцы</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-success" />
                            <span>Цельнозерновые: гречка, овсянка, киноа, бурый рис</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-success" />
                            <span>Белки: рыба, курица, индейка, бобовые, тофу</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-success" />
                            <span>Полезные жиры: авокадо, орехи, оливковое масло</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-success" />
                            <span>Ягоды с низким ГИ: черника, малина, клубника</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-destructive/5 border-destructive/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center text-destructive">
                          <Icon name="X" className="w-5 h-5 mr-2" />
                          Ограничить или исключить
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-destructive" />
                            <span>Сахар и сладости: конфеты, торты, печенье</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-destructive" />
                            <span>Белый хлеб, сдоба, белый рис</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-destructive" />
                            <span>Сладкие напитки: газировка, соки с сахаром</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-destructive" />
                            <span>Жирное мясо, колбасы, сосиски</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CircleDot" className="w-4 h-4 mr-2 mt-0.5 text-destructive" />
                            <span>Фастфуд и полуфабрикаты</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Метод тарелки</h3>
                  <p className="text-muted-foreground mb-4">
                    Простой способ составить сбалансированный приём пищи:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-4xl font-bold text-success mb-2">1/2</div>
                      <p className="font-medium">Некрахмалистые овощи</p>
                      <p className="text-sm text-muted-foreground">Листовая зелень, помидоры, огурцы</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-4xl font-bold text-primary mb-2">1/4</div>
                      <p className="font-medium">Белок</p>
                      <p className="text-sm text-muted-foreground">Рыба, курица, бобовые</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-4xl font-bold text-warning mb-2">1/4</div>
                      <p className="font-medium">Углеводы</p>
                      <p className="text-sm text-muted-foreground">Гречка, киноа, цельнозерновой хлеб</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Гликемический индекс (ГИ)</h3>
                  <p className="text-muted-foreground mb-4">
                    ГИ показывает, как быстро продукт повышает уровень глюкозы в крови. Выбирайте продукты 
                    с низким ГИ для стабильного уровня сахара.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-secondary">
                          <th className="p-3 text-left border">ГИ</th>
                          <th className="p-3 text-left border">Категория</th>
                          <th className="p-3 text-left border">Примеры продуктов</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-secondary/30">
                          <td className="p-3 border font-medium text-success">0-55</td>
                          <td className="p-3 border">Низкий</td>
                          <td className="p-3 border text-sm">Большинство овощей, бобовые, орехи, ягоды, яблоки</td>
                        </tr>
                        <tr className="hover:bg-secondary/30">
                          <td className="p-3 border font-medium text-warning">56-69</td>
                          <td className="p-3 border">Средний</td>
                          <td className="p-3 border text-sm">Бананы, киви, ананас, изюм, овсянка</td>
                        </tr>
                        <tr className="hover:bg-secondary/30">
                          <td className="p-3 border font-medium text-destructive">70+</td>
                          <td className="p-3 border">Высокий</td>
                          <td className="p-3 border text-sm">Белый хлеб, картофель, арбуз, кукурузные хлопья</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lifestyle" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Dumbbell" className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Физическая активность</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Регулярные упражнения улучшают чувствительность к инсулину, помогают контролировать 
                    вес и снижают риск осложнений.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium mb-2">Рекомендации:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>150 минут умеренной активности в неделю</li>
                        <li>Или 75 минут интенсивной активности</li>
                        <li>Силовые упражнения 2-3 раза в неделю</li>
                        <li>Ежедневные прогулки по 30 минут</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
                      <p className="font-medium mb-2 flex items-center">
                        <Icon name="AlertTriangle" className="w-4 h-4 mr-2 text-warning" />
                        Важно:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Измеряйте глюкозу до и после тренировки. Имейте при себе быстрые углеводы 
                        на случай гипогликемии. Начинайте с лёгких нагрузок.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Moon" className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Здоровый сон</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Недостаток сна повышает уровень кортизола и может ухудшить контроль глюкозы. 
                    Качественный сон критически важен.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium mb-2">Рекомендации:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Спите 7-9 часов каждую ночь</li>
                        <li>Ложитесь и вставайте в одно время</li>
                        <li>Избегайте экранов за час до сна</li>
                        <li>Проветривайте спальню</li>
                        <li>Избегайте кофеина вечером</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Heart" className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Управление стрессом</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Стресс повышает уровень гормонов, которые могут увеличить глюкозу в крови. 
                    Важно научиться управлять стрессом.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium mb-2">Методы релаксации:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Дыхательные упражнения</li>
                        <li>Медитация и йога</li>
                        <li>Хобби и творчество</li>
                        <li>Общение с близкими</li>
                        <li>Прогулки на природе</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Users" className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Социальная поддержка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Поддержка семьи, друзей и других людей с диабетом помогает справляться 
                    с ежедневными задачами управления заболеванием.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium mb-2">Где найти поддержку:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Группы поддержки для людей с диабетом</li>
                        <li>Онлайн-сообщества и форумы</li>
                        <li>Обучающие программы в клиниках</li>
                        <li>Психологическая помощь</li>
                        <li>Общение с эндокринологом</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <Icon name="Gauge" className="w-8 h-8 mr-3 text-primary" />
                  Системы мониторинга глюкозы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="text-xl">Глюкометры</CardTitle>
                      <CardDescription>Традиционный метод</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                        <Icon name="Droplets" className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Измерение глюкозы в капле крови из пальца. Результат за 5-10 секунд.
                      </p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-success" />
                          Точность измерений
                        </p>
                        <p className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-success" />
                          Доступная цена
                        </p>
                        <p className="flex items-center">
                          <Icon name="Minus" className="w-4 h-4 mr-2 text-muted-foreground" />
                          Требуется прокол пальца
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary">
                    <CardHeader>
                      <CardTitle className="text-xl">Системы НМГ</CardTitle>
                      <CardDescription>Непрерывный мониторинг</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                        <Icon name="Activity" className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Датчик на коже измеряет глюкозу каждые 5-15 минут, передаёт данные на устройство.
                      </p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-success" />
                          Без проколов пальца
                        </p>
                        <p className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-success" />
                          Тренды и графики
                        </p>
                        <p className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-success" />
                          Сигналы о гипо/гипер
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="text-xl">Флэш-мониторинг</CardTitle>
                      <CardDescription>Сканирование датчика</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                        <Icon name="Scan" className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Датчик на коже, данные считываются сканированием смартфоном или ридером.
                      </p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-success" />
                          Без проколов
                        </p>
                        <p className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-success" />
                          14 дней работы
                        </p>
                        <p className="flex items-center">
                          <Icon name="Minus" className="w-4 h-4 mr-2 text-muted-foreground" />
                          Нужно сканировать
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="p-6 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Ведение дневника</h3>
                  <p className="text-muted-foreground mb-4">
                    Записывайте результаты измерений, приёмы пищи, физическую активность и дозы лекарств. 
                    Это поможет вам и врачу лучше понимать паттерны глюкозы.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg">
                      <p className="font-medium mb-2">Что записывать:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Дата и время измерения</li>
                        <li>Уровень глюкозы</li>
                        <li>Приёмы пищи и углеводы</li>
                        <li>Дозы инсулина/лекарств</li>
                        <li>Физическую активность</li>
                        <li>Самочувствие</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <p className="font-medium mb-2">Преимущества:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Выявление паттернов</li>
                        <li>Корректировка лечения</li>
                        <li>Мотивация к контролю</li>
                        <li>Общение с врачом</li>
                        <li>Предотвращение осложнений</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="shadow-xl bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-8 text-center">
            <Icon name="GraduationCap" className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Продолжайте обучение</h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Знания — это сила в управлении диабетом. Регулярно посещайте эндокринолога, 
              участвуйте в обучающих программах и следите за новыми исследованиями.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/articles">
                <Button size="lg">
                  <Icon name="BookOpen" className="w-5 h-5 mr-2" />
                  Читать статьи
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" className="w-5 h-5 mr-2" />
                  Проверить глюкозу
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-foreground text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Icon name="Activity" className="w-6 h-6" />
                <span className="text-xl font-bold">ГлюкоКонтроль</span>
              </Link>
              <p className="text-white/70 text-sm">
                Профессиональный контроль диабета для здоровой жизни
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
                <li><Link to="/about-diabetes" className="hover:text-white transition-colors">О диабете</Link></li>
                <li><Link to="/education" className="hover:text-white transition-colors">Обучение</Link></li>
                <li><Link to="/articles" className="hover:text-white transition-colors">Статьи</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
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

export default Education;
