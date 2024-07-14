import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Particles from "./ui/particles";
import { HeartHandshake, PenIcon } from "lucide-react";
import { Button } from "./ui/button";
import { CodeIcon,ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import Link from "next/link";

const reviews = [
  {
    username:'',
    body: 'Summarize this article Slanine', 
  },
  {
    username:'',
    body:'Review my resume Slanine',
  },
  {
    username:'',
    body:'Write my product a tagline Slanine',
  },
  {
    username:'',
    body:'Do a code review for me Slanine'
  },
  {
    username:'',
    body:'Write me a X post Slanine'
  },
  {
    username:'',
    body:'Write a code to check palindrome'
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  username,
  body,
}: {
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 z-10">
        
        <div className="flex flex-col">
          
          
        </div>
      </div>
      <blockquote className="text-sm text-center">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-[300px] bg-transparent">
        <br />
        <div className="text-center text-3xl font-semibold md:text-5xl">Do anything with Slanine</div>
        <br />
        <p className="md:text-xl">Just ask for it and get your solution.</p>
        <br />
        
        <Link href={'/dashboard'} className="z-30">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 mb-12 rounded-full cursor-pointer border z-30">
          <span className="cursor-pointer z-30">Check it out</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        </Link>
        
        
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <div>
          <Button className="bg-transparent z-10 justify-center m-auto flex items-center -space-y-40">
          <PenIcon className="text-white" />
          </Button>
        <ReviewCard key={review.username} {...review} />
        </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
            
            <div>
            <Button className="bg-transparent z-10 justify-center m-auto flex items-center -space-y-40">
            <CodeIcon className="text-white" />
            </Button>
          <ReviewCard key={review.username} {...review} />
          </div>
        ))}
      </Marquee>
      
      <Marquee pauseOnHover className="[--duration:20s] z-0">
        {firstRow.map((review) => (
        <div>
            <Button className="bg-transparent z-10 justify-center m-auto flex items-center -space-y-40">
            <HeartHandshake className="text-white" />
            </Button>
          <ReviewCard key={review.username} {...review} />
          </div>
          
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      <Particles
        className="absolute inset-0 h-full object-cover"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Particles
      className="absolute inset-0 h-full"
      quantity={100}
      ease={80}
      color={'#000000'}
      refresh
       />
    </div>
    
  );
}
