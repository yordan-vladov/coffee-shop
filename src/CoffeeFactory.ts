import Americano from "./Americano";
import Cappuccino from "./Cappuccino";
import { CoffeeType } from "./CoffeeType";
import Espresso from "./Espresso";

export default class CoffeeFactory {
    static createCoffee = (type: CoffeeType) => {
        switch (type) {
            case CoffeeType.AMERICANO:
                return new Americano();
            case CoffeeType.ESPRESSO:
                return new Espresso();
            case CoffeeType.CAPPUCCINO:
                return new Cappuccino();
            default:
                throw new Error('Coffee type not supported!')
        }
    }
}