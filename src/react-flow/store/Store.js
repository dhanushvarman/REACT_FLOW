import { compose, configureStore } from "@reduxjs/toolkit";

// Root Reducer
import { RootReducer } from "../slice/RootReducer";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Store = configureStore({
  reducer: RootReducer,
  composeEnhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
