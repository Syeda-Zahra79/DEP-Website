import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "Digital Empowerment Pakistan has transformed my skills and boosted my career prospects. The comprehensive courses and experienced mentors have been invaluable.",
    author: "Ahmed Khan",
    position: "Software Engineer",
    image: "/images/t2.png",
  },
  {
    text: "I am grateful for the opportunities Digital Empowerment Pakistan has provided. The practical approach and real-world projects have given me confidence in my abilities.",
    author: "Ayesha Malik",
    position: "UI/UX Designer",
    image: "/images/t1.png",
  },
  {
    text: "The supportive community and knowledgeable instructors at Digital Empowerment Pakistan have made learning an enjoyable experience. Highly recommended!",
    author: "Bilal Ahmed",
    position: "Full Stack Developer",
    image: "/images/t4.png",
  },
  {
    text: "Digital Empowerment Pakistan's courses are well-structured and up-to-date with the latest industry trends. I've gained valuable skills that are directly applicable to my job.",
    author: "Sara Ali",
    position: "Data Scientist",
    image: "/images/t3.png",
  },
  {
    text: "Thanks to Digital Empowerment Pakistan, I was able to land my dream job. The hands-on projects and mentorship were crucial in my success.",
    author: "Zainab Fatima",
    position: "Cybersecurity Analyst",
    image: "/images/t5.png",
  },
];

const TestimonialSection2 = () => {
  const sliderReviewRef = useRef(null);
  const sliderNameRef = useRef(null);
  const [indec,setIndec] = useState(2)

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
  };



  const handleNameClick = (index) => {
    sliderReviewRef.current.slickGoTo(index);
    sliderNameRef.current.slickGoTo(index);
    setIndec(index)
  };

  return (
    <div className={styles.secondsection}>
      <h1 className={styles.headings}>
        What Our Students
        <br />
        Say About Us
      </h1>
      <h1 className={styles.testimonialheading}>
        Great
        <br />
        Platform
      </h1>

      <section className={styles.testimonialSection}>
        <Slider {...settings} ref={sliderReviewRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialContent}>
              <blockquote className={styles.blockquote}>
                <p>{testimonial.text}</p>
              </blockquote>
            </div>
          ))}
        </Slider>
        <div className={styles.mainTestimonialNavigation}>
          {testimonials.map((testimonial, index) => (
              <div className={styles.testimonialNavigation}>
                <img
                  src={testimonial.image}
                  alt={testimonial.author} 
                  onClick={() => handleNameClick(index)}
                  className={`${styles.testimonialImage} ${ indec == index && styles.active}`}
                />
              </div>
              ))}
        </div>
              <Slider {...settings} ref={sliderNameRef}>
              {testimonials.map((testimonial, index) => (
                <p className={styles.cite}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.position}</span>
                </p>
              ))}
              </Slider>
      </section>
    </div>
  );
};

export default TestimonialSection2;
