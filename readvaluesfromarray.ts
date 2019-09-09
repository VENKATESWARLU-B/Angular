let cities:string[]=["Delhi","Hyd","Chennai"];
function Getcity(city){
    return city=="Hyd";
}
console.log(cities.filter(Getcity));
let products:number[]=[10000,4200,56000,2100];
console.log(products.filter(function(price){
    return price<10000;
}));