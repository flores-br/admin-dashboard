import styled from 'styled-components';

import Navbar from './Navbar';
import Streams from './Streams';
import Earnings from './Earnings';
import TargetAudience from './TargetAudience';

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(3, 3, 27, 0.7);
  .grid {
    padding: 2rem;
    padding-top: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    .row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
    }
    .row2 {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
    }
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <div className='grid'>
        <div className='row'>
          <Streams />
          <Earnings />
        </div>
        <div className='row2'>
          <TargetAudience />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
