import { CommonModule } from '@angular/common';
import { Component, Signal, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Store, select } from '@ngrx/store';
import { IWish } from '../../../types/wish.interface';
import { chuseStart, wishChange, wishesStart } from '../../../store/actions';
import { chuse, wishes } from '../../../store/selectors';
import { WishComponent } from '../wish/wish.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { updateItem } from '../../helpers/updateItem';
import { IChuse } from '../../../types/chuse.interface';
import { filterWishes } from '../../helpers/filterWishes';


import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { FormControl, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';


@Component({
  selector: 'app-wishes',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    WishComponent,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.css'
})
export class WishesComponent {
  httpService = inject(HttpService);
  store = inject(Store);

  chuse: Signal<IChuse[] | undefined>;
  viewWishes!: Signal<IWish[] | undefined>;

  private wishes: Signal<IWish[] | undefined>;
  private change = 'all';
  private wish!: IWish;

  wishInput = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]);
  constructor() {
    this.store.dispatch(wishesStart());
    this.wishes = toSignal(this.store.pipe(select(wishes)));
    this.viewWishes = filterWishes(this.wishes, this.change);

    this.store.dispatch(chuseStart());
    this.chuse = toSignal(this.store.pipe(select(chuse)));
  }

  wishChange(ev: IWish) {
    this.wish = ev
    this.wishes = signal(updateItem(this.wishes()!, ev));
    this.viewWishes = filterWishes(this.wishes, this.change);
    this.store.dispatch(wishChange({ whishes: this.wishes()! }));
  }


  changeSelect(ev: string) {
    this.change = ev
    this.viewWishes = filterWishes(this.wishes, this.change);
    this.wishes = signal(updateItem(this.wishes()!, this.wish));
    this.store.dispatch(wishChange({ whishes: this.wishes()! }));
  }

  addWish() {

    this.wishes = signal([...this.wishes()!, {
      completed: false,
      wish: this.wishInput.value!
    }])
    this.viewWishes = this.wishes;
    this.wishInput.reset();

  }
}
