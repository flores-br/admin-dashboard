import styled from 'styled-components';

import Avatar from './Avatar';
import ActiveListeners from './ActiveListeners';
import Player from './Player';

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--dark-background-color);
  padding: 0 3rem;
  padding-top: 2rem;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 0 2rem;
    padding-top: 2rem;
  }
`;

const RightSidebar = () => {
  return (
    <Container id='rightSidebar'>
      <Avatar />
      <ActiveListeners />
      <Player />
    </Container>
  );
};

export default RightSidebar;
