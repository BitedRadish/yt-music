import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "@/app/explore/components/Category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";
import { dummyGenreList } from "@/lib/dummyData";

const page = async () => {
    const [playlistArray, songListTop10] = await Promise.all([
        getAllPlaylist(),
        getSongListTop10(),
    ]);
    const genreList = dummyGenreList;

    return (
        <PagePadding>
            <div className="mt-4"></div>
            <Category />

            <div className="mt-20"></div>
            <PlayListCarousel
                title="새앨범 및 싱글"
                playlistArray={playlistArray}
            ></PlayListCarousel>

            <div className="mt-20"></div>
            <SongListCarousel
                title="인기곡"
                songListTop10={songListTop10}
            ></SongListCarousel>
            <div className="mt-20"></div>
            <GenreListCarousel
                title="인기곡"
                genreList={genreList}
            ></GenreListCarousel>
            <div className="mt-20"></div>
            <div className="mt-20"></div>
        </PagePadding>
    );
};

export default page;
