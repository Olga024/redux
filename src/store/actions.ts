import type { Action, Item } from "./types";

export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (item: Item): Action<Item> => ({
    type: ADD_ITEM,
    payload: item,
});

export const editItem = (item: Item): Action<Item> => ({
    type: EDIT_ITEM,
    payload: item,
});

export const setCurrentItem = (item: Item | null): Action<Item> => ({
    type: SET_CURRENT_ITEM,
    payload: item || undefined,
});

export const deleteItem = (item: Item): Action<Item> => ({
    type: DELETE_ITEM,
    payload: item,
});