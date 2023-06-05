import React, { useEffect, useState } from "react";
import { ContainerForm, Form, Label, Input } from "./FormCart.styled";
import { useShopContext } from "../../hook/useShopContext";

const FormCart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { setFormObject } = useShopContext();

  useEffect(() => {
    setFormObject({ name, email, phone, address });
  }, [name, email, phone, address]);

  return (
    <ContainerForm>
      <Form>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Phone:</Label>
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Label>Address:</Label>
        <Input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form>
    </ContainerForm>
  );
};

export default FormCart;
