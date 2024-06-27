import contactImg from "../assets/img/contact.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mt-20 mb-20" id="kontak">
      <h1 className="font-bold text-xl text-center text-primary mb-10">
        Hubungi Kami
      </h1>
      <div className="flex flex-row md:flex-row justify-center items-center px-4 md:px-24 py-4 md:py-12 space-y-4 md:space-y-2 md:space-x-6 bg-[#F0F0F0] rounded-xl shadow-2xl mx-8 md:mx-72">
        <img
          src={contactImg}
          alt="contact-image"
          className="w-[180px] md:w-[280px] mb-4 md:mb-0"
        />
        <div className="flex flex-col justify-center items-center w-full md:w-auto">
          <form
            action=""
            className="w-full md:w-auto flex flex-col items-center"
          >
            <div className="input-with-icon mb-2 w-full md:w-[280px] h-[40px]">
              <i className="fas fa-user icon"></i>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-full px-4 rounded-xl"
              />
            </div>
            <div className="input-with-icon mb-2 w-full md:w-[280px] h-[40px]">
              <i className="fas fa-envelope icon"></i>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-full px-4 rounded-xl"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Message..."
              className="mb-2 w-full md:w-[280px] h-[120px] px-4 rounded-xl"
            />
            <button className="bg-primary text-white text-sm font-semibold px-6 py-2 rounded-xl hover:opacity-70 w-full">
              Kirim!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
