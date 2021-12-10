import type { NextPage } from 'next';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const [value1, setValue1] = useState('');
  return (
    <Layout>
      <InputText
        className='m-10'
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
    </Layout>
  );
};

export default Home;
