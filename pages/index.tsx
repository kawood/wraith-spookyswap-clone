import type { NextPage } from 'next';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

const Home: NextPage = () => {
  const [value1, setValue1] = useState('');
  return (
    <InputText
      className='m-10'
      value={value1}
      onChange={(e) => setValue1(e.target.value)}
    />
  );
};

export default Home;
