var slider = document.getElementById("myRange");
var output = document.getElementById("myNum");
var main = document.getElementById("main-section")

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  drewTheLines(this.value);
} 

function drewTheLines(params) {
    const arrSize = document.getElementById("main-section").childElementCount ;

    if (arrSize < params) {
        for (let i = arrSize; i < params; ++i) {
            let element = document.createElement("div");

            element.setAttribute("id", `${i}`);
            element.style.height = `${Math.floor(Math.random() * 300) + 1}px`;
            element.style.backgroundColor = 'green';
            element.style.border = '5px solid black'


            document.getElementById("main-section").appendChild(element);
        }
    }else{
        
        for (let i = arrSize - 1; i >= params; --i) {
            let element = document.getElementById(`${i}`);
            element.remove();
        }
    }
}

function roadMap()
{
    const elemnt = document.getElementById("sorts-types");
    const value = elemnt.options[elemnt.selectedIndex].value;
    


    switch (value) {
        case "bubble":
            bubblesort();
            break;
        case "insertion":
            insertion();
            break;
        case "selection":
            selection();
            break;
                
        default:
            break;
    }

}

function changeColor(elm, color)
{
    elm.style.border = `5px solid ${color}`;
}

function swap(right, left)
{
    let temp = left.style.height;

    left.style.height = right.style.height;
    right.style.height = temp;  
}
async function bubblesort()
{
    const arrSize = document.getElementById("main-section").childElementCount;
    const arr = document.getElementById("main-section").children;
    const btn = document.getElementById("btn");
    const range = document.getElementById("myRange");

    btn.disabled = true;
    range.disabled = true;

    for (let i = 0; i < arrSize - 1; ++i) {
        for (let j = 0; j < arrSize - i - 1; ++j) {
            let left = arr[j];
            let right = arr[j+1];

            changeColor(right, "green");
            changeColor(left, "green");


            if (left.offsetHeight > right.offsetHeight) {
                swap(right,left);
            }
            await new Promise(r => setTimeout(r, 200));

            changeColor(right, "black");
            changeColor(left, "black");
        }


        
    }

    range.disabled = false;
    btn.disabled = false;
}

async function insertion()
{
    const arrSize = document.getElementById("main-section").childElementCount;
    const arr = document.getElementById("main-section").children;
    const btn = document.getElementById("btn");
    const range = document.getElementById("myRange");

    btn.disabled = true;
    range.disabled = true;
    
    for (let i = 1; i < arrSize; ++i) {
        let key = arr[i].offsetHeight;
        let hei = arr[i].style.height;
        let j = i - 1;

        changeColor(arr[i-1], "black")

        changeColor(arr[i], "red");
        await new Promise(r => setTimeout(r, 200));
        while (j >= 0 && arr[j].offsetHeight > key) {

            changeColor(arr[j], "green");
            if (j + 1 != i) {
                changeColor(arr[j + 1], "green");
            }
            
            swap(arr[j + 1], arr[j]);

            await new Promise(r => setTimeout(r, 200));
            changeColor(arr[j], "black");
            if (j + 1 != i) {
                changeColor(arr[j + 1], "black");
            }
            
            
            j = j - 1;
            
        }
        arr[j + 1].style.height = hei;
        changeColor(arr[j+1], "black")

    }

    range.disabled = false;
    btn.disabled = false;
}

async function selection()
{
    const arrSize = document.getElementById("main-section").childElementCount;
    const arr = document.getElementById("main-section").children;
    const btn = document.getElementById("btn");
    const range = document.getElementById("myRange");

    btn.disabled = true;
    range.disabled = true;

    for (let i = 0; i < arrSize - 1; ++i) {
        let min_index = i;

        changeColor(arr[i],"red");
        for (let j = i + 1; j < arrSize; ++j) {
            changeColor(arr[min_index], "green")
            changeColor(arr[j], "green");
            await new Promise(r => setTimeout(r, 200));
            if (arr[j].offsetHeight < arr[min_index].offsetHeight) {
                changeColor(arr[min_index], "black");
                min_index = j;
                changeColor(arr[min_index], "green");
            }
            changeColor(arr[j], "black");
            changeColor(arr[i],"red");
        }
        swap(arr[min_index], arr[i]);
        changeColor(arr[i],"black");
    }


    range.disabled = false;
    btn.disabled = false;
}
