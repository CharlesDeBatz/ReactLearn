import {Restaurant} from "../restaurant/restaurant";
import { restaurants } from "../../../materials/mock.js";

export const RestaurantsPage = () => {
    return (
        <>
            {restaurants.map((restaurant) => (
                <Restaurant restaurant={restaurant} />
            ))}
        </>
    );
}