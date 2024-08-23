"use client";

import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "@/components/elements/PlayListNav";

const Navigator = () => {
    const pathName = usePathname();
    const routes = useMemo(() => {
        return [
            {
                icon: <GoHome size={24} />,
                label: "홈",
                isActive: pathName === "/",
                href: "/",
            },
            {
                icon: <FiCompass size={24} />,
                label: "둘러보기",
                isActive: pathName === "/explore",
                href: "/explore",
            },
            {
                icon: <FiMusic size={24} />,
                label: "보관함",
                isActive: pathName === "/library",
                href: "/library",
            },
        ];
    }, [pathName]);
    return (
        <div>
            <section className="flex flex-col gap-3 p-4">
                {routes.map((route) => {
                    return (
                        <Link key={route.label} href={route.href}>
                            <div
                                className={cn(
                                    "flex items-center gap-4 text-[1rem] hover:bg-neutral-700 rounded-lg p-2",
                                    route.isActive && "bg-neutral-800"
                                )}
                            >
                                {route.icon}
                                <span>{route.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </section>
            <section className="px-6">
                <div className="w-full h-[1px] bg-neutral-800"></div>
            </section>
            <section className="px-6">
                <div className="flex items-center gap-2 bg-neutral-500 my-6 rounded-3xl p-2 font-[300] justify-center cursor-pointer hover:bg-neutral-700">
                    <FiPlus size={24} />
                    <span>새 재생 목록</span>
                </div>
            </section>
            <section>
                <ul>
                    {dummyPlaylistArray.map((playlist) => {
                        return <PlayListNav playlist={playlist}></PlayListNav>;
                    })}
                </ul>
            </section>
        </div>
    );
};

export default Navigator;
