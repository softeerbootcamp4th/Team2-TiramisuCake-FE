import { PropsWithChildren } from 'react';
/**
 * @param Element
 * @param width
 * @returns
 */

interface ListContainerProps {
  width?: string;
}

const ListContainer = ({
  children,
  width = '30rem',
}: PropsWithChildren<ListContainerProps>) => {
  return (
    <div className='flex justify-center items-center mb-7'>
      <div className='bg-white rounded-xl h-fit' style={{ width: width }}>
        {children}
      </div>
    </div>
  );
};

export default ListContainer;
