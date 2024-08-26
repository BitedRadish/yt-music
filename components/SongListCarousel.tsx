import { TopSong } from "@/types";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import PlaylistCard from "./PlaylistCard";
import { chunkArray } from "@/lib/utils";
import SongCard from "@/components/SongCard";

interface SongListCarouselProps {
    title: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    songListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
    return (
        <div className="flex flex-col gap-4">
            {songList.map((song: TopSong, idx: number) => {
                return <SongCard key={idx} song={song}></SongCard>;
            })}
        </div>
    );
};
const SongListCarousel: React.FC<SongListCarouselProps> = ({
    title,
    subTitle,
    Thumbnail,
    songListTop10,
}: SongListCarouselProps) => {
    const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];

    return (
        <div className="w-full">
            <Carousel>
                <div className="flex justify-between items-end my-2">
                    <article className="flex gap-3 items-center">
                        {Thumbnail}

                        <div className="flex flex-col justify-center">
                            <div>
                                {subTitle && (
                                    <div className="text-neutral-500">
                                        {subTitle}
                                    </div>
                                )}
                            </div>
                            <div className="text-[34px] font-bold leading-[34px]">
                                {title}
                            </div>
                        </div>
                    </article>
                    <div className="relative left-[45px]">
                        <div className="absolute bottom-[20px]">
                            <CarouselPrevious className="right-2" />
                            <CarouselNext className="left-2"></CarouselNext>
                        </div>
                    </div>
                </div>

                <CarouselContent className="mt-4">
                    {chunkedTop10SongList?.map((songList, index) => {
                        return (
                            <CarouselItem
                                key={index}
                                // 복습 포인트
                                className="lg:basis-1/2"
                            >
                                <SongColumn songList={songList} />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default SongListCarousel;
