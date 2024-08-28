"use client";
import React from "react";
import usePlayerState from "@/hooks/usePlayerState";
import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import { FiMusic, FiShuffle } from "react-icons/fi";

const ChannelHead = ({ channel }) => {
    const { addSongList } = usePlayerState();

    const onClickShuffle = () => {
        addSongList(channel.songList);
    };
    return (
        <section>
            <article className="lg:hidden mt-4">
                <div className="">
                    <DarkButton
                        className={"w-[243px] flex justify-center"}
                        label={"구독중 4.16만"}
                    ></DarkButton>
                </div>
                <div className="flex gap-4 mt-4">
                    <WhiteButton
                        label={"셔플"}
                        icon={<FiShuffle size={16}></FiShuffle>}
                        onClick={onClickShuffle}
                    ></WhiteButton>
                    <WhiteButton
                        label={"뮤직 스테이션"}
                        icon={<FiMusic size={16}></FiMusic>}
                    ></WhiteButton>
                </div>
            </article>
            <div className="hidden lg:flex items-center gap-4 text-[14px] mt-4">
                <DarkButton
                    className={"w-[230px] flex justify-center"}
                    label={"구독중 4.16만"}
                ></DarkButton>
                <WhiteButton
                    label={"셔플"}
                    icon={<FiShuffle size={16}></FiShuffle>}
                    onClick={onClickShuffle}
                ></WhiteButton>
                <WhiteButton
                    label={"뮤직 스테이션"}
                    icon={<FiMusic size={16}></FiMusic>}
                ></WhiteButton>
            </div>
        </section>
    );
};

export default ChannelHead;
