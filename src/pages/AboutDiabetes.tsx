import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const AboutDiabetes = () => {
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
              <Link to="/about-diabetes" className="text-primary font-bold">
                О диабете
              </Link>
              <Link to="/education" className="text-foreground hover:text-primary transition-colors font-medium">
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
              Всё о диабете
            </h1>
            <p className="text-xl text-muted-foreground">
              Комплексная информация о заболевании, его типах и методах контроля
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Droplet" className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Что такое диабет?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Сахарный диабет — это хроническое заболевание, которое возникает, когда поджелудочная железа 
                не вырабатывает достаточно инсулина или когда организм не может эффективно использовать 
                вырабатываемый им инсулин.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Инсулин — это гормон, регулирующий уровень глюкозы в крови. Гипергликемия, или повышенный 
                уровень глюкозы в крови, является общим результатом неконтролируемого диабета и со временем 
                приводит к серьёзному повреждению многих систем организма.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <Icon name="AlertCircle" className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Симптомы диабета</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="Check" className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Чрезмерная жажда и учащённое мочеиспускание</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Повышенное чувство голода</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Необъяснимая потеря веса</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Усталость и слабость</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Затуманенное зрение</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Медленное заживление ран</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Типы диабета</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">Тип 1</div>
                <CardTitle className="text-xl">Инсулинозависимый</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Развивается, когда иммунная система организма атакует клетки поджелудочной железы, 
                  производящие инсулин. Обычно начинается в детском или подростковом возрасте.
                </p>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Лечение:</p>
                  <p className="text-sm text-muted-foreground">Ежедневные инъекции инсулина, контроль питания, физическая активность</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Распространённость:</strong> 5-10% всех случаев диабета
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">Тип 2</div>
                <CardTitle className="text-xl">Инсулиннезависимый</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Возникает, когда организм становится устойчивым к инсулину или не производит его в 
                  достаточном количестве. Чаще развивается у взрослых, но встречается у детей.
                </p>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Лечение:</p>
                  <p className="text-sm text-muted-foreground">Диета, физические упражнения, таблетки, иногда инсулин</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Распространённость:</strong> 90-95% всех случаев диабета
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">ГСД</div>
                <CardTitle className="text-xl">Гестационный</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Развивается во время беременности у женщин, которые ранее не имели диабета. 
                  Обычно проходит после родов, но повышает риск диабета 2 типа.
                </p>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Лечение:</p>
                  <p className="text-sm text-muted-foreground">Контроль питания, физическая активность, мониторинг глюкозы</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Распространённость:</strong> 2-10% беременностей
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Icon name="Target" className="w-8 h-8 mr-3 text-primary" />
                Целевые показатели глюкозы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Время измерения</th>
                      <th className="text-left p-4 font-semibold">Целевой уровень (ммоль/л)</th>
                      <th className="text-left p-4 font-semibold">Интерпретация</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-secondary/30 transition-colors">
                      <td className="p-4">Натощак</td>
                      <td className="p-4 font-medium text-success">3.9 - 5.5</td>
                      <td className="p-4 text-muted-foreground">Норма для здорового человека</td>
                    </tr>
                    <tr className="border-b hover:bg-secondary/30 transition-colors">
                      <td className="p-4">Через 2 часа после еды</td>
                      <td className="p-4 font-medium text-success">до 7.8</td>
                      <td className="p-4 text-muted-foreground">Норма для здорового человека</td>
                    </tr>
                    <tr className="border-b hover:bg-secondary/30 transition-colors">
                      <td className="p-4">Преддиабет (натощак)</td>
                      <td className="p-4 font-medium text-warning">5.6 - 6.9</td>
                      <td className="p-4 text-muted-foreground">Требуется изменение образа жизни</td>
                    </tr>
                    <tr className="border-b hover:bg-secondary/30 transition-colors">
                      <td className="p-4">Диабет (натощак)</td>
                      <td className="p-4 font-medium text-destructive">≥ 7.0</td>
                      <td className="p-4 text-muted-foreground">Требуется лечение</td>
                    </tr>
                    <tr className="hover:bg-secondary/30 transition-colors">
                      <td className="p-4">HbA1c (гликированный гемоглобин)</td>
                      <td className="p-4 font-medium text-success">до 5.7%</td>
                      <td className="p-4 text-muted-foreground">Средний уровень за 3 месяца</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Осложнения диабета</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Eye" className="w-6 h-6 mr-2 text-destructive" />
                  Ретинопатия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Повреждение сетчатки глаза, может привести к потере зрения. Регулярные осмотры 
                  офтальмолога помогают выявить проблемы на ранней стадии.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Heart" className="w-6 h-6 mr-2 text-destructive" />
                  Сердечно-сосудистые заболевания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Повышенный риск инфаркта, инсульта и других заболеваний сердца. Контроль давления 
                  и холестерина критически важен.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Footprints" className="w-6 h-6 mr-2 text-destructive" />
                  Диабетическая стопа
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Повреждение нервов и сосудов ног, медленное заживление ран. Требует ежедневного 
                  осмотра стоп и правильного ухода.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Activity" className="w-6 h-6 mr-2 text-destructive" />
                  Нефропатия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Поражение почек, может привести к почечной недостаточности. Контроль глюкозы и 
                  давления замедляет развитие осложнения.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Card className="shadow-xl bg-primary/5">
          <CardContent className="p-8">
            <div className="text-center">
              <Icon name="AlertTriangle" className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Важно помнить</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                Диабет — это серьёзное заболевание, но при правильном контроле и лечении можно вести 
                полноценную активную жизнь. Регулярный мониторинг уровня глюкозы, правильное питание, 
                физическая активность и следование рекомендациям врача — ключ к успешному управлению диабетом.
              </p>
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" className="w-5 h-5 mr-2" />
                  Проверить уровень глюкозы
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

export default AboutDiabetes;
