import { createEffect, createRoot, createSignal, on, onCleanup } from "solid-js";
import { Store, SetStoreFunction, createStore } from "solid-js/store";

type LocalStore<T> = [get: Store<T>, set: SetStoreFunction<T>];

export function createLocalStore<T extends {}>(
  initialValue: T,
  { key }: { key: string }
): LocalStore<T> {
  let localValue: null | T = null;
  const serializedLocalValue = localStorage.getItem(key);
  if (serializedLocalValue !== null) {
    localValue = JSON.parse(serializedLocalValue);
  }
  const [store, _setStore] = createStore<T>(localValue ?? initialValue);
  const [count, setCount] = createSignal(0);
  function setStore() {
    setCount((curr) => curr + 1);
    // @ts-expect-error: A spread argument must either have a tuple type or be
    // passed to a rest parameter. ts(2556)
    _setStore(...arguments);
  }
  createRoot((dispose) => {
    createEffect(
      on(
        count,
        () => {
          if (store === initialValue) {
            localStorage.removeItem(key);
          } else {
            localStorage.setItem(key, JSON.stringify(store));
          }
        },
        { defer: true }
      )
    );
    onCleanup(() => {
      dispose();
    });
  });
  return [store, setStore];
}
