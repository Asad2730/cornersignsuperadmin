import Image from "next/image";

export const WelcomeCard = () => (
  <section className="overflow-hidden rounded-2xl bg-[url('/Bgg@2x.png')] bg-cover bg-no-repeat mb-2 lg:h-[110px]">
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-white md:text-xl text-lg lg:pb-8">Welcome to</span>
          <Image
            src={"/Group 52935.svg"}
            alt="welcome"
            height={100}
            width={100}
            quality={100}
           
          />
        </div>

       
      </div>
    </div>
  </section>
);
