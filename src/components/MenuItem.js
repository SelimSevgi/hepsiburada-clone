import React from "react";

export default function MenuItem({ data }) {
  console.log("subtitle : ", data.subtitle);
  console.log("uzunluk: ", data.title.length);
  return (
    <div className="w-full  flex flex-row justify-between items-start absolute  top-16  bg-white shadow-xl rounded-lg z-10">
      <div className="flex flex-row justify-between  w-full  ">
        <div className={data.subtitle === undefined ? "w-[0] " : "w-[20%] "}>
          {data.subtitle === undefined
            ? null
            : data.subtitle.map((t, i) => <p key={i}>{t}</p>)}
        </div>

        <div
          className={
            data.subtitle === undefined
              ? "grid grid-cols-3 grid-rows-[28] w-[60%] "
              : "grid grid-cols-2 w-[40%]"
          }
        >
          {data.subtitle === undefined ? (
            <>
              <div>
                {data.title.slice(0, data.title.length / 3).map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <div>
                {data.title
                  .slice(data.title.length / 3, (data.title.length * 2) / 3)
                  .map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
              </div>
              <div>
                {data.title
                  .slice((data.title.length * 2) / 3, data.title.length)
                  .map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
              </div>
            </>
          ) : (
            <>
              <div>
                {data.title.slice(0, data.title.length / 2).map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <div>
                {data.title
                  .slice(data.title.length / 2, data.title.length)
                  .map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
              </div>
            </>
          )}
        </div>
        <div className="grid grid-cols-2 w-[40%]">
          {data.img.map((t, i) => (
            <img key={i} src={t} alt="" />
          ))}
        </div>
      </div>
      {/* <div className="w-[60%] flex flex-row mt-12 ">
        <div className="w-[33.33%] flex flex-col text-left items-start ml-4 ">
          <span className="font-[15px] font-bold text-[#ff6000] ">
            Oto Aksesuar
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Lastik & Jantlar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            K????, Yaz, 4 Mevsim, Bak??m ??r??nleri, Jant
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motor Ya???? ve Yak??t Katk??lar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Ak?? ve Ak?? Aksesuarlar??
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Aksesuar ??r??nleri{" "}
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Paspas, Koltuk K??l??f??, Ayd??nlatma, Ara?? D?????? Aksesuar, Ara?? ????i
            Aksesuar, Silecek, Branda
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Ses Ve G??r??nt?? Sistemleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Navigasyon, Ara?? ????i Kamera, Teyp, Hoparl??r, Amfi
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Bak??m ve Temizlik ??r??nleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Cila, S??p??rge, Y??kama ??ampuanlar??, Ya??lay??c??lar, Genel ??ok Ama??l??
            Temizlik ??r??nleri, Di??er T??m Temizlik ve Bak??m ??r??nleri
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Yedek Par??alar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Far, Buji, Fren Balatas??, Filtre, Seyahat ??r??nleri, Trafik ve ??lk
            Yard??m Setleri
          </span>
          <span className="font-[15px] font-bold text-[#ff6000]">
            T??m Motosiklet ??r??nleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Modelleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Aksesuarlar??
          </span>
          <span className="font-[15px] font-bold text-[#484848]">
            Motosiklet S??r??c?? Giyim
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Kask, Mont & Ceket, Pantolon, Eldiven, Bot & Ayakkab??, Ya??murluk,
            S??rt ??antas??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Koruma Ekipmanlar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet ??antalar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Bak??m ve Temizlik
          </span>
        </div>
        <div className="w-[33.33%] flex flex-col text-left items-start ml-4 ">
          <span className="font-[15px] font-bold text-[#ff6000] ">
            Oto Aksesuar
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Lastik & Jantlar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            K????, Yaz, 4 Mevsim, Bak??m ??r??nleri, Jant
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motor Ya???? ve Yak??t Katk??lar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Ak?? ve Ak?? Aksesuarlar??
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Aksesuar ??r??nleri{" "}
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Paspas, Koltuk K??l??f??, Ayd??nlatma, Ara?? D?????? Aksesuar, Ara?? ????i
            Aksesuar, Silecek, Branda
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Ses Ve G??r??nt?? Sistemleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Navigasyon, Ara?? ????i Kamera, Teyp, Hoparl??r, Amfi
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Bak??m ve Temizlik ??r??nleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Cila, S??p??rge, Y??kama ??ampuanlar??, Ya??lay??c??lar, Genel ??ok Ama??l??
            Temizlik ??r??nleri, Di??er T??m Temizlik ve Bak??m ??r??nleri
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Yedek Par??alar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Far, Buji, Fren Balatas??, Filtre, Seyahat ??r??nleri, Trafik ve ??lk
            Yard??m Setleri
          </span>
          <span className="font-[15px] font-bold text-[#ff6000]">
            T??m Motosiklet ??r??nleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Modelleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Aksesuarlar??
          </span>
          <span className="font-[15px] font-bold text-[#484848]">
            Motosiklet S??r??c?? Giyim
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Kask, Mont & Ceket, Pantolon, Eldiven, Bot & Ayakkab??, Ya??murluk,
            S??rt ??antas??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Koruma Ekipmanlar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet ??antalar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Bak??m ve Temizlik
          </span>
        </div>
        <div className="w-[33.33%] flex flex-col text-left items-start ml-4 ">
          <span className="font-[15px] font-bold text-[#ff6000] ">
            Oto Aksesuar
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Lastik & Jantlar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            K????, Yaz, 4 Mevsim, Bak??m ??r??nleri, Jant
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motor Ya???? ve Yak??t Katk??lar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Ak?? ve Ak?? Aksesuarlar??
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Aksesuar ??r??nleri{" "}
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Paspas, Koltuk K??l??f??, Ayd??nlatma, Ara?? D?????? Aksesuar, Ara?? ????i
            Aksesuar, Silecek, Branda
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Ses Ve G??r??nt?? Sistemleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Navigasyon, Ara?? ????i Kamera, Teyp, Hoparl??r, Amfi
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Bak??m ve Temizlik ??r??nleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Cila, S??p??rge, Y??kama ??ampuanlar??, Ya??lay??c??lar, Genel ??ok Ama??l??
            Temizlik ??r??nleri, Di??er T??m Temizlik ve Bak??m ??r??nleri
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Yedek Par??alar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Far, Buji, Fren Balatas??, Filtre, Seyahat ??r??nleri, Trafik ve ??lk
            Yard??m Setleri
          </span>
          <span className="font-[15px] font-bold text-[#ff6000]">
            T??m Motosiklet ??r??nleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Modelleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Aksesuarlar??
          </span>
          <span className="font-[15px] font-bold text-[#484848]">
            Motosiklet S??r??c?? Giyim
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Kask, Mont & Ceket, Pantolon, Eldiven, Bot & Ayakkab??, Ya??murluk,
            S??rt ??antas??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Koruma Ekipmanlar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet ??antalar??
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Bak??m ve Temizlik
          </span>
        </div>
      </div>
      <div className="w-[40%] flex flex-col ">
        <div className=" flex flex-row justify-between  ">
          <div className="w-[50%] flex flex-col ">
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px]  rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px]  rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px]  rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px]  rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px]  rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px]  rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px]  rounded m-4 "
            ></img>
          </div>
          <div className="w-[50%]  flex flex-col ">
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px] rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px] rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px] rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px] rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px] rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px] rounded m-4 "
            ></img>
            <img
              src="https://design.hepsiburada.net/assets/storefront/banners/24-03-2020_1618818116037_1.png"
              alt="prop"
              className=" h-[80px] rounded m-4 "
            ></img>
          </div>
        </div>
        <div className="w-full ">
          <img
            src="https://images.hepsiburada.net/banners/0/banner_20211027130242.png"
            alt="prop"
            className=" bg-[#b4aeae] rounded m-4 "
          ></img>
          <img
            src="https://images.hepsiburada.net/banners/0/banner_20211027130242.png"
            alt="prop"
            className=" bg-[#b4aeae] rounded m-4 "
          ></img>
        </div>
      </div> */}
    </div>
  );
}
