import React from "react";
import TeamCard from "../components/TeamCard";

function Team() {
  const Data = [
    {
      name: "Dr. G. Viswanathan",
      designation: "Chancellor",
      imgurl:
        "https://vitonline.in/wp-content/uploads/2025/02/chacellor-e1738818533699.webp",
    },
    {
      name: "Dr. Sankar Viswanathan",
      designation: "Vice President",
      imgurl:
        "https://vitonline.in/wp-content/uploads/2025/02/chacellor-e1738818533699.webp",
    },
    {
      name: "Ms. Kadhambari S. Viswanathan",
      designation: "Assistant Vice President",
      imgurl:
        "https://vitonline.in/wp-content/uploads/2025/02/chacellor-e1738818533699.webp",
    },
    {
      name: "Dr. Sekar Viswanathan",
      designation: "Pro-Vice Chancellor",
      imgurl:
        "https://vitonline.in/wp-content/uploads/2025/02/chacellor-e1738818533699.webp",
    },
    {
      name: "Mr. V. Raju",
      designation: "Registrar",
      imgurl:
        "https://vitonline.in/wp-content/uploads/2025/02/chacellor-e1738818533699.webp",
    },
    {
      name: "Dr. P. Gunasekaran",
      designation: "Convener",
      imgurl:
        "https://vitonline.in/wp-content/uploads/2025/02/chacellor-e1738818533699.webp",
    },
  ];
  return (
    <div className="min-h-screen text-[#816e8b] px-4 sm:px-6 md:px-8 lg:px-20 box-border flex flex-col w-full bg-[#110019]  py-28 team-main-div">
      <div className="py-24 flex flex-col items-center" >
        <h1 className="font-sans text-2xl text-center sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
          OUR TEAM
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-center mb-6 sm:mb-8 max-w-3xl">
          Dive into the heart of VIT Bhopal with AdVITYa'25 – an electrifying
          blend of technology and culture. Crafted by the ingenious minds of VIT
          Bhopal students.
        </p>
      </div>

      <div className="flex flex-col lg:mb-20 mb-15">
        <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center sm:text-left">
          Our Patron
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {Data.map((element, index) => (
            <TeamCard
              key={`patron-${index}`}
              name={element.name}
              designation={element.designation}
              imgurl={element.imgurl}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-8 sm:mb-10">
        <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center sm:text-left">
          Conveyors
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {Data.map((element, index) => (
            <TeamCard
              key={`conveyors-${index}`}
              name={element.name}
              designation={element.designation}
              imgurl={element.imgurl}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center sm:text-left">
          Student Council
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {Data.map((element, index) => (
            <TeamCard
              key={`council-${index}`}
              name={element.name}
              designation={element.designation}
              imgurl={element.imgurl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
