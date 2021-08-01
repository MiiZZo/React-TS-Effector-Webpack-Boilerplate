import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";
import { paths, routingModel } from "shared/libs/routing";

interface Props extends RouteComponentProps {}

const HomePage: ComponentType<Props> = () => {
  return (
    <>
      <div>That's a home page</div>
      <button onClick={() => routingModel.goToFx(paths.signIn())}>click</button>
    </>
  );
};

export default HomePage;
