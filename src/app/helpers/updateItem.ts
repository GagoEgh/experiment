import { IWish } from "../../types/wish.interface"

export function updateItem(items: IWish[], ev: IWish):IWish[] {

    return items.map((wish: IWish) => {
      if (ev.wish === wish.wish) {
        wish = ev
      }
      return wish
    })
}