import Badge from '@/components/common/Badge/Badge';
import { EventInfo } from '@/types/main/eventInfoType';

const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_section_bg.webp';
export interface EventProps {
  fcfsInfo: string;
  eventInfo: EventInfo;
}
const FcfsSection = ({ fcfsInfo, eventInfo }: EventProps) => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat w-full h-full min-h-screen min-w-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='w-[1100px] h-full my-auto flex flex-col items-center gap-4 px-6 py-12 border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom'>
        <div className='text-center inline-flex flex-row justify-center gap-3'>
          <Badge type='lightblue' text={fcfsInfo} />
          <Badge type='white' text={`힌트: 인테리어`} />
        </div>
        <h2 className=' text-h-l font-bold mt-2 mb-4 text-center text-gray-800'>
          {eventInfo.title}
        </h2>
        <p className='text-b-xl font-Pretendard self-stretch text-gray-600 text-center whitespace-pre-wrap'>
          {eventInfo.content}
        </p>
        <div className='flex mt-6 gap-12 items-center justify-evenly w-full'>
          <div className='flex flex-col items-center'>
            <img src='/ipad.svg' />
            <p className='font-semibold text-b-xl'>1등 최신형 아이패드</p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center'>
              <img src='/10.png' />
              <p className='font-semibold text-b-xl'>
                2등 신세계 10만원 상품권
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/5.png' />
              <p className='font-semibold text-b-xl'>
                2등 신세계 10만원 상품권
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FcfsSection;
