



import React, { useContext, useEffect, useState } from 'react';
import useWindowDimens from '../hooks/useWindowDimens';
import { context } from '../contextapi';


function Wikisearch(props) {
    const [Snippet, setSnippet] = useState("");
    const [Id, setId] = useState(null);
    const { steps, fromCBExpanded } = props
    // const { search = "" } = steps
    let { height, width } = useWindowDimens()
    let WindowWidth = width
    const { CB_WIDTH } = useContext(context)



    useEffect(() => {

        if (steps?.search) {
            console.log("props===========", props, steps?.search);
            var url = "https://en.wikipedia.org/w/api.php";
            var params = {
                action: "query",
                list: "search",
                srsearch: steps?.search?.value,
                format: "json"
            };

            url = url + "?origin=*";
            Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });


            fetch(url)
                .then(function (response) { return response.json(); })
                .then(function (response) {
                    console.log("res", response);

                    // if (response.query.search[0].title === "Nelson Mandela") {
                    console.log(`Your search page ${props?.steps?.search?.value} exists on English Wikipedia`);

                    setSnippet(response?.query?.search[0]?.snippet)
                    setId(response?.query?.search[0]?.pageid)

                }).then(
                    function (response) {
                        //   for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
                        // console.log(pointerToThis.state.wikiSearchReturnValues);
                        // let page = pointerToThis.state.wikiSearchReturnValues[key2];
                        // let pageID = page.queryResultPageID;
                        let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${Id}&inprop=url&format=json`;

                        fetch(urlForRetrievingPageURLByPageID)
                            .then(
                                function (response) {
                                    return response.json();
                                }
                            )
                            .then(
                                function (response) {
                                    //   page.queryResultPageFullURL = response.query.pages[pageID].fullurl;
                                    console.log("urlForRetrievingPageURLByPageID-----res===========>>>", response);
                                    //   pointerToThis.forceUpdate();
                                }
                            )
                    }
                    // }

                    // }
                )
                .catch(function (error) { console.log(error); });



        }
        // console.log("ggggggggggggggggggggggggggggggggggggggggggg"(props?.steps?.search?.value));

    }, [steps?.search, Id]);

    const renderIframe = () => {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <iframe title='yt' width={"100%"} height={"100%"} src={`https://en.wikipedia.org/wiki/${steps?.search?.value}`}  ></iframe>
            </div>
        )

    }
    return (
        <>
            {
                fromCBExpanded ? (
                    //Mbile View
                    <div style={{ zIndex: 2, width: "100vw", height: "100vw" }}>
                        {/* <h1>Mobile View</h1> */}


                        {renderIframe()}


                    </div>

                ) : (
                    //DesktopView
                    <div style={{ position: 'fixed', right: CB_WIDTH, bottom: "30px", zIndex: 2, marginRight: "37px", width: `${WindowWidth / 1.03 - 332}px`, height: "75vh" }}>
                        {/* <h1>wasss</h1> */}
                        {/* <div dangerouslySetInnerHTML={{ __html: Snippet }}> */}
                        {/* <div dangerouslySetInnerHTML={{ __html: Snippet }}>
    
            </div> */}
                        {/* <div style={{ width: "300px", height: "auto", }}>
                <iframe title='yt' width={300} height={600} src={`https://en.wikipedia.org/wiki/${steps?.search?.value}`}  ></iframe>
            </div> */}

                        {renderIframe()}
                        {/* <object data="https://www.hostinginfo.co" width="100%" height="300" type="text/html"> Alternative iframe</object> */}
                        {/* {Snippet && Snippet} */}

                    </div>

                )


            }
        </>
    )
}

export default Wikisearch;


