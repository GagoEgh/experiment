import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from "../app/services/http.service";
import { chuseError, chuseStart, chuseSucces } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class WishesChuseEffect {
    actions = inject(Actions);
    wishesService = inject(HttpService);

    chuseEffect = createEffect(() => this.actions
        .pipe(ofType(chuseStart),
            switchMap(() => {
                return this.wishesService.getChuseValue()
                    .pipe(map((res: any) => {
                        return chuseSucces({ chuse: res })
                    }),
                        catchError(() => of(chuseError())))
            }))
    )
}