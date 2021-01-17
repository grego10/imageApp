import model from '../models';
import stream from 'stream'

const { image } = model;

class Images {
  static addImage(req, res) {
    return image
      .create({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: req.file.buffer
      })
      .then(res.status(201).send({
        success: true,
        message: 'Image successfully created',
      })).catch(err => {
        console.log(err);
        res.status(400).send({ message: 'Error while uploading file' });
      });

  }

  static getListImages(req, res) {
    return image
      .findAll({ attributes: ['id', 'name'] })
      .then(images => res.status(200).send(images))
      .catch(err => {
        console.log(err);
        res.status(400).send({ message: 'Error while getting images' });
      });
  }

  static deleteImage(req, res) {
    return image
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then((result) => {
        if (result) {
          return res.status(200).send({ message: 'Image successfully deleted' })
        }
        return res.status(400).send({ message: 'No image found' });
      })
      .catch(err => res.status(400).send(err))
  }

  static downloadImage(req, res) {
    image.findByPk(req.params.id).then(image => {
      if(!image){
        throw new Error
      }
      var fileContents = Buffer.from(image.data, "base64");
      var readStream = new stream.PassThrough();
      readStream.end(fileContents);

      res.set('Content-disposition', 'attachment; filename=' + image.name);
      res.set('Content-Type', image.type);

      readStream.pipe(res);
    }).catch(err => {
      res.status(400).send({ message: 'No image found' });
    });
  }
}

export default Images;