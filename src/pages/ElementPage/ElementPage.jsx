import { useParams } from "react-router-dom";
import ElementBlockLeft from "../../components/ElementBlockLeft/ElementBlockLeft.jsx";
import { useSelector } from "react-redux";
import { selectCarsList } from "../../redux/selectors.js";
import css from "./ElementPage.module.css"
import ElementBlockRight from "../../components/ElementBlockRight/ElementBlockRight.jsx";

export default function ElementPage(){
    const {id} = useParams();
    const carsList = useSelector(selectCarsList);

    const car = carsList.find((item) => item.id === id);
    if(!car) {
        return <p>Car not found !</p>
    }
    return (
        <div className={css.container}>
          
            <ElementBlockLeft car={car}/>
             <ElementBlockRight car={car}/>
        </div>
    )
}