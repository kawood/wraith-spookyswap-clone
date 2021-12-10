import { NextPage } from 'next';

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <div className='bg-slate-800 flex items-center'>
        <HeadItem icon='/swap.svg' text='Swap' />
        <HeadItem icon='/liquidity.svg' text='Liquidity' />
        <HeadItem icon='/farm.svg' text='Farm' />
        <HeadItem icon='/stake.svg' text='Stake BOO' />
        <HeadItem icon='/bridge.svg' text='Bridge' />
      </div>
      {children}
    </div>
  );
};

type HeadItemProps = {
  text: string;
  icon: string;
};

const HeadItem = ({ text, icon }: HeadItemProps): JSX.Element => {
  return (
    <div className='text-white px-3 py-3 hover:bg-slate-700 cursor-default flex'>
      <img className='mr-2' src={icon} />
      {text}
    </div>
  );
};

export default Layout;
