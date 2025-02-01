"use client";

import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="h-[150vh]">
      <Button color="primary">This is primary button</Button>
      <Button color="secondary">This is secondary button</Button>
      <Button color="danger">This is danger button</Button>
      <Button color="success">This is success button</Button>
      <Button color="warning">This is warning button</Button>
    </div>
  );
}
