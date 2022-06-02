import React from 'react';

import dividerImg from '@assets/divider.svg';
import styled from '@emotion/styled';
import Image from 'next/image';

function Divider() {
  return (
    <Styled.Main>
      <Image src={dividerImg} width="" alt="구분선" />
    </Styled.Main>
  );
}

export default Divider;

const Styled = {
  Main: styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
