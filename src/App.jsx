import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import { imageData } from "./data.js";
import Arrow from "./widgets/Arrow";

export default function App() {
  // 从静态data中获取图片数据
  // const [imageId, setImageId] = useState(1);
  // const handlerArrowClick = (arrowName) => {
  //   if (arrowName === "prev") {
  //     setImageId((prevImageId) =>
  //       prevImageId === 1 ? imageData.length : prevImageId - 1
  //     );
  //   } else if (arrowName === "next") {
  //     setImageId((prevImageId) =>
  //       prevImageId === imageData.length ? 1 : prevImageId + 1
  //     );
  //   }
  // };

  // 从公共api获取随机图片
  const [imageId, setImageId] = useState(1);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchRandomImage = () => {
      axios
        .get("https://picsum.photos/1300/700", { responseType: "arraybuffer" })
        .then((response) => {
          const imageURL = URL.createObjectURL(new Blob([response.data]));
          setImageUrl(imageURL);
        })
        .catch((error) => {
          console.error("Error fetching random image:", error);
        });
    };

    fetchRandomImage();
  }, [imageId]);

  const handlerArrowClick = (arrowName) => {
    if (arrowName === "prev") {
      setImageId((prevImageId) => (prevImageId === 1 ? 4 : prevImageId - 1));
    } else if (arrowName === "next") {
      setImageId((prevImageId) => (prevImageId === 4 ? 1 : prevImageId + 1));
    }
  };

  return (
    <>
      <div className="container mx-auto w-[100vw] h-[100vh]  flex flex-col items-center justify-center">
        {/* title */}
        <header className="flex items-center justify-center w-full h-full basis-1/6 bg-bgColorHeader">
          <h1 className="text-5xl font-bold">Image Carousel</h1>
        </header>
        {/* main part */}
        <main className="relative flex items-center justify-center w-full h-full basis-5/6 ">
          {/* slider arrow */}
          <Arrow clickArrow={handlerArrowClick} />

          {/* image container */}
          <div className="flex items-center justify-center w-5/6 overflow-hidden h-[600px] rounded-3xl">
            {/* {imageData.map((data) => {
              if (data.id === imageId) {
                return (
                  <img
                    key={data.id}
                    className="object-scale-down"
                    src={data.url}
                    alt=""
                  />
                );
              }
            })} */}

            <img
              key={imageId}
              className="object-scale-down"
              src={imageUrl}
              alt=""
            />
          </div>
        </main>
      </div>
    </>
  );
}
