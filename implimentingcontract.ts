interface Iproduct{
    Id:number;
    Name:string;
    Price:number;
}
let product:Iproduct={
    Id:1,
    Name:"Tv",
    Price:35000
};
console.log("Id="+product.Id+"\n"+"Name="+product.Name+"\n"+"Price="+product.Price);