import Image from "next/image";
import Navbar from "./ui/Navbar";
import Categories from "./ui/Categories";
import Recipe from "./ui/Recipe";
import More_recipes from "./ui/More_recipes";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-[1280] gap-[4rem] mx-auto">
      <Navbar />
     
      <div className="flex mx-auto justify-center"> 
        <Image 
          src="/featured Recipe.png"
          width={1280}
          height={640}
          alt= "recipe"
          // layout="responsive"
          // className="w-full h-auto"
        />
      </div>
      <Categories />
      <Recipe />
      <div className="flex mx-auto justify-center"> 
        <Image
          src="/Learn More.png"
          width={1280}
          height={640}
          alt="learn more"
        />
      </div>
      <Image
        src="/Instagram.png"
        alt="Instagram"
        width={800} 
        height={600} 
        layout="responsive"
        className="w-full h-auto"
      />
      <More_recipes />
      <div className="flex mx-auto justify-center">
        <Image
          src="/Subscribe Card.png"
          alt="footer"
          width={1280}
          height={440}
          // layout="responsive"
          // className="w-full h-auto"
        />
      </div>
      <Footer />
      <hr />
      <div className="flex justify-between items-center">
      <div className="flex-1 text-center">© 2020 Flowbase. Powered by Webflow</div>
      <div className="text-right flex flex-row gap-10">
        <Image 
          src="/twitter_logo.svg"
          width={20}
          height={30}
          alt= "logo"
          />
        <Image
          src="/fb_logo.svg"
          width={20}
          height={30}
          alt= "facebook"
        />
        <Image
          src="/ig_logo.svg"
          width={20}
          height={30}
          alt= "instagram"
        />
      </div>
      </div>
    </main>
  );
}
