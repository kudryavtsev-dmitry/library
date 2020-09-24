import React, { useEffect, useRef, useState } from "react";
import "./ImageCarousel.css";

const slidesToShow = 1;
const slidesToScroll = 1;

export const ImageCarousel = ({ attachments }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [pos, setPos] = useState(0);

  const [itemWidth, setItemWidth] = useState(0);

  const [itemsCount, setItemsCount] = useState([]);

  useEffect(() => {
    const items = document.querySelectorAll(".ImageCarousel-item");

    const iw = containerRef.current.clientWidth / slidesToShow;

    items.forEach((item) => {
      item.style.minWidth = `${iw}px`;
    });

    setItemsCount(items.length);

    setItemWidth(iw);
  }, []);

  useEffect(() => {
    trackRef.current.style.transform = `translateX(${pos}px)`;
  }, [pos]);

  const prevBtnClickHandler = () => {
    setPos((position) => position + slidesToScroll * itemWidth);
  };

  const nextBtnClickHandler = () => {
    setPos((position) => position - slidesToScroll * itemWidth);
  };

  return (
    <div className="ImageCarousel-wrapper">
      <div ref={containerRef} className="ImageCarousel-container">
        <div ref={trackRef} className="ImageCarousel-track">
          {attachments.map((image) => (
            <div className="ImageCarousel-item">
              <img
                className="ImageCarousel-image"
                src={
                  image.image
                    ? `data:image/jpeg; base64 , ${image.image}`
                    : "https://russrevo.ru/seo/img/not-available.png"
                }
                alt="book"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="ImageCarousel-btnPrev"
        onClick={prevBtnClickHandler}
        disabled={pos === 0}
      >
        prev
      </button>
      <button
        className="ImageCarousel-btnNext"
        onClick={nextBtnClickHandler}
        disabled={pos <= -(itemsCount - slidesToShow) * itemWidth}
      >
        next
      </button>
    </div>
  );
};
