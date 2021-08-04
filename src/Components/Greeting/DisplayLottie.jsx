import React from "react";
import Lottie from "react-lottie";

export const DisplayLottie = ({ animationData }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    return (
        <React.Suspense>
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </React.Suspense>
    );
};
