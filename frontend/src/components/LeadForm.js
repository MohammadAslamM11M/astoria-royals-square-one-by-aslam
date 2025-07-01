import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Alert,
} from "@mui/material";
import axios from "axios";

const LeadForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    preferences: "",
    source: "Digitals",
    sourcedetail: "WebSite",
    remark: "Hello",
  });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/leads", form);
      setStatus({ success: true, message: "Lead submitted successfully" });
    } catch (err) {
      setStatus({
        success: false,
        message: "Submission failed. Please try again.",
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: "auto",
        mt: 5,
        p: 4,
        boxShadow: 3,
        bgcolor: "white",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Enquire Now
      </Typography>
      <TextField
        name="firstName"
        label="First Name"
        value={form.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={form.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        name="mobileNo"
        label="Mobile Number"
        value={form.mobileNo}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <TextField
        select
        name="preferences"
        label="Preference"
        value={form.preferences}
        onChange={handleChange}
        fullWidth
        required
      >
        <MenuItem value="1 BHK">1 BHK</MenuItem>
        <MenuItem value="2 BHK">2 BHK</MenuItem>
      </TextField>
      <TextField name="source" label="Source" value="Digitals" />
      <TextField name="sourceDetail" label="Source Detail" value="WebSite" />
      <TextField
        name="remark"
        label="Remark"
        multiline
        rows={2}
        value={form.remark}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

      {status.message && (
        <Alert severity={status.success ? "success" : "error"}>
          {status.message}
        </Alert>
      )}
    </Box>
  );
};

export default LeadForm;
