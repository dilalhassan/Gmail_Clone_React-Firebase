import {configureStore} from '@reduxjs/toolkit';
import appReducar from './appSlice';

const store = configureStore({
    reducer:{
        appSlice:appReducar
    }
});
export default store;