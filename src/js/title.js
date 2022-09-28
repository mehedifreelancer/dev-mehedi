import { hero } from "../data/home";

function setTitle (title) {
    return ( 

        document.title = `${hero.logoName } || ${title}`
     );
}

export default setTitle ;