const Homesec2 = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full">
      <div className="flex flex-col items-center md:items-start px-5 py-10 lg:py-0 md:p-10 lg:p-0 lg:px-32 lg:pt-[12%] gap-5 md:w-[50%]">
        <h3 className="text-[#23303f] text-3xl font-bold text-center md:text-left">
          Transform your brand
        </h3>
        <p className="text-black/70 font-medium text-center md:text-left">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through competing visuals that do most
          of the marketing for you.
        </p>
        <p className="text-[#23303f] font-bold text-lg text-center md:text-left">
          LEARN MORE
        </p>
      </div>
      <div className="w-[50%] hidden md:block">
        <img
          src="/images/desktop/image-transform.jpg"
          alt="Egg with it's shadow"
        />
      </div>
      <div className="w-full block md:hidden">
        <img
          src="/images/mobile/image-transform.jpg"
          alt="Egg with it's shadow"
        />
      </div>
    </section>
  );
};

export default Homesec2;
