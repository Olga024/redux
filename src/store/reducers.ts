import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_STRING, SET_CURRENT_ITEM } from "./actions";
import type { Action, Item, ItemState } from "./types";

const initialState: ItemState = {
  items: [],
  currentItem: null,
};

export const itemReducer = (state: ItemState = initialState, action: Action<Item | string>): ItemState => {
  switch (action.type) {
    case ADD_ITEM:
      const currentItemsList = [...state.items];
      if (action.payload && typeof action.payload != 'string') {
        currentItemsList.push(action.payload);
      }
      return {
        ...state,
        items: currentItemsList,
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map(item => (typeof action.payload !== 'string' && item.id === action.payload?.id) ? action.payload : item),
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: typeof action.payload != 'string' ? (action.payload || null) : null,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => (typeof action.payload !== 'string' && item.id !== action.payload?.id)),
      }
    case SEARCH_STRING:
      return {
        ...state,
        searchString: typeof action.payload != 'string' ? '' : action.payload,

      }

    default:
      return state;
  }
};