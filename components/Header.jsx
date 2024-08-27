"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Logo from "@/components/elements/Logo";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import Navigator from "./elements/Navigator";

const HeaderDrawer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent className="w-[240px] h-full">
                <div className="py-3">
                    <div className="px-3">
                        <Logo
                            isInDrawer
                            onClickClose={() => {
                                setIsOpen(false);
                            }}
                        />
                    </div>
                    <Navigator />
                </div>
            </DrawerContent>
        </Drawer>
    );
};

const Header = ({ children }) => {
    const { headerImageSrc } = useUIState();
    const [isScrolled, setIsScrolled] = useState(false);
    const headRef = useRef();
    useEffect(() => {
        const currentHeaderRef = headRef?.current;

        const handleScroll = () => {
            const scrollValue = currentHeaderRef?.scrollTop;
            setIsScrolled(scrollValue !== 0);
        };

        currentHeaderRef?.addEventListener("scroll", handleScroll);

        return () => {
            currentHeaderRef?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            ref={headRef}
            className="relative  overflow-y-auto w-full h-full"
        >
            <section className="absolute top-0 w-full">
                <div className="relative h-[400px] w-full">
                    <Image
                        alt="media-item"
                        className="object-cover"
                        fill
                        src={
                            headerImageSrc ||
                            "https://images.unsplash.com/photo-1707833558984-3293e794031c"
                        }
                    ></Image>
                </div>
                <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full "></div>
                <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black opacity-40 w-full "></div>
            </section>
            <section
                className={cn(
                    "sticky top-0 left-0 z-10",
                    isScrolled && "bg-black"
                )}
            >
                <PagePadding>
                    <div className="h-[64px] flex justify-between items-center">
                        <article className="flex items-center h-[42px] min-w-[480px] hidden lg:flex bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
                            <div>
                                <FiSearch size={24} />
                            </div>
                            <input
                                type="text"
                                className="h-full w-full bg-transparent p-2"
                                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                            />
                        </article>
                        <HeaderDrawer>
                            <article className="lg:hidden">
                                <Logo />
                            </article>
                        </HeaderDrawer>
                        <article className="flex items-center gap-6 ">
                            <FaChromecast size={26} />
                            <UserIcon />
                        </article>
                    </div>
                </PagePadding>
            </section>
            <section className="absolute">{children}</section>
        </header>
    );
};

export default Header;
