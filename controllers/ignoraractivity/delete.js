import Activity from '../../models/Activity.js';

let deleteActivity = async (req, res, next) => {
    try {
        const {id} =req.params

       await Activity.findByIdAndDelete(id);

      return res.status(200).json({
        message: 'Activity deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  export { deleteActivity };