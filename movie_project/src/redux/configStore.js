import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import CarouselReducer from './reducer/CarouselReducer'
import QuanLyPhimReducer from './reducer/QuanLyPhimReducer'
import QuanLyRapReducer from './reducer/QuanLyRapReducer'
import QuanLyNguoiDungReducer from './reducer/QuanLyNguoiDungReducer'
import QuanLyDatVeReducer from './reducer/QuanLyDatVeReducer'

const rootReducer = combineReducers({
CarouselReducer,
QuanLyPhimReducer,
QuanLyRapReducer,
QuanLyNguoiDungReducer,
QuanLyDatVeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store