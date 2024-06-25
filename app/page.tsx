import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#291a00] text-white">
      <Link className="flex items-center justify-center" href="#">
        <PaletteIcon className="h-6 w-6" />
        <span className="sr-only">정요환의 포트폴리오</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#home">
          홈
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
          자기소개
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
          작업물
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          연락
        </Link>
      </nav>
    </header>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#473400] text-white flex justify-center" id="home">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                정요환 / Jeong Yohwan
              </h1>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none">
              게임 그래픽 디자이너
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
                3D와 2D 그래픽 디자인을 전문으로 하고 있는 정요환입니다. 
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd966] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#f1c232] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50"
                href="#projects"
              >
                프로젝트 보기
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-black font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#contact"
              >
                연락하기
              </Link>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/Profile.jpg"
            width="550"
          />
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">정요환 / Jeong Yohwan</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
                2001.08.21 <br /> jyh010821@naver.com <br /> 010.9400.6965
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Skills</h3>
                <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <li>Photoshop</li>
                  <li>Substance 3D Painter</li>
                  <li>3ds MAX</li>
                  <li>Maya</li>
                  <li>Zbrush</li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Education</h3>
                <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <li>서강대학교 미래교육원에 재학 <br /> 2020.03 ~ </li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Experience</h3>
                <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <li>게임 제작 프로젝트 참가</li>
                </ul>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Certification & Duty</h3>
                <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <li>1종 보통 운전 면허</li>
                  <li>육군 병장 만기 전역</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            alt="About"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/Adobe.jpg"
            width="550"
          />
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center" id="projects">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects & Graphic Work</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                참여 프로젝트 및 그래픽 작업물
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
          <a href="https://jeong_yohwan.artstation.com/projects/g0kaLG">
            <img
              alt="Project 1"
              className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full transition-transform duration-300 transform hover:scale-105"
              height="310"
              src="/Eutopiness.PNG"
              width="550"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">Team Project 1 - Eutopiness</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  횡 스크롤 퍼즐 아케이드 게임
                </p>
                </CardContent>
                </a>
            </Card>
            <Card>
            <a href="https://jeong_yohwan.artstation.com/projects/yDdrmO">
              <img
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full transition-transform duration-300 transform hover:scale-105"
                height="310"
                src="/Biohunt.jpg"
                width="550"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">Team Project 2 - Biohunt</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2D Top Down Lott Shooter Game / by Unity
                </p>
              </CardContent>
              </a>
            </Card>
            <Card>
            <a href="https://jeong_yohwan.artstation.com/projects/BXA859">
              <img
                alt="Project 3"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full transition-transform duration-300 transform hover:scale-105"
                height="310"
                src="/Pig.jpg"
                width="550"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">Grapic Work - Pig Monster</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Pig Monster를 형상화하여 제작한 모델링 / by Zbrush
                </p>
              </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">연락을 기다립니다!</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            저와 함께 프로젝트를 참여하지 않으시겠어요? <br />
            언제든 편하게 연락주세요
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-2">
              <Input className="max-w-lg" placeholder="이름" type="text" />
              <Input className="max-w-lg" placeholder="이메일" type="email" />
              <Textarea className="max-w-lg" placeholder="메시지" />
              <Button className="w-full bg-[#ffd966] text-black hover:bg-[#f1c232]" type="submit">
                메시지 보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#291a00] text-white">
      <p className="text-xs">© 2024 정요환. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          맨 위로 가기
        </Link>
        
      </nav>
    </footer>
  </div>
  );

  function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
  }
}