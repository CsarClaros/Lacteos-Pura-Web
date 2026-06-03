import { Component, signal } from '@angular/core';
import { CasosUso } from './components/casos-uso/casos-uso';
import { DiagramaClases } from './components/diagrama-clases/diagrama-clases';
import { DiagramaSecuencia } from './components/diagrama-secuencia/diagrama-secuencia';
import { DiagramaColaboracion } from './components/diagrama-colaboracion/diagrama-colaboracion';


import { LucideAngularModule } from 'lucide-angular';

import {
  Box,
  User,
  Workflow,
  GitBranch
} from 'lucide-angular';

@Component({
  selector: 'app-orientado-objetos',
  imports: [
    CasosUso,
    DiagramaClases,
    DiagramaSecuencia,
    DiagramaColaboracion,
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
      id: 'diagrama-colaboracion',
      label: 'Diagrama de Colaboración',
      icon: this.GitBranchIcon
    },
  ];

  changeTab(tab: string): void{
    this.activeTab.set(tab)
  }
}
