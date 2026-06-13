import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  LucideAngularModule,
  ShieldCheck,
  LogIn,
  User,
  Lock,
  Building2
} from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    LucideAngularModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  readonly ShieldCheck = ShieldCheck;
  readonly LogIn = LogIn;
  readonly User = User;
  readonly Lock = Lock;
  readonly Building2 = Building2;

  usuario = '';
  contrasena = '';

  rolSeleccionado = 'Administrador';

  error = '';

  readonly roles = [
    'Administrador',
    'Operario',
    'Almacenero',
    'Vendedor'
  ];

  private readonly credenciales: Record<
    string,
    {
      pass: string;
      rol: string;
      nombre: string;
    }
  > = {
    admin01: {
      pass: '1234',
      rol: 'Administrador',
      nombre: 'Admin Sistema'
    },
    operario01: {
      pass: '1234',
      rol: 'Operario',
      nombre: 'Juan Quispe'
    },
    almacen01: {
      pass: '1234',
      rol: 'Almacenero',
      nombre: 'Roberto Alí'
    },
    ventas01: {
      pass: '1234',
      rol: 'Vendedor',
      nombre: 'Carmen Vda.'
    }
  };

  constructor(private router: Router) {}

  login(): void {

    this.error = '';

    if (!this.usuario.trim() || !this.contrasena.trim()) {
      this.error = 'Completa usuario y contraseña.';
      return;
    }

    const credencial = this.credenciales[this.usuario];

    if (!credencial || credencial.pass !== this.contrasena) {
      this.error = 'Usuario o contraseña incorrectos.';
      return;
    }

    if (credencial.rol !== this.rolSeleccionado) {
      this.error =
        `El usuario pertenece al rol "${credencial.rol}".`;
      return;
    }

    sessionStorage.setItem(
      'siga_user',
      JSON.stringify({
        nombre: credencial.nombre,
        usuario: this.usuario,
        rol: credencial.rol
      })
    );

    this.router.navigate(['/dashboard']);
  }

}