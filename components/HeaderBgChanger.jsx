"use client";
import useUIState from "@/hooks/useUiState";
import React, { useEffect } from "react";

const HeaderBgChanger = ({ imgSrc }) => {
    const { setHeaderImageSrc } = useUIState();

    useEffect(() => {
        if (imgSrc) setHeaderImageSrc(imgSrc);
    }, [imgSrc, setHeaderImageSrc]);
    return <></>;
};

export default HeaderBgChanger;
