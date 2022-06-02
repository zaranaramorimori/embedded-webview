import styled from '@emotion/styled';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Styled.Main>
      <Styled.CenterAligner></Styled.CenterAligner>
    </Styled.Main>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  `,

  CenterAligner: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
