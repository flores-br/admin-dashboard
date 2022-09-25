import styled from 'styled-components';
import { applyCardStyles } from 'components/ReusableStyles';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

import { data, sliderData } from '../dummyData.js';

const Container = styled.section`
  ${applyCardStyles}
  color:white;
  .title-container {
    display: flex;
    justify-content: space-between;
    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
    }
    .slider {
      .services {
        display: flex;
        gap: 1rem;
        .service {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          min-width: 5rem;
          img {
            height: 2rem;
          }
        }
      }
    }
  }
  .chart {
    height: 10rem;
    .recharts-default-tooltip {
      background-color: var(--dark-background-color) !important;
      border: none !important;
      border-radius: 1rem;
      box-shadow: 0 0 60px 8px var(--primary-color);
    }
  }
`;

const Streams = () => {
  return (
    <Container>
      <div className='title-container'>
        <div className='title'>
          <h4>Streams</h4>
          <h1>401,102</h1>
        </div>
        <div className='slider'>
          <div className='services'>
            {sliderData.map(({ image, serviceName }) => (
              <div className='service'>
                <img src={image} alt={serviceName} />
                <h6>{serviceName}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data}>
            <defs>
              <linearGradient>
                <stop
                  offset='10%'
                  stopColor='var(--primary-color)'
                  stopOpacity={0.4}
                />
                <stop offset='100%' stopColor='#000000ff' stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type='monotone'
              dataKey='data'
              stroke='var(--primary-color)'
              strokeWidth={2}
              fill='url(#colorview)'
              animationBegin={800}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default Streams;
