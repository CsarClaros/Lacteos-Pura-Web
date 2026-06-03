import { Directive } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Directive({
  selector: 'canvas[baseChart]',
  standalone: true,
  exportAs: 'base-chart',
  inputs: [
    'data',
    'options',
    'type',
    'legend',
    'plugins',
    'labels',
    'datasets'
  ]
})
export class AppBaseChartDirective extends BaseChartDirective {}