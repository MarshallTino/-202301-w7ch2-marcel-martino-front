import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { robotsReducer } from "./features/robots/robotsSlicer";
import { userReducer } from "./features/users/usersSlicers";
export const store = configureStore({
  reducer: {
    user: userReducer,
    robots: robotsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
