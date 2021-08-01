import { Pages } from "pages";
import { withAppProviders } from "./providers";

export const App = withAppProviders(() => {
  return <Pages />;
});
