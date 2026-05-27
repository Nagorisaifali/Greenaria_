import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    preferredDate: "",
    wasteType: "Dry Waste"
  });
  const [savedRegistration, setSavedRegistration] = useState(() => {
    const stored = localStorage.getItem("green-signup");
    return stored ? JSON.parse(stored) : null;
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("green-signup", JSON.stringify(formData));
    setSavedRegistration(formData);
    toast.success("Registration successful! Our team will contact you soon.");
    setFormData({
      phone: "",
      address: "",
      preferredDate: "",
      wasteType: "Dry Waste"
    });
  };

  return (
    <section id="signup">

      <ToastContainer />

      <div className="container">

        <div className="signup-box">

          <h2>
            Join Gandhinagar’s Green Revolution
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />

            <select
              name="wasteType"
              value={formData.wasteType}
              onChange={handleChange}
            >
              <option>Dry Waste</option>
              <option>Wet Waste</option>
              <option>Electronic Waste</option>
              <option>Plastic</option>
            </select>

            <button className="btn" type="submit">
              Register Now
            </button>

          </form>

          {savedRegistration && (
            <div className="summary-card">
              <h3>Last scheduled pickup</h3>
              <p><strong>Phone:</strong> {savedRegistration.phone}</p>
              <p><strong>Address:</strong> {savedRegistration.address}</p>
              <p><strong>Preferred date:</strong> {savedRegistration.preferredDate}</p>
              <p><strong>Waste type:</strong> {savedRegistration.wasteType}</p>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default Signup;