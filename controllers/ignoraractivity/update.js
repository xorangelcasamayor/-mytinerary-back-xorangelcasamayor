import Activity from '../../models/ingnorarActivity.js';


let updateActivity = async (req, res, next) => {
    const { id } = req.params;
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
       return res.status(200).json({
      message: 'Activity updated successfully',
      activity: updatedActivity
    });
  } catch (error) {
    next(error);
  }
};




export { updateActivity};
