import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
} from "@mui/material";

const RescheduleAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    consultationType: "",
    remark: ""
  });

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await fetch(`http://localhost:8000/consultation/get/${id}`);
        const data = await res.json();
        if (res.ok) {
          setFormData({
            fullName: data.consultation.fullName || "",
            email: data.consultation.email || "",
            phoneNumber: data.consultation.phoneNumber || "",
            consultationType: data.consultation.consultationType || "",
            remark: data.consultation.remark || ""
          });
        }
      } catch (err) {
        console.error("Error fetching appointment", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:8000/consultation/reschedule/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Appointment updated successfully!");
        navigate(`/appointment/view/${id}`);
      } else {
        const data = await res.json();
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Something went wrong.");
    }
  };

  if (loading) return <CircularProgress sx={{ mt: 5, mx: "auto", display: "block" }} />;

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>Update Appointment Details</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <TextField
          select
          label="Consultation Type"
          name="consultationType"
          value={formData.consultationType}
          onChange={handleChange}
          required
        >
          <MenuItem value="Legal Advice">Legal Advice</MenuItem>
          <MenuItem value="Case Evaluation">Case Evaluation</MenuItem>
          <MenuItem value="Document Review">Document Review</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
        <TextField
          label="Remark"
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          multiline
          rows={3}
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update Appointment
        </Button>

      </Box>
    </Container>
  );
};

export default RescheduleAppointment;
