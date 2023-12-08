const n = 10;
let array = [];
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

speedSlider.addEventListener("input", function() {
        speedValue.textContent = speedSlider.value;
    });
    console.log(speedSlider);
    console.log(speedValue);

function init() {
        for (let i = 0; i < n; i++) {
                array[i] = 10*Math.random();
        }
        showBars();}
        
    function collectArray() {
        let size = parseInt(document.getElementById("arraySize").value);
        let inputDiv = document.getElementById("inputValues");
        let resultDiv = document.getElementById("result");

        inputDiv.innerHTML = "<h3>Enter array values:</h3>";
        inputDiv.style.display = "block";

        for (let i = 0; i < size; i++) {
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("id", "value" + i);
            input.setAttribute("placeholder", "Value for index " + i);
            inputDiv.appendChild(input);
        }

        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.onclick = function() {
            for (let i = 0; i < size; i++) {
                let value = parseFloat(document.getElementById("value" + i).value);
                array.push(value);
            }
            showBars();
            resultDiv.innerHTML = "<h3>Array values : " + array + "</h3>";
            // You can perform any other operations with the array here
        };
        inputDiv.appendChild(submitButton);
       
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
function play4() {
        const copy = [...array];
        const moves = [];
        mergeSort(copy, 0, copy.length - 1, (partialMoves) => {
            moves.push(...partialMoves);
            animate([...moves]); // Pass a copy to avoid modifying the original array
        });
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

        function mergeSort(array, start, end, callback) {
                const moves = [];
            
                function merge(array, start, mid, end) {
                    const leftSize = mid - start + 1;
                    const rightSize = end - mid;
            
                    const leftArray = new Array(leftSize);
                    const rightArray = new Array(rightSize);
            
                    for (let i = 0; i < leftSize; i++) {
                        leftArray[i] = array[start + i];
                    }
                    for (let j = 0; j < rightSize; j++) {
                        rightArray[j] = array[mid + 1 + j];
                    }
            
                    let i = 0;
                    let j = 0;
                    let k = start;
            
                    for (k; k <= end; k++) {
                        moves.push({ indices: [start + i, mid + 1 + j], type: "comp" });
            
                        if (i < leftSize && (j >= rightSize || leftArray[i] <= rightArray[j])) {
                            array[k] = leftArray[i];
                            i++;
                        } else {
                            array[k] = rightArray[j];
                            j++;
                        }
            
                        moves.push({ indices: [k, k], type: "swap" });
                    }
                }
            
                function mergeSortHelper(start, end) {
                    if (start < end) {
                        const mid = Math.floor((start + end) / 2);
            
                        // Recursively sort the two halves
                        mergeSortHelper(start, mid);
                        mergeSortHelper(mid + 1, end);
            
                        // Merge the sorted halves
                        merge(array, start, mid, end);
                    }
                }
            
                mergeSortHelper(start, end);
                callback([...moves]); // Pass a copy to avoid modifying the original array
            }
            
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
        bar.style.height = array[i] * 10 + "%";
        bar.classList.add("bar");
        if(move && move.indices.includes(i))
        {
                bar.style.backgroundColor=
                move.type=="swap"?"red":"blue";
        }
        container.appendChild(bar);

}
}

