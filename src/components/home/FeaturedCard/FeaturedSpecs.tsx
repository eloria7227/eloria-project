"use client";

interface FeaturedSpecsProps {
  weight: number;
  goldType: string;
  stoneType: string;
}

export default function FeaturedSpecs({
  weight,
  goldType,
  stoneType,
}: FeaturedSpecsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#C6A15B]/40
          hover:bg-white/10
        "
      >
        <p className="text-xs tracking-widest text-white/40">
          وزن طلا
        </p>

        <p className="mt-2 text-lg text-[#E6D2A2]">
          {weight} گرم
        </p>
      </div>

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#C6A15B]/40
          hover:bg-white/10
        "
      >
        <p className="text-xs tracking-widest text-white/40">
          نوع طلا
        </p>

        <p className="mt-2 text-lg text-[#E6D2A2]">
          {goldType}
        </p>
      </div>

      <div
        className="
          col-span-2
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#C6A15B]/40
          hover:bg-white/10
        "
      >
        <p className="text-xs tracking-widest text-white/40">
          سنگ طبیعی
        </p>

        <p className="mt-2 text-lg text-[#E6D2A2]">
          {stoneType}
        </p>
      </div>

    </div>
  );
}