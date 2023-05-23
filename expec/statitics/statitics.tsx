import React from "react";

const Statitics = () => {
    return (
        <>
            <div className="statitics h-[20rem] bg-[#252641] flex justify-evenly items-center text-white" id="statitics">
                <div className="flex flex-col justify-center items-center text-[3rem] font-bold tracking-widest">
                    <span>+20.000</span>
                    <span>Graduated</span>
                </div>
                <div className="flex flex-col justify-center items-center text-[3rem] font-bold tracking-widest">
                    <span>+200</span>
                    <span>Experienced</span>
                    <span>Intructors</span>
                </div>
                <div className="flex flex-col justify-center items-center text-[3rem] font-bold tracking-widest">
                    <span>100%</span>
                    <span>Opportunity</span>
                    <span>Job</span>
                </div>
            </div>
        </>
    );
}

export default Statitics;