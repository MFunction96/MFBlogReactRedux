import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import * as thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from 'react-router-redux';
//import * as Counter from './Counter';
//import * as WeatherForecasts from './WeatherForecasts';

export default function configureStore(history : any, initialState : any) {
    const reducers = {
        //counter: Counter.reducer,
        //weatherForecasts: WeatherForecasts.reducer
    };

    const middleware : any = [
        thunk,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && (window as any).devToolsExtension) {
        enhancers.push((window as any).devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware, ...enhancers))
    );
}
