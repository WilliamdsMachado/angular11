import { Component, Input } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: User; // Recebe os dados do usuário vindo do componente pai
}
