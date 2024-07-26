interface EventModalProps {
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const EventModal = ({ title, subtitle, image, description }: EventModalProps) => {
  return (
    <div className="w-[38.5rem] absolute p-9 bg-white flex flex-col items-center gap-10">
      <div className="flex items-center gap-2 flex-col">
        <div className=" text-green-400 text-center text-2xl font-semibold leading-loose">{title}</div>
        <div className=" text-gray-900 text-center font-semibold font-pretendard text-base">{subtitle}</div>
      </div>
      <div className="flex items-center">
        <img src={image}></img>
      </div>
      <div className="text-center font-Pretendard text-[0.75rem] font-normal leading-[1rem] align-self-stretch text-gray-500">
        {description}
      </div>
    </div>
  );
};
export default EventModal;
