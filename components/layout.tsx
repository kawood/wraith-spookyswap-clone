import { NextPage } from 'next';
import Link from 'next/link';

const Layout: NextPage = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-slate-800 flex items-center sticky top-0'>
        <HeadItem href='/swap' icon='/swap.svg' text='Swap' />
        <HeadItem href='/liquidity' icon='/liquidity.svg' text='Liquidity' />
        <HeadItem href='/farm' icon='/farm.svg' text='Farm' />
        <HeadItem href='/stake' icon='/stake.svg' text='Stake BOO' />
        <HeadItem href='/bridge' icon='/bridge.svg' text='Bridge' />
      </div>
      <div className='main-bg flex-1'>{children}</div>
    </div>
  );
};

type HeadItemProps = {
  text: string;
  icon: string;
  href: string;
};

const HeadItem = ({ text, icon, href }: HeadItemProps): JSX.Element => {
  return (
    <Link href={href}>
      <a className='text-white px-3 py-3 hover:bg-slate-700 cursor-default flex justify-center items-center'>
        <img className='mr-2' src={icon} />
        <span>{text}</span>
      </a>
    </Link>
  );
};

export default Layout;
