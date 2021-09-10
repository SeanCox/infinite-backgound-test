import {
  colorGenerator1,
  colorGenerator2,
  colorGenerator3,
  colorGenerator4,
} from "./helpers/colors.js";
import shapeGenerator from "./helpers/shapes.js";

function createPolygonPoints(size, sides) {
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


function shapesWithBackgroundColor(colorGenerator) {
  return class ShapesBackgroundPainter {
    paint(ctx, geom, properties) {
      const colors = colorGenerator();
      const drawShapes = shapeGenerator();
      const backgroundWidth = geom.width;
      const backgroundHeight = geom.height;
      const blobSize = backgroundWidth > 768 ? 600 : 400;
      const blobHeightOffset = blobSize * 2 + 600;
      const rightBackgroundOffset = Math.floor(backgroundWidth - blobSize / 2);

      const numberOfBlocks = Math.ceil(backgroundHeight / 1200);

      for (let i = 0; i < numberOfBlocks; i += 1) {
        const polygonPoints = createPolygonPoints(blobSize, 5);
        drawShapes
          .next()
          .value(
            ctx,
            colors.next().value,
            polygonPoints,
            -blobSize / 2,
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
  };
}

// Register our class under a specific name
registerPaint(
  "shapesBackground1",
  shapesWithBackgroundColor(colorGenerator1)
);
registerPaint(
  "shapesBackground2",
  shapesWithBackgroundColor(colorGenerator2)
);
registerPaint(
  "shapesBackground3",
  shapesWithBackgroundColor(colorGenerator3)
);
registerPaint(
  "shapesBackground4",
  shapesWithBackgroundColor(colorGenerator4)
);
