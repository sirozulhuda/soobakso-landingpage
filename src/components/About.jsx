import aboutImg from "../assets/img/about-img.png";
const About = () => {
  return (
    <div className="max-w-screen-2xl mt-18 mb-20" id="tentang">
      <h1 className="mb-10 md:mb-14 font-bold text-xl text-center text-primary">
        Tentang Kami
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row md:space-x-16">
        <img
          src={aboutImg}
          alt="about-image"
          className="w-[250px] md:w-[320px] md:ml-24"
        />
        <p className="text-slate-700 text-xs md:text-base font-medium text-center mt-4 px-16 md:w-1/2 md:text-start md:leading-8">
          SoBaksoo didirikan pada tahun 2020 dengan tujuan menghadirkan bakso
          berkualitas tinggi yang dapat dinikmati oleh semua kalangan. Berawal
          dari resep keluarga yang diwariskan secara turun-temurun, kami memulai
          usaha ini dengan dedikasi dan cinta untuk memberikan pengalaman
          kuliner yang tak terlupakan. Kami percaya bahwa makanan bukan hanya
          tentang rasa, tetapi juga tentang kenangan dan kebersamaan.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
