import Image from "next/image";
//import CubeImage1 from "../assets/images/cube-helix1.svg";
//import CubeImage2 from "../assets/images/cube-helix2.svg";

const EverythingYouNeed = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Everything you need</div>
          </div>
          <h2 className="section-title mt-5">
            Streamlined for easy management
          </h2>
          <p className="section-description mt-5">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="border border-black/10 max-w-lg flex flex-col items-center px-10 py-5 text-center gap-3 rounded-2xl shadow-2xl shadow-black/10">
            {/* <Image src={CubeImage1} alt="" /> */}
            <p className="font-bold text-2xl">Integration ecosystem</p>
            <p className="text-[#010D3E] font-medium">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </div>
          <div className="border border-black/10 max-w-lg flex flex-col items-center px-10 py-5 text-center gap-3 rounded-2xl shadow-2xl shadow-black/10">
            {/* <Image src={CubeImage2} alt="" /> */}
            <p className="font-bold text-2xl">Goal setting and tracking</p>
            <p className="text-[#010D3E] font-medium">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;
