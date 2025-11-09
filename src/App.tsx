import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import SearchPanel from './components/SearchPanel';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Item Manager</h1>
        <ItemForm />
        <SearchPanel />
        <ItemList />
      </div>
    </Provider>
  );
};

export default App;