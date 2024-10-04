class ParkingSystem {
    spaces: any = {}
    paid: boolean = false;

    constructor(big: number, medium: number, small: number) {
        this.spaces = {
            1:big,
            2:medium,
            3:small
        }
    }

    addCar(carType: number): boolean {
        if(this.spaces[carType] == 0) return false;

        this.spaces[carType] -= 1;
        return true
    }

    // removeCar(carType: number): void {
    //     if(this.spaces[carType] == 0) return
    //     this.spaces[carType] += 1
    // }

    // payRequest(carType: number, reservationId: string) {
    //     this.utils.runPayment(carType, reservationId).subscribe((resp) => {
    //         if(!resp) return this.utils.showToaster('error', resp.message)
    //         this.paid = true; 
    //     })
    // }

}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */