import { Component } from '@angular/core';
import {
  LucideAngularModule,
  GitBranch,
  Database,
  Layers,
  Maximize2,
  Download
} from 'lucide-angular';

interface DfdDiagram {
  id: string;
  title: string;
  level: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-analisis-estructurado',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './analisis-estructurado.html',
  styleUrl: './analisis-estructurado.css'
})
export class AnalisisEstructurado {

  readonly GitBranch = GitBranch;
  readonly Database = Database;
  readonly Layers = Layers;
  readonly Maximize2 = Maximize2;
  readonly Download = Download;

  selectedDiagram: string | null = null;

  dfdDiagrams: DfdDiagram[] = [
    {
      id: 'contexto',
      title: 'Diagrama de Contexto',
      level: 'Nivel 0',
      description: 'Vista general del sistema y sus entidades externas',
      color: 'bg-blue-500'
    },
    {
      id: 'nivel1',
      title: 'DFD Nivel 1',
      level: 'Nivel 1',
      description: 'Descomposición de procesos principales del sistema',
      color: 'bg-purple-500'
    },
    {
      id: 'produccion',
      title: 'Proceso de Producción',
      level: 'Nivel 2',
      description: 'Detalle del flujo de datos en la gestión de producción',
      color: 'bg-green-500'
    },
    {
      id: 'ventas',
      title: 'Proceso de Ventas',
      level: 'Nivel 2',
      description: 'Detalle del flujo de datos en el proceso de ventas',
      color: 'bg-orange-500'
    }
  ];

  selectDiagram(id: string): void {
    this.selectedDiagram = id;
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
}