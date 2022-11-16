// returns scaled dimensions object
const getScaledDim = (img, maxWidth, maxHeight) => {
    var scaled = {
      ratio: img.width / img.height,
      width: img.width,
      height: img.height
    };
    if (scaled.width > maxWidth) {
      scaled.width = maxWidth;
      scaled.height = scaled.width / scaled.ratio;
    }
    if (scaled.height > maxHeight) {
      scaled.height = maxHeight;
      scaled.width = scaled.height / scaled.ratio;
    }
    return scaled;
  };
  
  export default getScaledDim;