import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./partner.module.css";
import Image from "next/image";

export default class PartnerList extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoSpeed: 1000,
    };
    return (
      <div className="w-[134rem] m-auto pb-[8rem]">
        <Slider {...settings} className={`${style.slick_list}`}>
          <div>
            <Image
              width={240}
              height={200}
              src="/3.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/5.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/9.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/14.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/15.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/partner10.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/18.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/partner8.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/partner9.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
          <div>
            <Image
              width={240}
              height={200}
              src="/16.png"
              alt="Image"
              className="my-[5rem]"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
