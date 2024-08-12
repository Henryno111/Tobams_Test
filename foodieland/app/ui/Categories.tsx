import Image from "next/image";

export default function Categories() {
  return (
    <section className="flex flex-col items-center justify-between px-[9rem] gap-8">
      <div className="flex justify-between w-full">
        <p className="pt-5 font-bold text-xl">CATEGORIES</p>
        <button type="button" className="bg-sky-300 border p-5 rounded-t-md rounded-b-md text-[0.75rem] px-3 py-1">View all Categories</button>
      </div>

      <div>
        <Image 
          src="/Group 842.png"
          width={1280}
          height={202}
          alt="categories"
        />
      </div>
    </section>
  );
}