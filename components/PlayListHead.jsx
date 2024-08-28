"use client";

import React from "react";
import { FiMoreVertical, FiFolderPlus, FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import Image from "next/image";
import WhiteButton from "@/components/elements/WhiteButton";
import DarkButton from "@/components/elements/DarkButton";
import usePlayerState from "@/hooks/usePlayerState";

const PlayListHead = ({ playlist = {} } = {}) => {
    const { playlistName, owner, songList } = playlist;
    const randomSong = getRandomElementFromArray(songList);

    const { addSongList } = usePlayerState();
    const onClickPlay = () => {
        addSongList(songList);
    };

    return (
        <section>
            <div className="flex gap-[50px] ">
                <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
                    <Image
                        alt="songImg"
                        fill
                        src={randomSong?.imageSrc}
                    ></Image>
                </div>
                <article className="flex flex-col justify-center">
                    <div className="font-bold text-[28px]">{playlistName}</div>
                    <div className="text-neutral-400 mt-4 text-[14px]">
                        <div>{`앨범 + ${owner} + 2019`}</div>
                        <div>{`${songList.length}곡 + 15분`}</div>
                    </div>
                    <ul className="hidden lg:flex gap-4 mt-5">
                        <WhiteButton
                            className={"w-[85px]"}
                            icon={<FiPlay></FiPlay>}
                            label={"재생"}
                            onClick={onClickPlay}
                        ></WhiteButton>
                        <DarkButton
                            className={"w-[135px] text-[14px]"}
                            icon={<FiFolderPlus></FiFolderPlus>}
                            label={"보관함에 저장"}
                        ></DarkButton>
                        <IconButton
                            icon={<FiMoreVertical size={24}></FiMoreVertical>}
                        ></IconButton>
                    </ul>
                </article>
            </div>
            <ul className="lg:hidden flex gap-4 mt-5">
                <WhiteButton
                    className={"w-[85px]"}
                    icon={<FiPlay></FiPlay>}
                    label={"재생"}
                    onClick={onClickPlay}
                ></WhiteButton>
                <DarkButton
                    className={"w-[135px] text-[14px]"}
                    icon={<FiFolderPlus></FiFolderPlus>}
                    label={"보관함에 저장"}
                ></DarkButton>
                <IconButton
                    icon={<FiMoreVertical size={24}></FiMoreVertical>}
                ></IconButton>
            </ul>
        </section>
    );
};

export default PlayListHead;
