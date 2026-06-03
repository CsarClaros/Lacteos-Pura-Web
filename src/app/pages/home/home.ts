import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  LucideAngularModule,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  GitBranch,
  Box,
  BarChart3,
  CheckCircle,
  Target,
  Zap
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  readonly ArrowRight = ArrowRight;
  readonly Award = Award;
  readonly Users = Users;
  readonly TrendingUp = TrendingUp;
  readonly BookOpen = BookOpen;
  readonly GitBranch = GitBranch;
  readonly Box = Box;
  readonly BarChart3 = BarChart3;
  readonly CheckCircle = CheckCircle;
  readonly Target = Target;
  readonly Zap = Zap;

  stats = [
    {
      icon: Award,
      label: 'Años de Experiencia',
      value: '39+'
    },
    {
      icon: Users,
      label: 'Empleados',
      value: '500+'
    },
    {
      icon: TrendingUp,
      label: 'Productos',
      value: '50+'
    }
  ];

  features = [
    {
      icon: CheckCircle,
      text: 'Calidad Certificada'
    },
    {
      icon: Target,
      text: 'Innovación Constante'
    },
    {
      icon: Zap,
      text: 'Distribución Eficiente'
    }
  ];

  methodology = [
    'Análisis de requerimientos empresariales',
    'Modelado de procesos de negocio',
    'Diseño de base de datos relacional',
    'Desarrollo de casos de uso',
    'Diagramas UML completos',
    'Prototipo funcional de dashboard'
  ];

  models = [
    {
      icon: GitBranch,
      title: 'Modelo Ambiental',
      description:
        'Análisis del contexto y entorno empresarial, identificando actores externos, flujos de información y límites del sistema.',
      link: '/analisis-estructurado',
      color: 'bg-blue-500'
    },
    {
      icon: GitBranch,
      title: 'Modelo de Comportamiento',
      description:
        'Diagramas de Flujo de Datos (DFD) que representan cómo se procesan y transforman los datos dentro del sistema.',
      link: '/analisis-estructurado',
      color: 'bg-purple-500'
    },
    {
      icon: Box,
      title: 'Orientado a Objetos',
      description:
        'Casos de uso, diagramas de clases, secuencia y colaboración siguiendo metodología UML para el diseño del software.',
      link: '/orientado-objetos',
      color: 'bg-green-500'
    }
  ];

  kpis = [
    {
      label: 'Producción Hoy',
      value: '12,450 L',
      color: 'bg-blue-500'
    },
    {
      label: 'Inventario',
      value: '89%',
      color: 'bg-green-500'
    },
    {
      label: 'Ventas Mes',
      value: 'Bs 245K',
      color: 'bg-purple-500'
    },
    {
      label: 'Entregas',
      value: '156',
      color: 'bg-orange-500'
    }
  ];

  chartBars = [60, 80, 45, 90, 70];
}