
function drawShape1(ctx, color, points, positionX, positionY, size) {
  ctx.lineWidth = 50;
  ctx.lineCap = "round";
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();

  ctx.moveTo(points[0].offsetX + positionX, points[0].offsetY + positionY);
  ctx.quadraticCurveTo(
    points[1].offsetX + positionX + size / 3,
    points[1].offsetY + positionY - size / 3,
    points[1].offsetX + positionX,
    points[1].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[2].offsetX + positionX - size / 12,
    points[2].offsetY + positionY - size / 3,
    points[2].offsetX + positionX,
    points[2].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[3].offsetX + positionX + size / 1.5,
    points[3].offsetY + positionY + size / 2,
    points[3].offsetX + positionX,
    points[3].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[4].offsetX + positionX - size / 6,
    points[4].offsetY + positionY + size / 3,
    points[4].offsetX + positionX,
    points[4].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[0].offsetX + positionX - size / 3,
    points[0].offsetY + positionY - 0,
    points[0].offsetX + positionX,
    points[0].offsetY + positionY
  );

  ctx.stroke();
  ctx.fill();
}

function drawShape2(ctx, color, points, positionX, positionY, size) {
  ctx.lineWidth = 50;
  ctx.lineCap = "round";
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();

  ctx.moveTo(points[0].offsetX + positionX, points[0].offsetY + positionY);
  ctx.quadraticCurveTo(
    points[1].offsetX + positionX - size / 3,
    points[1].offsetY + positionY + size / 12,
    points[1].offsetX + positionX,
    points[1].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[2].offsetX + positionX + size / 2,
    points[2].offsetY + positionY - size / 1.5,
    points[2].offsetX + positionX,
    points[2].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[3].offsetX + positionX + size / 3,
    points[3].offsetY + positionY + size / 3,
    points[3].offsetX + positionX,
    points[3].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[4].offsetX + positionX - size / 24,
    points[4].offsetY + positionY + size / 3,
    points[4].offsetX + positionX,
    points[4].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[0].offsetX + positionX - size / 2,
    points[0].offsetY + positionY,
    points[0].offsetX + positionX,
    points[0].offsetY + positionY
  );

  ctx.stroke();
  ctx.fill();
}

function drawShape3(ctx, color, points, positionX, positionY, size) {
  ctx.lineWidth = 50;
  ctx.lineCap = "round";
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();

  ctx.moveTo(points[0].offsetX + positionX, points[0].offsetY + positionY);
  ctx.quadraticCurveTo(
    points[1].offsetX + positionX + size / 6,
    points[1].offsetY + positionY - size / 3,
    points[1].offsetX + positionX,
    points[1].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[2].offsetX + positionX - size / 6,
    points[2].offsetY + positionY - size / 6,
    points[2].offsetX + positionX - size / 6,
    points[2].offsetY + positionY - size / 6
  );
  ctx.quadraticCurveTo(
    points[3].offsetX + positionX + size / 6,
    points[3].offsetY + positionY + size / 6,
    points[3].offsetX + positionX,
    points[3].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[4].offsetX + positionX - size / 3,
    points[4].offsetY + positionY - size / 12,
    points[4].offsetX + positionX,
    points[4].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    points[0].offsetX + positionX - size / 3,
    points[0].offsetY + positionY - size / 12,
    points[0].offsetX + positionX,
    points[0].offsetY + positionY
  );

  ctx.stroke();
  ctx.fill();
}

function* shapeGenerator() {
  while (true) {
    yield drawShape1;
    yield drawShape2;
    yield drawShape3;
  }
}

export default shapeGenerator