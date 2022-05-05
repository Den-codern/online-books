import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  book: bookReducer,
  search: searchReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
