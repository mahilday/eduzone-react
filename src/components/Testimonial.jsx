import React from "react";

const testimonials = [
  {
    image: `${process.env.PUBLIC_URL}/images/pictest1.jpg`,
    name: "David Martin",
    role: "Student",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pictest2.jpg`,
    name: "Goli Math",
    role: "Student",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pictest3.jpg`,
    name: "David Martin",
    role: "Student",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pictest3.jpg`,
    name: "Udo Fina",
    role: "Student",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pictest3.jpg`,
    name: "David Martin",
    role: "Student",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pictest1.jpg`,
    name: "Lorenza Sally",
    role: "Student",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  },
];
const Testimonial = () => {
  return (
    <div
      className="section-full overlay-black-middle bg-secondry content-inner-2 wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.2s"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/map-bg.png)`,
      }}
    >
      <div className="container">
        <div className="section-head text-white text-center">
          <h2 className="title">What People Are Saying</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="section-content">
          <div className="testimonial-two-dots owl-carousel owl-none owl-theme owl-dots-primary-full owl-loaded owl-drag">
            {testimonials.map((item) => (
              <div className="item">
                <div className="testimonial-15 quote-right">
                  <div className="testimonial-text ">
                    <p>{item.text}</p>
                  </div>
                  <div className="testimonial-detail clearfix">
                    <div className="testimonial-pic radius">
                      <img src={item.image} width="100" height="100" alt="" />
                    </div>
                    <strong className="testimonial-name">{item.name}</strong>{" "}
                    <span className="testimonial-position">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
