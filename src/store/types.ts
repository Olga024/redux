export type Item = {
    id: number;
    name: string;
    description: string;
}

export type ItemState = {
    items: Item[];
    currentItem: Item | null;
}

export type Action<T> = {
    type: string;
    payload?: T;
}