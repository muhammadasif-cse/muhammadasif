import {faq} from "@/lib/data";
import {Card, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {DynamicIcon, IconName} from "lucide-react/dynamic";
import {BoxReveal} from "../ui/box-reveal";

const FAQ = () => {
  return (
    <div className="py-12">
      <div className="max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h1>
        <p className="text-black/50 dark:text-white/50 text-lg max-w-2xl mx-auto text-center">
          Here you’ll find detailed answers to the most frequently asked questions, helping you
          better understand our processes, products, and how we can assist you with your needs.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {faq.map(({question, answer, icon}) => (
            <Card key={question} shadow="sm">
              <CardBody>
                <div>
                  <Chip color="secondary" variant="flat" radius="sm">
                    <DynamicIcon name={icon as IconName} size={24} />
                  </Chip>
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <div className="mt-3 mb-2 flex items-start gap-2 text-2xl font-medium tracking-tighter dark:text-white/90 text-black/90">
                      <span>{question}</span>
                    </div>
                  </BoxReveal>
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="dark:text-white/50 text-black/50">{answer}</p>
                  </BoxReveal>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
