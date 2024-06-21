import AnimalHero from "../Components/AnimalComponents/AnimalHero"
import dogSwimming from '../../assets/dog-swimming.mp4'
import AnimalGallery from "../Components/AnimalComponents/AnimalGallery"
import { useEffect } from "react"
const Dogs = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <AnimalHero video={dogSwimming} animal={'dogs'} />
        <AnimalGallery animal={'dogs'}/>
        </>
    )
}
export default Dogs