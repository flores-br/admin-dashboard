import styled from 'styled-components';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import { countries, countryData as data } from '../dummyData';

const Container = styled.section`
  border-bottom: 0.1rem solid #242424;
  color: white;
  .title-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding-top: 1rem;
    .title {
      h4 {
        font-size: 0.8rem;
        margin-bottom: 0.2rem;
      }
      h1 {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
      }
    }
    .chart {
      position: relative;
      .percent {
        position: absolute;
        top: 0;
        left: 0;
        color: var(--primary-color);
        font-size: 0.8rem;
      }
      height: 4rem;
      width: 100%;
    }
  }
  .active {
    max-height: 11rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1.5rem;
    margin: 1rem 0;
    ::-webkit-scrollbar {
      width: 0.2rem;
      background-color: #6e6e6ec3;
      &-thumb {
        background-color: #b8b8b8;
      }
    }
    h5 {
      font-weight: 100;
    }
    .country {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        display: flex;
        gap: 1rem;
        align-items: center;
        img {
          height: 2rem;
          border-radius: 2rem;
        }
      }
    }
  }
`;

const ActiveListeners = () => {
  return (
    <Container>
      <div className='title-container'>
        <div className='title'>
          <h4>Current Listeners</h4>
          <h1>1,102</h1>
        </div>
        <div className='chart'>
          <div className='percent'>+11.3%</div>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart width={500} height={400} data={data}>
              <defs>
                <linearGradient id='colorview' x1='0' y1='0' x2='0' y2='1'>
                  <stop
                    offset='10%'
                    stopColor='var(--primary-color)'
                    stopOpacity={0.4}
                  />
                  <stop offset='100%' stopColor='#000000ff' stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Area
                type='monotone'
                dataKey='data'
                stroke='var(--primary-color)'
                strokeWidth={2}
                fill='url(#colorview)'
                animationBegin={500}
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='active'>
        {countries.map((data, index) => (
          <div className='country' key={index}>
            <div className='name'>
              <img src={data.image} alt={data.name} />
              <h5>{data.name}</h5>
            </div>
            <h5>{data.amount}</h5>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ActiveListeners;
