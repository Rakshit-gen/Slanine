import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-400 text-black">
      <nav>
        <div className="justify-center  items-center m-auto flex p-5">
          <Link href={'/dashboard'}>
          <Button className="bg-gray-800 text-white">Sign In</Button>
          </Link>
        </div>
      </nav>
  <div className="h-screen mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center mt-32 md:-mt-40 mg:-mt-24">
      <h1
        className="bg-gradient-to-r from-green-600 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Use Gemini AI for everything...
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Multiple AI tools to suit your needs
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>

      </div>
    </div>
  </div>
</section>
  );
}
