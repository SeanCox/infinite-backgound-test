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

function renderBlob (ctx, color, size, startingPointX, startingPointY){
    
    ctx.beginPath()
    ctx.moveTo(startingPointX,startingPointY)

    ctx.lineTo(startingPointX + size/2, startingPointY)
    ctx.lineTo(startingPointX + (size/4)*3, startingPointY + size/4)
    ctx.lineTo(startingPointX + (size/4)*3, startingPointY + (size/4)*3)
    ctx.lineTo(startingPointX + (size/2), startingPointY + size)
    ctx.lineTo(startingPointX,  startingPointY + size)
    ctx.lineTo(startingPointX - (size/4), startingPointY + (size/4)*3)
    ctx.lineTo(startingPointX - (size/4), startingPointY + size/4)
    ctx.lineTo(startingPointX, startingPointY )
    
    // ctx.stroke()



    // ctx.quadraticCurveTo(150, 50, 200, 100)
    // ctx.quadraticCurveTo(250, 125, 200, 200)
    // ctx.quadraticCurveTo(150, 250, 100, 200)
    // ctx.quadraticCurveTo(50, 150, 100, 100)

    ctx.fillStyle = color 
    ctx.fill()

}


class InfiniteBackgroundPainter {
  paint(ctx, geom, properties) {
    const colors = colorGenerator3();
       const backgroundWidth = geom.width
    const backgroundHeight = geom.height
    const blobSize = backgroundWidth > 768 ? 600: 400
    const blobHeightOffset = blobSize * 2 + 400
    const rightBackgroundOffset = Math.floor(backgroundWidth - blobSize/2)

    const numberOfBlocks = Math.ceil(backgroundHeight/ 1200);

    for (let i = 0; i < numberOfBlocks; i += 1) {
        renderBlob(ctx, colors.next().value, blobSize, 0 , blobHeightOffset *i)
        renderBlob(ctx, colors.next().value, blobSize, rightBackgroundOffset, blobHeightOffset *i +blobSize+200)

    } 
   }
}

// Register our class under a specific name
registerPaint("infiniteBackground", InfiniteBackgroundPainter);
