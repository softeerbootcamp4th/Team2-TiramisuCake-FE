const texts = ['I', 'O', 'N', 'I', 'Q', '5'];

interface AttendanceProps {
  counts: number;
}

const Attendance = ({ counts }: AttendanceProps) => {
  const defaultStyle = {
    background: 'rgba(255, 255, 255, 0.6)', // 흰색의 투명도 조절
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    strokeWidth: '1px',
    stroke: '#FFFFFF',
    backdropFilter: 'blur(30px)',
  };

  const createDynamicStyle = (degree: number) => ({
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    background: `conic-gradient(from ${degree}deg, #FFFFFF 0%, #BBE0E6 100%)`,
    animation: `rotateCircle 1s linear 1`,
  });

  const getTextColorClass = (index: number) =>
    index < counts ? 'text-primary' : 'text-gray-300';

  const getAttendanceStyle = (index: number) =>
    index < counts ? createDynamicStyle(index * 60) : defaultStyle;

  const lastTextColorClass = counts > 6 ? 'text-primary' : 'text-gray-300';
  const lastStyle = counts > 6 ? createDynamicStyle(0) : defaultStyle;

  return (
    <div className='flex flex-col items-center gap-4 self-stretch'>
      <div className='text-center text-gray-800 font-normal text-b-m line-height-[1.125rem]'>
        연속 7일 응모하면 특별한 선물을 드려요! (1인 1회 한정)
      </div>
      <div className='flex items-center gap-4'>
        {texts.map((text, index) => (
          <div key={index} className='items-center text-center justify-center'>
            <div className='relative flex items-center justify-center'>
              <div
                className='self-stretch'
                style={getAttendanceStyle(index)}
              ></div>
              <div
                className={`absolute text-h-l font-bold ${
                  index < counts
                    ? 'bg-gradient-attend bg-clip-text text-transparent'
                    : 'text-gray-400'
                }`}
              >
                {text}
              </div>
            </div>
            <div className={`mt-2 text-d-m ${getTextColorClass(index)}`}>
              {index + 1}일차
            </div>
          </div>
        ))}
        <div className='items-center text-center justify-center'>
          <div className='relative flex items-center justify-center'>
            <div className='self-stretch' style={lastStyle}>
              <img
                className='absolute inset-0 m-auto'
                alt='starbucks icon'
                src={
                  counts > 6
                    ? '/svg/출석완료/스벅.svg'
                    : '/svg/출석미완/스벅.svg'
                }
              />
            </div>
          </div>
          <div className={`mt-2 text-d-m ${lastTextColorClass}`}>7일차</div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
