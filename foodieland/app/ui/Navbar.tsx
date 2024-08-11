import Image from "next/image"
import { Lobster_Two } from 'next/font/google';

const lobster = Lobster_Two({ subsets: ['latin'], weight: ['400', '700'] });

const menuItems = ["Home", "Recipe", "Blog", "Contact", "About us"];

const renderMenuItems = () => {
  return menuItems.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};


export default function Navbar() {
  return (
    <header className="bg-white h-20 pt-[3rem]">
    <nav className= "flex justify-around items-center mx-auto ">
      <p className="text-3xl font-bold font-serif">Foodieland<span className="text-primary">.</span></p>
      
      <ul className="flex items-center gap-7">
        {renderMenuItems()}
      </ul>
      {/* </div> */}
      <div className="flex items-center gap-10">
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
    </nav>
    <hr />
    </header>
  )
}