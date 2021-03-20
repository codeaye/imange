const Canvas = require(`canvas`);

module.exports = class Doom {
  /**
   * Doom
   * @param {image} image1
   */
  async getImage(image1) {
    if (!image1) throw new Error(`You must provide an image as an argument`);
    const canvas = Canvas.createCanvas(940, 529);
    const ctx = canvas.getContext(`2d`);
    image1 = await Canvas.loadImage(image1);
    const background = await Canvas.loadImage(
      `${__dirname}/../../assets/doom.png`
    );
    const background2 = await Canvas.loadImage(
      `${__dirname}/../../assets/doom-t.png`
    );

    ctx.drawImage(image1, 380, 64, 180, 180);
    ctx.drawImage(background2, 0, 0, 940, 249);
    ctx.drawImage(background, 0, 0, 940, 529);
    return canvas.toBuffer();
  }
};
