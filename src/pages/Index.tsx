import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
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
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Activity" className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">ГлюкоКонтроль</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Профессиональный анализ уровня глюкозы в крови
          </p>
        </div>

        <Card className="mb-6 shadow-lg border-2">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Icon name="Gauge" className="w-6 h-6 mr-2 text-primary" />
              Проверка уровня глюкозы
            </CardTitle>
            <CardDescription>
              Введите показатель глюкометра для получения рекомендаций
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
                  className="text-lg"
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={analyzeGlucose}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Icon name="Search" className="w-5 h-5 mr-2" />
                  Анализировать
                </Button>
              </div>
            </div>

            {result && (
              <div className="space-y-4">
                <div className="relative">
                  <Progress
                    value={getProgressValue()}
                    className="h-4"
                    style={{
                      background: 'hsl(var(--secondary))',
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 h-full rounded-full transition-all"
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
                    className="w-5 h-5"
                    style={{ color: result.color }}
                  />
                  <AlertDescription className="font-medium text-base">
                    <span style={{ color: result.color }}>{result.level} ммоль/л</span> —{' '}
                    {result.message}
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>

        {result && (
          <Card className="shadow-lg border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Icon name="Apple" className="w-6 h-6 mr-2 text-primary" />
                Рекомендации по питанию
              </CardTitle>
              <CardDescription>
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
                    className="flex items-start p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Icon
                      name={
                        result.level < 3.9
                          ? 'ArrowUp'
                          : result.level >= 7.0
                          ? 'ArrowDown'
                          : 'Check'
                      }
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                      style={{ color: result.color }}
                    />
                    <span className="text-sm leading-relaxed">{food}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Icon name="Info" className="w-5 h-5 mr-2 text-primary" />
              Справочная информация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border-2 border-success bg-success/5">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-success mr-2" />
                  <span className="font-semibold text-success">Норма</span>
                </div>
                <p className="text-sm text-muted-foreground">3.9 - 5.5 ммоль/л натощак</p>
              </div>

              <div className="p-4 rounded-lg border-2 border-warning bg-warning/5">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-warning mr-2" />
                  <span className="font-semibold text-warning">Предупреждение</span>
                </div>
                <p className="text-sm text-muted-foreground">5.6 - 6.9 ммоль/л</p>
              </div>

              <div className="p-4 rounded-lg border-2 border-destructive bg-destructive/5">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-destructive mr-2" />
                  <span className="font-semibold text-destructive">Критично</span>
                </div>
                <p className="text-sm text-muted-foreground">&lt; 3.9 или ≥ 7.0 ммоль/л</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <Icon name="Stethoscope" className="w-4 h-4 inline mr-1 text-primary" />
                <strong>Важно:</strong> Данный калькулятор предназначен только для
                информационных целей. Для точной диагностики и лечения обязательно
                обратитесь к врачу-эндокринологу.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
