import { createReducer, on } from '@ngrx/store';
import { IState } from './type/state.interface';
import { chuseError, chuseStart, chuseSucces, wishAdd, wishChange, wishesError, wishesStart, wishesSuccess } from './actions';

export const initalState:IState={
    wishes:[],
    chuseWishes:'all',
    chuse:[]
}

export const wishReducer = createReducer(
    initalState,
    on(wishesStart,(state:IState)=>({...state})),
    on(wishesSuccess,(state:IState,action)=>({...state,wishes:action.whishes})),
    on(wishesError,(state:IState)=>({...state})),
    on(wishAdd,(state:IState,action)=>({...state,wishes:action.whishes})),

    on(wishChange,(state:IState,action)=>({...state,wishes:action.whishes})),

    on(chuseStart,(state:IState,)=>({...state})),
    on(chuseSucces,(state:IState,action)=>({...state,chuse:action.chuse})),
    on(chuseError,(state:IState)=>({...state}))
)
