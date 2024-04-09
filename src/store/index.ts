import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit'

import { persistReducer, persistStore } from 'redux-persist';
import storage from '@/utils/store'

const middlewares = [
  // thunk,
  createLogger()
]

// const persistConfig = {
//   key: 'root',
//   storage,
//   // Optionally, you can whitelist reducers that you want to persist
// whitelist: ['auth'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
})



export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
