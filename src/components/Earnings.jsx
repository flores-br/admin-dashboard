import styled from 'styled-components';
import { applyCardStyles } from './ReusableStyles';

import { earningsData } from '../dummyData';

const Container = styled.section`
  ${applyCardStyles}
  color:white;
  display: flex;
  flex-direction: column;
  .title-container {
    display: flex;
    justify-content: space-between;
    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
    }
    .more {
      color: var(--primary-color);
      cursor: pointer;
      transition: 300ms ease;
      &:hover,
      &:focus {
        color: white;
      }
    }
  }
  .earnings {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .earning {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      .data {
        display: flex;
        justify-content: space-between;
        h5 {
          font-weight: 100;
        }
      }
      progress {
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        &::-webkit-progress-bar {
          border-radius: 1rem;
          height: 0.15rem;
        }
        &::-webkit-progress-value {
          border-radius: 1rem;
          background-color: orange;
        }
      }
      .cleared {
        &::-webkit-progress-value {
          background-color: var(--primary-color);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 100%;
    .title-container {
      flex-direction: column;
      text-align: center;
    }
    .earnings {
    }
  }
`;

const Earnings = () => {
  return (
    <Container>
      <div className='title-container'>
        <div className='title'>
          <h4>Earnings</h4>
          <h1>$9,102</h1>
        </div>
        <div className='more'>Show More</div>
      </div>
      <div className='earnings'>
        {earningsData.map(({ progress, amount }) => (
          <div className='earning' key={amount}>
            <div className='data'>
              <h5>{progress === 100 ? 'FUNDS CLEARED' : 'CLEARING'}</h5>
              <h5 className='amount'>${amount}</h5>
            </div>
            <progress
              max={100}
              value={progress}
              className={progress === 100 ? 'cleared' : ''}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Earnings;
