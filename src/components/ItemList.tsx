import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, setCurrentItem } from '../store/actions';
import type { AppState } from '../store';

const ItemList: React.FC = () => {
    const itemsState = useSelector((state: AppState) => state.items);
    const { items, searchString } = itemsState;
    const dispatch = useDispatch();

    return (
        <ul>
            {items
                .filter(({ name, description }) => {
                    let isMatch = false;
                    if (!searchString || searchString.length < 1) {
                        isMatch = true;
                    }

                    if (searchString && (name.includes(searchString) || description.includes(searchString))) {
                        isMatch = true;
                    }

                    return isMatch;
                })
                .map(item => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => dispatch(setCurrentItem(item))}>Edit</button>
                        <button onClick={() => dispatch(deleteItem(item))}>X</button>
                    </li>
                ))}
        </ul>
    );
};

export default ItemList;