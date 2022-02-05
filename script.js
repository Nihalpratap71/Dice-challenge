// function change(){
//   var rand1=Math.floor((Math.random()*6)+1)
//   var rand2=Math.floor((Math.random()*6)+1)


//   // document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png")
//  document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png")
//  document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png")

//  console.log(rand1);
//  console.log(rand2);

//   if (rand1>rand2) {
//     alert("player 1 wins")
//   }
//   else if(rand2>rand1){
//     alert("player 2 wins")

//   } else {
//     alert("Match draw")
//   }





function change(){
  var rand1=Math.floor((Math.random()*6)+1)
  var rand2=Math.floor((Math.random()*6)+1)

  document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png")
  document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png")

  if(rand1>rand2){
    alert("player 1 wins")
  }else if(rand2>rand1){
    alert("player 2 wins")
  }else{
    alert("match draw")
  }
}