import Modal from '../common/Modal';
import { Input } from '../ui/input';
interface Props {
  handleClose: () => void;
}

const WinnersProbabilitiesModal = ({ handleClose }: Props) => {
  return (
    <Modal
      handleButtonClick={() => {
        console.log('hi');
      }}
      handleCloseClick={handleClose}
    >
      <div className='flex flex-col w-[241px] h-[220px] items-end'>
        <div className='underline decoration-1 pr-2 text-xs'>당첨확률</div>
        <div className='flex flex-col gap-[1.2rem] items-center w-full'>
          <div className='flex gap-4 w-full items-center justify-evenly'>
            <span>1등</span>
            <Input className='w-[88px] h-12' />
            <span className='underline decoration-1'>0.0000</span>
          </div>
          <div className='flex gap-4 w-full items-center justify-evenly'>
            <span>2등</span>
            <Input className='w-[88px] h-12' height={48} />
            <span>0.0000</span>
          </div>
          <div className='flex gap-4 w-full items-center justify-evenly'>
            <span>3등</span>
            <Input className='w-[88px] h-12' height={48} />
            <span>0.0000</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WinnersProbabilitiesModal;
