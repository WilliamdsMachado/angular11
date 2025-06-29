import { Component, Input, Output, EventEmitter } from '@angular/core';
// Importa os decoradores e utilitários necessários do Angular

import { User } from '../user.service';
// Importa a interface User para tipagem

@Component({
  selector: 'app-user-card', // Define o seletor HTML para este componente
  templateUrl: './user-card.component.html', // Caminho para o template HTML
  styleUrls: ['./user-card.component.css']   // Caminho para os estilos CSS
})
export class UserCardComponent {
  @Input() user!: User;
  // Recebe um objeto do tipo User do componente pai (user-list)

  @Output() delete = new EventEmitter<User>();
  // Cria um emissor de eventos que envia um usuário para o componente pai ao ser acionado

  @Output() edit = new EventEmitter<User>(); //Emissor do evento de edição

  onDelete(): void {
    // Método chamado ao clicar no botão de deletar
    this.delete.emit(this.user);
    // Emite o evento passando o usuário atual como argumento
  }

  onEdit(): void {
    this.edit.emit(this.user); // ⬅️ Dispara evento para o pai
  }
}
