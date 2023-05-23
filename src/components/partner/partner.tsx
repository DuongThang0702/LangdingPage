import React from "react";
import "./partner.module.css"
import Image from "next/image";
import PartnerList from "./partnerList";

const Partner = () => {

    return (
        <>
            <div className="partner w-full flex justify-center items-center" id="partner">
                <div className="partner__header">
                    <h1 className="text-6xl font-bold text-[#2E2F42] mt-[6rem] leading-[5rem]">
                        {"Đối Tác Của APC"}
                    </h1>
                </div>
            </div>
            <PartnerList />
        </>
    )
}

export default Partner;