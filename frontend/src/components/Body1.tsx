import forest from "../assets/video/forest.mp4";

const Body1 = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src={forest} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Body1;
