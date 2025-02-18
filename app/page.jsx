"use client";
import ResponsiveCard from "@/components/Card";

const Page = () => {
  return (
    <main className="w-full max-w-[1058px] min-h-screen flex flex-col items-start justify-start mx-auto px-4 sm:px-8 text-black text-3xl sm:text-5xl">
      <section className="w-full mt-32">
        <div className="flex flex-col justify-center items-center text-white">
          <p className="font-instrument">Hi, I am Animesh</p>
          <p className="text-center w-full max-w-[476px] mt-12 text-base sm:text-lg text-[#cccbcd]">
            I am a creator at heart. Fueled by curiosity and passion for turning ideas into reality. Since I love creating things, I am into entrepreneurship and want to start my own business.
            <br /><br />
            I have always been inspired by visionaries like Steve Jobs, who had an incredible ability to turn ideas into something truly special.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full gap-6 justify-center min-h-screen mt-8 sm:mt-10 md:mt-44">
      </section>
    </main>
  );
};

export default Page;
