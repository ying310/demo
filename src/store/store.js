import { configureStore } from '@reduxjs/toolkit';
import collapseReducer from './collapse/collapseSlice'
import loadingReducer from './loading/loadingSlice';

export default configureStore({
    reducer: {
        collapse: collapseReducer,
        loading: loadingReducer,
    },
});

