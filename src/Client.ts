import CoffeeFactory from "./CoffeeFactory";
import { CoffeeType } from "./CoffeeType";

let coffee = CoffeeFactory.createCoffee(CoffeeType.ESPRESSO);

coffee.grindCoffee();
coffee.makeCoffee();
coffee.pourIntoCup();