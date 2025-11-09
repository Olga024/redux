import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SET_CURRENT_ITEM } from "./actions";
import type { Action, Item, ItemState } from "./types";

const initialState: ItemState = {
  items: [],
  currentItem: null,
};

export const itemReducer = (state: ItemState = initialState, action: Action<Item>): ItemState => {
  switch (action.type) {
    case ADD_ITEM:
      const currentItemsList = [...state.items];
      if (action.payload) {
        currentItemsList.push(action.payload);
      }
      return {
        ...state,
        items: currentItemsList,
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload?.id ? action.payload : item
        ),
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload || null,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload?.id),
      }
    default:
      return state;
  }
};