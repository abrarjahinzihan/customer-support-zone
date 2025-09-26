import React from "react";
import Vector1 from "../assets/vector1.png";
import Vector2 from "../assets/vector2.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto pt-10">

        <div className="relative bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-20 text-center text-white rounded-2xl overflow-hidden flex flex-col items-center justify-center">

            <img
            src={Vector1}
            alt="Vector1"
            className="absolute top-0 left-0 w-1/2 h-auto opacity-40"
            />

            <img
            src={Vector2}
            alt="Vector2"
            className="absolute bottom-0 right-0 w-1/2 h-auto opacity-40"
            />


            <h1 className="text-lg font-medium relative z-10">In-Progress</h1>
            <span className="font-bold text-4xl relative z-10">{inProgressCount}</span>
        </div>


        <div className="relative bg-gradient-to-r from-[#54cf68] to-[#00827a] py-20 text-center text-white rounded-2xl overflow-hidden flex flex-col items-center justify-center">

            <img
            src={Vector1}
            alt="Vector1"
            className="absolute top-0 left-0 w-1/2 h-auto opacity-40"
            />

            <img
            src={Vector2}
            alt="Vector2"
            className="absolute bottom-0 right-0 w-1/2 h-auto opacity-40"
            />


            <h1 className="text-lg font-medium relative z-10">Resolved</h1>
            <span className="font-bold text-4xl relative z-10">{resolvedCount}</span>
        </div>
        </div>
    );
};

export default Banner;
