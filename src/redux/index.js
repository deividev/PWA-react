	
import { createStore, combineReducers } from 'redux';
import { mensajes } from './reducers/message';
import { user } from './reducers/user';
import { products } from './reducers/product';
 
// STORE - El estado global de la aplicación.



let reducers = combineReducers({
    mensajes: mensajes,
    user: user,
    products: products
});
    let store = createStore(
        reducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

store.subscribe( () => {
    store.getState();
})

export default store;