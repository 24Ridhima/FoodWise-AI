function getResponse(){

let input =
document.getElementById("userInput")
.value.toLowerCase();

let response="";

if(input.includes("rice")){

response=
"You can make vegetable fried rice and use leftover vegetables.";

}

else if(input.includes("bread")){

response=
"You can make sandwiches instead of throwing away old bread.";

}

else if(input.includes("tomato")){

response=
"Use tomatoes for soup, pasta sauce, or salad.";

}

else{

response=
"Try combining available ingredients into a simple meal to reduce food waste.";

}

document.getElementById("response")
.innerHTML=response;

}
