const n = 10;
const array = [];
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

speedSlider.addEventListener("input", function() {
        speedValue.textContent = speedSlider.value;
    });
    console.log(speedSlider);
    console.log(speedValue);
init();
function init() {
        for (let i = 0; i < n; i++) {
                array[i] = Math.random();
        }
        showBars();
}

function play()
{       
        const copy=[...array];
        const moves=BubbleSort(copy);
        animate(moves);
}
function play2()
{       
        const copy=[...array];
        const moves=SelectionSort(copy);
        animate(moves);
}
function play3()
{       
        const copy=[...array];
        const moves=insertionSort(copy);
        animate(moves);
}
function animate(moves)
{
        if(moves.length==0)
        {       
                showBars();
                return;
        }
        const move=moves.shift();
        const[i,j]=move.indices;
        if(move.type=="swap"){

        [array[i], array[j]] = [array[j], array[i]];
}
       
       
        showBars(move);
        const speed = speedSlider.value;
        for (let x = 0; x < speed; x++){}
        setTimeout(function()
        {
                animate(moves);
        },2000/speed);}


function insertionSort(array, )  
        {  
            let i, key, j;  
            const moves=[];
            for (i = 1; i < array.length; i++) 
            {  
                key = i;  
                j = i - 1;  
           
                /* Move elements of arr[0..i-1], that are  
                greater than key, to one position ahead  
                of their current position */
                while (j >= 0 ) 
                {  
                    moves.push({indices:[key,j],type:"comp"});  
                    if (array[j]  > array[key])  {
                    [array[j], array[key]] = [array[key], array[j]];
                    moves.push({indices:[j,j+1],type:"swap"});
                    key = j ;    
                    
                }  
                j = j - 1;  
                
        }
                
            }  
        return moves;
        }  
function SelectionSort(array)
        {       const moves=[];
              for (let i = 0; i < array.length; i++){
                      let lowest = i;
                      for (let j = i+1; j < array.length; j++) {
                              moves.push({indices:[lowest,j],type:"comp"});
                              if (array[lowest] > array[j]) {
                                      lowest = j;
                                      
                              }
                      }
                              swapped = true;
                              moves.push({indices:[i,lowest],type:"swap"});
                              [array[i], array[lowest]] = [array[lowest], array[i]];
                          
              }
              return moves;
              }
              
function BubbleSort(array)
{       const moves=[];
do {
        var swapped = false;
        for (let i = 1; i < array.length; i++) {
                moves.push({indices:[i-1,i],type:"comp"});
                if (array[i - 1] > array[i]) {
                        swapped = true;
                        moves.push({indices:[i-1,i],type:"swap"});
                        [array[i - 1], array[i]] = [array[i], array[i - 1]];
                }
        }
}
while (swapped);
return moves;
}

function showBars(move)
{       container.innerHTML="";
for (let i = 0; i < array.length; i++)
{
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%";
        bar.classList.add("bar");
        if(move && move.indices.includes(i))
        {
                bar.style.backgroundColor=
                move.type=="swap"?"red":"blue";
        }
        container.appendChild(bar);

}
}

