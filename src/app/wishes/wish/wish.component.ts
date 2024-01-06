import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { IWish } from '../../../types/wish.interface';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {

  http = inject(HttpService);
  @Input() wish!: IWish;
  @Output() changeWish = new EventEmitter<IWish>()

  changed() {
    this.wish = { ...this.wish, completed: !this.wish.completed };

    console.log(this.wish)
    this.changeWish.emit(this.wish)
  }

}
