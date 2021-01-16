import model from '../models';
import stream from 'stream'

const { image } = model;

class Images {
  static addImage(req, res) {
    console.log(req.file.originalname)
    return image
      .create({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: req.file.buffer
      })
      .then(imageData => res.status(201).send({
        success: true,
        message: 'Image successfully created',
        imageData
      }))
  }

  static getListImages(req, res) {
    return image
      .findAll({attributes: ['id', 'name']})
      .then(images => res.status(200).send(images));
  }

  static deleteImage(req, res) {
    return image
      .destroy({
        where: {
          id: req.params.imageId
        }
      })
      .then((result) => {
        if(result){
          return res.status(200).send({message: 'Image successfully deleted'})
        }
        return res.status(400).send({message: 'No image found',});
      })
      .catch(error => res.status(400).send(error))
  }
}

export default Images;