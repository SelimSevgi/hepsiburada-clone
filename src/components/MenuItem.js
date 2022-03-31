import React from "react";

export default function MenuItem({ data }) {
  console.log("subtitle : ", data.subtitle);
  console.log("uzunluk: ", data.title.length);
  return (
    <div className="w-full  flex flex-row justify-between items-start absolute  top-16  bg-white shadow-xl rounded-lg ">
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
            Kış, Yaz, 4 Mevsim, Bakım Ürünleri, Jant
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motor Yağı ve Yakıt Katkıları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Akü ve Akü Aksesuarları
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Aksesuar Ürünleri{" "}
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Paspas, Koltuk Kılıfı, Aydınlatma, Araç Dışı Aksesuar, Araç İçi
            Aksesuar, Silecek, Branda
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Ses Ve Görüntü Sistemleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Navigasyon, Araç İçi Kamera, Teyp, Hoparlör, Amfi
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Bakım ve Temizlik Ürünleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Cila, Süpürge, Yıkama Şampuanları, Yağlayıcılar, Genel Çok Amaçlı
            Temizlik Ürünleri, Diğer Tüm Temizlik ve Bakım Ürünleri
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Yedek Parçalar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Far, Buji, Fren Balatası, Filtre, Seyahat Ürünleri, Trafik ve İlk
            Yardım Setleri
          </span>
          <span className="font-[15px] font-bold text-[#ff6000]">
            Tüm Motosiklet Ürünleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Modelleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Aksesuarları
          </span>
          <span className="font-[15px] font-bold text-[#484848]">
            Motosiklet Sürücü Giyim
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Kask, Mont & Ceket, Pantolon, Eldiven, Bot & Ayakkabı, Yağmurluk,
            Sırt Çantası
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Koruma Ekipmanları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Çantaları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Bakım ve Temizlik
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
            Kış, Yaz, 4 Mevsim, Bakım Ürünleri, Jant
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motor Yağı ve Yakıt Katkıları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Akü ve Akü Aksesuarları
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Aksesuar Ürünleri{" "}
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Paspas, Koltuk Kılıfı, Aydınlatma, Araç Dışı Aksesuar, Araç İçi
            Aksesuar, Silecek, Branda
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Ses Ve Görüntü Sistemleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Navigasyon, Araç İçi Kamera, Teyp, Hoparlör, Amfi
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Bakım ve Temizlik Ürünleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Cila, Süpürge, Yıkama Şampuanları, Yağlayıcılar, Genel Çok Amaçlı
            Temizlik Ürünleri, Diğer Tüm Temizlik ve Bakım Ürünleri
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Yedek Parçalar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Far, Buji, Fren Balatası, Filtre, Seyahat Ürünleri, Trafik ve İlk
            Yardım Setleri
          </span>
          <span className="font-[15px] font-bold text-[#ff6000]">
            Tüm Motosiklet Ürünleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Modelleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Aksesuarları
          </span>
          <span className="font-[15px] font-bold text-[#484848]">
            Motosiklet Sürücü Giyim
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Kask, Mont & Ceket, Pantolon, Eldiven, Bot & Ayakkabı, Yağmurluk,
            Sırt Çantası
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Koruma Ekipmanları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Çantaları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Bakım ve Temizlik
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
            Kış, Yaz, 4 Mevsim, Bakım Ürünleri, Jant
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motor Yağı ve Yakıt Katkıları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Akü ve Akü Aksesuarları
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Aksesuar Ürünleri{" "}
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Paspas, Koltuk Kılıfı, Aydınlatma, Araç Dışı Aksesuar, Araç İçi
            Aksesuar, Silecek, Branda
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Ses Ve Görüntü Sistemleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Navigasyon, Araç İçi Kamera, Teyp, Hoparlör, Amfi
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Oto Bakım ve Temizlik Ürünleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Cila, Süpürge, Yıkama Şampuanları, Yağlayıcılar, Genel Çok Amaçlı
            Temizlik Ürünleri, Diğer Tüm Temizlik ve Bakım Ürünleri
          </span>
          <span className="font-[13px] font-bold text-[#484848] ">
            Yedek Parçalar
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Far, Buji, Fren Balatası, Filtre, Seyahat Ürünleri, Trafik ve İlk
            Yardım Setleri
          </span>
          <span className="font-[15px] font-bold text-[#ff6000]">
            Tüm Motosiklet Ürünleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Modelleri
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Aksesuarları
          </span>
          <span className="font-[15px] font-bold text-[#484848]">
            Motosiklet Sürücü Giyim
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Kask, Mont & Ceket, Pantolon, Eldiven, Bot & Ayakkabı, Yağmurluk,
            Sırt Çantası
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Koruma Ekipmanları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            Motosiklet Çantaları
          </span>
          <span className="font-[13px]  text-[#484848] ">
            {" "}
            Motosiklet Bakım ve Temizlik
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
