import { InformItem } from '@/types/eventInfoItem';
import Badge from '@/components/common/Badge/Badge';
import splitSentences from '@/utils/splitSentence';

const EventInfoCard: React.FC<InformItem> = ({
  when,
  hint,
  winner,
  remaining,
  title,
  eventInformation,
  imageUrl,
}) => {
  return (
    <div className="w-[36.5rem] h-[21.8rem] flex flex-col items-center justify-center p-6 border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom">
      <div className="w-full">
        {when && hint && (
          <div className="text-center inline-flex flex-row justify-center gap-2">
            <Badge type="lightblue" text={when} />
            <Badge type="white" text={`힌트: ${hint}`} />
          </div>
        )}
        {winner && remaining && (
          <div className="text-center inline-flex flex-row justify-center gap-2">
            <Badge type="lightblue" text={`추첨 ${winner}`} />
            <Badge type="lightblue" text={`남은 경품 ${remaining}`} />
          </div>
        )}
        <h2 className=" text-b-xxl font-bold mt-2 mb-4 text-center text-gray-800">
          {title}
        </h2>
        <p className="text-sm font-Pretendard text-d-s self-stretch text-gray-600 text-center">
          {splitSentences(eventInformation)}
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        {imageUrl.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-full"
          >
            <img
              src={img}
              alt={`image-${index}`}
              className="mx-4"
              style={{ width: '246px', height: '134px', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfoCard;
