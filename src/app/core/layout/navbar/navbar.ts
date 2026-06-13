import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  LucideAngularModule,
  Menu,
  X,
  Home,
  BookOpen,
  Network,
  Box,
  BarChart3,
  User
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  readonly Menu = Menu;
  readonly X = X;
  readonly Home = Home;
  readonly BookOpen = BookOpen;
  readonly Network = Network;
  readonly Box = Box;
  readonly BarChart3 = BarChart3;
  readonly User = User;

  isMenuOpen = false;
  navLinks = [
    {
      path: '/',
      label: 'Inicio',
      icon: Home
    },
    {
      path: '/marco-teorico',
      label: 'Marco Teórico',
      icon: BookOpen
    },
    {
      path: '/analisis-estructurado',
      label: 'Análisis Estructurado',
      icon: Network
    },
    {
      path: '/orientado-objetos',
      label: 'Orientado a Objetos',
      icon: Box
    },
    {
      path: '/login',
      label: 'Login',
      icon: User
    }
  ];

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen = false;
  }
}
