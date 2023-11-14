import Coffee from "./Coffee";

export default class Cappuccino implements Coffee {
    grindCoffee = () => {
        console.log("finely grind coffee beans");
    };
    makeCoffee = () => {
        console.log("force very hot water under pressure through the grinded coffee")
        console.log("create of microfoam")
    };
    pourIntoCup = () => {
        console.log("pour 30ml of coffee into cup")
        console.log("pour 30ml of mircofoam")
    };
}