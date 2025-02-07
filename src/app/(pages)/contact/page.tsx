"use client";
import { Button, Card, CardBody, Form, Input, Textarea } from "@heroui/react";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [action, setAction] = React.useState<string | null>(null);

  const onSubmit = (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("data", data);
    if (!data.firstName) {
      setErrors({ firstName: "first name is required" });

      return;
    }

    // const result = callServer(data);
    // setErrors(result.errors);
  };

  console.log("action", action);

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-screen-lg mx-auto">
        <b className="text-secondary">Contact Us</b>
        <h2 className="mt-3 text-2xl md:text-4xl font-black tracking-tight">
          Feel Free to Reach Out Anytime!
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          We&apos;d love to hear from you. Please fill out this form or shoot us
          an email.
        </p>
        <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-bold text-xl">Email</h3>
              <p className="my-2.5 text-muted-foreground">
                Let’s connect! <br /> Drop me a message anytime.
              </p>
              <Link
                className="font-bold text-secondary tracking-tight"
                href="mailto:muhammadasif.cse@gmail.com"
              >
                muhammadasif.cse@gmail.com
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <MessageCircle />
              </div>
              <h3 className="mt-6 font-bold text-xl">Live Chat</h3>
              <p className="my-2.5 text-muted-foreground">
                Reach me instantly on WhatsApp for any queries or a quick chat!
              </p>
              <Link
                className="font-bold text-secondary tracking-tight"
                href="https://wa.me/+8801930248584/?text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-bold text-xl">Office</h3>
              <p className="my-2.5 text-muted-foreground">
                Come say hello at my office
              </p>
              <Link
                className="font-bold text-secondary tracking-tight"
                href="https://map.google.com"
                target="_blank"
              >
                1st Floor, 86, 3 New Eskaton <br />
                Road, Dhaka 1000
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <PhoneIcon />
              </div>
              <h3 className="mt-6 font-bold text-xl">Phone</h3>
              <p className="my-2.5 text-muted-foreground">
                Thursday-Fri from 10am to 12pm.
              </p>
              <Link
                className="font-bold text-secondary tracking-tight"
                href="tel:01930248584"
              >
                +88 01930-248584
              </Link>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-secondary/10 shadow-none">
            <CardBody>
              <Form
                className="w-full flex flex-col gap-4 items-center h-fit my-auto p-4"
                validationBehavior="native"
                onReset={() => setAction("reset")}
                validationErrors={errors}
                onSubmit={onSubmit}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <Input
                    isRequired
                    name="firstName"
                    label="First Name"
                    type="text"
                    labelPlacement="outside"
                    placeholder="Enter your first name"
                    validate={(value) => {
                      if (value.length < 2) {
                        return "First name must be at least 2 characters long";
                      }
                    }}
                  />
                  <Input
                    isRequired
                    name="lastName"
                    label="Last Name"
                    type="text"
                    labelPlacement="outside"
                    placeholder="Enter your last name"
                    validate={(value) => {
                      if (value.length < 3) {
                        return "Last name must be at least 3 characters long";
                      }
                    }}
                  />

                  <div className="grid gap-4 col-span-2">
                    <Input
                      isRequired
                      name="email"
                      label="Email"
                      type="email"
                      labelPlacement="outside"
                      errorMessage="Please enter a valid email"
                      placeholder="Enter your email"
                    />
                    <Textarea
                      isRequired
                      label="Message"
                      name="message"
                      labelPlacement="outside"
                      errorMessage="Please enter your message"
                      placeholder="Enter your message"
                      rows={6}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="mt-3 w-full"
                  size="lg"
                  color="secondary"
                >
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
