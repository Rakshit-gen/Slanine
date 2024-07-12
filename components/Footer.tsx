import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-purple-600 lg:justify-start dark:text-purple-300 text-4xl">
          Slanine
        </div>

        <p
          className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400"
        >
          Always helping people through AI tools and developing a fast pace towards a brighter future.
        </p>
      </div>
      <div className='block items-center justify-center m-auto mt-10 md:mb-0 md:justify-end md:items-end md:content-end'>
        
    <br />
      <ul
        className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/"
          >
            Home
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/dashboard"
          >
            Dashboard
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://rakshit-portfolio-one.vercel.app/"
          >
            See my other projects
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://github.com/Rakshit-gen/Slanine"
          >
            Contribute?
          </a>
        </li>
      </ul>
      <ul className='items-center justify-center flex m-auto gap-10 mt-10'>
            <li><GitHubLogoIcon /></li>
            <li><InstagramLogoIcon /></li>
            <li><TwitterLogoIcon /></li>
        </ul>
      </div>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400">
      Copyright &copy; 2024. Rakshit Sisodiya.
    </p>
  </div>
</footer>
  )
}

export default Footer