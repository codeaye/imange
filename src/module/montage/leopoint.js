const Canvas = require(`canvas`);

module.exports = class Leopoint {
  /**
   * Leopoint
   * @param {image} image1
   */
  async getImage(image1) {
    if (!image1) throw new Error(`You must provide an image as an argument`);
    const canvas = Canvas.createCanvas(760, 812);
    const ctx = canvas.getContext(`2d`);
    image1 = await Canvas.loadImage(image1);
    const background = await Canvas.loadImage(
      `${__dirname}/../../assets/leo.png`
    );
    ctx.drawImage(image1, 145, 20, 470, 355);
    ctx.drawImage(background, 0, 0, 760, 812);
    return canvas.toBuffer();
  }
};
