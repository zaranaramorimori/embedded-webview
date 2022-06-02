import styled from '@emotion/styled';
import Divider from '@src/components/common/Divider';
import Greeting from '@src/components/members/Greeting';
import MemberStack from '@src/components/members/MemberStack';
import React from 'react';

function members() {
  return (
    <div>
      <Greeting />
      <Divider />
      <MemberStack />
    </div>
  );
}

export default members;
