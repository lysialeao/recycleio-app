import PropTypes from "prop-types";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { FORM } from "../../constants/form";

import { Form } from "./styles";

export const LoginForm = ({ onChange, onSubmit, loading }) => {
  return (
    <Form onSubmit={onSubmit}>
      <span className="p-float-label">
        <InputText
          type="email"
          id="login"
          onChange={(event) =>
            onChange({ id: "login", value: event.target.value })
          }
          required
        />
        <label htmlFor="login">{FORM.LOGIN}</label>
      </span>
      <span className="p-float-label">
        <InputText
          id="password"
          onChange={(event) =>
            onChange({ id: "password", value: event.target.value })
          }
          required
          type="password"
        />
        <label htmlFor="password">{FORM.PASSWORD}</label>
      </span>
      <Button label="Login" className="p-button-success" loading={loading} />
      <p>
        não tem uma conta? registre como <a href="/register/user">usuário</a> ou{" "}
        <a href="/register">ponto coletor</a>
      </p>
    </Form>
  );
};

LoginForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};
