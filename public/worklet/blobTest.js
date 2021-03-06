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
      quadraticPointX: Math.round(
        (Math.cos(
          radian * i - offsetRotation - radian / 2 + Math.random() / 4 - 0.25
        ) +
          1) *
          (halfSize + Math.random() * 100)
      ),
      quadraticPointY: Math.round(
        (Math.sin(
          radian * i - offsetRotation - radian / 2 + Math.random() / 4 - 0.25
        ) +
          1) *
          (halfSize + Math.random() * 100)
      ),
    });
  }
  return polygonPoints;
}

function drawPolygon(ctx, color, points, positionX, positionY) {
  ctx.beginPath();

  points.forEach((point) => {
    ctx.quadraticCurveTo(
      point.quadraticPointX + positionX,
      point.quadraticPointY + positionY,
      point.offsetX + positionX,
      point.offsetY + positionY
    );
  });

  ctx.fillStyle = color;
  ctx.fill();
}

class InfiniteBackgroundPainter {
  paint(ctx, geom, properties) {
    const colors = colorGenerator3();
    const backgroundWidth = geom.width;
    const backgroundHeight = geom.height;
    const blobSize = backgroundWidth > 768 ? 600 : 400;
    const blobHeightOffset = blobSize * 2 + 400;
    const rightBackgroundOffset = Math.floor(backgroundWidth - blobSize / 2);

    const numberOfBlocks = Math.ceil(backgroundHeight / 1200);

    for (let i = 0; i < numberOfBlocks; i += 1) {
      const polygonPoints = generatePolygonPoints(blobSize, 8);
      drawPolygon(
        ctx,
        colors.next().value,
        polygonPoints,
        0,
        i * blobHeightOffset
      );
      drawPolygon(
        ctx,
        colors.next().value,
        polygonPoints,
        rightBackgroundOffset,
        blobHeightOffset * (i + 0.5)
      );
    }
  }
}

// Register our class under a specific name
registerPaint("infiniteBackground", InfiniteBackgroundPainter);
