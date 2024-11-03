import Itinerary from "../../models/Itinerary.js";
let updateItinerary = async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedItinerary = await Itinerary.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedItinerary) {
        return res.status(404).json({ message: 'Itinerary not found' });
      }
      res.json(updatedItinerary);
    } catch (error) {
      next(error);
    }
  };

  export { updateItinerary };
  