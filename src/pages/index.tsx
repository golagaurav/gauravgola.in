import SkillSection from "@components/Home/SkillSection";
import Image from "next/image";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariants";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import { ProfileImage, UserName } from "@utils/utils";
import getRSS from "@lib/generateRSS";
import generateSitemap from "@lib/sitemap";
import { motion } from "framer-motion";
import MDXContent from "@lib/MDXContent";
import React from "react";
import { FrontMatter } from "@lib/types";
import Link from "next/link";
import Greeting from "@components/Greeting";
import Seo from "@/components/Seo";

export default function Home({ }: { blogs: FrontMatter[] }) {


  return (
    <>
      <Seo
        title={`${UserName}`}
        description="               I'm Website Developer I also do event promotion.
        I enjoy turning complex problems into simple, beautiful and intuitive designs.
        My job is to make your website so that it is functional and user friendly but at the same time attractive..."
        keywords={["gauravgola.in", "gauravgolaa", "golagaurav", "idrive"]}
        url="https://gauravgola.in"
        ogImage="https://gauravgola.in/og-img/home.png" 
      />
      <div className="relative dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid place-content-center py-20"
        >
          <div className="w-full relative mx-auto flex flex-col items-center gap-10">
            <motion.div
              variants={popUp}
              className="relative w-64 h-64 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={ProfileImage}
                className="rounded-full shadow filter"
                width={933}
                height={933}
                alt="Profile Image"
                priority
              />
            </motion.div>

            <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl lg:text-6xl font-bold"
                >
                  {UserName}
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                >
                  Website Developer
                </motion.p>
                <Greeting />
              </div>

              <motion.p
                variants={opacityVariant}
                className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center"
              >
               I'm Website Developer I also do event promotion.
               I enjoy turning complex problems into simple, beautiful and intuitive designs.
               My job is to make your website so that it is functional and user friendly but at the same time attractive...
              </motion.p>
            </div>

            <Link
              href="/about"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-white dark:hover:bg-neutral-800 outline-none  active:scale-95 transition-transform"
            >
              <p>Read More</p>
            </Link>
          </div>
        </motion.section>

        <div>
          <SkillSection />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = new MDXContent("posts").getAllPosts(3);
  await getRSS();
  await generateSitemap();

  return {
    props: { blogs },
  };
}
