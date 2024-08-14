import { FCFSEventList } from '@/type/main/type';
import { getWeekDay } from '@/utils/getWeekDay';

type Event = {
  round: string;
  startTime: string;
  endTime: string;
};

interface ListProps {
  onClick: () => void;
  events: Event[] | FCFSEventList[];
}

const isEvent = (event: Event | FCFSEventList): event is Event => {
  return (event as Event).startTime !== undefined;
};

const List = ({ events = [] }: ListProps) => {
  return (
    <div className='mb-2'>
      {events.map((event) => (
        <div
          key={event.round}
          className={`flex items-center justify-between p-3 bg-white rounded-lg`}
        >
          <div className='ml-4 flex items-center space-x-4'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200'>
              <span className='text-lg font-medium'>{event.round}</span>
            </div>
            <div className='flex items-center space-x-24'>
              {isEvent(event) ? (
                <p className='text-sm '>
                  {event.startTime}
                  {getWeekDay(event.startTime)}~{event.endTime}
                  {getWeekDay(event.endTime)}
                </p>
              ) : (
                <>
                  <p className='text-sm '>
                    {(event as FCFSEventList).eventDate}
                  </p>
                  <p className=' text-sm'>
                    | {(event as FCFSEventList).winnerNum}명 |
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
