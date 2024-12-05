import {Restaurant} from "../restaurant/restaurant";
import { restaurants } from "../../../materials/mock.js";
import {useState} from "react";
import {Navigation} from "../navigation/navigation";

export const RestaurantsPage = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

    return (
        <>
            <Navigation restaurants={ restaurants } setSelectedRestaurant={ setSelectedRestaurant } />
            <Restaurant restaurant={selectedRestaurant} />
        </>
    );
}