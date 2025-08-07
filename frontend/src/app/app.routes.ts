import { Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

export const routes: Routes = [
  { path: '', component: ClienteListComponent },
  { path: 'novo', component: ClienteFormComponent },
  { path: 'editar/:id', component: ClienteFormComponent },
];
