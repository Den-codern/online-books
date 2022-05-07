import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { modalReducer } from "./modal.Reducer";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
  book: bookReducer,
  sort: sortReducer,
  modal: modalReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
