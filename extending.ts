interface ITextEffect{
    color:string;
    font:string;
}
interface IExtendedTextEffects extends ITextEffect{
    shadow:number;
}
interface IBackgroundEffects{
    backcolor:string;
    backgroundimg?:string;
}
interface IEffects extends IExtendedTextEffects,IBackgroundEffects{
}
let Button:IEffects={
    color:"red",
    font:"Arial",
    shadow:2,
    backcolor:"yellow"
}
console.log("color="+Button.color+"\n"+"font="+Button.font)