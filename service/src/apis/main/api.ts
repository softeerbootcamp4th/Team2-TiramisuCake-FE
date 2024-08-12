export const getCarDetailInfo = async () => {
  const res = await fetch('https://softeer.shop/main/car');
  return res.json();
};
