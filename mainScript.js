

function generatePyramidLine(row, height, symbol) {
    const divElement = document.createElement("div");

    for (var i = 1; i <= height - row; ++i){
        const tmp = document.createElement("div")
        tmp.className = "brickunvisible";
        divElement.appendChild(tmp);
    }
    for (; i <= height + 1; ++i){
        const tmp = document.createElement("div")
        var text = document.createTextNode(symbol);
        tmp.appendChild(text);
        tmp.className = "brickvisible";
        divElement.appendChild(tmp);
    }
    return divElement;
}

function printPyramid(element, height, symbol) {
    element.innerHTML = "";
    for (let i = 1; i <= height; ++i) {
        element.appendChild(generatePyramidLine(i, height,symbol));
    }
}

var activities = document.getElementById("selectBrick");
var rangeBrick = document.getElementById("highPyramid");

const updateFn = () => {
    printPyramid(document.getElementById("fieldPyramid"), parseInt(rangeBrick.value), activities.value)
}

activities.addEventListener("change", updateFn);
rangeBrick.addEventListener("change", updateFn);
updateFn()