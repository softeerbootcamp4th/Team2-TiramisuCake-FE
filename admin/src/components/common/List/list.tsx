type Event = {
  id: string;
  period: string;
  winners?: number;
};

interface ListProps {
  onClick: () => void;
  events: Event[];
}

/**
 * {index < events.length - 1 && (
            <hr className='border-gray-300 w-[90%] mx-auto' />
          )}
            <div className='mr-4'>
            <EditButton text='수정하기' onClick={onClick} />
          </div>
 */
const List = ({ events }: ListProps) => {
  return (
    <div className='mb-2'>
      {events.map((event) => (
        <div
          key={event.id}
          className={`flex items-center justify-between p-3 bg-white rounded-lg`}
        >
          <div className='ml-4 flex items-center space-x-4'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200'>
              <span className='text-lg font-medium'>{event.id}</span>
            </div>
            <div className='flex items-center space-x-24'>
              <p className='text-sm '>{event.period}</p>
              {event.winners !== undefined && (
                <p className=' text-sm'>| {event.winners}명 |</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
