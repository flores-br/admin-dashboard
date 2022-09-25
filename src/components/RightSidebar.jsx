import styled from 'styled-components';

import Avatar from './Avatar';

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--dark-background-color);
  padding: 0 3rem;
  padding-top: 2rem;
`;

const RightSidebar = () => {
  return (
    <Container id='rightSidebar'>
      <Avatar />
    </Container>
  );
};

export default RightSidebar;
