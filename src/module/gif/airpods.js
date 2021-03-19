const Canvas = require(`canvas`);

const GIF = require(`gif.js`);

module.exports = class Airpods {
  /**
   * Airpods
   * @param {image} image
   * @param {number} timeout
   */
  async getImage(image, timeout = 15) {
    if (!image)
      throw new Error(`You must provide an image as a first argument.`);
    if (isNaN(timeout))
      throw new Error(`The timeout argument must be a number.`);
    const base = await Canvas.loadImage(
      `${__dirname}/../../assets/airpods.gif`
    );
    const img = await Canvas.loadImage(image);
    const canvas = Canvas.createCanvas(256, 310);
    const ctx = canvas.getContext(`2d`);
    var gif = new GIF({
      workers: 2,
      quality: 10,
    });
    gif.addFrame(base);
    gif.addFrame(img, { delay: 200 });
    gif.addFrame(ctx, { copy: true });

    gif.on("finished", function (blob) {
      return URL.createObjectURL(blob);
    });

    gif.render();
  }
};
