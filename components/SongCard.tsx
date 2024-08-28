"use client";
import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
    FiPlayCircle,
    FiThumbsDown,
    FiThumbsUp,
    FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardProps {
    song: TopSong;
}
const SongCard: React.FC<SongCardProps> = ({ song }) => {
    const { addSongList } = usePlayerState();
    const onClickPlay = () => {
        addSongList([song]);
    };
    return (
        <article className="flex gap-4 h-[48px] w-full relative group">
            <div className="w-[48px] h-[48px] relative">
                <Image
                    src={song.imageSrc}
                    alt="img"
                    fill
                    className="object-cover"
                ></Image>
                <section
                    onClick={onClickPlay}
                    className="w-[48px] h-[48px] absolute  items-center justify-center hidden group-hover:flex bg-black cursor-pointer"
                >
                    <FiPlayCircle size={20} />
                </section>
            </div>
            <div className="flex items-center gap-4">
                {song.rank === song.prevRank ? (
                    <FaCircle size={10} />
                ) : song.rank > song.prevRank ? (
                    <AiOutlineCaretUp size={10} color="#3CA63F" />
                ) : (
                    <AiOutlineCaretDown size={10} color="#FF0000" />
                )}
                <div>{song.rank + 1}</div>
            </div>
            <div>
                <div>{song.name}</div>
            </div>
            <section className="hidden group-hover:flex absolute right-0 h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)] items-center justify-end">
                <IconButton icon={<FiThumbsDown size={20} />} />
                <IconButton icon={<FiThumbsUp size={20} />} />
                <IconButton icon={<FiMoreVertical size={20} />} />
            </section>
        </article>
    );
};

export default SongCard;
