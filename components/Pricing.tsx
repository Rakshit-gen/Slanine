import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import Link from "next/link";
import Particles from "./ui/particles";

const Pricing = () => {
    const { theme, resolvedTheme } = useTheme(); // Access both theme and resolved theme
    const [isMounted, setIsMounted] = React.useState(false);

    // Ensure the component only renders theme-dependent UI after mounting
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Prevent rendering until the theme is mounted
    }
    return (
        <div className="relative bg-white text-white py-16 dark:bg-black p-4">
            <div className="absolute top-0 left-0 w-full h-full dark:bg-gradient-to-b from-black via-slate-950 to-slate-900 md:rounded-[300px] bg-white"></div>
            <div className="relative text-center">
                <h2 className="text-6xl font-bold text-black dark:text-white">
                    Simple pricing for everyone.
                </h2>
                <br />
                <p className="text-xl text-black dark:text-white">
                    Get unlimited access to Slanine and all it&apos;s templates
                </p>
                <br />
                <br />
                <div className="flex w-full max-w-[400px] h-full flex-col gap-10 lg:h-[250px] lg:flex-row m-auto justify-center items-center mt-28 mb-16">
                    <Link href={"/dashboard"}>
                        <MagicCard
                            className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl h-[70%] md:h-[420px] md:w-[300px] w-[300px] z-20 dark:shadow-white border shadow-md dark:bg-transparent"
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                        >
                            <br />
                            Slanine
                            <p>Free Tier</p>
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
                                            Free{" "}
                                            <span className="text-slate-300 text-lg"></span>
                                        </Label>
                                        <Link href="/dashboard">
                                            <Button
                                                name="explore"
                                                className="w-full bg-slate-300 text-black dark:bg-slate-600 dark:text-white"
                                            >
                                                Explore
                                            </Button>
                                        </Link>
                                        <hr className="bg-black dark:bg-white" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5 dark:text-white">
                                        <Label className="text-xl">
                                            ✔ 100000 Words only
                                        </Label>
                                        <Label className="text-xl">
                                            ✔ Bit slower Response
                                        </Label>
                                        <Label className="text-xl">
                                            ✔ Restrictions to search
                                        </Label>
                                        <Label className="text-xl">
                                            ✔ Selected Templates
                                        </Label>
                                    </div>
                                </div>
                            </form>
                            <br />
                        </MagicCard>
                    </Link>
                    <Link href={"/billing"}>
                        <MagicCard
                            className="cursor-pointer flex-col items-center justify-center shadow-md whitespace-nowrap text-4xl h-[70%] md:h-[420px] md:w-[300px] w-[300px] z-20 dark:shadow-white border dark:bg-transparent"
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                        >
                            <br />
                            Slanine Pro
                            <p>Get Premium</p>
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
                                            $ 7.99{" "}
                                            <span className="text-slate-300 text-lg">
                                                /month
                                            </span>
                                        </Label>
                                    </div>
                                    <Button
                                        name="subscribe"
                                        className="w-full bg-slate-300 text-black dark:bg-slate-600 dark:text-white"
                                    >
                                        Subscribe
                                    </Button>

                                    <div className="flex flex-col space-y-1.5 dark:text-white">
                                        <Label className="text-xl">
                                            ✔ Unlimited Words
                                        </Label>
                                        <Label className="text-xl">
                                            ✔ Faster Response
                                        </Label>
                                        <Label className="text-xl">
                                            ✔ Answers to anything
                                        </Label>
                                        <Label className="text-xl">
                                            ✔ New Templates
                                        </Label>
                                    </div>
                                </div>
                            </form>
                            <br />
                        </MagicCard>
                    </Link>
                </div>
            </div>
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

export default Pricing;
