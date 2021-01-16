import Images from '../controllers/image';
import upload from '../config/multer.config';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the image storage API!',
    }));

    app.post('/api/images', upload.single("file"), Images.addImage);
    app.get('/api/images', Images.getListImages);
    app.get('/api/images/:id', Images.downloadImage);
    app.delete('/api/images/:id', Images.deleteImage);
};