interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <div className='text-white flex flex-col justify-center items-center absolute top-[186px] left-1/2 transform -translate-x-1/2 min-w-fit whitespace-nowrap'>
      <p className='text-b-m'>{subTitle}</p>
      <h2 className='font-montserrat text-h-l font-bold'>{title}</h2>
    </div>
  );
};

export default Header;
