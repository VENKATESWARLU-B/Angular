interface Iproduct{
    [index:number]:string;
}
let products:Iproduct;
products=["Samsung Tv","Honor Mobile"];
let tv:string=products[0];
console.log("Tv="+tv);