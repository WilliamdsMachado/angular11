import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service'; // Importa o serviço e a interface

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []; // Armazena os usuários retornados pelo serviço

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Chama o serviço ao carregar o componente
    this.userService.getUsers().subscribe(data => {
      this.users = data; // Salva os dados no array local
    });
  }
}
