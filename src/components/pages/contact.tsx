import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="text-center">
        <h2 className="mt-3 text-2xl md:text-4xl font-black tracking-tight">
          Get In Touch<span className="text-secondary">.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          I’d love to hear from you! Whether you have a project idea, <br /> a
          collaboration opportunity, or just want to say hi, feel free to reach
          out.
        </p>
        <div className="w-full py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10">
          <div className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-bold text-xl">Email</h3>
            <p className="mt-2 text-muted-foreground">
              Let’s connect! Drop me a message anytime
              <span className="text-primary">.</span>
            </p>
            <Link
              className="mt-4 font-bold text-secondary"
              href="mailto:muhammadasif.cse@gmail.com"
            >
              muhammadasif.cse@gmail.com
            </Link>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-bold text-xl">Office</h3>
            <p className="mt-2 text-muted-foreground">
              Come say hello at my office
              <span className="text-secondary">.</span>
            </p>
            <Link
              className="mt-4 font-bold text-secondary"
              href="https://map.google.com"
              target="_blank"
            >
              1st Floor, 86, 3 New Eskaton <br />
              Road, Dhaka 1000
            </Link>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-bold text-xl">Phone</h3>
            <p className="mt-2 text-muted-foreground">
              Thursday-Fri from 10am to 12pm.
            </p>
            <Link
              className="mt-4 font-bold text-secondary"
              href="tel:01930248584"
            >
              +88 01930-248584
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
