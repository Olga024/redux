import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, editItem, setCurrentItem } from '../store/actions';
import type { AppDispatch, AppState } from '../store';

const ItemForm: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentItem = useSelector((state: AppState) => state.items.currentItem);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentItem) {
            dispatch(editItem({ ...currentItem, name, description }));
        } else {
            dispatch(addItem({ id: Date.now(), name, description }));
        }
        setName('');
        setDescription('');
        dispatch(setCurrentItem(null));
    };

    const handleCancel = () => {
        setName('');
        setDescription('');
        dispatch(setCurrentItem(null));
    };

    useEffect(() => {
        if (currentItem) {
            setName(currentItem.name);
            setDescription(currentItem.description);
        }
    },[currentItem]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
                Cancel
            </button>
        </form>
    );
};

export default ItemForm;