"use client";

import { motion } from "framer-motion";

import FeaturedGlow from "./FeaturedGlow";
import FeaturedImage from "./FeaturedImage";
import FeaturedInfo from "./FeaturedInfo";
import FeaturedSpecs from "./FeaturedSpecs";
import FeaturedPrice from "./FeaturedPrice";
import FeaturedButton from "./FeaturedButton";

interface FeaturedCardProps {
  product: {
    id: string;
    title: string;
    image: string;
    description: string;
    goldWeight: number;
    goldType: string;
    stoneType: string;
    makingPercent: number;
    profitPercent: number;
    taxPercent: number;
    designFee: number;
  };
}

export default function FeaturedCard({
  product,
}: FeaturedCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{
        duration: 0.45,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-[#C6A15B]/20
        bg-white/[0.04]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#C6A15B]/60
        hover:shadow-[0_25px_70px_rgba(0,0,0,.45)]
      "
    >
      <FeaturedGlow />

      <FeaturedImage
        image={product.image}
        title={product.title}
      />

      <div className="relative z-10 space-y-6 p-7">

        <FeaturedInfo
          title={product.title}
          description={product.description}
        />

        <FeaturedSpecs
          weight={product.goldWeight}
          goldType={product.goldType}
          stoneType={product.stoneType}
        />

        <FeaturedPrice
          goldWeight={product.goldWeight}
          makingPercent={product.makingPercent}
          profitPercent={product.profitPercent}
          taxPercent={product.taxPercent}
          designFee={product.designFee}
        />

        <FeaturedButton
          id={product.id}
        />

      </div>

    </motion.article>
  );
}