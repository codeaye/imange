const Canvas = require(`canvas`);

module.exports = class Crush {
  /**
   * Bobross
   * @param {image} image1
   */
  async getImage(image1) {
    if (!image1) throw new Error(`You must provide an image as an argument`);
    const canvas = Canvas.createCanvas(340, 500);
    const ctx = canvas.getContext(`2d`);
    image1 = await Canvas.loadImage(image1);
    const background = await Canvas.loadImage(
      `${__dirname}/../../assets/crush.png`
    );
    ctx.drawImage(image1, 95, 270, 215, 215);
    ctx.drawImage(background, 0, 0, 340, 500);
    return canvas.toBuffer();
  }
};
