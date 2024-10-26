 

    let Face=document.querySelector(".Face");
	let Smile=document.querySelector(".Smile");
	let Mouth=document.querySelector(".Mouth");
	let input1=document.querySelector(".input1");
	let Hand=document.querySelector(".HandImage");
	let Check=document.querySelector(".Check");
	let ShowText=document.querySelector(".ShowText");
	let input2=document.querySelector(".input2");
	let PositionOfEyes=parseInt(window.getComputedStyle(Face).getPropertyValue("left"));
	let PositionOfSmile=parseInt(window.getComputedStyle(Smile).getPropertyValue("left"));

function Change(){
	
	
	Smile.style.transition="0.5s";
	Smile.style.paddingBottom=13;
	Smile.style.borderBottomLeftRadius="60px";
	Smile.style.borderBottomRightRadius="60px";
	Smile.style.transform="translateY(8px)";
	Smile.style.transition="0.5s";
	Smile.style.left=134;
	
	Mouth.style.backgroundColor="white";
	
	Face.style.transform="translateY(5px)";
	Face.style.left=130;
	Face.style.transition="0.5s";
	
	Hand.style.top=215;
	Hand.style.transition="0.9s";
	
	// alert( window.getComputedStyle(Smile).getPropertyValue("left"));
}

function Hide(){
	
	Hand.style.top=80;
	Hand.style.transition="0.9s";
   
    if(input1.value!=""){
		ShowText.style.opacity="1";
		Check.style.opacity="1";
		
		Check.style.transition="0.5s";
		ShowText.style.transition="0.5s";
	}
}

function Show(){
	
	if(Check.checked==true){
		
	Hand.style.top=100;
	Hand.style.transition="0.9s";	
	input2.type="text";
	
	}
	if(Check.checked==false){
	
	Hand.style.top=80;
	Hand.style.transition="0.9s";

    input2.type="password";   
	
	}
	
}

function LogIn(){
	 alert("hello younes ajyad")
	if(input1.value==" " || input2.value==" "){
		alert("no");
	}
}

function MoveFace(){

	let PositionOfEyes=parseInt(window.getComputedStyle(Face).getPropertyValue("left"));
	let PositionOfSmile=parseInt(window.getComputedStyle(Smile).getPropertyValue("left"));
	
	if(input1.value.length>=10 && input1.value.length+1 && input1.value.length<25){   //move the face 
		Face.style.left=PositionOfEyes+1;
		Face.style.transition="0.5s";
		
		Smile.style.left=PositionOfSmile+1;
		Smile.style.transition="0.5s";
	}

}
