import { PropsWithChildren } from 'react';
/**
 * Modal Component
 * @param Element
 * @returns
 */

const ListContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex justify-center items-center mb-7'>
      <div className='bg-white rounded-xl w-[30rem] h-fit'>{children}</div>
    </div>
  );
};

export default ListContainer;
