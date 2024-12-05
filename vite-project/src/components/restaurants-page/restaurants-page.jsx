import { restaurants } from "../../../materials/mock.js";
import {Navigation} from "../navigation/navigation";
import {Restaurant} from "../restaurant/restaurant";
import {useSelectedRestaurant} from "./useSelectedRestaurant";

export const RestaurantsPage = () => {
    const { selectedRestaurant, setSelectedRestaurant } = useSelectedRestaurant(restaurants[0]);

    return (
        <>
            <Navigation restaurants={ restaurants } setSelectedRestaurant={ setSelectedRestaurant } />
            <Restaurant restaurant={selectedRestaurant} />
        </>
    );
}