import React from "react";
import Vector1 from "../assets/vector1.png";
import Vector2 from "../assets/vector2.png";


const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div
        className="w-full py-10 px-6 flex justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("${Vector1}")` }}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">

            <div
            className="rounded-lg p-8 text-center text-white shadow-md"
            style={{ background: "linear-gradient(135deg, #7C3AED, #9333EA)" }}
            >
            <h3 className="text-lg font-medium mb-2">In-Progress</h3>
            <p className="text-4xl font-bold">{inProgressCount}</p>
            </div>


            <div
            className="rounded-lg p-8 text-center text-white shadow-md"
            style={{ background: "linear-gradient(135deg, #10B981, #047857)" }}
            >
            <h3 className="text-lg font-medium mb-2">Resolved</h3>
            <p className="text-4xl font-bold">{resolvedCount}</p>
            </div>
        </div>
        </div>
    );
};

export default Banner;