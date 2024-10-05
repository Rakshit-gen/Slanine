import React from 'react';
import { InfiniteMovingCards } from './ui/infinitecards';
import { BookImage, Box, DiamondIcon, DiamondPlusIcon, GitBranchPlus, Languages, PointerIcon, SproutIcon, XCircleIcon } from 'lucide-react';

const MovingCards = () => (
  <div className='flex w-full justify-center'>
      <InfiniteMovingCards
        items={testimonials} // Pass the appropriate items
        direction="right"
        speed="slow"
      />
  </div>
);
const testimonials = [
    {
      quote:BookImage,
      name: "Cover Letter",
      title: "An AI tool for writing proper and effective cover letters for your desired job at any company with the help of your resume.",
      link:'/dashboard/content/generate-cover-letter'
    },
    {
      quote:PointerIcon,
      name: "Bullet Point Optimizer",
      title: "An AI tool to optimize bullet points for resume to be way more impactful based on XYZ format of bullet points for resume.",
      link:'/dashboard/content/generate-bullet-points'
    },
    {
      quote: XCircleIcon,
      name: "Write a X post",
      title: "An AI tool to help you with twitter posts generation regarding any trending topic in word limit with hashtags.",
      link:'/dashboard/content/generate-x-post'
    },
    {
      quote:Languages,
      name: "Language Converter",
      title: "AI Model to convert your sentences into different languages. Can convert into multiple languages together",
      link:'/dashboard/content/language-convert'
    },
    {
      quote:SproutIcon,
      name: "Recipe Generator",
      title: "Find detailed recipe of any food items you wanna savour within seconds using this easy to use AI tool!",
      link:'/dashboard/content/recipe-generator'
    },{
        quote:DiamondPlusIcon,
        name: "Dialogue maker",
        title: "An AI tool to create dialogue conversation between any number of characters in a given story.",
        link:'/dashboard/content/generate-dialogues'
      },
  ];



export default MovingCards;
