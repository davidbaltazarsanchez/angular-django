import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

export const VISTAS = {
  MENU: 'menu',
  INICIO: 'inicio',
  EXCEL: 'excel',
  DASHBOARD: 'dashboard',
  CONSULTAS_SQL: 'consultassql',
  REVISAPPTX: 'RevisaPPTx',
  BITACORA: 'bitacora',
} as const;

export type VistaActiva = (typeof VISTAS)[keyof typeof VISTAS];

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  templateUrl: './menu-lateral.html',
  imports: [CommonModule, LucideAngularModule],
})
export class MenuLateralComponent {
  @Input() show: boolean = false;

  @Output() hide = new EventEmitter<void>();
  @Output() openCargaMenu = new EventEmitter<VistaActiva>();

  VISTAS = VISTAS;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  seleccionar(vista: string) {
    if (vista === 'excel') {
      this.router.navigate(['/excel']);
    }
    if (vista === 'bitacora') {
      this.router.navigate(['/bitacora']);
    }
    if (vista === 'inicio') {
      this.router.navigate(['/home']);
    }

    this.hide.emit(); // cerrar menú
  }
  cerrarSesion() {
    this.authService.logout();
  }
}
