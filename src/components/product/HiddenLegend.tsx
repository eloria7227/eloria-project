interface HiddenLegendProps {

    story: string;
  
  }
  
  
  
  export default function HiddenLegend({
  
    story,
  
  }: HiddenLegendProps) {
  
  
    return (
  
      <section
        dir="rtl"
        className="
          rounded-3xl
          border
          border-[#C6A15B]/20
          bg-white/5
          p-8
          backdrop-blur-xl
        "
      >
  
        <h3
          className="
            mb-5
            text-2xl
            text-[#C6A15B]
          "
        >
  
          افسانه پنهان
  
        </h3>
  
  
        <p
          className="
            leading-10
            text-white/70
          "
        >
  
          {story}
  
        </p>
  
  
      </section>
  
    );
  
  }