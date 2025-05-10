import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Bag1() {
   const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-around p-3 bg-green-800 text-white shadow-xl/20  z-10">
        <div className="">
          <h1 className="text-3xl font-bold text-shadow-lg/25 font-mono">
            SewaStickGolf
          </h1>
        </div>
        <div className="flex items-center gap-5 font-bold text-shadow-lg/25">
          <p
            onClick={() => navigate("/")}
            className="font-bold text-shadow-lg/25 cursor-pointer"
          >
            Home
          </p>
          <a
            onClick={() => navigate("/")}
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => navigate("/")}
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#rental"
          >
            Rental
          </a>
          <a
            onClick={() => navigate("/")}
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#product"
          >
            Product
          </a>
          <a
            onClick={() => navigate("/")}
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center  w-full h-[91vh] bg-[url(/img/foto-6.jpg)] bg-center bg-cover">
        <div className="flex items-center justify-center w-full h-full">
          <img
            className="w-100 h-100 rounded-xl shadow-xl/50"
            src="/img/shockb.JPG"
            alt=""
          />
        </div>
        <div className="w-full h-full flex flex-col text-white p-5">
          <div className="gap-3 flex flex-col">
            <div>
              <p className="text-4xl font-medium font-serif text-shadow-lg/35 pb-3">
                Descriptions
              </p>
              <p className="font-light">
                "Dirancang khusus untuk para pegolf, kaus kaki golf panjang ini
                menawarkan kombinasi sempurna antara kenyamanan, sirkulasi udara
                yang baik, dan dukungan optimal pada betis, sehingga membantu
                menjaga performa tetap maksimal di lapangan sembari menambah
                kesan profesional dan rapi dalam setiap ayunan."
              </p>
            </div>
            <div className="font-light">
              <p className="text-4xl font-medium font-serif text-shadow-lg/35 pb-3">
                Available colors
              </p>
              <p>1.White Stripe Red-Blue</p>
              <p>2.White Stripe blue</p>
              <p>3.White Stripe Black</p>
              <p>4.Black Stripe White</p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-20">
            <button className="flex gap-1 items-center justify-center transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer pt-2 pb-2 pl-15 pr-15 bg-white text-black shadow-xl/30 rounded-xl">
              <FaWhatsapp size={30} color="green" />
              <p className="text-xl font-medium font-mono text-green-700">
                Whatsapp
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
