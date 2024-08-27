"use client";

import React from "react";
import useUIState from "@/hooks/useUiState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";

const Category = () => {
    const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

    const onClickCategory = (item) => {
        if (homeCategory === item.label) {
            setHeaderImageSrc("");
            setHomeCategory("");
        } else {
            // 이전 값들이 로드되는 현상 발생
            setHeaderImageSrc(item.src);
            setHomeCategory(item.label);
        }
    };
    return (
        <ul className="max-w-full flex overflow-x-auto gap-4">
            {homeCategoryList.map((item) => {
                return (
                    <li
                        key={item.label}
                        className={cn(
                            "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.5)] hover:bg-[rgba(144,144,144,1)] cursor-pointer",
                            homeCategory === item.label &&
                                "bg-white text-black hover:bg-white"
                        )}
                        onClick={() => onClickCategory(item)}
                    >
                        {item.label}
                    </li>
                );
            })}
        </ul>
    );
};

export default Category;
