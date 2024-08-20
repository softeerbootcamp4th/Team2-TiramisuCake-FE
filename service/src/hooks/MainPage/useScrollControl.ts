import { RefObject, useEffect, useState, useCallback } from 'react';

interface UseScrollControlProps {
  rendingSectionRef: RefObject<HTMLDivElement>;
  eventSectionRef: RefObject<HTMLDivElement>;
  carInfoSectionRef: RefObject<HTMLDivElement>;
  fcfsSectionRef: RefObject<HTMLDivElement>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const useScrollControl = ({
  rendingSectionRef,
  eventSectionRef,
  carInfoSectionRef,
  fcfsSectionRef,
  activeTab,
  setActiveTab,
}: UseScrollControlProps) => {
  const [isScrollControlled, setIsScrollControlled] = useState(false);

  const handleScroll = useCallback(() => {
    if (isScrollControlled) return;

    const rendingSection = rendingSectionRef.current;
    const eventSection = eventSectionRef.current;
    const carInfoSection = carInfoSectionRef.current;
    const fcfsSection = fcfsSectionRef.current;

    if (rendingSection && eventSection && carInfoSection && fcfsSection) {
      const scrollPosition = window.scrollY;

      const rendingOffset = rendingSection.offsetTop;
      const eventOffset = eventSection.offsetTop;
      const fcfsOffset = fcfsSection.offsetTop;
      const carInfoOffset = carInfoSection.offsetTop;

      const windowHeight = window.innerHeight;

      if (
        scrollPosition >= rendingOffset &&
        scrollPosition < eventOffset - windowHeight / 2
      ) {
        setActiveTab('rending');
      } else if (
        scrollPosition >= eventOffset - windowHeight / 2 &&
        scrollPosition < fcfsOffset - windowHeight / 2
      ) {
        setActiveTab('event');
      } else if (
        scrollPosition >= fcfsOffset - windowHeight / 2 &&
        scrollPosition < carInfoOffset - windowHeight / 2
      ) {
        setActiveTab('fcfs');
      } else if (scrollPosition >= carInfoOffset - windowHeight / 2) {
        setActiveTab('ioniq5');
      }
    }
  }, [
    isScrollControlled,
    rendingSectionRef,
    eventSectionRef,
    fcfsSectionRef,
    carInfoSectionRef,
    setActiveTab,
  ]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    let sectionRef: RefObject<HTMLDivElement> | null = null;
    switch (activeTab) {
      case 'rending':
        sectionRef = rendingSectionRef;
        break;
      case 'event':
        sectionRef = eventSectionRef;
        break;
      case 'fcfs':
        sectionRef = fcfsSectionRef;
        break;
      case 'ioniq5':
        sectionRef = carInfoSectionRef;
        break;
      default:
        sectionRef = rendingSectionRef;
        break;
    }

    if (sectionRef && sectionRef.current) {
      setIsScrollControlled(true);

      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        setIsScrollControlled(false);
      }, 500);
    }
  }, [
    activeTab,
    rendingSectionRef,
    eventSectionRef,
    fcfsSectionRef,
    carInfoSectionRef,
  ]);

  return { isScrollControlled, setIsScrollControlled };
};

export default useScrollControl;
