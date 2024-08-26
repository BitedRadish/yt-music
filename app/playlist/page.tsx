import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import PlayListHead from "@/components/PlayListHead";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import React from "react";
import PagePadding from "@/components/PagePadding";
import SongCardRowExpand from "@/components/SongCardRowExpand";

interface PlaylistPageProps {
    searchParams: {
        list: string;
    };
}
const page = async (props: PlaylistPageProps) => {
    const playlist = await getPlaylistById(Number(props.searchParams.list));
    if (!playlist) permanentRedirect("/");

    const imgSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

    return (
        <PagePadding>
            <HeaderBgChanger imgSrc={imgSrc}></HeaderBgChanger>
            <div className="mt-12"></div>
            <PlayListHead playlist={playlist}></PlayListHead>
            <div className="mt-12"></div>
            <section className="flex flex-col gap-2">
                {playlist.songList.map((song, index) => {
                    return (
                        <SongCardRowExpand
                            key={index}
                            song={song}
                        ></SongCardRowExpand>
                    );
                })}
            </section>
        </PagePadding>
    );
};

export default page;
