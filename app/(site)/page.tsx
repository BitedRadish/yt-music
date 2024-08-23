import React from "react";
import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
    const dummyPlaylistArray1 = [...dummyPlaylistArray];
    const dummyPlaylistArray2 = [await getPlaylistById(1)];
    const dummyPlaylistArray3 = [await getPlaylistById(2)];
    const dummyPlaylistArray4 = [await getPlaylistById(3)];

    return (
        <PagePadding>
            <div className="min-h-[600px]">
                <div className="mt-9"></div>
                <Category />
                <div className="mt-12">
                    <PlayListCarousel
                        title="다시 듣기"
                        Thumbnail={<UserIcon size="lg" />}
                        subTitle="도도"
                        playlistArray={[...dummyPlaylistArray1]}
                    ></PlayListCarousel>
                    <div className="mt-20"></div>
                    <PlayListCarousel
                        title="케이시 - Bloom"
                        subTitle="새로운 앨범"
                        playlistArray={[...dummyPlaylistArray2]}
                    ></PlayListCarousel>
                    <div className="mt-20"></div>

                    <PlayListCarousel
                        title="커뮤니티 제공"
                        playlistArray={[...dummyPlaylistArray3]}
                    ></PlayListCarousel>
                    <div className="mt-20"></div>

                    <PlayListCarousel
                        title="커버 및 리믹스"
                        playlistArray={[...dummyPlaylistArray4]}
                    ></PlayListCarousel>
                </div>
            </div>
        </PagePadding>
    );
};

export default page;
