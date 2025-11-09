import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, setCurrentItem } from '../store/actions';
import type { AppState } from '../store';

const ItemList: React.FC = () => {
    const items = useSelector((state: AppState) => state.items.items);
    const dispatch = useDispatch();

    return (
        <ul>
            {items.map(item => (
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