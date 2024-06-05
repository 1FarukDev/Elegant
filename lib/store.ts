import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/features/authentication/user_slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configuration
const persistConfig = {
  key: "elegant",
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Create and configure the store
export const makeStore = () => {
  const store = configureStore({
    reducer: {
      user: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  return store;
};

// Infer the type of the store
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Create a persistor
export const persistor = (store: AppStore) => persistStore(store);
