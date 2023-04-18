import { For, Show } from "solid-js";
import { trpc } from "../client";

const Test = () => {
  const res = trpc.post.all.useQuery();
  // const auth = trpc.auth.getSecretMessage.useQuery();
  const utils = trpc.useContext();

  const { mutate } = trpc.post.create.useMutation();
  return (
    <>
      <Show when={res.data}>
        {(data) => <For each={data()}>{(item) => <div class='color-base'>{item.title}</div>}</For>}
      </Show>
      {/* <Sh ow when={auth.data}>{(data) => <div>data.</div>}</Sh> */}
      <div class='flex'>
        <button
          class='color-base px-2 py-1 bg-gray-300 rounded-md font-bold dark:bg-dark-300'
          onClick={() => {
            mutate(
              { title: "test", content: "test" },
              {
                onSuccess: () => {
                  utils.post.all.invalidate();
                },
              }
            );
          }}>
          Create
        </button>
      </div>
    </>
  );
};

export default Test;
