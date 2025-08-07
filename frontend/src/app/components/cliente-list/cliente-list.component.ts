import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  imports: [CommonModule, RouterModule],
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clienteService.listar().subscribe((dados) => (this.clientes = dados));
  }

  editar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  excluir(id: number) {
    this.clienteService.excluir(id).subscribe(() => this.carregarClientes());
  }
}
