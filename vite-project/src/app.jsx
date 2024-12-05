import {Layout} from "./components/layout/layout";
import {RestaurantsPage} from "./components/restaurants-page/restaurants-page";
import {Navigation} from "./components/navigation/navigation";
import { restaurants } from "../materials/mock.js";
import {useState} from "react";

export const App = () => {
    return (
        <Layout>
            <RestaurantsPage />
        </Layout>
    );
}