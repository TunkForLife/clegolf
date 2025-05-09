export default function Shock() {
  return (
    <>
      <div className="flex items-center justify-center  w-full h-screen bg-[url(/img/foto-6.jpg)] bg-center bg-cover">
        <div className="w-full h-full flex items-center overflow-y-auto gap-4 flex-col ">
          <img
            className="w-100 h-100 rounded-xl   shadow-xl/70 "
            src="/img/shockb.JPG"
            alt=""
          />
          <img
            className="w-100 h-100 rounded-xl   shadow-xl/70 "
            src="/img/shockb.JPG"
            alt=""
          />
          <img
            className="w-100 h-100 rounded-xl   shadow-xl/70 "
            src="/img/shockb.JPG"
            alt=""
          />
          <img
            className="w-100 h-100 rounded-xl   shadow-xl/70 "
            src="/img/shockb.JPG"
            alt=""
          />
        
        </div>
        <div className="w-full h-full flex flex-col text-white p-5">
          <div className="gap-3 flex flex-col">
            <div>
            <p className="text-4xl font-medium font-serif text-shadow-lg/35 pb-3">Descriptions</p>
            <p className="font-light">
              "Dirancang khusus untuk para pegolf, kaus kaki golf panjang ini
              menawarkan kombinasi sempurna antara kenyamanan, sirkulasi udara
              yang baik, dan dukungan optimal pada betis, sehingga membantu
              menjaga performa tetap maksimal di lapangan sembari menambah kesan
              profesional dan rapi dalam setiap ayunan."
            </p>
            </div>
            <div className="font-light">
            <p className="text-4xl font-medium font-serif text-shadow-lg/35 pb-3">Available colors</p>
            <p>1.White Stripe Red-Blue</p>
            <p>2.White Stripe blue</p>
            <p>3.White Stripe Black</p>
            <p>4.Black Stripe White</p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-20">
          <button className="pt-2 pb-2 pl-15 pr-15 bg-neutral-300 text-black shadow-xl/30 rounded-xl">Buy Here</button>
          </div>
        </div>
      </div>
    </>
  );
}
