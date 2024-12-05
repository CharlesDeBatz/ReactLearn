import { useState } from "react";

export const useSelectedRestaurant = (defaultSelection = null) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(defaultSelection);

    return {
        selectedRestaurant,
        setSelectedRestaurant,
    };
};