import React from "react";
import UserForm from "./UserForm/UserForm";
import { styled } from "@mui/material";

const User = ({ name, email, age }) => {
  const CenteredText = styled("div")({
    textAlign: "center",
  });

  return (
    <div>
      <CenteredText>
        <h1>User Form</h1>
      </CenteredText>
      <UserForm />
    </div>
  );
};

export default User;
