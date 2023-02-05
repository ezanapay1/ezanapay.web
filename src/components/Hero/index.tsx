import HeroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="h-[90vh] grid grid-cols-2 px-5">
      {/* Left */}
      <div className="flex items-start space-y-5 p-10 flex-col justify-center">
        <h1 className="text-6xl font-bold w-72">Your Rent Partner</h1>
        <p className="text-2xl font-light w-96">
          EzanaPay helps you pay rent faster, flexibly and on time.
        </p>
        <button className="bg-primary/80 text-white px-4 py-2 font-semibold rounded-lg tracking-wide leading">
          Get Started
        </button>
      </div>

      {/* Right */}
      <div className="items-center flex justify-center">
        <div className="items-center flex justify-center rounded-full h-96 w-96">
          <img
            src={HeroImg}
            alt="Woman with Keys"
            className="relative h-full w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
