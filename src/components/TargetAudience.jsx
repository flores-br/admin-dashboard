import styled from 'styled-components';
import { applyCardStyles } from './ReusableStyles';

import { BsThreeDots } from 'react-icons/bs';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

import { targetAudienceData as data } from '../dummyData';

const Container = styled.section`
  ${applyCardStyles}
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title-container {
    margin-bottom: 1rem;
    .title {
      display: flex;
      justify-content: space-between;
      svg {
        color: var(--primary-color);
        font-size: 1.3rem;
        cursor: pointer;
      }
    }
  }
  .chart {
    height: 13rem;
    .recharts-default-tooltip {
      background-color: var(--dark-background-color) !important;
      border: none !important;
      border-radius: 1rem;
      box-shadow: 0 0 60px 8px var(--primary-color);
    }
  }
`;

const TargetAudience = () => {
  return (
    <Container>
      <div className='title-container'>
        <div className='title'>
          <h4>Target Audience</h4>
          <BsThreeDots />
        </div>
      </div>
      <div className='chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={500} height={300} data={data}>
            <Tooltip cursor={{ fill: '#3d741d7a' }} />
            <defs>
              <linearGradient id='colorview' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='40%'
                  stopColor='var(--primary-color)'
                  stopOpacity={0.8}
                />
                <stop offset='80%' stopColor='#000000ff' stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Bar
              dataKey='uv'
              stackId='a'
              fill='url(#colorview)'
              animationBegin={800}
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default TargetAudience;
