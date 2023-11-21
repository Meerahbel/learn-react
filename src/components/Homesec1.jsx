const Homesec1 = () => {
  return (
    <section className="bg-[#3ebfff] relative top-[-1px]">
      <h1 className="text-white text-center text-[3rem] md:text-[4rem] relative top-[100px] tracking-widest">
        WE ARE CREATIVES
      </h1>
      <img
        src="/images/icon-arrow-down.svg"
        alt="down arrow"
        className="absolute top-[60%] md:top-[50%] left-[50%]"
      />
      <img
        src="/images/desktop/image-header.jpg"
        alt="Image of a big orange"
        className="hidden md:block"
      />
      <img
        src="/images/mobile/image-header.jpg"
        alt="Image of a big orange"
        className="block md:hidden"
      />
    </section>
  );
};

export default Homesec1;
