const texts = ['I', 'O', 'N', 'I', 'Q', '5'];

interface AttendanceProps {
  counts: number;
}

const Attendance = ({ counts }: AttendanceProps) => {
  //const counts = 3;

  const defaultStyle = {
    background: 'rgba(255, 255, 255, 0.6)', // 흰색의 투명도 조절
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    strokeWidth: '1px',
    stroke: '#FFFFFF',
    backdropFilter: 'blur(30px)',
  };

  const dynamicStyle = {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    background: `conic-gradient(#FFFFFF 0%, #BBE0E6 100%)`,
    animation: `rotateCircle 1s linear 1`,
  };

  const lastTextColorClass = 6 < counts ? 'text-primary' : 'text-gray-300';
  const lastStyle = 6 < counts ? dynamicStyle : defaultStyle;
  return (
    <div className='flex flex-col items-center gap-4 self-stretch'>
      <div className='text-center text-gray-800 font-normal text-b-m line-height-[1.125rem]'>
        연속 7일 응모하면 특별한 선물을 드려요! (1인 1회 한정)
      </div>
      <div className='flex items-center gap-4'>
        {texts.map((text, index) => {
          const degree = index * 60;

          const dynamicStyle = {
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            background: `conic-gradient(from ${degree}deg, #FFFFFF 0%, #BBE0E6 100%)`,
            animation: `rotateCircle 1s linear 1`,
          };

          const textColorClass =
            index < counts ? 'text-primary' : 'text-gray-300';

          const attendanceClass = index < counts ? dynamicStyle : defaultStyle;

          return (
            <div
              key={index}
              className='items-center text-center justify-center'
            >
              <div className='relative flex items-center justify-center'>
                <div className='self-stretch' style={attendanceClass}></div>
                {index < counts ? (
                  <div className='bg-gradient-attend bg-clip-text text-transparent absolute text-h-l font-bold'>
                    {text}
                  </div>
                ) : (
                  <div className='absolute text-h-l font-bold text-gray-400'>
                    {text}
                  </div>
                )}
              </div>
              <div className={`mt-2 text-d-m ${textColorClass}`}>
                {index + 1}일차
              </div>
            </div>
          );
        })}
        <div className='items-center text-center justify-center'>
          <div className='relative flex items-center justify-center'>
            <div className='self-stretch' style={lastStyle}>
              <img
                className='absolute inset-0 m-auto'
                src={
                  counts > 6
                    ? '/svg/출석완료/스벅.svg'
                    : '/svg/출석미완/스벅.svg'
                }
              ></img>
            </div>
          </div>
          <div className={`mt-2 text-d-m ${lastTextColorClass}`}>7일차</div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
