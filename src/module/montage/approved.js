const Canvas = require(`canvas`);

module.exports = class Approved {
  /**
   * Jail
   * @param {image} image
   */
  async getImage(image) {
    if (!image)
      throw new Error(`You must provide an image as a first argument.`);
    let bg = await Canvas.loadImage(`${__dirname}/../../assets/approved.png`);
    let img = await Canvas.loadImage(image);
    const canvas = Canvas.createCanvas(200, 200);
    const ctx = canvas.getContext(`2d`);
    ctx.drawImage(img, 0, 0, 200, 200);
    ctx.drawImage(bg, 0, 0, 200, 200);
    return canvas.toBuffer();
  }
};
