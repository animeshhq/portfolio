import EmailForm from "@/components/EmailForm";

const Page = () => {
  return (
    <main className="w-full max-w-[1058px] min-h-screen flex flex-col items-start justify-start mx-auto px-4 sm:px-8 text-[var(--text-color)] text-3xl sm:text-5xl">
      <section className="w-full mt-32">
        <div className="flex flex-col justify-center items-center">
          <p className="font-instrument">Hi, I am Animesh</p>
          <p className="text-center w-full max-w-[476px] mt-12 text-base sm:text-lg text-[var(--text-secondary)]">
            I am a creator at heart. Fueled by curiosity and passion for turning ideas into reality.<br /><br />
            I have always been inspired by visionaries like Steve Jobs, who had an incredible ability to turn ideas into something truly special.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;