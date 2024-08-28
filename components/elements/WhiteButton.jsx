import React from "react";
import { cn } from "@/lib/utils";

const WhiteButton = ({
    icon = <></>,
    label,
    className = "",
    onClick = () => {},
    ...props
}) => {
    return (
        <div
            className={cn(
                "bg-white text-black cursor-pointer hover:bg-neutral-200 rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-2",
                className
            )}
            {...props}
            onClick={onClick}
        >
            <span> {icon}</span>
            <span>{label}</span>
        </div>
    );
};

export default WhiteButton;
