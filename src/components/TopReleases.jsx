import styled from 'styled-components';
import { applyCardStyles } from './ReusableStyles';

import { BsChevronRight } from 'react-icons/bs';

import { musicData } from '../dummyData';

const Container = styled.section`
  ${applyCardStyles}
  color:white;
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    .title {
    }
    .filters {
      display: flex;
      align-items: center;
      gap: 3rem;
      color: var(--primary-color);
      button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        font-weight: bolder;
      }
    }
  }
  .musics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .music {
      border-bottom: 0.1rem solid #242424;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .details {
        display: flex;
        gap: 1rem;
        .image {
          img {
            height: 2.5rem;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          h6 {
            font-weight: 100;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .filters {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    .musics {
      grid-template-columns: 1fr;
    }
  }
`;

const TopReleases = () => {
  return (
    <Container>
      <div className='title-container'>
        <div className='title'>
          <h4>Top Releases</h4>
        </div>
        <div className='filters'>
          <span>All Releases</span>
          <button>New Release</button>
        </div>
      </div>
      <div className='musics'>
        {musicData.map(({ title, plays, image }) => (
          <div className='music' key={title}>
            <div className='details'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='info'>
                <h5>{title}</h5>
                <h6>{plays}k Plays</h6>
              </div>
            </div>
            <BsChevronRight />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TopReleases;
