"use client";
import Image from "next/image";
import React from "react";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";

const PlaylistCard = ({ playlist }) => {
    const { push } = useRouter();
    const { id, owner, playlistName, songList } = playlist ?? {};
    const songListLen = songList?.length;
    const imgSrc = getRandomElementFromArray(songList)?.imageSrc;

    const onClickCard = () => {
        push(`/playlist?list=${id}`);
    };

    const onClickPlay = () => {};

    return (
        <article className="h-[240px] cursor-pointer mt-4 group">
            <section onClick={onClickCard} className="relative h-[136px] ">
                <Image
                    alt="thumbnail"
                    src={imgSrc}
                    fill={true}
                    className="object-cover"
                />
                <div className="relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
                    <div className="absolute top-2 right-2">
                        <IconButton
                            icon={<MdMoreVert size={30}></MdMoreVert>}
                        ></IconButton>
                    </div>
                    <div
                        onClick={onClickPlay}
                        className="absolute bottom-2 right-2 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]"
                    >
                        <FiPlay size={30}></FiPlay>
                    </div>
                </div>
            </section>
            <section className="mt-2">
                <div>{playlistName}</div>
                <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}`}</div>
            </section>
        </article>
    );
};

export default PlaylistCard;
