import { IChuse } from "../../types/chuse.interface";
import { IWish } from "../../types/wish.interface";

export interface IState{
    wishes:IWish[],
    chuse:IChuse[],
    chuseWishes:string
}