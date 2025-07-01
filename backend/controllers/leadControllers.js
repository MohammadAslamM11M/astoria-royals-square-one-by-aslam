const axios = require("axios");
const Lead = require("../models/Lead");

const submitLead = async (req, res) => {
  const {
    firstName,
    lastName,
    mobileNo,
    email,
    source,
    sourceDetail,
    preferences,
    remark,
  } = req.body;

  try {
    const newLead = new Lead({
      firstName,
      lastName,
      mobileNo,
      email,
      source,
      sourceDetail,
      preferences,
      remark,
    });
    await newLead.save();

    const response = await axios.post(
      "https://nirman.maksoftbox.com/MDocBoxAPI/MdocAddEnquiryORTeleCalling",
      new URLSearchParams({
        DataForm: "T",
        ApiKey: "a28cc43c-526d-4010-970e-0d0e92c18902",
        EnquiryDate: new Date().toISOString().split("T")[0],
        Salutation: "",
        FirstName: firstName,
        MiddleName: "",
        LastName: lastName,
        MobileNo: mobileNo,
        Email: email,
        Preferences: preferences,
        Source: source,
        SourceDetail: sourceDetail,
        Remark: remark,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    res.status(200).json({ success: true, mdocResponse: response.data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { submitLead };
