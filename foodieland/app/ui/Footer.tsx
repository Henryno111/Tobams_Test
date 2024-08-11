import Image from "next/image";

const footerItems = ["Recipe", "Blog", "Contact", "About us"];

const renderFooterItems = () => {
  return footerItems.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};

export default function Footer() {
  return (
    <div>
      <div className="flex justify-around px-[10rem] mb-6 ml-10" >
        <div className="flex flex-col gap-[1rem]">
        <p className="text-3xl font-bold font-serif">Foodieland<span className="text-primary text-red-700">.</span></p>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
          <ul className="flex flex-row gap-14 pt-2">
            {renderFooterItems()}
          </ul>
        <div>
      </div>
     </div>
    </div>
  );
}