import React from "react";

function TeamCard({ name, designation, imgurl }) {
  return (
    <div className="flex flex-col items-center w-full group max-w-[250px] bg-[#1a0025] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2a0035]">
      <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-4 border-[#3a0045]">
        <img
          src={imgurl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <h3 className="font-bold text-lg md:text-xl text-center mb-2 line-clamp-2">{name}</h3>
      <p className="text-sm md:text-base text-center text-[#a18daa] font-medium">{designation}</p>
    </div>
  );
}

export default TeamCard;