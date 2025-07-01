const SupportRequest = require('../Model/support');


exports.createRequest = async (req, res) => {
  try {
    const reqDoc = new SupportRequest(req.body);
    await reqDoc.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllRequests = async (req, res) => {
  try {
    const all = await SupportRequest.find().sort({ submittedAt: -1 });
    res.json({ success: true, data: all });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
