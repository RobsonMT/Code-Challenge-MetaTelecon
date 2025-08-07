import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = { nome: '', email: '' };
  id?: number;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.clienteService
        .buscarPorId(this.id)
        .subscribe((c) => (this.cliente = c));
    }
  }

  salvar() {
    if (this.id) {
      this.clienteService
        .atualizar(this.id, this.cliente)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.clienteService
        .criar(this.cliente)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
