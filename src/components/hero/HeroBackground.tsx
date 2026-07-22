export default function HeroBackground() {
    return (
      <div
        className="
          absolute
          inset-0
          overflow-hidden
          bg-[#061B1A]
        "
      >
  
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(198,161,91,.12),transparent_45%)]
          "
        />
  
        <div
          className="
            absolute
            -left-40
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/10
            blur-[160px]
          "
        />
  
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#C6A15B]/10
            blur-[180px]
          "
        />
  
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,transparent,rgba(6,27,26,.8))]
          "
        />
  
      </div>
    );
  }