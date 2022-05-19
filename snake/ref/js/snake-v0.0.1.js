$(function(){
    let svg = Pablo('#ground').svg({ //create svg with height and width
                  width: 1100,
                  height: 450
              });

    let arrayNode = [];
    
    let nodeSize = 15;
    let direction = 1;
    let speed = 200;
    let arrayColor = new Array("#ef5777","#ffc048","#575fcf","#05c46b","#8e44ad");
    let colorIndex = 0;

    snakeBuilder(4,100,100);
    console.log(arrayNode);

    setInterval(function(){
        snakeMove();
    }, speed);

    $(document).keydown(function(event){
        //37 left  - 38  up - 39  right - 40  down
        let code =  event.which;
        
        if ( direction == 1 || direction == 3 ) {
            if ( code == 38 ) direction = 4;
            if ( code == 40 ) direction = 2;
        }

        if ( direction == 2 || direction == 4 ) {
            if ( code == 39 ) direction = 1;
            if ( code == 37 ) direction = 3;
        }
    });

    function snakeMove() {
        // access to the x property of the last rectangle of the array
        let x = arrayNode[arrayNode.length-1].attr('x');
        // access to the y property of the last rectangle of the array
        let y = arrayNode[arrayNode.length-1].attr('y');

        // if we are moving right, move on the +X axis
        if ( direction == 1 ) {
            x = parseInt(x) + nodeSize;
        }

        // if we are moving down, move on the +Y axis
        if ( direction == 2 ) {
            y = parseInt(y) + nodeSize;
        }

        // if we are moving left, move on the -X axis
        if ( direction == 3 ) {
            x = parseInt(x) - nodeSize;
        }
             
        // if we are moving up, move on the -Y axis
        if ( direction == 4 ) {
            y = parseInt(y) - nodeSize;
        }             
             
        let snakeNode = buildSnakeNode (svg, x, y );

        // remove first svg element
        arrayNode[0].remove();
             
        //delete first element in array
        arrayNode.shift();

        // add the last element
        arrayNode.push(snakeNode);
    }

    // initialize snake
    function snakeBuilder (node, x, y) {
        for (let i = 0; i < node; i++) {

            // build next snake body part
            let snakeNode = buildSnakeNode (svg, x, y );
            
            // increment x position size of snake body part
            x += nodeSize;

            // add next part to snake
            arrayNode.push(snakeNode);//add node
        }
    }
         
    let buildSnakeNode = ( svg, x, y ) => {
        let fill = arrayColor[Math.floor(Math.random() * arrayColor.length)];
        let snakeNode = svg.rect({
                              x,
                              y,
                              width:nodeSize,
                              height:nodeSize,
                              fill,
                              stroke:'#006',
                              'stroke-width': 2,
                              'stroke-linejoin': 'round'
        });
        return snakeNode;
    }
});
