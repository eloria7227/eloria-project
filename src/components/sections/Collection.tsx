"use client";

import CollectionHeader from "@/components/collection/CollectionHeader";
import CollectionCard from "@/components/collection/CollectionCard";
import { collections } from "@/components/collection/collectionData";

export default function Collection() {
  return (
    <section className="relative overflow-hidden bg-[#061B1A] py-28">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C6A15B]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <CollectionHeader />

        <div className="space-y-12">

          {collections.map((item) => (
            <CollectionCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}