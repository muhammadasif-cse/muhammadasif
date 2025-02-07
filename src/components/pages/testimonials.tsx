"use client";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "I hired Asif to create my branding website, and he exceeded my expectations. His creativity and attention to detail amazed me. The site is very user-friendly and perfectly reflects my brand. I will always recommend him!",
      name: "Amir Faysal",
      designation: "Founder Of Thinkystorm",
      src: "https://placehold.co/600x400",
    },
    {
      quote:
        "Working with Muhammad Asif to develop our education platform was a fantastic experience. He is highly professional and responsible with deadlines. The quality and depth of his work are commendable. We have been able to create an effective and user-friendly experience for our students through this platform.",
      name: "MD. Abu Junaed Sajib",
      designation: "Founder Of EduFixup",
      src: "https://placehold.co/600x400",
    },
    {
      quote:
        "I am extremely satisfied with the work done for my e-commerce website. Not only did he provide a beautiful design, but he also improved the overall user experience of the site. His passion and professionalism are truly remarkable. I would love to work with him again!",
      name: "Tarikul Islam Sushan",
      designation: "Business Owner",
      src: "https://placehold.co/600x400",
    },
  ];
  return (
    <div className="mt-40">
      <h1 className="2xl:text-7xl md:text-5xl text-3xl font-semibold text-center tracking-tight leading-[120%]">
        Success Stories from <br />
        My Development Journey
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
