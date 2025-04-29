import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-zinc-800 py-10 px-4 sm:px-8 flex flex-col items-center text-gray-400 text-sm">
      {/* Nav Links */}
      <div className="w-full sm:w-3/4 md:w-2/5 flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-4 mb-6">
        <span className="font-semibold hover:text-white cursor-pointer">Home</span>
        <span className="font-semibold hover:text-white cursor-pointer">DCMA</span>
        <span className="font-semibold hover:text-white cursor-pointer">Privacy Policy</span>
      </div>

      {/* Disclaimer Text */}
      <div className="text-center max-w-xl leading-relaxed text-xs sm:text-sm px-2">
        <p>
          All the comics on this website are only previews of the original comics. There may be many language errors,
          character names, and story lines.
        </p>
        <p className="mt-2">
          For the original version, please buy the comic if it's available in your city.
        </p>
      </div>

      {/* Author Link */}
      <Link
        to="https://www.linkedin.com/in/nitish-kumar-kushwaha-365896263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="mt-10 font-bold hover:text-white text-sm">@Nikuku</h3>
      </Link>
    </div>
  );
};

export default Footer;
