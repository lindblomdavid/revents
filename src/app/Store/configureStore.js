import { createStore } from "redux";
import testReducer from "../../features/sandbox/testReduser";

export function configureStore() {
  return createStore(testReducer);
}
