"use client";

import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingBar = () => {
    return (
        <div className="w-full">
            <FadeLoader
                color="green"
                cssOverride={{ width: "100%" }}
            ></FadeLoader>
        </div>
    );
};

export default LoadingBar;
