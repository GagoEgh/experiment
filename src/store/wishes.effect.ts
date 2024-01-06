import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from "../app/services/http.service";
import { Wishes, wishesError, wishesStart, wishesSuccess } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class WishesEffect {
    actions = inject(Actions);
    wishesService = inject(HttpService);

    wishesEffect = createEffect(() => this.actions
        .pipe(ofType(wishesStart),
            switchMap(() => {
                return this.wishesService.getWishes().pipe(
                    map((res:Wishes) => {
                        return wishesSuccess(res)
                    }),
                    catchError(() => of(wishesError()))
                )
            })
        )
    )
}