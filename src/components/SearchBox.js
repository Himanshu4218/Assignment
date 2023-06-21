import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [domain, setDomain] = useState('');
  const [gender, setGender] = useState('');
  const [availability, setAvailability] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}?domain=${domain}&gender=${gender}&availability=${availability}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="d-flex">
      <Form.Control
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search User"
        className="me-2"
      ></Form.Control>
      <Form.Select
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="me-2"
      >
        <option value="">Domain</option>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        <option value="Finance">Finance</option>
        <option value="Business Development">Business Development</option>
        <option value="Sales">Sales</option>
        <option value="Management">Management</option>
        <option value="UI Designing">UI Designing</option>
      </Form.Select>
      <Form.Select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="me-2"
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Form.Select>
      <Form.Select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="me-2"
      >
        <option value="">Availability</option>
        <option value="true">Available</option>
        <option value="false">Not available</option>
      </Form.Select>
      <Button type="submit" variant="warning">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
