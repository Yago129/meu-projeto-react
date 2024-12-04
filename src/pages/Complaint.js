import React, { useState } from "react";
import styled from "styled-components";

const ComplaintContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin: 10px;
  padding: 10px;
  width: 80%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Complaint = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const complaint = { title, description };
    await fetch("http://localhost:3001/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(complaint),
    });
    alert("Reclamação registrada!");
    setTitle("");
    setDescription("");
  };

  return (
    <ComplaintContainer>
      <h2>Registrar Reclamação</h2>
      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit}>Enviar</Button>
    </ComplaintContainer>
  );
};

export default Complaint;
