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
}

export default Images;