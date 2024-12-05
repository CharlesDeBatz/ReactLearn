import { restaurants } from "../../../materials/mock.js";
import {Navigation} from "../navigation/navigation";
import {Restaurant} from "../restaurant/restaurant";
import {useSelectedRestaurant} from "./useSelectedRestaurant";

export const RestaurantsPage = () => {
    const { selectedRestaurantId, setSelectedRestaurant } = useSelectedRestaurant(restaurants[0].id);

    return (
        <>
            <Navigation restaurants={ restaurants } selectedRestaurantId={selectedRestaurantId} setSelectedRestaurant={ setSelectedRestaurant } />
            <Restaurant  restaurants={ restaurants } selectedRestaurantId={selectedRestaurantId} />
        </>
    );
}