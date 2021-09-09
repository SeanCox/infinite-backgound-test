function* colorGenerator1() {
  while (true) {
    yield "#D2E155";
    yield "#4BD6B4";
    yield "#A1E0D0";
  }
}
function* colorGenerator2() {
  while (true) {
    yield "#E8F0AA";
    yield "#C6EFE5";
    yield "#C6EFE5";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#C6EFE5";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#C6EFE5";
    yield "#C6EFE5";
    yield "#C6EFE5";
  }
}
function* colorGenerator3() {
  while (true) {
    yield "#F2C94C";
    yield "#4BD6B4";
    yield "#A1E0D0";
    yield "#D2E155";
    yield "#EB5757";
  }
}
function* colorGenerator4() {
  while (true) {
    yield "#F3E6C2";
    yield "#C6EFE5";
    yield "#E8F0AA";
    yield "#E8F0AA";
    yield "#F1D4D5";
  }
}

function generatePolygonPoints(size, sides) {
  const polygonPoints = [];
  const angle = 360 / sides;
  const radian = (angle * Math.PI) / 180;
  const offsetRotation = Math.PI / 2;
  const halfSize = size / 2;

  for (let i = 0; i < sides; i += 1) {
    polygonPoints.push({
      offsetX: Math.round(
        (Math.cos(radian * i - offsetRotation) + 1) * halfSize
      ),
      offsetY: Math.round(
        (Math.sin(radian * i - offsetRotation) + 1) * halfSize
      ),
    });
  }
  return polygonPoints;
}

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
    positionX + 100,
    positionY + 300,
    points[4].offsetX + positionX,
    points[4].offsetY + positionY
  );
  ctx.quadraticCurveTo(
    positionX + 0,
    positionY + 0,
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

function* shapeGenerator() {
  while (true) {
    yield drawShape3;
    yield drawShape1;
    yield drawShape2;
  }
}

class InfiniteBackgroundPainter {
  paint(ctx, geom, properties) {
    const colors = colorGenerator3();
    const drawShapes = shapeGenerator();
    const backgroundWidth = geom.width;
    const backgroundHeight = geom.height;
    const blobSize = backgroundWidth > 768 ? 600 : 400;
    const blobHeightOffset = blobSize * 2 + 800;
    const rightBackgroundOffset = Math.floor(backgroundWidth - blobSize / 2);

    const numberOfBlocks = Math.ceil(backgroundHeight / 1200);

    for (let i = 0; i < numberOfBlocks; i += 1) {
      const polygonPoints = generatePolygonPoints(blobSize, 5);
      drawShapes
        .next()
        .value(
          ctx,
          colors.next().value,
          polygonPoints,
          -0,
          i * blobHeightOffset,
          blobSize
        );
      drawShapes
        .next()
        .value(
          ctx,
          colors.next().value,
          polygonPoints,
          rightBackgroundOffset,
          blobHeightOffset * (i + 0.5),
          blobSize
        );
    }
  }
}

// Register our class under a specific name
registerPaint("infiniteBackground", InfiniteBackgroundPainter);
