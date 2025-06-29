import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  editingUser: User | null = null; // Estado de edição
  searchTerm: string = '';          // termo digitado no campo de busca
  filteredUsers: User[] = [];       // lista exibida no template

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users; // Inicializa a lista filtrada com todos os usuários
    });
  }

  deleteUser(userToDelete: User): void {
    this.users = this.users.filter(user => user !== userToDelete);
    this.filterUsers(); // 🔁 atualiza filtrados

    if (this.editingUser && this.editingUser.id === userToDelete.id) {
      this.editingUser = null; // Cancela edição se estiver editando o excluído
    }
  }

  addUser(newUser: User): void {
    console.log('Novo usuário recebido:', newUser);
    this.users.push(newUser);
    this.filterUsers(); // 🔁 atualiza filtrados
  }

  editUser(user: User): void {
    this.editingUser = user;
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    this.filterUsers();
    this.editingUser = null; // Sai do modo de edição
  }

  filterUsers(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredUsers = this.users; // Se o campo de busca estiver vazio, exibe todos os usuários
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    }
  }

}
