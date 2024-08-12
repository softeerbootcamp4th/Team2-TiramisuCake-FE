const baseURL = `${import.meta.env.VITE_SITE_URL}`;

export const getCarDetailInfo = async () => {
  const res = await fetch(`${baseURL}/main/car`);
  return res.json();
};
