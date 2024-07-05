import React from "react";
import {Button} from "@nextui-org/button";
import Link from "next/link";

import {APISocial} from "@/assets/api/navigation";
import {IconFacebook} from "@/assets/icons/facebook";
import IconGithub from "@/assets/icons/github";
import IconLinkedin from "@/assets/icons/linkedin";
import {IconWhatsapp} from "@/assets/icons/whatsapp";
import TextStroke from "@/hooks/text-stroke";

const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 place-content-center place-items-center py-10">
      <div>
        <form action="" className="space-y-5">
          <input
            className="border-2 border-black rounded w-full p-3 placeholder:text-zinc-500 outline-none"
            id="name"
            name="name"
            placeholder="Your name*"
            type="text"
          />
          <input
            className="border-2 border-black rounded w-full p-3 placeholder:text-zinc-500 outline-none"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <input
            className="border-2 border-black rounded w-full p-3 placeholder:text-zinc-500 outline-none"
            id="name"
            name="name"
            placeholder="Your number (whatsapp exists)*"
            type="text"
          />
          <textarea
            className="border-2 border-black rounded w-full p-3 placeholder:text-zinc-500 outline-none"
            cols={30}
            id="message"
            name="message"
            placeholder="How can I help?*"
            rows={5}
          />
          <div className="flex items-center gap-3">
            <Button className="font-bold" color="primary" radius="sm" size="lg">
              Get In Touch
            </Button>
            <div className="flex gap-3 items-center font-bold">
              {APISocial.map(({icon, _id, url}) => (
                <Button
                  key={_id}
                  isIconOnly
                  as={Link}
                  className="border text-black hover:bg-black hover:text-light"
                  href={url}
                  radius="sm"
                  size="lg"
                  target="_blank"
                  variant="bordered"
                >
                  {icon === "github" && <IconGithub className="w-6 h-6" />}
                  {icon === "linkedin" && <IconLinkedin className="w-6 h-6" />}
                  {icon === "facebook" && <IconFacebook className="w-6 h-6" />}
                  {icon === "whatsapp" && <IconWhatsapp className="w-6 h-6" />}
                </Button>
              ))}
            </div>
          </div>
        </form>
      </div>
      <div>
        <article>
          <h1 className="text-4xl font-extrabold leading-relaxed">
            {`Let’s`}{" "}
            <TextStroke strokeColor="#000000" strokeWidth="0px" text="talk" textColor="#FFFFFF" />{" "}
            for <br /> Something special
          </h1>
          <p className="text-zinc-500 mt-5 mb-10">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and
            memorable interactive experiences.
          </p>
          <div>
            <h1 className="font-semibold text-2xl">muhammadasif.wd@gmail.com</h1>
            <h1 className="font-semibold text-2xl">+88 01830018193</h1>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Contact;
