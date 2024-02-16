
// -------------------Common Functions-----------------

function getValue(valueById) {
    const inputValue = document.getElementById(valueById);
    const value = inputValue.value;
    const numValue = parseFloat(value);
    return numValue;
}

function setArea(area, figureName) {
    const showArea = document.getElementById("show-area");
    const showResult = document.createElement("p");
    showArea.appendChild(showResult);
    showResult.innerHTML = `${figureName} ${area}<var>cm<sup>2</sup></var>`;
    return showResult;
}


// ---------------Triangle Area--------------------

const calculateTriangleArea = () => {
    const triangleBase = getValue("triangle-base");
    const triangleHeight = getValue("triangle-heigth");

    const area = 0.5 * triangleBase * triangleHeight;
    setArea(area, "Triangle");
}

// -----------------Rectangle Area-------------------

const calculateRectangleArea = () => {
    const rectangleWidth = getValue("rectangle-width");
    const rectangleLength = getValue("rectangle-length");

    const area = rectangleWidth * rectangleLength;
    setArea(area, "Rectangle");
}

// --------------------Parallelogram Area-----------------

const calculateParallelogramArea = () => {
    const parallelogramBase = getValue("parallelogram-base");
    const parallelogramHeight = getValue("parallelogram-height");

    const area = parallelogramBase * parallelogramHeight;
    setArea(area, "Parallelogram");
}

// ----------------------Rhombus Area----------------------

const calculateRhombusArea = () => {
    const rhombusDiagonal1 = getValue("rhombus-diagonal-1");
    const rhombusDiagonal2 = getValue("rhombus-diagonal-2");

    const area = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    setArea(area, "Rhombus");
}

// ----------------------Pentagon Area----------------------

const calculatePentagonArea = () => {
    const pentagonPerimeter = getValue("pentagon-perimeter");
    const pentagonApothem = getValue("pentagon-apothem");

    const area = 0.5 * pentagonPerimeter * pentagonApothem;
    setArea(area, "Pentagon");
}

// -----------------------Ellipse Area---------------------

const calculateEllipseArea = () => {
    const ellipseMajorAxis = getValue("ellipse-major-axis");
    const ellipseMinorAxis = getValue("ellipse-minor-axis");

    const area = 3.1416 * ellipseMajorAxis * ellipseMinorAxis;
    setArea(area, "Ellipse");
}
