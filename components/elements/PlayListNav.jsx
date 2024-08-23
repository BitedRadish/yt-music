"use client";

import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNav = ({ playlist }) => {
    const { id, owner, playlistName, songList } = playlist;

    const onClickPlay = () => {};
    return (
        <li
            className="mx-3 px-4 flex h-[56px] items-center justify-between
        hover:bg-neutral-700 rounded-lg group"
        >
            <div>
                <div className="text-[14px]">{playlistName}</div>
                <div className="text-[12px] text-neutral-500">{owner}</div>
            </div>
            <div>
                <div
                    onClick={onClickPlay}
                    className="hidden group-hover:block cursor-pointer"
                >
                    <IoMdPlayCircle size={30} />
                </div>
            </div>
        </li>
    );
};

export default PlayListNav;
