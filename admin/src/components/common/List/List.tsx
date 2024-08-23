import { getWeekDay } from '@/utils/getWeekDay';
import { WinFcfsEventList } from '@/type/winManagement/type';
import { EventFcFsEventData } from '@/type/eventManagement/type';

interface ListProps {
  onClick: () => void;
  events: EventFcFsEventData[] | WinFcfsEventList[];
}

const isEvent = (
  event: EventFcFsEventData | WinFcfsEventList
): event is EventFcFsEventData => {
  return (event as EventFcFsEventData).startTime !== undefined;
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
                    {(event as WinFcfsEventList).eventDate}
                  </p>
                  <p className=' text-sm'>
                    | {(event as WinFcfsEventList).winnerNum}명 |
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
