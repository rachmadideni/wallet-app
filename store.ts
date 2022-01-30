import { 
  createStore, 
  // applyMiddleware, 
  compose, 
  combineReducers, 
  Reducer } from 'redux'
import { appReducer } from './redux/reducer'
import { IAppState } from './redux/types'

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  app: appReducer  
} as any);

const store = createStore(rootReducer, 
  composeEnhancers(
    // applyMiddleware(thunk),
  )  
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;