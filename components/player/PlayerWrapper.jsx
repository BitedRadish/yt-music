"use client";

import React from "react";
import usePlayerState from "@/hooks/usePlayerState";
import PlayerContent from "@/components/player/PlayerContent";

const PlayerWrapper = () => {
    const { isVisiblePlayer } = usePlayerState();

    if (!isVisiblePlayer) return null;

    return (
        <div className="fixed bottom-0 w-full h-[72px] bg-neutral-800">
            <PlayerContent></PlayerContent>
        </div>
    );
};

export default PlayerWrapper;
