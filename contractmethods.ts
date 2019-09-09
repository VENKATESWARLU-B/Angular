interface Idetails{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}
let productDetails:Idetails={
    Name:"Moto Mobile",
    Price:22000.00,
    Qty:2,
    Total():number{
        return productDetails.Qty*productDetails.Price;
    },
    Print():void{
        console.log("Mobile Total Amount="+productDetails.Total());
    }
}
productDetails.Print();