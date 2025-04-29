import sakura  from "../assets/video/sakura.mp4";

const Body2 = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src={sakura} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Body2;