export default function Background() {
    return (
      <div
        className="
          fixed
          inset-0
          -z-10
          overflow-hidden
          bg-[#061B1A]
        "
      >
        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-[#d4af37]/10
            blur-[120px]
          "
        />
  
        <div
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-emerald-500/10
            blur-[120px]
          "
        />
  
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,#061B1A_75%)]
          "
        />
      </div>
    );
  }