import React, { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Fragment>
            {showButton && (
                <button
                    onClick={handleScrollToTop}
                    className="back-to-top fixed bottom-20 right-20 text-white bg-white px-6 py-6 border-2 rounded-full"
                    style={{
                        borderColor: "#fff",
                        boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className="text-4xl text-[#2E2F42]"
                    />
                </button>
            )}
        </Fragment>
    );
};

export default BackToTop;