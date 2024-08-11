import Image from 'next/image';


export default function Recipe() {
  return (
    <section className='w-full max-w-[1280px] mx-auto '>
      <div className='flex flex-col mx-auto mb-3 md:mb-5 lg:mb-7'>
        <p className='mx-auto font-inter font-bold text-3xl mb-3 md:mb-5 lg:mb-7'>Simple and tasty recipes</p>
        <h3 className='mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit giv me the internship. </h3>
        <h3 className='mx-auto'>Quia dignissimos exercitationem ducimus</h3> 
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Image 
            src="/Group 858.png"
            width={400}
            height={434}
            alt="recipe"
          />
          <Image
            src="/Group 859.png"
            width={400}
            height={434}
            alt="img02"
          />
          <Image
            src="/Group 860.png"
            width={400}
            height={434}
            alt='img03'
          />
          <Image
           src="/Group 861.png"
           width={400}
           height={434}
           alt='img04'
          />
          <Image
           src="/Group 862.png"
           width={400}
           height={434}
           alt='img05'
          />
          <Image
           src="/Ads.png"
           width={400}
           height={434}
           alt='img06'
          />
          <Image
           src="/Group 863.png"
           width={400}
           height={434}
           alt='img07'
          />
          <Image 
            src="/Group 864.png"
            width={400}
            height={434}
            alt='img08'
          />
          <Image
            src="/Group 865.png"
            width={400}
            height={434}
            alt='img09'
          />
        </div>
      </div>
    </section>
  )
}