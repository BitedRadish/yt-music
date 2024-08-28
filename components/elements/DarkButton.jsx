import React from "react";
import { cn } from "@/lib/utils";

const DarkButton = ({ icon = <></>, label, className = "", ...props }) => {
    return (
        <div
            className={cn(
                "bg-black text-white border border-neutral-700 hover:bg-neutral-700 cursor-pointer rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-2",
                className
            )}
            {...props}
        >
            <span> {icon}</span>
            <span>{label}</span>
        </div>
    );
};

export default DarkButton;
