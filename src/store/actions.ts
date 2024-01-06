import { createAction, props } from '@ngrx/store';
import { WishesType } from './type/wishesAction.type';
import { IWish } from '../types/wish.interface';
import { IChuse } from '../types/chuse.interface';


export interface Wishes{
    whishes:IWish[],
}

export interface ChuseWishes{
    chuse:IChuse[]
}

export const wishesStart = createAction(WishesType.WISHES_START);
export const wishesSuccess = createAction(WishesType.WISHES_SUCCESS,props<Wishes>());
export const wishesError = createAction(WishesType.WISHES_ERROR);
export const wishAdd = createAction(WishesType.WISHES_ADD,props<Wishes>())

export const wishChange = createAction(WishesType.WISHES_CHANGE,props<Wishes>());

export const chuseStart = createAction(WishesType.CHUSE_WISHES_START);
export const chuseSucces = createAction(WishesType.CHUSE_WISHES_SUCCES,props<ChuseWishes>());
export const chuseError = createAction(WishesType.CHUSE_WISHES_ERROR);
