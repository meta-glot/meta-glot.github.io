$(function(){

let svg = Pablo('#ground').svg({ //create svg with height and width
         width: 1100,
        height: 400
      });

let arrayNode = [],
    nodeSize = 15,
    direction = 1,
    speed = 200,
    arrayColor = new Array("#ef5777","#ffc048","#575fcf","#05c46b","#8e44ad"),
    colorIndex = 0;
       
snakeBuilder(4,100,100);
console.log(arrayNode);

setInterval(function(){
  snakeMove();
}, speed);

$(document).keydown(function(event){
  //37 left  - 38  up - 39  right - 40  down

     let code =  event.which;

     if(direction==1||direction==3){
       if(code==38) direction=4;
       if(code==40) direction=2;
     }

     if(direction==2||direction==4){
       if(code==39) direction=1;
       if(code==37) direction=3;
     }


});


function snakeMove(){
  let x = arrayNode[arrayNode.length-1].attr('x');//access to the x property of the last rectangle of the array
  let y = arrayNode[arrayNode.length-1].attr('y');//access to the y property of the last rectangle of the array

if(direction==1){
   x=parseInt(x)+nodeSize;//Move on the + X axis
}

if(direction==2){
   y=parseInt(y)+nodeSize;//Move on the +Y axis
}

if(direction==3){
   x=parseInt(x)-nodeSize;//Move on the - X axis
}
if(direction==4){
   y=parseInt(y)-nodeSize;//Move on the - Y axis
}

  let colorIndex=Math.floor(Math.random() * 5);

  let snakeNode=svg.rect({
      x:x, y:y,
      width:nodeSize, height:nodeSize,
      fill:  arrayColor[colorIndex],
      stroke:'#006',
      'stroke-width': 2,
      'stroke-linejoin': 'round'
  });


  arrayNode[0].remove();//remove first svg element
  arrayNode.shift();//delete first element in array
  arrayNode.push(snakeNode);//add last element

}

//create snake
function snakeBuilder(node,x,y){

  for (let i = 0; i < node; i++) {

  let colorIndex=Math.floor(Math.random() * 5);//A random number between 0 and 5

      let snakeNode=svg.rect({
          x:x, y:y,
          width:nodeSize, height:nodeSize,
          fill:arrayColor[colorIndex],
          stroke:'#006',
          'stroke-width': 2,
          'stroke-linejoin': 'round'
      });
      x=x+nodeSize;

      arrayNode.push(snakeNode);//add node
  }

}

});
