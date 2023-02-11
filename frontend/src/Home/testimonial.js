import React from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const testimonials = (props) => {
  const info = [
    {
      name: "Vedant Daigavne",
      position: "Engineering at Upstox",
      img: "https://media.licdn.com/dms/image/D4D03AQH7twfuLl2iKg/profile-displayphoto-shrink_400_400/0/1668706658393?e=1676505600&v=beta&t=u3p-hEePsrTZkMvFfBMdqt_XGSdtzGwjRRup2RzPQd0",
      company:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "PCSB gave me a platform to explore different domains and contribute to building other websites. I enjoyed my time in PCSB, whether it was to manage an event or guide juniors in developing their skillsets.",
    },
    {
      name: "Amit Purohit",
      position: "Upcoming Analyst at Deutsche Bank",
      img: "https://drive.google.com/uc?export=view&id=1uYiOPXS_bOQDcHHwZf6EwCqOO07p3L_o",
      company:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "I joined PCSB in my second year, along with my friends, to explore the club. Our then heads chose me as a developer for building the PCSB website. So the journey started there, and the club became like a family as time passed. Building projects for the club and guiding juniors taught me a lot. I hope this legacy continues.",
    },
    {
      name: "Sunand Goel",
      position: "Upcoming Analyst at Barclays",
      img: "https://drive.google.com/uc?export=view&id=1Y5O8JStaM5gqIQyjI1zl9bOdWwoDN5Tc",
      // company: "https://logo-sign.com/logos/Deutsche-bank-logo.png",
      testimonials:
        "PCSB gave me the opportunity to work on live projects that eventually helped me score internship. It was PCSB through which I got a chance to strengthen my network, it gave me a chance to interact personally with  Founders, Directors, VPs, Content Creator and alumni working in various tech fields.",
    },
    {
      name: "Yash Rajput",
      position: "Upcoming Software Developer at media.net",
      img: "https://pps.whatsapp.net/v/t61.24694-24/267396679_118027147799061_5796901660932740601_n.jpg?ccb=11-4&oh=01_AdTPCjmBwHU0gxh8qQR7Z1iutnlL77-jfMWClw8DRyYdIg&oe=63A85ABA",
      company:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "PCSB is a platform where you can talk and discuss almost anything with your seniors without hesitation. It also provides an environment where you can learn more about industry-level things, and the bond with seniors is so strong that they support you at every point. I joined PCSB as a member of the cp team and met such outstanding seniors who helped me grow from a plant to a tree.",
    },
    {
      name: "Sania Edlabadkar",
      position: "Upcoming Analyst at Goldman Sachs",
      img: "https://media.licdn.com/dms/image/D5635AQGFOgTLaOaViA/profile-framedphoto-shrink_100_100/0/1659371876130?e=1671721200&v=beta&t=kFlRezkGEuQjJVT7mXkGg7teH0XMj6nb4hjgXlp5RWQ",
      company:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "Being in PCSB has helped me grow personally as well as professionally. PCSB has made me resourceful.  It has instilled in me entrepreneurial and leadership qualities. All the experience gained in hosting events and seeing them through till the end has also helped me in my placement interviews.",
    },
    {
      name: "Shantanu Jain",
      position: "Upcoming Software Developer at Rythmflows",
      img: "https://media.licdn.com/dms/image/C5603AQFNb7cWJ8Z1lw/profile-displayphoto-shrink_800_800/0/1630987834109?e=1676505600&v=beta&t=RQM4BdI2I_daCXyRScmZUxYoKSy8-a8fOObe7wRxgzo",
      company:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "Being in PCSB helped me to manage time and prioritize things and improve team management and people handling skills by being guided by seniors and then guiding the juniors. All the technical experience gained helped me in my internship also.",
    },
  ];

  return (
    <>
      <div className="container23">
        <div className="testim">
          <h1 className="testim-head mt-16">Testimonials</h1>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={"1"}
          breakpoints={{
            220: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            840: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1020: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1220: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          centeredSlides={true}
          loop={true}
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {info.map((member, i) => (
            <SwiperSlide key={`member${i}`}>
              <div className="h-auto w-[400px] rounded-lg bg-blue-900 bg-opacity-20 shadow-lg px-5 mt-36 mx-auto pb-10 transition ease-in-out hover:scale-105 transform -translate-y-2">
                <div className="w-full pt-1 mt-36 ">
                  <div className="overflow-hidden rounded-full border-4 border-full transition duration-300 ease-in-out transform hover:scale-110 border-cyan-600 w-24 h-24 -mt-16 mx-auto shadow-lg">
                    {/* <a href={linkedin ? linkedin : null} target="_blank" rel="noreferrer"> */}
                    <img src={member.img} alt="name" loading="lazy" />
                    {/* </a> */}
                  </div>
                </div>
                <div className="mt-4 ">
                  <p className="text-xl font-primary text-blue-500 font-bold text-center">
                    {member.name}
                  </p>
                  <p className="text-md font-secondary text-gray-300 text-center mt-2 mb-1">
                    {member.position}
                  </p>
                  {/* <img
                  src={member.company}
                  alt="company name"
                  className="scale-50"
                /> */}
                </div>
                {/* <div className="h-48 w-48 text-center">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"/>
      </div> */}

                {/* <div className="-mt-3"> */}

                <div className="w-full overflow-y-auto h-56">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="relative top-0 left-0 transform translate-x-2 translate-y-6 h-8 w-8 fill-current text-white opacity-10"
                  >
                    <path d="M42.991,9.131L42.991,9.131c0,0.459-0.28,0.882-0.712,1.036C38.619,11.472,33,16.271,33,24	c0,1.328,0.227,2,0.74,2c0.601,0,1.554-1,4.26-1c3.289,0,7,2.622,7,7.059C45,35.942,42.088,40,37,40c-4.135,0-10-3.083-10-12.093	c0-12.478,9.397-17.774,14.432-19.811C42.175,7.796,42.991,8.329,42.991,9.131z"></path>
                    <path d="M18.991,9.131L18.991,9.131c0,0.459-0.28,0.882-0.712,1.036C14.619,11.472,9,16.271,9,24	c0,1.328,0.227,2,0.74,2c0.601,0,1.554-1,4.26-1c3.289,0,7,2.622,7,7.059C21,35.942,18.088,40,13,40C8.865,40,3,36.917,3,27.907	c0-12.478,9.397-17.774,14.432-19.811C18.175,7.796,18.991,8.329,18.991,9.131z"></path>
                  </svg>
                  <p className="text-lg font-secondary text-gray-300  md:ml-12 sm:ml-16 sm:mr-4 text-left ">
                    {member.testimonials}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="relative transform -translate-x-full -translate-y-6 h-8 w-8 left-full  fill-current text-white opacity-10"
                  >
                    <path d="M5.009,38.88L5.009,38.88c0-0.459,0.28-0.882,0.712-1.036C9.381,36.539,15,31.74,15,24.011	c0-1.328-0.227-2-0.74-2c-0.601,0-1.554,1-4.26,1c-3.289,0-7-2.622-7-7.059c0-3.883,2.912-7.941,8-7.941c4.135,0,10,3.083,10,12.093	c0,12.478-9.397,17.774-14.432,19.811C5.825,40.215,5.009,39.682,5.009,38.88z"></path>
                    <path d="M29.009,38.88L29.009,38.88c0-0.459,0.28-0.882,0.712-1.036C33.381,36.539,39,31.74,39,24.011	c0-1.328-0.227-2-0.74-2c-0.601,0-1.554,1-4.26,1c-3.289,0-7-2.622-7-7.059c0-3.883,2.912-7.941,8-7.941c4.135,0,10,3.083,10,12.093	c0,12.478-9.397,17.774-14.432,19.811C29.825,40.215,29.009,39.682,29.009,38.88z"></path>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default testimonials;
