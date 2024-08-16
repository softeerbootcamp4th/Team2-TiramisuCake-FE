import splitSentences from '@/utils/splitSentence';
import Modal from '../Modal';

interface EventModalProps {
  title: string;
  subtitle: string;
  image?: string;
  description: string;
  isQrModal?: boolean;
  code?: string;
  date?: string;
  handleClose: () => void;
}

const EventModal = ({
  title,
  subtitle,
  image,
  description,
  isQrModal = false,
  code,
  date,
  handleClose,
}: EventModalProps) => {
  return (
    <Modal handleClose={handleClose}>
      <div className='flex flex-col p-9 items-center gap-10 w-[616px]'>
        <div className='flex items-center gap-2 flex-col'>
          <div className='text-transparent bg-clip-text bg-gradient-text-to-right text-center text-h-m font-semibold leading-loose'>
            {title}
          </div>
          <div className=' text-gray-900 text-center font-semibold font-pretendard text-b-xl'>
            {subtitle}
          </div>
        </div>
        {image && (
          <div className='flex items-center'>
            <img src={image} />
          </div>
        )}
        {isQrModal && (
          <div className='flex flex-col items-center mt-[-30px]'>
            <div className='px-4 py-1 bg-green-100 text-b-m font-bold flex items-center justify-between mt-2 w-[131px]'>
              <span className='text-gray-900'>코드</span>
              <span className='text-green-500'>{code}</span>
            </div>
            <div className='mt-4 text-b-s text-gray-800 font-medium'>
              {date}
            </div>
          </div>
        )}

        <div className='text-center font-Pretendard text-[0.75rem] font-normal leading-[1rem] align-self-stretch text-gray-500'>
          {splitSentences(description)}
        </div>
      </div>
    </Modal>
  );
};
export default EventModal;
