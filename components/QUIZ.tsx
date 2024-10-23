import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Particles from "./ui/particles";

const QuizSection = () => {
  const { theme } = useTheme(); // Access theme
  const [isMounted, setIsMounted] = React.useState(false);

  // Ensure the component only renders theme-dependent UI after mounting
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering until the theme is mounted
  }

  const quizzes = [
    { title: "Easy AI Quiz", link: "/easy-quiz" },
    { title: "Medium AI Quiz", link: "/medium-quiz" },
    { title: "Hard AI Quiz", link: "/hard-quiz" },
  ];

  return (
    <div className="relative bg-white text-white py-16 dark:bg-black p-4">
      <div className="absolute top-0 left-0 w-full h-full dark:bg-gradient-to-b from-black via-slate-950 to-slate-900 md:rounded-[300px] bg-white"></div>
      <div className="relative text-center">
        <h2 className="text-6xl font-bold text-black dark:text-white">
          Quiz Section
        </h2>
        <br />
        <p className="text-xl text-black dark:text-white">
          Choose your difficulty level and start quizzing!
        </p>
        <br />
        <br />
        <div className="flex w-[400px] h-full flex-col gap-10 lg:h-[250px] lg:flex-row m-auto justify-center items-center mt-28 mb-16">
          {quizzes.map((quiz, index) => (
            <Link key={index} href={quiz.link}>
              <MagicCard
                className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl h-[70%] md:h-[420px] md:w-[300px] dark:shadow-white border shadow-md w-[300px] z-20 dark:bg-transparent"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <br />
                {quiz.title}
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Button className="w-full bg-slate-300 text-black dark:bg-slate-600 dark:text-white">
                        Start
                      </Button>
                      <hr className="bg-black dark:bg-white" />
                    </div>
                  </div>
                </form>
                <br />
              </MagicCard>
            </Link>
          ))}
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

export default QuizSection;
