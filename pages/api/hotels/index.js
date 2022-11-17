import connectDB from '../../../utils/connectdb';
import Hotel from '../../../models/Hotel';

connectDB();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET': {
      const hotels = await Hotel.find({});
      res.status(200).json({ success: true, hotels });
      break;
    }
    case 'POST': {
      res
        .status(200)
        .json({ success: true, message: 'post request sent successfully!!' });
      break;
    }
    default:
      res.status(404).json({ error: true, message: 'Route not found!!' });
      break;
  }
}
