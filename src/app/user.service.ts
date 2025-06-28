// Importa o decorator @Injectable, que transforma essa classe em um serviço Angular
import { Injectable } from '@angular/core';

// Importa ferramentas do RxJS:
// - Observable: tipo assíncrono reativo usado pelo Angular
// - of(): função que cria um Observable a partir de um valor estático
import { Observable, of } from 'rxjs';

// Define uma interface TypeScript para os objetos de usuário
// Isso melhora a segurança do código com tipagem estática
export interface User {
  id: number;     // ID único do usuário
  name: string;   // Nome completo
  email: string;  // E-mail de contato
  role: string;   // Papel/função do usuário (ex: Admin, Editor, Usuário)
}

// O decorator @Injectable indica que essa classe pode ser injetada em outros componentes ou serviços
@Injectable({
  providedIn: 'root' // Faz com que o Angular disponibilize esse serviço globalmente (singleton)
})
export class UserService {

  // Simula uma lista de usuários como se viesse de uma base de dados ou API
  private users: User[] = [
    { id: 1, name: 'William Machado', email: 'will.dsm@email.com', role: 'Admin' },
    { id: 2, name: 'Enrico', email: 'bruno.lima@email.com', role: 'Usuário' },
    { id: 3, name: 'Ana Paula', email: 'carla.mendes@email.com', role: 'Editor' }
  ];

  // Construtor da classe (vazio neste caso, mas útil para injetar outros serviços futuramente)
  constructor() { }

  // Método público que retorna a lista de usuários simulada
  // Ele retorna um Observable, simulando uma chamada assíncrona real (ex: API HTTP)
  getUsers(): Observable<User[]> {
    return of(this.users); // Retorna os dados simulados como um Observable (padrão do Angular)
  }
}
