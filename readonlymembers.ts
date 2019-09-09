interface Iproduct{
    Name:string;
   readonly Price:number;
}
let product:Iproduct={
    Name:"Mobile",
    Price:300003.35,
};
product.Name="Samsung Mobile";
console.log("Name="+product.Name+"\n");