"use client";

import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import PlayListCarousel from "@/components/PlayListCarousel";
import ChannelHead from "@/app/channel/[id]/components/ChannelHead";

interface ChannelPageProps {
    params: {
        id: string;
    };
}

const page = async (props: ChannelPageProps) => {
    const channel = await getChannelById(Number(props.params.id));

    if (!channel) permanentRedirect("/");

    const imgSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

    return (
        <PagePadding>
            <HeaderBgChanger imgSrc={imgSrc}></HeaderBgChanger>
            <div className="mt-[150px]"></div>
            <div className="text-[20px] font-bold">{channel.name}</div>

            <ChannelHead channel={channel}></ChannelHead>

            <section className="mt-[80px]">
                <div className="text-[28px] font-bold"> 노래</div>
                <div>
                    <ul className="flex flex-col gap-2">
                        {channel.songList.map((song, idx) => {
                            return (
                                <SongCardRowExpand
                                    key={idx}
                                    song={song}
                                ></SongCardRowExpand>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="mt-[80px]">
                <div className="text-[28px] font-bold">앨범</div>
                <PlayListCarousel
                    playlistArray={channel.playlistArray}
                ></PlayListCarousel>
            </section>
            <section></section>
        </PagePadding>
    );
};

export default page;
