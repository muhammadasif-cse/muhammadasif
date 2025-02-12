import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import {Star} from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

export function TestimonialCard({image, quote, author, role, rating}: TestimonialCardProps) {
  return (
    <Card shadow="sm" className="m-0.5 relative h-[350px] md:h-[500px] w-full overflow-hidden">
      <CardBody className="absolute w-full inset-0 pt-4 sm:pt-6 md:pt-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-secondary mb-6 md:mb-16">
            18 Jan 2024
          </h2>

          <Card shadow="sm" className="relative md:max-w-lg xl:max-w-xs z-50 h-64">
            <CardHeader>
              <div className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-warning text-warning" />
                ))}
              </div>
            </CardHeader>
            <CardBody>
              <p className="!text-sm sm:text-base dark:text-white/70 text-black/70 text-justify">
                {quote}
              </p>
            </CardBody>
            <CardFooter>
              <div className="flex items-center gap-3 justify-between">
                <div className="order-last">
                  <p className="font-medium text-sm sm:text-base text-secondary">{author}</p>
                  <p className="text-xs sm:text-sm">{role}</p>
                </div>
                <div className="md:hidden block">
                  <Image
                    width={500}
                    height={500}
                    draggable={false}
                    src={image}
                    alt={`${author} avatar`}
                    className="w-12 order-1 h-12 sm:w-16 sm:h-16 object-cover rounded-full"
                  />
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div
          className="absolute top-0 right-0 w-[55%] h-full hidden md:block overflow-hidden"
          style={{
            clipPath: "polygon(68% 0, 100% 0, 100% 49%, 100% 100%, 66% 100%, 16% 51%, 16% 52%)",
          }}
        >
          <Image
            width={500}
            height={500}
            draggable={false}
            src={image}
            alt={`${author} background`}
            className="w-full h-[310px] sm:h-[350px] md:h-[500px] object-cover"
          />
        </div>
      </CardBody>
    </Card>
  );
}
