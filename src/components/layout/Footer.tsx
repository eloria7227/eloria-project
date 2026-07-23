import Link from "next/link";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="
        mt-20
        border-t
        border-white/10
        bg-[#061B1A]
        px-6
        py-12
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          md:grid-cols-3
        "
      >
        <div>
          <h3
            className="
              text-3xl
              italic
              tracking-[0.2em]
              text-[#C6A15B]
              font-serif
            "
          >
            ELORIA
          </h3>

          <p
            className="
              mt-4
              leading-8
              text-white/60
            "
          >
            هر قطعه داستانی از هنر دست، ظرافت و احساس است که برای همیشه همراه تو می‌ماند.
          </p>
        </div>


        <div>
          <h4
            className="
              mb-4
              text-[#C6A15B]
            "
          >
            دسترسی سریع
          </h4>

          <div className="flex flex-col gap-3 text-white/70">
            <Link href="/">
              خانه
            </Link>

            <Link href="/world">
              کالکشن‌ها
            </Link>

            <Link href="/contact">
              تماس با ما
            </Link>
          </div>
        </div>


        <div>
          <h4
            className="
              mb-4
              text-[#C6A15B]
            "
          >
            ارتباط
          </h4>

          <p className="text-white/70">
            جواهرات دست‌ساز الوریا
          </p>

          <p className="mt-2 text-white/50">
            © تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
}