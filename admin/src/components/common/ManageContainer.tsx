import { PropsWithChildren } from 'react';
/**
 * @param Element
 * @returns
 */

const ManageContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='items-center bg-slate-100 w-[41.5rem] h-[47rem] mx-5 flex flex-col'>
      {children}
    </div>
  );
};

export default ManageContainer;
