import React from "react";
import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import { UserName } from "@/utils/utils";
import Tracks from "@/components/Card/TopTracks";
import MovieCard from "@/components/Card/MovieCard";
import TVShowCard from "@/components/Card/TVShowCard";

type Media = {
  title: string;
  value: string;
};

export default function Media({}: {}) {

  return (
    <>
      <Seo
        title={`Movies & TV Series  | ${UserName}`}
        description="In case you are wondering What Movies & TV Series I watch and Music I listen, Here's the list of what I'm currently listing or watching on the daily basis. This list is always changing."
        keywords={[
          "what i watch?",
          "what i listen?",
          "Movies",
          "Web Series",
          "Statistics",
          "gauravgola.in",
          "gauravgola",
          "golagaurav",
          "rdrive",
        ]}
        url="https://gauravgola.in/media/"
        ogImage="https://gauravgola.in/og-img/media.png"
      />
      <section className="pageTop font-inter">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={opacityVariant}
            className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200"
          >
            Watched Movies 
          </motion.h3>
          <AnimatedDiv variants={FadeContainer}>
            <MovieCard />
          </AnimatedDiv>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={opacityVariant}
            className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200 mt-4"
          >
            Watched Web Series 
          </motion.h3>
          <AnimatedDiv variants={FadeContainer}>
            <TVShowCard />
          </AnimatedDiv>
        <AnimatedText
          variants={opacityVariant}
          className="mt-4 text-gray-700 dark:text-gray-300"
        >
          <span className="font-bold">Note:</span> Ratings are based on our own impressions.
        </AnimatedText>
        <Tracks />
      </section>
    </>
  );
}



export async function getStaticProps() {
  return {
    props: {},
  };
}