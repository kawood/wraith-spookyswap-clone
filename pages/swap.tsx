import type { NextPage } from 'next';
import Layout from '../components/layout';
import SwapTab from '../components/swap_tab';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center mt-10'>
        <div className='px-6 pb-6 border-2 border-white rounded-lg w-128'>
          <div className='w-full'>
            <img
              className='mx-auto'
              src='https://assets.spookyswap.finance/mirror_grimace.png'
              width={350}
            />
          </div>
          <div>
            <SwapTab />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
