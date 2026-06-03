import { Component } from '@angular/core';
// import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  Chart,
  ChartConfiguration,
  ChartData,
  registerables
} from 'chart.js';

import {
  LucideAngularModule,
  Factory,
  Package,
  DollarSign,
  Truck,
  Home,
  Boxes,
  ShoppingCart,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  Download,
  TrendingDown,
  Calendar,
  BarChart3

} from 'lucide-angular';

import { AppBaseChartDirective } from './base-chart.directive';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    LucideAngularModule,
    AppBaseChartDirective
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  // ====================================
  // ICONOS
  // ====================================

  readonly Factory = Factory;
  readonly Package = Package;
  readonly DollarSign = DollarSign;
  readonly Truck = Truck;
  readonly Home = Home;
  readonly Boxes = Boxes;
  readonly ShoppingCart = ShoppingCart;
  readonly TrendingUp = TrendingUp;
  readonly Users = Users;
  readonly AlertCircle = AlertCircle;
  readonly CheckCircle = CheckCircle;
  readonly Clock = Clock;
  readonly Filter = Filter;
  readonly Download = Download;
  readonly TrendingDown = TrendingDown;
  readonly Calendar = Calendar;
  readonly BarChart3 = BarChart3;

  // ====================================
  // UI
  // ====================================

  sidebarOpen = true;
  activeView = 'overview';


  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  cambiarVista(vista: string): void {
    this.activeView = vista;
  }

  // ====================================
  // MENU
  // ====================================

  menuItems = [
    {
      id: 'overview',
      label: 'Resumen General',
      icon: Home
    },
    {
      id: 'produccion',
      label: 'Producción',
      icon: Factory
    },
    {
      id: 'inventario',
      label: 'Inventario',
      icon: Boxes
    },
    {
      id: 'ventas',
      label: 'Ventas',
      icon: ShoppingCart
    },
    {
      id: 'distribucion',
      label: 'Distribución',
      icon: Truck
    }
  ];

  // ====================================
  // KPI
  // ====================================

  kpis = [
    {
      title: 'Producción Hoy',
      value: '12,450 L',
      change: '+8.2%',
      positive: true,
      icon: this.Factory,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Inventario',
      value: '89%',
      change: '-3.1%',
      positive: false,
      icon: this.Package,
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Ventas del Mes',
      value: 'Bs 245,380',
      change: '+12.5%',
      positive: true,
      icon: this.DollarSign,
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Entregas Pendientes',
      value: '156',
      change: '+5.4%',
      positive: true,
      icon: this.Truck,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  // ====================================
  // PEDIDOS
  // ====================================

  pedidos = [
    {
      id: 'PED-001',
      cliente: 'Supermercado Central',
      producto: 'Leche Entera',
      cantidad: 500,
      estado: 'entregado',
      fecha: '2026-06-03'
    },
    {
      id: 'PED-002',
      cliente: 'Tienda Don Pedro',
      producto: 'Yogurt Natural',
      cantidad: 200,
      estado: 'proceso',
      fecha: '2026-06-03'
    },
    {
      id: 'PED-003',
      cliente: 'Distribuidora Norte',
      producto: 'Queso Fresco',
      cantidad: 150,
      estado: 'pendiente',
      fecha: '2026-06-02'
    },
    {
      id: 'PED-004',
      cliente: 'Minimarket Sur',
      producto: 'Mantequilla',
      cantidad: 80,
      estado: 'entregado',
      fecha: '2026-06-02'
    },
    {
      id: 'PED-005',
      cliente: 'Supermercado La Paz',
      producto: 'Leche Descremada',
      cantidad: 350,
      estado: 'proceso',
      fecha: '2026-06-01'
    }
  ];

  // ====================================
  // INVENTARIO
  // ====================================

  inventario = [
    {
      id: 1,
      producto: 'Leche Entera 1L',
      stock: 2450,
      minimo: 1000,
      estado: 'normal'
    },
    {
      id: 2,
      producto: 'Yogurt Natural 500ml',
      stock: 1850,
      minimo: 1500,
      estado: 'normal'
    },
    {
      id: 3,
      producto: 'Queso Fresco 500g',
      stock: 650,
      minimo: 800,
      estado: 'bajo'
    },
    {
      id: 4,
      producto: 'Mantequilla 250g',
      stock: 420,
      minimo: 500,
      estado: 'bajo'
    },
    {
      id: 5,
      producto: 'Leche Descremada 1L',
      stock: 1980,
      minimo: 1000,
      estado: 'normal'
    },
    {
      id: 6,
      producto: 'Yogurt Frutilla 200ml',
      stock: 2200,
      minimo: 1200,
      estado: 'normal'
    }
  ];

  // ====================================
  // RUTAS
  // ====================================

  rutas = [
    {
      ruta: 'Zona Centro',
      vehiculo: 'VEH-001',
      entregas: 15,
      progreso: 80,
      estado: 'activo'
    },
    {
      ruta: 'Zona Norte',
      vehiculo: 'VEH-003',
      entregas: 12,
      progreso: 60,
      estado: 'activo'
    },
    {
      ruta: 'Zona Sur',
      vehiculo: 'VEH-007',
      entregas: 18,
      progreso: 45,
      estado: 'activo'
    },
    {
      ruta: 'Zona Este',
      vehiculo: 'VEH-005',
      entregas: 10,
      progreso: 90,
      estado: 'activo'
    }
  ];


  estadoGeneral = [
    {
      titulo: 'Líneas Activas',
      valor: '8 / 8',
      estado: 'Operativo'
    },
    {
      titulo: 'Clientes Activos',
      valor: '245',
      estado: '+12 este mes'
    },
    {
      titulo: 'Control de Calidad',
      valor: '98.6%',
      estado: 'Excelente'
    }
  ];

  // ====================================
  // GRAFICO PRODUCCION
  // ====================================

  public produccionChartType = 'bar' as const;

  public produccionChartData: ChartData<'bar'> = {
    labels: [
      'Lun',
      'Mar',
      'Mié',
      'Jue',
      'Vie',
      'Sáb',
      'Dom'
    ],
    datasets: [
      {
        label: 'Leche (L)',
        data: [
          11200,
          12300,
          10800,
          13100,
          12450,
          9800,
          8500
        ],
        backgroundColor: '#3b82f6'
      },
      {
        label: 'Yogurt (L)',
        data: [
          3400,
          3800,
          3200,
          4100,
          3900,
          2800,
          2400
        ],
        backgroundColor: '#10b981'
      },
      {
        label: 'Queso (Kg)',
        data: [
          1800,
          2100,
          1900,
          2300,
          2200,
          1600,
          1400
        ],
        backgroundColor: '#f59e0b'
      }
    ]
  };

  public produccionChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },

    scales: {
      x: {
        grid: {
          color: '#e5e7eb'
        }
      },

      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e7eb'
        }
      }
    }
  };

  // ====================================
  // GRAFICO VENTAS
  // ====================================

  public ventasChartType = 'line' as const;

  public ventasChartData: ChartData<'line'> = {
    labels: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun'
    ],
    datasets: [
      {
        label: 'Ventas (Bs)',
        data: [
          185000,
          198000,
          212000,
          225000,
          238000,
          245380
        ],
        borderColor: '#8b5cf6',
        backgroundColor: '#8b5cf6',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#8b5cf6',
        fill: false
      }
    ]
  };

  public ventasChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
  
    scales: {
      x: {
        grid: {
          color: '#e5e7eb'
        }
      },
      y: {
        beginAtZero: false,
        grid: {
          color: '#e5e7eb'
        }
      }
    }
  };

  // ====================================
  // GRAFICO DISTRIBUCION
  // ====================================

  public distribucionChartType = 'pie' as const;

  public distribucionChartData: ChartData<'pie'> = {
    labels: [
      'Leche',
      'Yogurt',
      'Queso',
      'Mantequilla'
    ],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          '#3b82f6',
          '#10b981',
          '#f59e0b',
          '#8b5cf6'
        ]
      }
    ]
  };

  public distribucionChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  get tituloVista(): string {
    return (
      this.menuItems.find(
        item => item.id === this.activeView
      )?.label ?? 'Dashboard'
    );
  }

  public overviewProduccionData: ChartData<'line'> = {
    labels: [
      'Lun',
      'Mar',
      'Mié',
      'Jue',
      'Vie',
      'Sáb',
      'Dom'
    ],
    datasets: [
      {
        label: 'Leche',
        data: [
          11200,
          12300,
          10800,
          13100,
          12450,
          9800,
          8500
        ],
        fill: true,
        tension: 0.4,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.25)'
      }
    ]
  };

  public overviewProduccionType = 'line' as const;

  obtenerPorcentaje(
    stock: number,
    minimo: number
  ): number {

    return Math.round(
      Math.min(
        (stock / minimo) * 100,
        100
      )
    );

  }

}