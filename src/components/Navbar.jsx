import styled from 'styled-components';

import { BiChevronDown } from 'react-icons/bi';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 2rem;
  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <h2>Overview</h2>
      <div className='timeline'>
        <span>Last 30 Days</span>
        <BiChevronDown />
      </div>
    </Container>
  );
};

export default Navbar;
