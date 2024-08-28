"use client";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

import {
    FiPlayCircle,
    FiThumbsDown,
    FiThumbsUp,
    FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";
import usePlayerState from "@/hooks/usePlayerState";
interface SongCardRowExpandProps {
    song: Song;
}
const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
    const { addSongList } = usePlayerState();

    const { channel, channelId } = song;
    const { push } = useRouter();
    const onClickChannel = () => {
        push(`/channel/${channelId}`);
    };
    const onClickPlay = () => {
        addSongList([song]);
    };
    return (
        <article className="flex gap-4 h-[48px] w-full relative group">
            <div className="w-[48px] h-[48px] relative" onClick={onClickPlay}>
                <Image
                    src={song.imageSrc}
                    alt="img"
                    fill
                    className="object-cover"
                ></Image>
                <section className="w-[48px] h-[48px] absolute  items-center justify-center hidden group-hover:flex bg-black cursor-pointer">
                    <FiPlayCircle size={20} />
                </section>
            </div>

            <div className="flex gap-4 justify-between items-center basis-1/3">
                <div className="w-[100px] truncate">{song.name}</div>
                <div
                    className="text-neutral-500 hover:underline cursor-pointer"
                    onClick={onClickChannel}
                >
                    {channel}
                </div>
            </div>
            <section className="hidden group-hover:flex absolute right-0 h-[48px] w-[120px] bg-[rgba(0,0,0,0.7)] items-center justify-end">
                <IconButton icon={<FiThumbsDown size={20} />} />
                <IconButton icon={<FiThumbsUp size={20} />} />
                <IconButton icon={<FiMoreVertical size={20} />} />
            </section>
        </article>
    );
};

export default SongCardRowExpand;
