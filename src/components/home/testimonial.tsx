import {Card, CardBody} from "@nextui-org/card";
import {Icon} from "@iconify/react";

import {IconQuote} from "@/assets/icons/quote";
import {TTestimonial} from "@/types/testimonial.type";
import Alert from "@/shared/alert";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Testimonial = async () => {
  let data;
  let error;
  let loading = true;

  try {
    data = await getData();
  } catch (err) {
    error = (err as Error).message;
  } finally {
    loading = false;
  }

  return (
    <section>
      <article>
        <h1 className="text-4xl leading-relaxed text-center">
          My <span className="font-extrabold">Testimonial</span>
        </h1>
      </article>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-10">
        {loading
          ? "loading"
          : data?.data?.map(({_id, name, review, position, img}: TTestimonial) => (
              <Card key={_id} className="group">
                <CardBody className="p-10 dark:group-hover:bg-light group-hover:bg-primary group-hover:text-light dark:group-hover:text-primary">
                  <div className="relative w-24 h-24 mx-auto">
                    {/* <Image
                      alt=""
                      className="rounded-full w-24 h-24 mx-auto border border-primary bg-zinc-300 object-cover"
                      height={96}
                      src={img}
                      width={96}
                    /> */}
                    <Icon
                      className="rounded-full w-24 h-24 mx-auto border border-primary bg-zinc-300 object-cover"
                      height={90}
                      icon={img}
                      width={90}
                    />
                    <div className="flex absolute bottom-0 right-0 rounded-full w-8 h-8 bg-primary dark:bg-light group-hover:bg-light dark:group-hover:bg-primary group-hover:text-primary dark:group-hover:text-light dark:text-primary text-light">
                      <IconQuote className="w-fit h-fit mx-auto my-auto" />
                    </div>
                  </div>
                  <div className="pt-6 text-center">
                    <p>{review}</p>
                    <div className="w-1/3 mx-auto h-1 bg-primary dark:bg-zinc-500 group-hover:bg-light dark:group-hover:bg-primary mb-10 mt-3" />
                    <h3 className="font-semibold text-2xl leading-relaxed">{name}</h3>
                    <h3 className="font-semibold text-xl text-zinc-500 group-hover:text-light dark:group-hover:text-primary leading-relaxed">
                      {position}
                    </h3>
                  </div>
                </CardBody>
              </Card>
            ))}

        {error && (
          <Alert message={error || "Something went wrong!"} style="py-2 px-4 w-fit" type="danger" />
        )}
      </div>
    </section>
  );
};

export default Testimonial;
