import {Component} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})

export class CarsComponent {
    canAddCarFlag = false;
    addCarStatus = false;
    inputText = 'Default';
    carName = '';
    carYear = 2017;
    cars = [
        'Ford',
        'Mazda',
        'ZAZ',
        'Lada',
        'BMW',
        'Audi',
    ];
    dates = [
        new Date(2015, 3, 5).toDateString(),
        new Date(2011, 7, 20).toDateString(),
        new Date(2017, 8, 8).toDateString(),
        new Date(2006, 12, 17).toDateString(),
    ];

    constructor() {
        setTimeout(() => {
            this.canAddCarFlag = true;
        }, 4000);
    }

    addCar() {
        this.addCarStatus = true;
        this.cars.push(this.carName);
        this.carName = '';
    }

    setBigCarText(itemCar: string) {
        return itemCar.length > 4 ? true : false;
    }

    /*-----------------------------------------------*/

    // onKeyUp(event: Event) {
    //     this.inputText = (<HTMLInputElement>event.target).value;
    //     console.log(this.inputText);
    // }

    // onKeyUp(value) {
    //     this.inputText = value;
    // }

    onKeyUp(event) {
        // Добавление текста по нажатию Enter. Реализация через if.

        // if (event.code === 'Enter') {
        //     this.inputText = event.target.value;
        // }

        // добавление в шаблон (keyup.enter)

        this.inputText = event.target.value;
    }
}