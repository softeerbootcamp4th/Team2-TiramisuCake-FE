const backgroundImage = "/Rending.png";

const RendingSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};
export default RendingSection;
