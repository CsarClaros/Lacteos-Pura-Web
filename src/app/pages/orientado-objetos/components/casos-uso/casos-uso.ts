import { Component } from '@angular/core';

@Component({
  selector: 'app-casos-uso',
  imports: [],
  templateUrl: './casos-uso.html',
  styleUrl: './casos-uso.css',
})
export class CasosUso {

  casosUso = [
    {
      id: 'CU001',
      nombre: 'Registrar Pedido',
      actor: 'Cliente',
      descripcion: 'El cliente realiza un pedido de productos lácteos.',
      precondiciones: 'El cliente debe estar registrado en el sistema.',
      flujoNormal: [
        'Cliente inicia sesión en el sistema',
        'Cliente selecciona productos del catálogo',
        'Cliente especifica cantidades',
        'Sistema calcula total del pedido',
        'Cliente confirma el pedido',
        'Sistema genera número de pedido'
      ]
    },
    {
      id: 'CU002',
      nombre: 'Gestionar Producción',
      actor: 'Jefe de Producción',
      descripcion: 'Registrar la producción diaria de productos lácteos.',
      precondiciones: 'Debe haber materia prima disponible.',
      flujoNormal: [
        'Jefe de producción inicia registro',
        'Selecciona tipo de producto a producir',
        'Ingresa cantidad producida',
        'Especifica fecha y hora de producción',
        'Sistema actualiza inventario',
        'Sistema genera reporte de producción'
      ]
    },
    {
      id: 'CU003',
      nombre: 'Consultar Inventario',
      actor: 'Administrador',
      descripcion: 'Verificar stock disponible de productos.',
      precondiciones: 'Usuario debe tener permisos de consulta.',
      flujoNormal: [
        'Usuario accede al módulo de inventario',
        'Sistema muestra lista de productos',
        'Usuario filtra por categoría o producto',
        'Sistema muestra stock actual',
        'Sistema indica productos con stock bajo'
      ]
    }
  ];

}