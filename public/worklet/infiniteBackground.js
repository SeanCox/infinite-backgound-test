import {colorGenerator1, } from './helpers/colors.js'

class InfiniteBackgroundPainter {
  paint(ctx, geom, properties) {
    const colors = colorGenerator1();
    const backgroundWidth = geom.width
    const backgroundHeight = geom.height
    const blobSize = backgroundWidth > 768 ? 600: 400
    const blobHeightOffset = blobSize * 2 + 400
    const rightBackgroundOffset = Math.floor(backgroundWidth - blobSize/2)

    const numberOfBlocks = Math.ceil(backgroundHeight/ 1200);

    for (let i = 0; i < numberOfBlocks; i += 1) {
      ctx.fillStyle = colors.next().value
      ctx.fillRect(-blobSize/2, blobHeightOffset * i, blobSize, blobSize);

      ctx.fillStyle = colors.next().value
      ctx.fillRect(rightBackgroundOffset, blobHeightOffset * i + blobSize+200, blobSize, blobSize);
    }
}

  
}

// Register our class under a specific name
registerPaint("infiniteBackground", InfiniteBackgroundPainter);
