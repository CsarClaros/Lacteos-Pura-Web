import { Component } from '@angular/core';
import {
  LucideAngularModule,
  GitBranch,
  Database,
  Layers,
  Maximize2,
  Download,
  BookOpen,
  Target,
  ClipboardList,
  CircleHelp
} from 'lucide-angular';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

interface DfdDiagram {
  id: string;
  title: string;
  level: string;
  description: string;
  color: string;
  image: string;
}

interface ErDiagram{
  id: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-analisis-estructurado',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './analisis-estructurado.html',
  styleUrl: './analisis-estructurado.css',
  animations: [

    trigger('modalFade', [

      transition(':enter', [

        style({
          opacity: 0,
          transform: 'translateY(20px) scale(0.95)'
        }),

        animate(
          '300ms ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0) scale(1)'
          })
        )

      ]),

      transition(':leave', [

        animate(
          '300ms ease-in',
          style({
            opacity: 0,
            transform: 'translateY(20px) scale(0.95)'
          })
        )

      ])

    ])

  ]
})
export class AnalisisEstructurado {

  readonly GitBranch = GitBranch;
  readonly BookOpen = BookOpen;
  readonly Database = Database;
  readonly Layers = Layers;
  readonly Maximize2 = Maximize2;
  readonly Download = Download;
  readonly Target = Target;
  readonly ClipboardList = ClipboardList;
  readonly CircleHelp = CircleHelp;

  activeSection = 'introduccion';

  sections = [
    {
      id: 'introduccion',
      title: 'Introducción',
      icon: this.BookOpen
    },
    {
      id: 'objetivo',
      title: 'Objetivo',
      icon: this.Target
    },
    {
      id: 'situacion',
      title: 'Situación',
      icon: this.CircleHelp
    },
    {
      id: 'modelo-ambiental',
      title: 'Modelo Ambiental',
      icon: this.ClipboardList
    },
    {
      id: 'modelo-comportamiento',
      title: 'Modelo de Comportamiento',
      icon: this.GitBranch
    },
    {
      id: 'entidad-relacion',
      title: 'Diagrama Entidad - Relación',
      icon: this.Database
    }
  ];




  selectedDiagram: DfdDiagram | ErDiagram | null = null;

  dfdDiagrams: DfdDiagram[] = [
    {
      id: 'contexto',
      title: 'Diagrama de Contexto',
      level: 'Nivel 0',
      description: 'Vista general del sistema y sus entidades externas',
      color: 'bg-blue-500',
      image: 'assets/images/diagrama_Contexto.webp'
    },
    {
      id: 'nivel1',
      title: 'DFD Nivel 1',
      level: 'Nivel 1',
      description: 'Descomposición de procesos principales del sistema',
      color: 'bg-purple-500',
      image: 'assets/images/DFD_nivel1.webp'
    },
    {
      id: 'produccion',
      title: 'DFD Nivel 2 - Proceso 1',
      level: 'Nivel 2',
      description: 'Gestión de producción',
      color: 'bg-green-500',
      image: 'assets/images/DFD_nivel2_p1.webp'
    },
    {
      id: 'inventarios',
      title: 'DFD Nivel 2 - Proceso 2',
      level: 'Nivel 2',
      description: 'Gestión de inventarios',
      color: 'bg-orange-500',
      image: 'assets/images/DFD_nivel2_p2.webp'
    },
    {
      id: 'ventas',
      title: 'DFD Nivel 2 - Proceso 3',
      level: 'Nivel 2',
      description: 'Gestión de ventas',
      color: 'bg-yellow-500',
      image: 'assets/images/DFD_nivel2_p3.webp'
    },
    {
      id: 'proved_compras',
      title: 'DFD Nivel 2 - Proceso 4',
      level: 'Nivel 2',
      description: 'Gestión proveedores y compras',
      color: 'bg-red-500',
      image: 'assets/images/DFD_nivel2_p4.webp'
    },
    {
      id: 'clientes',
      title: 'DFD Nivel 2 - Proceso 5',
      level: 'Nivel 2',
      description: 'Gestión clientes',
      color: 'bg-orange-500',
      image: 'assets/images/DFD_nivel2_p5.webp'
    },
    {
      id: 'operarios',
      title: 'DFD Nivel 2 - Proceso 6',
      level: 'Nivel 2',
      description: 'Gestión operarios',
      color: 'bg-indigo-500',
      image: 'assets/images/DFD_nivel2_p6.webp'
    },
    {
      id: 'reportes',
      title: 'DFD Nivel 2 - Proceso 7',
      level: 'Nivel 2',
      description: 'Gestión reportes',
      color: 'bg-blue-400',
      image: 'assets/images/DFD_nivel2_p7.webp'
    },
    {
      id: 'usuarios',
      title: 'DFD Nivel 2 - Proceso 8',
      level: 'Nivel 2',
      description: 'Gestión usuarios',
      color: 'bg-green-300',
      image: 'assets/images/DFD_nivel2_p8.webp'
    }
  ];


erDiagram: ErDiagram[] = [
  {
    id: 'entidad-relacion',
    title: 'Diagrama Entidad - Relacion',
    image: 'assets/images/Diagrama_ER.webp'
  },
]

  // selectDiagram(id: string): void {
  //   this.selectedDiagram = id;
  // }

  selectDiagram(id: string): void{
    const dfd = this.dfdDiagrams.find(d => d.id === id);

    if(dfd){
      this.selectedDiagram = dfd;
      this.modalAbierto = true;
      return;
    }

    const er = this.erDiagram.find(d => d.id === id);

    if(er){
      this.selectedDiagram = er;
      this.modalAbierto = true;
    }
  }

  flowGroups = [
    {
      dir: 'Entrada',
      items: [
        'Pedidos',
        'Materias Primas',
        'Datos Producción'
      ]
    },
    {
      dir: 'Salida',
      items: [
        'Productos',
        'Facturas',
        'Reportes'
      ]
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

modalAbierto = false;

abrirModal(): void {
  this.modalAbierto = true;
}

cerrarModal(): void {
  this.modalAbierto = false;
  this.selectedDiagram = null;
}

}