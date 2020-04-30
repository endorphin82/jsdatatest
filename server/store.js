// Use Container instead of DataStore on the server
import { Container } from 'js-data';
import {adapter} from './adapter';

// Create a store to hold your Mappers
const store = new Container({
    mapperDefaults: {
        idAttribute: '_id'
    }
});

// Mappers in "store" will use the RethinkDB adapter by default
store.registerAdapter('mongodb', adapter, { 'default': true });

store.defineMapper('post', {
    collection: 'posts'
});
export {
    store
}