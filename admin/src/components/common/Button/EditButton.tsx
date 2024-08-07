interface EditButtonProps {
  text: string;
  onClick: () => void;
}

const EditButton = ({ text, onClick }: EditButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex items-center ml-5 pl-4 pr-1.2 py-1.5 bg-gray-300 rounded-full shadow hover:bg-green-400 focus:outline-none'
    >
      <span className='text-black mr-2 hover:text-white'>{text}</span>
      <img
        src='/svg/navigate_next2.svg'
        alt='navigate Arrow'
        className='w-6 h-6 mr-1'
      />
    </button>
  );
};

export default EditButton;
