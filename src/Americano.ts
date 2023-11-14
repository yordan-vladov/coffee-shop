import Coffee from "./Coffee";

export default class Americano implements Coffee {
    grindCoffee = () => {
        console.log("finely grind coffee beans");
    };
    makeCoffee = () => {
        console.log("force very hot water under pressure through the grinded coffee")
    };
    pourIntoCup = () => {
        console.log("pour 30ml of coffee into cup. Dillute with 120ml of hot water")
    };

}