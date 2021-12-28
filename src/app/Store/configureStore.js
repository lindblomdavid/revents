import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import testReducer from "../../features/sandbox/testReduser";

export function configureStore() {
  return createStore(testReducer, devToolsEnhancer());
}
