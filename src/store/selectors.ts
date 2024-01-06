import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IState } from './type/state.interface';


const wishFeature = createFeatureSelector<IState>('wishes');

export const wishes = createSelector(wishFeature, (state: IState) => state.wishes);
export const chuseWishes = createSelector(wishFeature, (state: IState) => state.chuseWishes);
export const chuse = createSelector(wishFeature, (state: IState) => state.chuse);