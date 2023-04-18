import { Show } from "solid-js";
import ThemeToggle from "./ThemeToggle";

const Header = (props: { user: (Lucia.UserAttributes & { userId: string }) | null }) => {
  return (
    <div class='w-full items-center flex justify-end gap-4 py-4 max-w-5xl mx-auto flex px-4  '>
      <Show
        when={props.user}
        fallback={
          <a href='login' class='color-base'>
            Log in
          </a>
        }>
        {(user) => (
          <div class='border rounded-full color-base bg-paper p-1'>
            <div class='i-tabler:user text-3xl rounded-full' />
          </div>
        )}
      </Show>
      <ThemeToggle />
    </div>
  );
};

export default Header;
