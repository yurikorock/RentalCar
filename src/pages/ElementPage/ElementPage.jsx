import { useParams } from "react-router-dom";
import ElementBlockLeft from "../../components/ElementBlockLeft/ElementBlockLeft.jsx";
import { useSelector } from "react-redux";
import { selectCarsList } from "../../redux/selectors.js";

export default function ElementPage(){
    const {id} = useParams();
    const carsList = useSelector(selectCarsList);

    const car = carsList.find((item) => item.id === id);
    if(!car) {
        return <p>Car not found !</p>
    }
    return (
        <div>
            <p>ElementPage</p>
            <ElementBlockLeft car={car}/>
        </div>
    )
}