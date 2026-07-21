export interface CollectionItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }
  
  export const collections: CollectionItem[] = [
    {
      id: 1,
      title: "گردنبند",
      subtitle: "NECKLACES",
      description:
        "ترکیبی از هنر دست، سنگ‌های طبیعی و طراحی ماندگار برای همراهی هر روز.",
      image: "/images/products/necklace.jpg",
    },
    {
      id: 2,
      title: "دستبند",
      subtitle: "BRACELETS",
      description:
        "بافت‌های ظریف و جزئیاتی که شخصیت هر قطعه را منحصربه‌فرد می‌کند.",
      image: "/images/products/bracelet.jpg",
    },
    {
      id: 3,
      title: "گوشواره",
      subtitle: "EARRINGS",
      description:
        "سادگی، ظرافت و الهام از طبیعت در قالب طراحی‌های مینیمال.",
      image: "/images/products/earring.jpg",
    },
  ];