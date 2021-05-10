const jimp = require(`jimp`);

module.exports = class Drip {
  /**
   * Batslap
   * @param {image} image1
   */
  async getImage(image1, image2) {
    if (!image1)
      throw new Error(`You must provide an image as a first argument.`);
    let base = await jimp.read(`${__dirname}/../../assets/drip.png`);
    image1 = await jimp.read(image1);
    image1.circle();
    base.resize(452, 553);
    image1.resize(200, 200);
    base.composite(image1, 125, 70);
    let raw;
    base.getBuffer(`image/png`, (err, buffer) => {
      raw = buffer;
    });
    return raw;
  }
};
