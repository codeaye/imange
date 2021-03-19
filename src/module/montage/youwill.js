const Canvas = require(`canvas`);

module.exports = class Youwill {
  /**
   * Youwill
   * @param {image} image1
   */
  async getImage(image1) {
    if (!image1) throw new Error(`You must provide an image as an argument`);
    const canvas = Canvas.createCanvas(576, 768);
    const ctx = canvas.getContext(`2d`);
    image1 = await Canvas.loadImage(image1);
    const background = await Canvas.loadImage(
      `${__dirname}/../../assets/youwill.png`
    );
    ctx.drawImage(image1, 0, 0, 575, 490);
    ctx.drawImage(background, 0, 0, 576, 768);
    return canvas.toBuffer();
  }
};
