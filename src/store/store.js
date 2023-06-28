import { configureStore } from '@reduxjs/toolkit';
import collapseReducer from '../features/collapse/collapseSlice'
import loadingReducer from '../features/loading/loadingSlice';

export default configureStore({
    reducer: {
        collapse: collapseReducer,
        loading: loadingReducer
    },
});

