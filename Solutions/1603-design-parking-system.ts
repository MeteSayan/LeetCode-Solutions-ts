// Solution 1
class ParkingSystem {
    public places: number[] = [];
    constructor(big: number, medium: number, small: number) {
        this.places = [big, medium, small];
    }

    addCar(carType: number): boolean {
        return this.places[carType - 1] > 0 ? (this.places[carType - 1]--, true) : false;
    }
}

// Solution 2
// class ParkingSystem {
//     bigCarSlot = 0;
//     mediumCarSlot = 0;
//     smallCarSlot = 0;

//     constructor(big: number, medium: number, small: number) {
//         this.bigCarSlot = big;
//         this.mediumCarSlot = medium;
//         this.smallCarSlot = small;
//     }

//     addCar(carType: number): boolean {
//         if(carType == 1 && this.bigCarSlot > 0){
//             this.bigCarSlot--;
//             return true;
//         }else if(carType == 2 && this.mediumCarSlot > 0){
//             this.mediumCarSlot--;
//             return true;
//         }else if(carType == 3 && this.smallCarSlot > 0){
//             this.smallCarSlot--;
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
