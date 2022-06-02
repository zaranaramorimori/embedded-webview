import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import familyPhoto from '@assets/familyPhoto.svg';
import arrowIcon from '@assets/arrowIcon.svg';

function Greeting() {
  return (
    <Styled.Wrap>
      <Image src={familyPhoto} width="120px" alt="" />
      <Styled.HiLabel>안녕하세요!</Styled.HiLabel>
      <Styled.IntroduceLabel>헤커 가족을 소개합니다</Styled.IntroduceLabel>
      <Styled.arrowButton />
    </Styled.Wrap>
  );
}

export default Greeting;

const Styled = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 100vh;
  `,

  HiLabel: styled.h1`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #000000;
    margin-top: 23px;
    margin-bottom: 12px;
  `,

  IntroduceLabel: styled.h2`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #000000;
  `,

  arrowButton: styled.button`
    background-image: url(${arrowIcon.src});
    width: 40px;
    height: 40px;
    margin-top: 23px;
  `,
};
