const Canvas = require(`canvas`);

module.exports = class Captcha {
  /**
   * Bobross
   * @param {image} image1
   */
  async getImage(image1) {
    if (!image1) throw new Error(`You must provide an image as an argument`);
    const canvas = Canvas.createCanvas(385, 500);
    const ctx = canvas.getContext(`2d`);
    image1 = await Canvas.loadImage(image1);
    const background = await Canvas.loadImage(
      `${__dirname}/../../assets/captcha.png`
    );
    //ctx.drawImage(image1, 0, 0, 610, 610);
    ctx.drawImage(image1, 0, 110, 385, 385);
    ctx.drawImage(background, 0, 0, 385, 500);
    return canvas.toBuffer();
  }
};
