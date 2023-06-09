import { createEffect } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { isServer } from "solid-js/web";

export function createLocalStore<T extends object>(
  name: string,
  init: T
): [Store<T>, SetStoreFunction<T>] {
  const localState = isServer ? null : (localStorage.getItem(name) as any);
  const [state, setState] = createStore<T>(localState ? JSON.parse(localState) : init);

  createEffect(() => {
    localStorage.setItem(name, JSON.stringify(state));
  });
  return [state, setState];
}
