import { Logo } from "../../components/Logo";
import { Search, Coins } from "../../containers";

import { Grid, Main } from "./styles";

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
