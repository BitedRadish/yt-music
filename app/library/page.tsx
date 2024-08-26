import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "@/app/library/components/Category";
import PlaylistCard from "@/components/PlaylistCard";
import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

const page = () => {
    return (
        <PagePadding>
            <div className="mt-9"></div>

            <Category></Category>
            <div className="mt-12"></div>
            <section className="grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 lg:grid-cols-6">
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
                <PlaylistCard
                    playlist={getRandomElementFromArray(dummyPlaylistArray)}
                />
            </section>
        </PagePadding>
    );
};

export default page;
