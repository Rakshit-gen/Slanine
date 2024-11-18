import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import Particles from "./ui/particles";

const Billingcards = () => {
  return (
    <div className="justify-center items-center m-auto h-screen gap-8 md:flex lg:flex -mt-10">
      <Card className="w-[350px] bg-white border shadow-lg text-black rounded-xl dark:bg-slate-700 my-10 ml-5">
        <CardHeader>
          <CardTitle className="dark:text-white">Slanine</CardTitle>
          <CardDescription className="font-semibold dark:text-white">
            100000 words only
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="name"
                  className="font-bold text-3xl dark:text-white"
                >
                  Price
                </Label>
                <Label className="font-semibold text-2xl dark:text-white">
                  Free <span className="text-slate-300 text-lg"></span>
                </Label>
              </div>
              <div className="flex flex-col space-y-1.5 dark:text-white">
                <Label className="text-xl">✔ 100000 Words</Label>
                <Label className="text-xl">✔ Bit slower Response</Label>
                <Label className="text-xl">✔ Restrictions</Label>
                <Label className="text-xl">✔ Selected Templates</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <br />
        <CardFooter className="flex justify-between">
          <div className="w-full">
            <Link href="/dashboard">
              <Button name="explore" className="bg-black dark:hover:bg-slate-400 text-white dark:text-black dark:bg-slate-200 rounded-xl w-full hover:bg-gray-600 font-bold">
                Explore
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
      <Card className="w-[350px] bg-white border shadow-lg text-black rounded-xl dark:bg-slate-700 my-10 ml-5">
        <CardHeader>
          <CardTitle className="dark:text-white">Slanine Pro</CardTitle>
          <CardDescription className="font-semibold dark:text-white">
            Get unlimited usage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="name"
                  className="font-bold text-3xl dark:text-white"
                >
                  Price
                </Label>
                <Label className="font-semibold text-2xl dark:text-white">
                  $ 7.99 <span className="text-slate-400 text-lg">/ month</span>
                </Label>
              </div>
              <div className="flex flex-col space-y-1.5 dark:text-white">
                <Label className="text-xl">✔ Unlimited Words</Label>
                <Label className="text-xl">✔ Faster Response</Label>
                <Label className="text-xl">✔ Answers to anything</Label>
                <Label className="text-xl">✔ New Templates</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <br />
        <CardFooter className="flex justify-between">
          <div className="w-full">
            <Link href="https://buy.stripe.com/test_14keW25rNcK36as145">
              <Button name="buy" className="bg-black dark:hover:bg-slate-400 font-bold text-white dark:text-black dark:bg-slate-200 rounded-xl w-full hover:bg-gray-600">
                Buy
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
      <Particles
        className="absolute inset-0 h-full object-cover"
        quantity={300}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Particles
        className="absolute inset-0 h-full"
        quantity={300}
        ease={80}
        color={"#000000"}
        refresh
      />
    </div>
  );
};

export default Billingcards;
