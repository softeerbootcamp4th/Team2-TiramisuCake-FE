import Modal from '../common/Modal/Modal';

interface TutorialResultModalProps {
  handleClose: () => void;
}

const TutorialResultModal = ({ handleClose }: TutorialResultModalProps) => {
  return (
    <Modal handleClose={handleClose}>
      <div className='p-12 flex flex-col items-center gap-4'>
        <h2 className='text-h-m font-semibold text-transparent bg-clip-text bg-gradient-text-to-right'>
          튜토리얼 체험 완료!
        </h2>
        <img
          className='w-[150px] h-[150px]'
          src='check.png'
          alt='complete mission'
        />
        <div className='text-b-l font-semibold text-center justify-center items-center'>
          <br /> 튜토리얼을 완벽히 마스터하셨습니다. <br />
          이제 선착순 퀴즈에 도전하여 실력을 시험해보세요
        </div>
      </div>
    </Modal>
  );
};

export default TutorialResultModal;
