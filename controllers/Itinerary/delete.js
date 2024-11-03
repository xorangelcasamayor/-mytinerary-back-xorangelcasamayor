
import Itinerary from "../../models/Itinerary.js";
let deleteItinerary = async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedItinerary = await Itinerary.findByIdAndDelete(id);
      if (!deletedItinerary) {
        return res.status(404).json({ message: 'Itinerary not found' });
      }
      res.json({ message: 'Itinerary deleted successfully' });
    } catch (error) {
      next(error);
    }
  };

  export { deleteItinerary };