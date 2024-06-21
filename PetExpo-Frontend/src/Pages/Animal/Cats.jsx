import AnimalHero from "../Components/AnimalComponents/AnimalHero"
import catVideo from '../../assets/cat-video.mp4'
import AnimalGallery from "../Components/AnimalComponents/AnimalGallery"
import { useEffect } from "react"
const Cats = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <AnimalHero video={catVideo} animal={'cats'}/>
        <AnimalGallery animal={'cats'} />
        </>
    )
}
export default Cats