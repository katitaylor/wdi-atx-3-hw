function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
  if (this.length === this.width) {
    return true}
    else
      {return false}
  // Your code goes here
}

Rectangle.prototype.area = function() {
  return (this.length*this.width)
}

Rectangle.prototype.perimeter = function() {
  return ((this.length(2)) + (this.width(2))
}



function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

var triangle = new triangle();
Triangle.prototype = triangle;

Triangle.prototype.getPerimeter = function() {
	return this.sideA + this.sideB + this.sideC
  // Your code goes here
};


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype = {
	// Your code goes here
};
