import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import Wikisearch from './wikisearch';
import "../App.css";
import ChabotExpanded from './ChabotExpanded';
import useWindowDimens from '../hooks/useWindowDimens';
import { useContext } from 'react';
import { Consumecontext, context } from '../contextapi';
import SocialMediaShare from "./SocialMediaShare";



// class DBPedia extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             loading: true,
//             result: '',
//             trigger: false,
//         };

//         this.triggetNext = this.triggetNext.bind(this);
//     }

// componentWillMount() {
//     const self = this;
//     const { steps } = this.props;
//     const search = steps.search.value;
//     const endpoint = encodeURI('https://dbpedia.org');
//     const query = encodeURI(`
//   select * where {
//       ?x rdfs:label "${search}"@en .
//       ?x rdfs:comment ?comment .
//     FILTER (lang(?comment) = 'en')
// } LIMIT 100
// `);
//     //   "${search}"

//     const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;
//     // const queryUrl = `https://wikipedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;
//     // const queryUrl = `https://www.bing.com/search?q=${query}&form=SWAUA2`;

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener('readystatechange', readyStateChange);

//     function readyStateChange() {
//         if (this.readyState === 4) {
//             const data = JSON.parse(this.responseText);
//             console.log('data', data);
//             const bindings = data.results.bindings;
//             if (bindings && bindings.length > 0) {
//                 self.setState({ loading: false, result: bindings[0].comment.value });
//             } else {
//                 self.setState({ loading: false, result: 'Not found.' });
//             }
//         }
//     }

//     xhr.open('GET', queryUrl);
//     xhr.send();
// }

// triggetNext() {
//     this.setState({ trigger: true }, () => {
//         this.props.triggerNextStep();
//     });
// }

//     render() {
//         const { trigger, loading, result } = this.state;

//         return (
//             <div className="dbpedia">
//                 {loading ? <Loading /> : result}
//                 {
//                     !loading &&
//                     <div
//                         style={{
//                             textAlign: 'center',
//                             marginTop: 20,
//                         }}
//                     >
//                         {
//                             !trigger &&
//                             <button
//                                 onClick={() => this.triggetNext()}
//                             >
//                                 Search Again
//                             </button>
//                         }
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

// DBPedia.propTypes = {
//     steps: PropTypes.object,
//     triggerNextStep: PropTypes.func,
// };

// DBPedia.defaultProps = {
//     steps: undefined,
//     triggerNextStep: undefined,
// };

const ExampleDBPedia = ({ children, showChatBot, toggleChecked, showWiki }) => {

    let { height, width } = useWindowDimens()
    const { CB_WIDTH } = useContext(context)


    let WindowWidth = width
    let windowHight = height

    const [Name, setName] = useState("Gan")


    return (

        <>
            {/* <div className='ChatbotContainer' > */}
            <ChatBot
                floating
                steps={[


                    {
                        id: '1',
                        options: [
                            { value: 1, label: 'Wikipedia search', trigger: 'Wiki' },
                            { value: 2, label: 'Share', trigger: 'share' },
                            //   { value: 3, label: 'Number 3', trigger: '3' },
                        ],
                    },
                    {
                        id: 'Wiki',
                        message: 'Type something to search on Wikipedia. (Ex.: India)',
                        trigger: 'search',
                    },
                    {
                        id: 'search',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        // component: <DBPedia />,
                        // component: <Wikisearch></Wikisearch>,
                        // component: <ChabotExpanded showWikiCB={() => showWiki()}></ChabotExpanded>,

                        component: <ChabotExpanded setNameCB={(name) => {
                            setName(name)
                            // alert(name)
                        }} ></ChabotExpanded>,


                        // waitAction: true,
                        // trigger: '1',
                        // user: true,
                        // trigger: '4',

                    },
                    {
                        id: 'share',
                        // message: "{previousValue}",
                        // waitAction: true,
                        component: <SocialMediaShare></SocialMediaShare>,
                        trigger: '1',

                    },

                ]}

                headerTitle={"search on wikipedia or share"}

                opened={showChatBot}

                toggleFloating={() => {
                    // alert("toggled")
                    toggleChecked()


                }}
                // style={{ transform: "translateY(9vh)" }}
                style={{ width: WindowWidth <= 565 ? "100vw" : CB_WIDTH, transform: showChatBot ? "scaleY(0.92)" : "" }}



            // width={"20px"}
            // id="chatBotId"

            // className='ChatbotContainer'
            >





            </ChatBot>

            {/* </div> */}

        </>
    )
};

export default ExampleDBPedia;