import heroImg from "../assets/img/hero-img.png";
const Hero = () => {
  return (
    <div
      className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 mb-36"
      id="home"
    >
      <div className="flex flex-col-reverse justify-center items-center md:flex-row md:px-12 md:space-x-12">
        <div className="flex flex-col items-center justify-center  md:w-1/2">
          <h1 className="text-primary text-2xl text-center px-8 font-bold md:text-4xl md:tracking-wide md:text-start md:ml-4 ">
            Rasakan Kenikmatan Sejati di Setiap Gigitan.
          </h1>
          <h3 className="text-slate-800 text-xs mt-3 text-center md:px-12 px-14 md:text-start md:mr-1 md:text-sm">
            Temukan beragam varian bakso yang lezat dan nikmat, dibuat dari
            bahan-bahan segar pilihan hanya untuk Anda.
          </h3>
          <button className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-xl mt-4 hover:opacity-70 md:mr-[276px] md:text-base">
            Pesan Sekarang !
          </button>
        </div>
        <img src={heroImg} alt="hero-image" className="md:w-[350px]" />
      </div>
    </div>
  );
};

export default Hero;
