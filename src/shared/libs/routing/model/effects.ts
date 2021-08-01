import { attach, Store } from "effector";
import { History } from "history";
import { app } from "shared/libs/app";
import { $history } from "./stores";

const goToWithoutBindingsFx = app.effect<
  { path: string; history: History | null },
  void
>(({ history, path }) => {
  if (history) {
    history.push(path);
  }
});

export const goToFx = attach<
  string,
  Store<History<unknown> | null>,
  typeof goToWithoutBindingsFx
>({
  effect: goToWithoutBindingsFx,
  source: $history,
  mapParams: (path, history) => ({
    path,
    history,
  }),
});
