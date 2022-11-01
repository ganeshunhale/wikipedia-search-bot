import React, { useEffect, useContext } from 'react';
import { Consumecontext, context } from '../contextapi';
import useWindowDimens from '../hooks/useWindowDimens';
import Wikisearch from './wikisearch';



function ChabotExpanded(props) {

    const { showWiki, CBExpandedProps } = useContext(context)

    let { height, width } = useWindowDimens()

    useEffect(() => {


        // props.setNameCB("Ganesh Unhale")
        console.log("1111111111111111111111111", props);

        props.triggerNextStep({ value: props.steps?.search?.value, trigger: "1" })
    }, [])



    useEffect(() => {

        console.log("valuevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalue", showWiki, props.steps);

        CBExpandedProps(props.steps)

        //Desktop condn


        if (width > 570) {

            showWiki(true)

        } else {
            showWiki(false)

        }
    }, [width]);

    return <div>

        {/* <h1>ChabotExpanded</h1> */}


        {/* phone condn */}
        {

            width <= 570 && (

                <Wikisearch steps={props.steps} fromCBExpanded={true} ></Wikisearch>

            )
        }

    </div>;
}

export default ChabotExpanded;
