import styled from '@emotion/styled';
import Greeting from '@src/components/members/Greeting';
import React from 'react';

function members() {
  return (
    <Styled.MainWrapper>
      <Greeting />
    </Styled.MainWrapper>
  );
}

const Styled = {
  MainWrapper: styled.div``,
};

export default members;
