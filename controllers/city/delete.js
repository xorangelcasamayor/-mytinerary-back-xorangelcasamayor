import City from '../../models/City.js';

const deleteCity = async (req, res, next) => {
  try {
    const { id } = req.params; 

    await City.findByIdAndDelete(id); 

    return res.status(200).json({ message: 'City deleted successfully' }); 
  } catch (error) {
    next(error); 
  }
};

export { deleteCity };

