import React from 'react';
import { InfiniteMovingCards } from './ui/infinitecards';
import { BookImage, Box, DiamondIcon, DiamondPlusIcon, Dumbbell, GitBranchPlus, Languages, PointerIcon, SproutIcon, XCircleIcon } from 'lucide-react';
import { IconBrandGmail } from '@tabler/icons-react';

const MovingCards = () => (
  <div>
    
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
      quote: IconBrandGmail,
      name: 'Cold Mail',
      title: "An AI tool to generate cold emails for employees or HRs to make job hunting a little easier",
      link:'/dashboard/content/cold-mail'
    },
    {
      quote:Dumbbell,
      name: "Workout Buddy",
      title: "An AI tool to help you generate a workout schedule based on your needs.",
      link:'/dashboard/content/generate-workout'
    },
    {
      quote:SproutIcon,
      name: "Tagline Generator",
      title: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
      link:'/dashboard/content/tagline-generator'
    },{
        quote:DiamondPlusIcon,
        name: "Dialogue maker",
        title: "An AI tool to create dialogue conversation between any number of characters in a given story.",
        link:'/dashboard/content/generate-dialogues'
      },
  ];



export default MovingCards;
