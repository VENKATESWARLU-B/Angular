interface Iproduct{
    Name:string;
    Price:number;
    IsInStock?:boolean;
}
let product:Iproduct={
    Name:"Tv",
    Price:3500
};
console.log("Name="+product.Name+"\n"+"Price="+product.Price);