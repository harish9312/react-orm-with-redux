import { IActionType } from "./interfaces";
import { store } from "./store/index";

export function dispacthAction<T extends IActionType>(action: T) {
  if (action as IActionType) {
    store.dispatch(action);
  }
  return store.dispatch<{ type: string }>(action);
}
