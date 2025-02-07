import { faq } from "@/lib/data";
import { Card, CardBody, Chip } from "@heroui/react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

const FAQ = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-screen-lg">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-black tracking-tighter text-center">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h2>
        <p className="mt-3 text-lg text-center text-muted-foreground">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {faq.map(({ question, answer, icon }) => (
            <Card key={question} shadow="sm">
              <CardBody>
                <div>
                  <Chip color="secondary" variant="flat" radius="sm">
                    <DynamicIcon name={icon as IconName} size={24} />
                  </Chip>
                  <div className="mt-3 mb-2 flex items-start gap-2 text-2xl font-medium tracking-tighter dark:text-white/90 text-black/90">
                    <span>{question}</span>
                  </div>
                  <p className="dark:text-white/50 text-black/50">{answer}</p>
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
