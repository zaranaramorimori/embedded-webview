import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import memberImg from '@assets/membersImg.svg';

function MemberStack() {
  return (
    <Styled.Wrapper>
      <Image
        src={memberImg}
        objectFit="contain"
        alt="Web: 이다은, Server: 권세훈/김희빈/정설희/한수아, iOS: 김지수/이다은/최이준, AOS: 이강민/이현우/한승현, Design: 박효리/이성현/한수아, Plan: 권세훈"
      />
    </Styled.Wrapper>
  );
}

export default MemberStack;

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 25px;
    padding: 0px 20px 0px 20px;
  `,
};
