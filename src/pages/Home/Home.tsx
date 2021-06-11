import { Logo } from "../../components/Logo";
import { Coins } from "../../containers";

import { Grid, Main, Search } from "./styles";

const Home = () => {
  return (
    <Main>
      <Search />
      <Grid>
        <Logo />
        <Coins />
      </Grid>
    </Main>
  );
};

export default Home;
