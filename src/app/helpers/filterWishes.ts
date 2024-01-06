import { Signal, signal } from "@angular/core"
import { IWish } from "../../types/wish.interface"

export function filterWishes(wishes: Signal<IWish[] | undefined>, ch: string) {
    let filterObj: any = {
      'all': signal(wishes()),
      'true': signal(wishes()?.filter((wish: IWish) => {
        return wish.completed
      })),
      'false': signal(wishes()?.filter((wish: IWish) => {
        return !wish.completed
      }))
    }

    return filterObj[ch]
  }
