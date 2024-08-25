export const getTransformClass = (id: number) => {
  switch (id) {
    case 1:
      return 'translate-x-custom-1';
    case 2:
      return 'translate-x-custom-2';
    case 3:
      return '';
    case 4:
      return 'translate-x-custom-4';
    case 5:
      return 'translate-x-custom-5';
    default:
      return '';
  }
};
