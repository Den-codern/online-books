import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
  book: bookReducer,
  sort: sortReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
