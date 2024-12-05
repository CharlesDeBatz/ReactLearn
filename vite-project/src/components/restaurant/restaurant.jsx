import {Menu} from "../menu/menu";
import {Reviews} from "../reviews/reviews";

export const Restaurant = ({restaurant}) => {
    const {id, name, menu, reviews} = restaurant;
    return (
        <div key={id} style={{marginBottom: "20px"}}>
            <h2>{name}</h2>

            <Menu menu={menu}/>

            <Reviews reviews={reviews}/>
        </div>
    );
}