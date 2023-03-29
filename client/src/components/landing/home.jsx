import { useEffect, useState } from "react";
import "./home.css";
import { Navbar } from "../Navbars/Nav/Navbar";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(0);
  const [deal, setDeal] = useState(0);
  const [recommend, setRecommend] = useState(0);

  const image = [
    "https://img.faballey.com/images/banner/153d14e2-96d3-4c5d-9926-6288f095e588.jpg",
    "https://img.faballey.com/images/banner/b9c28c2a-d71a-429e-a7ac-d24e0088fe01.jpg",
    "https://img.faballey.com/images/banner/1f73766a-70bb-4ab7-bf0d-f414e80b8c6b.jpg",
  ];

  const crushing_img = [
    "https://img.faballey.com/images/banner/7c3259b7-7204-431c-9bc1-3afacd56c9c1.jpg",
    "https://img.faballey.com/images/banner/6846915c-aff5-4680-af8c-0a58e1087d01.jpg",
    "https://img.faballey.com/images/banner/645aeeb2-e442-4373-aef8-57e261ca4ca8.jpg",
  ];

  // const fresh_pro = [
  //   "https://img.faballey.com/images/product/DRS04862Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05722Z/1.JPG",
  //   "https://img.faballey.com/images/product/DRS04475Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05392Z/1.JPG",
  //   "https://img.faballey.com/images/product/DRS04141Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05381Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05632Z/1.JPG",
  //   "https://img.faballey.com/Images/Product/TOP04332Z/1.jpg",
  //   "https://img.faballey.com/Images/Product/TOP04567Z/1.jpg",
  // ];

  const fresh_pro = [
    {
      url: "https://img.faballey.com/images/product/DRS04862Z/1.JPG",
      title: "Blue Floral Halter Front Knot...",
      newPrice: "₹2400",
    },
    {
      url: "https://img.faballey.com/images/product/TOP05722Z/1.JPG",
      title: "Wine Front Knot Flared Sleeve...",
      newPrice: "₹1600",
    },
    {
      url: "https://img.faballey.com/images/product/DRS04475Z/1.JPG",
      title: "Green Square Neck Puff Sleeve...",
      newPrice: "₹1050",
      oldPrice: "₹2100",
    },
    {
      url: "https://img.faballey.com/images/product/TOP05392Z/1.JPG",
      title: "Dark Green Front Button Blouse",
      newPrice: "₹700",
      oldPrice: "₹1400",
    },
    {
      url: "https://img.faballey.com/images/product/DRS04141Z/1.JPG",
      title: "Wine Halter Belted Maxi Dress",
      newPrice: "₹1100",
      oldPrice: "₹2200",
    },
    {
      url: "https://img.faballey.com/images/product/TOP05381Z/1.JPG",
      title: "Black White Polka Belted Wrap...",
      newPrice: "₹750",
      oldPrice: "₹1500",
    },
    {
      url: "https://img.faballey.com/images/product/TOP05632Z/1.JPG",
      title: "Wine Mesh Frill High Neck Pep...",
      newPrice: "₹1500",
    },
    {
      url: "https://img.faballey.com/Images/Product/TOP04567Z/1.jpg",
      title: "Orange Floral Daisy Strappy M...",
      newPrice: "₹2200",
    },
  ];

  const dealImages = [
    "https://img.faballey.com/images/banner/12cff8a7-f3c5-43a2-820d-95f094d3b424.jpg",
    "https://img.faballey.com/images/banner/75c41143-ffeb-403a-b6c8-ee9f9a2d0fb4.jpg",
    "https://img.faballey.com/images/banner/be97ab35-6f6c-41ca-a430-effd76230404.jpg",
    "https://img.faballey.com/images/banner/8b8d1a24-78a5-4044-b67b-a554a25dd6b1.jpg",
    "https://img.faballey.com/images/banner/1b5b243e-6615-44e3-9e37-7536ff5ecef1.jpg",
    "https://img.faballey.com/images/banner/9fc44c5a-22f0-497d-90f6-71cb6bff897a.jpg",
  ];

  const spotlight_img = [
    "https://img.faballey.com/images/banner/be348662-b07f-4d90-8b6a-a2115c19276a.jpg",
    "https://img.faballey.com/images/banner/fc1f863a-1564-4145-8c3f-0744ed2ff904.jpg",
    "https://img.faballey.com/images/banner/bf14bd01-361f-46ba-9aaf-158c01785234.jpg",
    "https://img.faballey.com/images/banner/37bce8e6-98d0-46bd-86e3-49d03f0d0e05.jpg",
    "https://img.faballey.com/images/banner/ad5d0876-817a-40a0-b38c-482813fc6fb5.jpg",
    "https://img.faballey.com/images/banner/cde90353-548b-4a24-91eb-f2722fce47f2.jpg",
  ];

  const recommended_image = [
    {
      url: "https://img.faballey.com/Images/Product/DRS03366Z/1.jpg",
      title: "Mauve Lace Midi Dress",
      newPrice: "₹1200",
      oldPrice: "₹2400",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03291Z/1.jpg",
      title: "Sienna Striped Strappy Jumpsuit",
      newPrice: "₹1100",
      oldPrice: "₹2200",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03143Z/1.jpg",
      title: "Navy V Neck Wrap Dress",
      newPrice: "₹1100",
      oldPrice: "₹2200",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03087Z/1.jpg",
      title: "Wine Sleeveless Embellished Maxi Dress",
      newPrice: "₹1300",
      oldPrice: "₹2600",
    },
    {
      url: "https://img.faballey.com/Images/Product/TOP04519Z/1.jpg",
      title: "Grey Embellished Cowl Neck Top",
      newPrice: "₹800",
      oldPrice: "₹1600",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03285Z/1.jpg",
      title: "Pink Floral Ruffled Strappy Maxi Dress",
      newPrice: "₹1250",
      oldPrice: "₹2500",
    },
  ];

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => {};
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => prevIndex === prevIndex + 1);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => prevIndex === prevIndex - 1);
  };

  const bottomSlideRight = () => {
    setNewIndex((pre) => (pre = pre + 1));
  };

  const bottomSlideLeft = () => {
    setNewIndex((pre) => (pre = pre - 1));
  };

  // for moving deals seaction

  const dealNext = () => {
    setDeal((pre) => (pre = pre + 1));
  };

  const dealPrev = () => {
    setDeal((pre) => (pre = pre - 1));
  };

  // form moving recommended section

  const recommendeNext = () => {
    setRecommend((pre) => (pre = pre + 1));
  };

  const recommendPrevious = () => {
    setRecommend((pre) => (pre = pre - 1));
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="flex text-xs font-semibold text-center w-full">
          <div className="flex-1 py-2 bg-red-50">Party '21 Collection</div>
          <div className="flex-1 py-2 bg-red-200">EOSS | UPTO 70% OFF</div>
          <div className="flex-1 py-1 bg-red-50">
            📢PSA: Free shipping on orders above ₹ 3000
          </div>
        </div>

        <div className="my-2 mx-auto overflow-hidden w-full relative ">
          <div
            className="whitespace-nowrap transition ease-linear duration-1000"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {image.map((e, i) => (
              <img className="w-full inline-block" src={e} key={i} alt="img" />
            ))}
          </div>

          <div className="slideshowDots text-center absolute bottom-0 left-1/2 ">
            {image.map((_, id) => (
              <div
                key={id}
                className={index === id ? "slideshowDotActive" : "slideshowDot"}
                onClick={() => {
                  setIndex(id);
                }}
              ></div>
            ))}
          </div>

          <div
            onClick={nextSlide}
            className={
              index === image.length - 1
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪢
          </div>

          <div
            onClick={prevSlide}
            className={
              index === 0
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪡
          </div>
        </div>

        <div>
          <img
            src="https://img.faballey.com/images/banner/751a510b-deb8-46ab-9013-67aba9f3ec46.gif"
            alt="img"
          />
        </div>

        {/* crusing image section */}

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">WHAT WE'RE CRUSHING ON</p>
          <div className="flex">
            {crushing_img.map((e, id) => (
              <div className="flex-1 m-3" key={id}>
                <img src={e} className="w-full" alt="img" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">HOT RIGHT NOW</p>
          <img
            src="https://img.faballey.com/images/banner/65463db9-3cb2-44bb-aa35-9a1630b881d0.jpg"
            alt="img"
          />
        </div>

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">SIZZLING & SPANKIN' NEW</p>
          <img
            src="https://img.faballey.com/images/banner/6aa99031-703e-4b07-8cb6-e844ab2991cc.jpg"
            alt="img"
          />
        </div>

        {/* making first which have title and price slider with more than one pic */}

        <div className="slideshow relative">
          <div
            className="slideshowSlider transition ease-linear duration-1000 "
            style={{ transform: `translate(${-newIndex * 20}%, 0)` }}
          >
            {fresh_pro.map((e, i) => (
              <div className="slide font-semibold" key={i}>
                <img src={e.url} className="w-full" alt="img" />
                <div>{e.title}</div>
                <div className="mb-2">
                  <span className="text-rose-400 mr-2">{e.newPrice}</span>
                  <span className="line-through">{e.oldPrice} </span>
                </div>
              </div>
            ))}
          </div>

          <div
            onClick={bottomSlideRight}
            className={
              newIndex === fresh_pro.length - 5
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪢
          </div>

          <div
            onClick={bottomSlideLeft}
            className={
              newIndex === 0
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪡
          </div>
        </div>

        {/* deals you dont want to miss section*/}

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">DEALS YOU DON'T WANT TO MISS</p>
          <div className="slideshow relative">
            <div
              className="slideshowSlider transition ease-linear duration-1000 "
              style={{ transform: `translate(${-deal * 20}%, 0)` }}
            >
              {dealImages.map((e, i) => (
                <div className="slide" key={i}>
                  <img src={e} className="w-full" alt="img" />
                </div>
              ))}
            </div>

            <div
              onClick={dealNext}
              className={
                deal === dealImages.length - 5
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪢
            </div>

            <div
              onClick={dealPrev}
              className={
                deal === 0
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪡
            </div>
          </div>
        </div>

        {/* in the spotlight section */}

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">IN THE SPOTLIGHT SECTION</p>
          <div className="flex">
            {spotlight_img.map((e, id, i) => (
              <div className="flex-1 m-2" key={id}>
                <img src={e} className="w-full" alt="img" />
              </div>
            ))}
          </div>
        </div>

        {/* party wear 50% off section*/}

        <div className="mt-8">
          <img
            src="https://img.faballey.com/images/banner/28d5023b-1489-489c-898f-252213a87f8b.jpg"
            alt="img"
          />
        </div>

        {/* recommended for you section */}

        <div className="bg-gray-50 mt-10">
          <p className="m-4 py-4 text-center text-2xl font-semibold">
            RECOMMENDED FOR YOU
          </p>
          <div className="slideshow relative">
            <div
              className="slideshowSlider transition ease-linear duration-1000 "
              style={{ transform: `translate(${-recommend * 20}%, 0)` }}
            >
              {recommended_image.map((e, i) => (
                <div className="slide font-semibold" key={i}>
                  <img src={e.url} className="w-full" alt="img" />
                  <div>{e.title}</div>
                  <div className="mb-2">
                    <span className="text-rose-400 mr-2">{e.newPrice}</span>
                    <span className="line-through">{e.oldPrice} </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              onClick={recommendeNext}
              className={
                recommend === recommended_image.length - 5
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪢
            </div>

            <div
              onClick={recommendPrevious}
              className={
                recommend === 0
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪡
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
