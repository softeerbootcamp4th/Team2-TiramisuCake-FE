import { useEffect } from 'react';
import { useDynamicEventInfo, useStaticEventInfo } from '@/apis/main/query';
import {
  useEventDateSetterContext,
  useEventDateContext,
} from '@/store/context/useEventDateContext';
import { useLoginContext } from '@/store/context/useLoginContext';
import { useModalContext } from '@/store/context/useModalContext';
import { useTabContext } from '@/store/context/useTabContext';
import scrollToElementId from '@/utils/scrollToElementId';

export const useEventIntroduction = () => {
  const { staticData, isStaticLoading } = useStaticEventInfo();
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const isLoading = isStaticLoading || isDynamicLoading;

  const { setActiveTab } = useTabContext();
  const { isLogined } = useLoginContext();
  const { isOpen, setIsOpen } = useModalContext();

  const { startDate, endDate } = useEventDateContext();
  const { setStartDate, setEndDate } = useEventDateSetterContext();

  useEffect(() => {
    if (!isDynamicLoading && dynamicData) {
      setStartDate(dynamicData.result.startDate);
      setEndDate(dynamicData.result.endDate);
    }
  }, [isDynamicLoading, dynamicData]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleArrowClick = () => {
    scrollToElementId({ sectionId: 'fcfs', behavior: 'smooth' });
    setActiveTab('fcfs');
  };

  const text = dynamicData?.result.fcfsInfo.split('선')[0].trim();

  return {
    isLoading,
    isOpen,
    isLogined,
    startDate,
    endDate,
    staticData,
    dynamicData,
    text,
    handleModal,
    handleArrowClick,
  };
};
