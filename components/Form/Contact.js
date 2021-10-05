import { Box, Button, Input, Title, Text } from "components/Core";
import React, { useState } from "react";
import { useForm, useField } from "react-final-form-hooks";
import styled from "styled-components";
import { Alert, Form } from "react-bootstrap";
import axios from "axios";

const StyledError = styled(Text)`
  color: red;
  font-size: 0.875rem;
  text-align: right;
`;

const ContactForm = ({ buttonText = "Send Message" }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const onSubmit = async (val) => {
    try {
      const emailPost = await axios.post("/api/email", val);
      // console.log(emailPost);
    } catch (e) {
      setError(e.message);
      setTimeout(() => {
        setError("");
      }, 4500);
      return;
    }
    form.reset();

    setSuccess(`Success! We'll get back to you in a bit.`);
    setTimeout(() => {
      setSuccess("");
    }, 4500);
  };

  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit,
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      }

      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
    },
  });

  const name = useField("name", form);
  const email = useField("email", form);
  const message = useField("message", form);

  return (
    <div>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact3" />
        <Box mb={4}>
          <Title variant="card" fontSize="18px" as="label" htmlFor="nameput">
            Your name
          </Title>
          <Input type="text" placeholder="i.e. James Cameron" {...name.input} />
          {name.meta.touched && name.meta.error && (
            <StyledError>{name.meta.error}</StyledError>
          )}
        </Box>
        <Box mb={4}>
          <Title variant="card" fontSize="18px" as="label" htmlFor="emailput">
            Email address
          </Title>
          <Input
            type="email"
            placeholder="i.e. james@email.com"
            {...email.input}
          />
          {email.meta.touched && email.meta.error && (
            <StyledError>{email.meta.error}</StyledError>
          )}
        </Box>

        <Box mb={4}>
          <Title variant="card" fontSize="18px" as="label" htmlFor="messageput">
            Message
          </Title>
          <Input
            type="text"
            as="textarea"
            placeholder="Write your message here"
            rows={4}
            {...message.input}
          />
          {message.meta.touched && message.meta.error && (
            <StyledError>{message.meta.error}</StyledError>
          )}
        </Box>

        <Button
          onClick={(e) => {
            e.preventDefault();
            form.submit();
          }}
          width="100%"
          type="submit"
          borderRadius={10}
        >
          {buttonText}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
