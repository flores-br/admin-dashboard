import { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
import styled from 'styled-components';

// components
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RightSidebar from './components/RightSidebar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
`;

const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: 'left',
      distance: '80px',
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
       #sidebar
    `,
      {
        opacity: 0,
      }
    );
    const sr2 = scrollreveal({
      origin: 'right',
      distance: '80px',
      duration: 1000,
      reset: false,
    });
    sr2.reveal(
      `
       #rightSidebar
    `,
      {
        opacity: 0,
      }
    );
  }, []);

  return (
    <Container>
      <Sidebar />
      <Dashboard />
      <RightSidebar />
    </Container>
  );
};

export default App;
