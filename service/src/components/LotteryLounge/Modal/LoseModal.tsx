import Badge from '@/components/common/Badge/Badge';
import Modal from '@/components/common/Modal/Modal';
import { useUrl } from '@/store/context/useUrl';

interface LoseModalProps {
  onClose: () => void;
}
const copyURL = '/svg/copy-gray.svg';

const copyMyUrl = () => {
  const urlTextElement = document.getElementById('shareURL');

  if (urlTextElement) {
    const urlText = urlTextElement.innerText;

    if (navigator.clipboard) {
      //최신 버전
      navigator.clipboard
        .writeText(urlText)
        .then(() => {
          console.log('클립보드 복사 완료 ', urlText);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    } else {
      //Internet Explorer
      const textArea = document.createElement('textarea');
      textArea.value = urlText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      console.log('클립보드 복사 완료: ', urlText);
    }
  } else {
    console.error('링크가 존재하지 않습니다.');
  }
};

const LoseModal = ({ onClose }: LoseModalProps) => {
  const { url } = useUrl();
  return (
    <Modal handleClose={onClose}>
      <div className='w-full p-9 flex-col flex items-center text-center bg-white'>
        <Badge type='blue' text='초대한 친구 수만큼 +1'></Badge>
        <div className='py-2 font-semibold text-h-m text-transparent bg-clip-text bg-gradient-text-to-right'>
          잠깐! 친구 초대하고 복권을 더 긁어봐요
        </div>
        <div className='text-b-l text-gray-700 mb-4'>
          친구가 공유한 링크로 로그인하면 기회가 늘어나요
        </div>
        <div className='border border-primary flex h-10 p-2 items-center justify-center text-center gap-4'>
          <span className='text-primary text-b-s'>초대링크</span>
          <span id='shareURL' className='text-gray-500 text-b-m'>
            {url}
          </span>
          <img
            src={copyURL}
            alt='Copy URL'
            className='cursor-pointer'
            onClick={copyMyUrl}
          />
        </div>
      </div>
    </Modal>
  );
};
export default LoseModal;
