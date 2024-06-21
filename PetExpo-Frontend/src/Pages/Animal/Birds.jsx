import AnimalHero from "../Components/AnimalComponents/AnimalHero"
import birdVideo from '../../assets/bird-video.mp4'
import AnimalGallery from "../Components/AnimalComponents/AnimalGallery"
import { useEffect } from "react"
const Birds = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <AnimalHero video={birdVideo} animal={'birds'}/>
        <AnimalGallery animal={'birds'}/>
        </>
    )
}
export default Birds