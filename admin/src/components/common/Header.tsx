const Header = () => {
  return (
    <div className='w-full h-[87px] flex justify-between bg-[#F3F5F7] items-center py-4 px-56 z-50 '>
        <div className='flex gap-4 items-end'>
            <img src='/svg/logo.svg' alt='Logo' />
            <span className='text-xs'>[The new IONIQ 5와 그린라이트]</span>
        </div>
        <div className='flex gap-[8.5rem] text-lg font-bold '>
            <div className='flex gap-5'>
                <span className='px-[14px]'>이벤트 관리</span>
                <span className='px-[14px]'>당첨 관리</span>
            </div>
            <div className='text-[#3A8BA0] font-bold'>
                로그인 필요
            </div>
        </div>

    </div>
  )
}

export default Header