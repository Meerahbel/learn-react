const Homesec4 = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="hidden md:block relative">
        <img src="/images/desktop/image-graphic-design.jpg" alt="red apple" />
        <div className="text-center absolute bottom-10">
          <p className="text-lg xl:text-2xl font-bold">Graphic Design</p>
          <p className="font-semibold lg:w-[60%] mx-auto">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="hidden md:block relative">
        <img src="/images/desktop/image-photography.jpg" alt="orange" />
        <div className="text-center absolute bottom-10">
          <p className="text-lg xl:text-2xl font-bold">Photography</p>
          <p className="font-semibold lg:w-[60%] mx-auto">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      {/* FOR MOBILE */}
      <div className="relative md:hidden">
        <img src="/images/mobile/image-graphic-design.jpg" alt="red apple" />
        <div className="text-center absolute bottom-10 p-5">
          <p className="text-lg xl:text-2xl font-bold">Graphic Design</p>
          <p className="font-semibold">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="relative md:hidden">
        <img src="/images/mobile/image-photography.jpg" alt="orange" />
        <div className="text-center absolute bottom-10 p-5">
          <p className="text-lg xl:text-2xl font-bold">Photography</p>
          <p className="font-semibold">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Homesec4;
