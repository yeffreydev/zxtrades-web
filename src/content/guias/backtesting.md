---
title: "Backtesting: valida tu estrategia antes de arriesgar"
description: Proceso paso a paso para probar un sistema con datos históricos y métricas que importan.
level: Avanzado
category: Estrategia
readingTime: 12
pubDate: 2026-05-20
---

Si no has probado tu estrategia en al menos 100 operaciones, no tienes una estrategia: tienes una opinión.

## Métricas clave

| Métrica | Qué mide |
| --- | --- |
| Win rate | % de operaciones ganadoras |
| R promedio | Ganancia media en múltiplos de riesgo |
| Expectativa | (WR × R ganador) − (LR × R perdedor) |
| Max drawdown | Peor caída desde un pico |

## Proceso

1. Define reglas 100% objetivas de entrada, stop y salida.
2. Elige un periodo que incluya tendencias y rangos.
3. Registra cada trade en una hoja sin saltarte ninguno.
4. Calcula expectativa. Si es negativa, vuelve al paso 1.
5. Haz forward testing en demo antes de ir a real.
