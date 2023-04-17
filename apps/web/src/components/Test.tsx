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
        {(data) => <For each={data()}>{(item) => <div>{item.title}</div>}</For>}
      </Show>
      {/* <Show when={auth.data}>{(data) => <div>data.</div>}</Show> */}
      <div class='flex'>
        <button
          onClick={() => {
            mutate(
              { title: "test", content: "test" },
              {
                onSuccess: () => {
                  utils.post.all.invalidate();
                },
              }
            );
            console.log("xd");
          }}>
          Create
        </button>
      </div>
    </>
  );
};

export default Test;
