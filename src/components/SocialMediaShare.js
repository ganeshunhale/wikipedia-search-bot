import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,


} from "react-share";
import "../App.css";
function SocialMediaShare() {
    return (<><FacebookShareButton url="https://wikipedia-search-bot.web.app/" quote="I just donated to this important purpose. I invite you to check it out and see if you can help as well." hashtag="ganesh">
        <FacebookIcon size={36} round={true} />
    </FacebookShareButton>
        <WhatsappShareButton url="https://wikipedia-search-bot.web.app/" title="I just donated to this important purpose. I invite you to check it out and see if you can help as well.">
            <WhatsappIcon size={36} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton url="https://wikipedia-search-bot.web.app/" title="I just donated to this important purpose. I invite you to check it out and see if you can help as well." >
            <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
    </>
    );
}

export default SocialMediaShare;

// //<FacebookShareButton
//     url="https://wikipedia-search-bot.web.app/"
//     quote={`visit ${"https://www.youtube.com/"}and follow Elon Musk`}
// // hasblanktarget={true}

// >
//     <FacebookIcon size={36} round={true} />
// </FacebookShareButton>
{/* <FacebookShareButton >g</FacebookShareButton> */ }
{/* <WhatsappShareButton
    url={"https://wikipedia-search-bot.web.app/"}
    quote={`visit ${"https://www.youtube.com/"}and follow Elon Musk`}

// hasblanktarget={true}
>
    <WhatsappIcon size={36} round={true} />
</WhatsappShareButton> */}