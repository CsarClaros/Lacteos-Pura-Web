import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { AnalisisEstructurado } from './pages/analisis-estructurado/analisis-estructurado';
import { MarcoTeorico } from './pages/marco-teorico/marco-teorico';
import { OrientadoObjetos } from './pages/orientado-objetos/orientado-objetos';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'marco-teorico',
        component: MarcoTeorico
    },
    {
        path: 'orientado-objetos',
        component: OrientadoObjetos
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'analisis-estructurado',
        component: AnalisisEstructurado
    },
];
