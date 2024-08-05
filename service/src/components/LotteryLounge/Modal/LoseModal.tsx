import Badge from '@/components/common/Badge/Badge';

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
  return (
    <div className='absolute w-[40rem] h-[32.8rem] inline-flex flex-col gap-6 items-end'>
      <img
        src='/svg/closeIcon.svg'
        onClick={onClose}
        className='cursor-pointer'
      />
      <div className='w-full p-9 flex-col flex items-center text-center bg-white'>
        <Badge type='blue' text='초대한 친구 수만큼 +1'></Badge>
        <div className='py-2 font-semibold text-h-m text-transparent bg-clip-text bg-gradient-text-to-right'>
          잠깐! 친구 초대하고 복권을 더 긁어봐요
        </div>
        <div className='text-b-l text-gray-700 mb-4'>
          오늘은 아쉽지만, 내일 또 기회가 있어요
        </div>
        <div className='border border-primary flex h-10 p-2 items-center justify-center text-center gap-4'>
          <span className='text-primary text-b-s'>초대링크</span>
          <span id='shareURL' className='text-gray-500 text-b-m'>
            hyundaiEventShareCode_23213421
          </span>
          <img
            src={copyURL}
            alt='Copy URL'
            className='cursor-pointer'
            onClick={copyMyUrl}
          />
        </div>
      </div>
    </div>
  );
};
export default LoseModal;
