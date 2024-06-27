import cardImg1 from "../assets/img/bakso-halus.png";
import cardImg2 from "../assets/img/bakso-urat.png";
import cardImg3 from "../assets/img/bakso-kikil.png";
import cardImg4 from "../assets/img/es-teh.png";
import cardImg5 from "../assets/img/es-jeruk.png";
import cardImg6 from "../assets/img/es-kuwut.png";

const Menu = () => {
  return (
    <div className="max-w-screen-2xl mt-20 mb-20" id="menu">
      {/* Bakso Section */}
      <h3 className="text-primary text-2xl text-start px-8 font-bold md:text-3xl md:tracking-wide md:text-start md:ml-4 ">
        Menu
      </h3>
      <div className="flex flex-col justify-center items-center mt-4">
        <h3 className="text-xl font-semibold mb-8">Bakso</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:gap-12">
          {/* Card 1 */}
          <div className="bg-[#E8E8E8] shadow-xl rounded-2xl px-4 py-4 hover:translate-y-4 md:hover:translate-y-8 hover:shadow-2xl transition-all duration-200">
            <div className="flex flex-col justify-center items-center">
              <img
                src={cardImg1}
                alt="Bakso Halus"
                className="object-cover w-[240px] md:h-[180px]"
              />
              <h2 className="text-xl font-semibold text-center mt-6">
                Bakso Halus
              </h2>
              <p className="text-center mb-6">IDR 20.000</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#E8E8E8] shadow-xl rounded-2xl px-4 py-8 hover:translate-y-4 hover:shadow-2xl md:hover:translate-y-8 transition-all duration-200">
            <div className="flex flex-col justify-center items-center">
              <img src={cardImg2} alt="Bakso Urat" className="object-cover" />
              <h2 className="text-xl font-semibold text-center mt-8">
                Bakso Urat
              </h2>
              <p className="text-center mb-6">IDR 25.000</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#E8E8E8] shadow-xl rounded-2xl px-4 py-8 hover:translate-y-4 md:hover:translate-y-8 hover:shadow-2xl transition-all duration-200">
            <div className="flex flex-col justify-center items-center">
              <img
                src={cardImg3}
                alt="Bakso Kikil"
                className="object-cover md:h-[160px]"
              />
              <h2 className="text-xl font-semibold text-center mt-7">
                Bakso Kikil
              </h2>
              <p className="text-center mb-6">IDR 35.000</p>
            </div>
          </div>
        </div>

        {/* Minuman Section */}
        <div className="md:flex md:flex-col md:items-center">
          <h1 className="text-xl text-center font-semibold mt-24 md:mt-12 mb-8">
            Minuman
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:gap-12">
            {/* Card 4 */}
            <div className="bg-[#E8E8E8] shadow-xl rounded-2xl px-16 py-8 hover:translate-y-4 md:hover:translate-y-8 hover:shadow-2xl transition-all duration-200">
              <div className="flex flex-col justify-center items-center">
                <img src={cardImg4} alt="Es Teh" className="object-cover" />
                <h2 className="text-xl font-semibold text-center mt-6">
                  Es Teh
                </h2>
                <p className="text-center mb-6">IDR 5.000</p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-[#E8E8E8] shadow-xl rounded-2xl px-16 py-2 hover:translate-y-4 md:hover:translate-y-8 hover:shadow-2xl transition-all duration-200">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={cardImg5}
                  alt="Es Jeruk"
                  className="object-cover md:h-[160px]"
                />
                <h2 className="text-xl font-semibold text-center mt-8">
                  Es Jeruk
                </h2>
                <p className="text-center mb-6">IDR 7.000</p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-[#E8E8E8] shadow-xl rounded-2xl px-16 py-2 hover:translate-y-4 md:hover:translate-y-8 hover:shadow-2xl transition-all duration-200">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={cardImg6}
                  alt="Es Kuwut"
                  className="object-cover md:h-[180px]"
                />
                <h2 className="text-xl font-semibold text-center mt-3">
                  Es Kuwut
                </h2>
                <p className="text-center mb-6">IDR 10.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
