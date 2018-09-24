// arguments object - no longer bound with arrow functions

// const add = function (a, b){
// console.log(arguments);   
//  return a + b;
// }

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));
// this keyword - no longer bound with arrow functions

const user2 = {
    name: 'Alex',
    cities: ['Saint Paul', 'Chicago', 'Appleton'],
    printPlacesLived: function () {
        // const that = this;
        // this.cities.forEach(function( city ){
        //     console.log(that.name, '\t has lived in ', city)
        // })
        this.cities.forEach(city => {
            console.log(this.name, ' has lived in ', city);
        });

        // console.log(this.name);
        // console.log(this.cities);
    }
};

user2.printPlacesLived();
