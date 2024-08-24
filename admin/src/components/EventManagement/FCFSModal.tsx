import { Calendar } from '../ui/calendar';
import { TimePicker } from '@/components/ui/datetime-picker';
import Modal from '@/components/common/Modal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ko } from 'date-fns/locale';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import useFcFsRequest from '@/hooks/useFcFsRequest';
import { FcFsRequest } from '@/type/eventManagement/type';
import { format } from 'date-fns';

interface FCFSModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: (body: FcFsRequest) => void;
  startDate: string;
  endDate: string;
}

const FCFSModal = ({
  isOpen,
  handleClose,
  handleSave,
  startDate,
  endDate,
}: FCFSModalProps) => {
  const {
    fcfsRequest,
    endFCFSTime,
    handleStartDateChange,
    handleEndDateChange,
    handleStartTimeChange,
  } = useFcFsRequest({ startDate, endDate });
  const warning = '/svg/경고.svg';
  if (!isOpen) return null;

  return (
    <div className='top-[270px] left-[780px] flex fixed inset-0 w-fit h-fit flex-row'>
      <Modal
        handleCloseClick={handleClose}
        handleButtonClick={() => handleSave(fcfsRequest)}
      >
        <div className='flex flex-row mx-3'>
          <div className='space-x-2 flex flex-col h-[180px]'>
            <div className='ml-2 my-[9px] '>
              <div className='mb-2 flex flex-row'>
                시작 날짜
                <div className='relative flex items-center space-x-2 group'>
                  <img
                    src={warning}
                    alt='Warning'
                    className='h-6 w-6 cursor-pointer ml-2'
                  />
                  <div className='absolute bottom-full mb-2 hidden group-hover:block w-max bg-gray-700 text-white text-xs rounded-md p-2'>
                    시작 날짜와 종료 날짜는 같은 주여야 합니다.
                  </div>
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[280px] justify-start text-left font-normal',
                      !fcfsRequest.startDate && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {fcfsRequest.startDate ? (
                      format(new Date(fcfsRequest.startDate), 'PPP', {
                        locale: ko,
                      })
                    ) : (
                      <span>시작 날짜를 입력해주세요</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    lang='ko'
                    mode='single'
                    selected={new Date(fcfsRequest.startDate)}
                    onSelect={(selectedDate) =>
                      handleStartDateChange(selectedDate)
                    }
                    initialFocus
                    className='rounded-md border'
                  />
                </PopoverContent>
              </Popover>
            </div>
            <span className='mt-[11px] mb-[7px]'>종료 날짜</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
                    !fcfsRequest.endDate && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {fcfsRequest.endDate ? (
                    format(new Date(fcfsRequest.endDate), 'PPP', { locale: ko })
                  ) : (
                    <span>종료 날짜를 입력해주세요</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  lang='ko'
                  mode='single'
                  selected={new Date(fcfsRequest.endDate)}
                  onSelect={(selectedDate) => handleEndDateChange(selectedDate)}
                  initialFocus
                  className='rounded-md border'
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className='flex flex-col'>
            <div className='space-y-2 ml-4 my-auto'>
              <div className='flex flex-row space-x-2'>
                <p>오픈 시간</p>
                <div className='relative flex items-center group'>
                  <img
                    src={`/svg/경고.svg`}
                    alt='Warning'
                    className='h-6 w-6 cursor-pointer'
                  />
                  <div className='absolute bottom-full mb-2 hidden group-hover:block w-max bg-gray-700 text-white text-xs rounded-md p-2'>
                    오픈 시간은 오전 9시부터 6시 사이여야 합니다.
                  </div>
                </div>
              </div>
              <TimePicker
                date={
                  new Date(`${fcfsRequest.startDate}T${fcfsRequest.startTime}`)
                }
                onChange={handleStartTimeChange}
              />
            </div>
            <div className='space-y-2 ml-4 my-auto'>
              <p>종료 시간</p>
              <TimePicker date={endFCFSTime} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FCFSModal;
