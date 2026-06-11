import { Component } from '@angular/core';
import {
  LucideAngularModule,
  BookOpen,
  FileText,
  GitBranch,
  Box,
  Database,
  ChevronRight,
  Factory,
  Target,
  Workflow,
  ClipboardList,
  TriangleAlert,
  CircleHelp
} from 'lucide-angular';

@Component({
  selector: 'app-marco-teorico',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './marco-teorico.html',
  styleUrl: './marco-teorico.css'
})
export class MarcoTeorico {

  readonly BookOpen = BookOpen;
  readonly FileText = FileText;
  readonly GitBranch = GitBranch;
  readonly Box = Box;
  readonly Database = Database;
  readonly ChevronRight = ChevronRight;
  readonly Factory = Factory;
  readonly Target = Target;
  readonly Workflow = Workflow;
  readonly ClipboardList = ClipboardList;
  readonly TriangleAlert = TriangleAlert;
  readonly CircleHelp = CircleHelp;

  activeSection = 'introduccion';

  sections = [
    {
      id: 'introduccion',
      title: 'Introducción',
      icon: this.BookOpen
    },
    {
      id: 'antecedentes',
      title: 'Antecedentes',
      icon: this.Factory
    },
    {
      id: 'arbol-problemas',
      title: 'Árbol de Problemas',
      icon: this.GitBranch
    },
    {
      id: 'formulacion-problema',
      title: 'Formulación del Problema',
      icon: this.CircleHelp
    },
    {
      id: 'proposito-estudio',
      title: 'Proposito del Estudio',
      icon: this.Target
    },
    {
      id: 'metodologia',
      title: 'Metodología',
      icon: this.Workflow
    },
    {
      id: 'planificacion-actividades',
      title: 'Planificación de Actividades',
      icon: this.ClipboardList
    }
  ];

  fases = [
    {
      fase: 'Planificación',
      descripcion:
        'Identificación del problema, definición de objetivos y alcance del proyecto'
    },
    {
      fase: 'Análisis',
      descripcion:
        'Recopilación de información, estudio de procesos actuales y determinación de requerimientos'
    },
    {
      fase: 'Diseño',
      descripcion:
        'Modelado de la solución, diseño de interfaces y arquitectura del sistema'
    },
    {
      fase: 'Implementación',
      descripcion:
        'Desarrollo, pruebas y puesta en marcha del sistema'
    }
  ];

  conceptos = [
    {
      concepto: 'Clase',
      definicion:
        'Plantilla o molde que define la estructura y comportamiento de los objetos'
    },
    {
      concepto: 'Objeto',
      definicion:
        'Instancia específica de una clase con estado y comportamiento propios'
    },
    {
      concepto: 'Encapsulamiento',
      definicion:
        'Ocultamiento de los detalles internos de implementación del objeto'
    },
    {
      concepto: 'Herencia',
      definicion:
        'Mecanismo para crear nuevas clases basadas en clases existentes'
    },
    {
      concepto: 'Polimorfismo',
      definicion:
        'Capacidad de objetos de diferentes clases de responder al mismo mensaje'
    },
    {
      concepto: 'Abstracción',
      definicion:
        'Identificación de las características esenciales ignorando los detalles'
    }
  ];

  scrollToSection(id: string) {
    this.activeSection = id;

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}