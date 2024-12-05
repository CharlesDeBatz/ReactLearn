import { useState } from "react";

export const useSelectedRestaurant = (defaultSelection = null) => {
    const [selectedRestaurantId, setSelectedRestaurant] = useState(defaultSelection);

    return {
        selectedRestaurantId,
        setSelectedRestaurant,
    };
};