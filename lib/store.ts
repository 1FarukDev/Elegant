import { configureStore, Middleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "@/lib/features/authentication/user_slice";
// import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, userReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      user: persistedReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk as any),
  });
  const persistor = persistStore(store);
  return { store, persistor };
};

export type AppStore = ReturnType<typeof makeStore>["store"];
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
