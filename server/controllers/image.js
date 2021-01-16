import model from '../models';

const { image } = model;

class Images {
  static addImage(req, res) {
    const { name, type } = req.body
    return image
      .create({
        name,
        type
      })
      .then(imageData => res.status(201).send({
        success: true,
        message: 'Image successfully created',
        imageData
      }))
  }

  static getAllImages(req, res) {
    return image
      .findAll()
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