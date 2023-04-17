import { Show } from "solid-js";

const Header = (props: { user: (Lucia.UserAttributes & { userId: string }) | null }) => {
  return (
    <div class='w-full items-center flex justify-between py-4 flex px-4 bg-gray-100 dark:bg-dark-9 '>
      <h2 class='color-base text-3xl font-bold'>Aether</h2>
      <Show
        when={props.user}
        fallback={
          <a href='login' class='color-base'>
            Log in
          </a>
        }>
        {(user) => <div class='bg-white rounded-full h-8 w-8'>{user().username}</div>}
      </Show>
    </div>
  );
};

export default Header;
