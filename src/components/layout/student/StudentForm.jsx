import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

function StudentForm({ initialData = {}, onSubmit, buttonText = "Save Student" }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    studentClass: initialData.studentClass || "Class 9"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#fff",
        padding: "25px",
        borderRadius: "8px",
        maxWidth: "500px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }}
    >
      <Input
        label="Full Name *"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter student name"
        required
      />

      <Input
        label="Email Address *"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter student email"
        required
      />

      <Input
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />

      <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "5px" }}>
        <label style={{ fontWeight: "600", fontSize: "14px", color: "#334155" }}>Class *</label>
        <select
          name="studentClass"
          value={formData.studentClass}
          onChange={handleChange}
          style={{
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            fontSize: "14px",
            outline: "none"
          }}
        >
          <option value="Class 9">Class 9</option>
          <option value="Class 10">Class 10</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
        </select>
      </div>

      <Button type="submit">{buttonText}</Button>
    </form>
  );
}

export default StudentForm;