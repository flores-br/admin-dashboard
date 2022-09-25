import styled from 'styled-components';

// components
import Sidebar from './components/Sidebar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
`;

const App = () => {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default App;
