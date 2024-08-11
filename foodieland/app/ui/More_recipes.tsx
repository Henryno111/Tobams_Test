import Image from "next/image";

export default function More_recipes() {
  return (
    <section className="flex flex-col items-center justify-between px-[8rem] gap-8">
      <div className="flex justify-around w-full px-6">
        <p className=" font-bold text-xl">Try this delicious recipe<br />to make your day</p>
        <p className="text-[0.75rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit Dicta culpa maiores ipsa quasi<br />accusamus molestiaenumquam aspernatur nemo sit eius temporibus,</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Image 
          src="/Group 866.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
        <Image 
          src="/Group 867.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
        <Image 
          src="/Group 868.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
        <Image 
          src="/Group 869.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
        <Image 
          src="/Group 870.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
        <Image 
          src="/Group 871.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
        <Image 
          src="/Group 872.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
        <Image 
          src="/Group 873.png"
          alt="more_recipes"
          width={290} 
          height={316} 
          layout="responsive"
          className="w-full h-auto"
        />
      </div>
      </section>
  );
}