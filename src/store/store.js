import { configureStore } from '@reduxjs/toolkit';
import collapseReducer from '../features/collapse/collapseSlice'
import loadingReducer from '../features/loading/loadingSlice';
import colorReducer from '../features/color/colorSlice';

export default configureStore({
    reducer: {
        collapse: collapseReducer,
        loading: loadingReducer,
        color: colorReducer
    },
});

