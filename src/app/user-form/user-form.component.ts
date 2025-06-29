import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {
  @Input() initialUser: User | null = null;

  @Output() create = new EventEmitter<User>();
  @Output() update = new EventEmitter<User>();

  user: User = { id: 0, name: '', email: '', role: '' };

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['initialUser']) {
    if (this.initialUser) {
      this.user = { ...this.initialUser };
    } else {
      this.user = { id: 0, name: '', email: '', role: '' };
    }
  }
}

  submitForm(): void {
    if (this.initialUser) {
      this.update.emit(this.user); // Emite atualização
    } else {
      this.user.id = Date.now(); // Gera ID único para novo usuário
      this.create.emit(this.user); // Emite criação
    }

    // Limpa o formulário após enviar
    this.user = { id: 0, name: '', email: '', role: '' };
  }
}
