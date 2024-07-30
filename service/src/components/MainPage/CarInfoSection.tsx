const backgroundImage = "/CarSection.png";
const RendingSection = () => {
  return (
    <div>
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center bg-opacity-50 backdrop-blur-xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    </div>
  );
};
export default RendingSection;
