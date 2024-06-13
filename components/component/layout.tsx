/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/iaS0FNkY87U
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Layout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BrushIcon className="h-6 w-6" />
          <span className="sr-only">Jane Doe Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Jane Doe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Minimalist Designer & Creative Director
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I create beautiful and functional designs that elevate brands and delight users.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="work">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
            <div className="group relative overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View project</span>
              </Link>
              <img
                alt="Project 1"
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="absolute inset-0 bg-gray-900/80 p-4 flex flex-col justify-end opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">Project 1</h3>
                <p className="text-gray-300 line-clamp-2">
                  A modern and minimalist website design for a leading tech company.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View project</span>
              </Link>
              <img
                alt="Project 2"
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="absolute inset-0 bg-gray-900/80 p-4 flex flex-col justify-end opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">Project 2</h3>
                <p className="text-gray-300 line-clamp-2">
                  A sleek and modern mobile app design for a fitness tracking platform.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View project</span>
              </Link>
              <img
                alt="Project 3"
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="absolute inset-0 bg-gray-900/80 p-4 flex flex-col justify-end opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">Project 3</h3>
                <p className="text-gray-300 line-clamp-2">
                  A clean and modern e-commerce website design for a sustainable clothing brand.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View project</span>
              </Link>
              <img
                alt="Project 4"
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="absolute inset-0 bg-gray-900/80 p-4 flex flex-col justify-end opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">Project 4</h3>
                <p className="text-gray-300 line-clamp-2">
                  A modern and minimalist dashboard design for a SaaS platform.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View project</span>
              </Link>
              <img
                alt="Project 5"
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="absolute inset-0 bg-gray-900/80 p-4 flex flex-col justify-end opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">Project 5</h3>
                <p className="text-gray-300 line-clamp-2">
                  A clean and modern branding design for a sustainable lifestyle brand.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View project</span>
              </Link>
              <img
                alt="Project 6"
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
              <div className="absolute inset-0 bg-gray-900/80 p-4 flex flex-col justify-end opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">Project 6</h3>
                <p className="text-gray-300 line-clamp-2">
                  A modern and minimalist mobile app design for a productivity tool.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I am a minimalist designer and creative director with over 10 years of experience in the industry. I
                specialize in creating beautiful and functional designs that elevate brands and delight users.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My design philosophy is to keep things simple and focused, with a strong emphasis on typography, color,
                and layout. I believe that great design should be both aesthetically pleasing and user-friendly.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                When I'm not designing, you can find me exploring new design trends, reading design books, or hiking in
                the great outdoors.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    User Interface Design
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    User Experience Design
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Branding and Identity Design
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Motion Design
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prototyping and Testing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to
                reach out.
              </p>
            </div>
            <div className="space-y-4">
              <form className="grid gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" required type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" required />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#">About Me</Link>
            <Link href="#">My Work</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Services</h3>
            <Link href="#">UI/UX Design</Link>
            <Link href="#">Branding</Link>
            <Link href="#">Motion Design</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">Tutorials</Link>
            <Link href="#">Design Tools</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Dribbble</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
