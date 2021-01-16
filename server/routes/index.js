import Images from '../controllers/image';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the image storage API!',
    }));

    app.post('/api/images', Images.addImage);
    app.get('/api/images', Images.getAllImages);
    app.delete('/api/images/:imageId', Images.deleteImage);
};