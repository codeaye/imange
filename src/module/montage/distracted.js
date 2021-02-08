const jimp = require(`jimp`);

module.exports = class Distracted {
  /**
   *
   * @param {image} image1
   * @param {image} image2
   * @param {image} image3
   */
  async getImage(image1, image2, image3) {
    if (!image1)
      throw new Error(`You must provide an image as a first argument.`);
    if (!image2)
      throw new Error(`You must provide an image as a second argument.`);
    if (!image3)
      throw new Error(`You must provide an image as a third argument.`);

    let bg = await jimp.read(`${__dirname}/../../assets/distracted.png`);

    image1 = await jimp.read(image1);
    image2 = await jimp.read(image2);
    image3 = await jimp.read(image3);

    image1.circle().blur(1);
    image2.circle();
    image3.circle();

    bg.resize(400, 260);

    image1.resize(62, 62);
    image2.resize(54, 54);
    image3.resize(54, 54);

    bg.composite(image3, 300, 75);
    bg.composite(image2, 190, 40);
    bg.composite(image1, 85, 65);

    let raw;

    bg.getBuffer(`image/png`, (err, buffer) => {
      raw = buffer;
    });
    return raw;
  }
};
