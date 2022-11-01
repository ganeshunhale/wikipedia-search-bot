import React, { useEffect } from 'react';
import { useState } from 'react';

function useWindowDimens() {
    // const [WindowWidth, setWindowWidth] = useState(0)
    // const [WindowHeight, setWindowHeight] = useState(0)

    const [WindowDimens, setWindowDimens] = useState({ height: 0, width: 0 })




    useEffect(() => {

        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        const height = window.innerHeight

        // setWindowWidth(width)
        // setWindowHeight(height)


        setWindowDimens({ ...WindowDimens, width, height })
    }

    useEffect(() => {
        console.log("width", WindowDimens);


    });


    return WindowDimens
}

export default useWindowDimens;
