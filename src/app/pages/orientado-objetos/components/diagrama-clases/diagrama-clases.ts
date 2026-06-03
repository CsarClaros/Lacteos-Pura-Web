import { Component } from '@angular/core';

interface ClaseUml {
  nombre: string;
  atributos: string[];
  metodos: string[];
}

@Component({
  selector: 'app-diagrama-clases',
  imports: [],
  templateUrl: './diagrama-clases.html',
  styleUrl: './diagrama-clases.css',
})
export class DiagramaClases {
  clases: ClaseUml[] = [
    {
      nombre: 'Producto',
      atributos: [
        '- idProducto: int',
        '- nombre: string',
        '- tipo: string',
        '- precioUnitario: decimal'
      ],
      metodos: [
        '+ obtenerPrecio()',
        '+ actualizarStock()',
        '+ calcularTotal()'
      ]
    },
    {
      nombre: 'Pedido',
      atributos: [
        '- idPedido: int',
        '- fechaPedido: date',
        '- estado: string',
        '- total: decimal'
      ],
      metodos: [
        '+ registrarPedido()',
        '+ calcularTotal()',
        '+ cambiarEstado()'
      ]
    },
    {
      nombre: 'Cliente',
      atributos: [
        '- idCliente: int',
        '- nombre: string',
        '- nit: string',
        '- direccion: string'
      ],
      metodos: [
        '+ realizarPedido()',
        '+ consultarHistorial()',
        '+ actualizarDatos()'
      ]
    },
    {
      nombre: 'Inventario',
      atributos: [
        '- idInventario: int',
        '- cantidadStock: int',
        '- fechaActualizacion: date'
      ],
      metodos: [
        '+ actualizarStock()',
        '+ verificarDisponibilidad()'
      ]
    }
  ];
}