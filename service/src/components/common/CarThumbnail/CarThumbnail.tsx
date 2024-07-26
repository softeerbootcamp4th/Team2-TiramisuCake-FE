interface CarThumbnailProps {
  subtitle: string;
  description: string;
  backgroundImage: string;
}

const CarThumbnail = ({ subtitle, description, backgroundImage }: CarThumbnailProps) => {
  return (
    <div
      className="w-[49rem] h-[26.5rem] absolute z-10 bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {" "}
      <div className="flex justify-end mt-12 mr-12 text-white">
        <div className="bg-green-400 py-2 px-[0.65rem]">자세히 보기</div>
      </div>
      <div className="flex flex-col items-start bottom-0 absolute px-12 py-12 text-white gap-4">
        <div className="text-left font-pretendard text-xl">{subtitle}</div>
        <div className="text-left font-pretendard text-[0.875rem]">{description} </div>
      </div>
      <div className="h-[80%] bg-gradient-to-b from-transparent via-opacity-20 to-gray-600"></div>
    </div>
  );
};
export default CarThumbnail;
