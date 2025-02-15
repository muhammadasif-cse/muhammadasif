"use client";

import {Button} from "@heroui/button";
import {Card, CardBody} from "@heroui/card";
import {Form} from "@heroui/form";
import {Input, Textarea} from "@heroui/input";
import React from "react";

const ContactForm = () => {
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
      setErrors({firstName: "first name is required"});

      return;
    }

    // const result = callServer(data);
    // setErrors(result.errors);
  };

  console.log("action", action);
  return (
    <Card className="dark:bg-secondary/10" shadow="sm">
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
              className="col-span-2 md:col-span-1"
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
              className="col-span-2 md:col-span-1"
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
          <div className="grid grid-cols-2 gap-1 w-full">
            <Button type="reset" className="mt-3 w-full" size="lg" color="warning">
              Reset
            </Button>
            <Button type="submit" className="mt-3 w-full" size="lg" color="secondary">
              Submit
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
