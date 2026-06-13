import { Component, signal } from '@angular/core';
import { CasosUso } from './components/casos-uso/casos-uso';
import { DiagramaClases } from './components/diagrama-clases/diagrama-clases';
import { DiagramaSecuencia } from './components/diagrama-secuencia/diagrama-secuencia';
import { DiagramaActividad } from './components/diagrama-actividad/diagrama-actividad';
import { DiagramaBpmn } from './components/diagrama-bpmn/diagrama-bpmn';
import { DiagramaComponentes } from './components/diagrama-componentes/diagrama-componentes';
import { DiagramaDespliegue } from './components/diagrama-despliegue/diagrama-despliegue';


import { LucideAngularModule } from 'lucide-angular';

import {
  Box,
  User,
  Workflow,
  GitBranch,
  RouteIcon,
  BoxesIcon,
  NetworkIcon,
  ServerIcon
} from 'lucide-angular';

@Component({
  selector: 'app-orientado-objetos',
  imports: [
    CasosUso,
    DiagramaClases,
    DiagramaSecuencia,
    DiagramaActividad,
    DiagramaBpmn,
    DiagramaComponentes,
    DiagramaDespliegue,
    LucideAngularModule
  ],
  templateUrl: './orientado-objetos.html',
  styleUrl: './orientado-objetos.css',
})
export class OrientadoObjetos {

  readonly BoxIcon = Box;
  readonly UserIcon = User;
  readonly WorkflowIcon = Workflow;
  readonly GitBranchIcon = GitBranch;
  readonly RouteIcon = RouteIcon;
  readonly BoxesIcon = BoxesIcon;
  readonly NetworkIcon = NetworkIcon;
  readonly ServerIcon = ServerIcon;

  activeTab= signal('casos-uso');

  tabs = [
    {
      id: 'casos-uso',
      label: 'Casos de Uso',
      icon: this.UserIcon
    },
    {
      id: 'diagrama-clases',
      label: 'Diagrama de Clases',
      icon: this.BoxIcon
    },
    {
      id: 'diagrama-secuencia',
      label: 'Diagrama de Secuencia',
      icon: this.WorkflowIcon
    },
    {
      id: 'diagrama-actividad',
      label: 'Diagrama de Actividad',
      icon: this.RouteIcon
    },
    {
      id: 'diagrama-componentes',
      label: 'Diagrama de Componentes',
      icon: this.BoxesIcon
    },
    {
      id: 'diagrama-despliegue',
      label: 'Diagrama de Despliegue',
      icon: this.ServerIcon
    },
    {
      id: 'diagrama-bpmn',
      label: 'Diagrama BPMN',
      icon: this.NetworkIcon
    }

  ];

  changeTab(tab: string): void{
    this.activeTab.set(tab)
  }
}
