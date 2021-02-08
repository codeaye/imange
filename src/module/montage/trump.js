const Canvas = require(`canvas`);

module.exports = class Trump {
  /**
   * Bobross
   * @param {image} image1
   */
  async getImage(image1) {
    if (!image1) throw new Error(`You must provide an image as an argument`);
    const canvas = Canvas.createCanvas(770, 366);
    const ctx = canvas.getContext(`2d`);
    image1 = await Canvas.loadImage(image1);
    const background = await Canvas.loadImage(
      `${__dirname}/../../assets/trump.png`
    );
    //ctx.drawImage(image1, 0, 0, 610, 610);
    ctx.drawImage(image1, 270, 40, 210, 200);
    ctx.drawImage(background, 0, 0, 770, 366);
    return canvas.toBuffer();
  }
};
