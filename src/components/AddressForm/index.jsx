import PropTypes from "prop-types";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

import { Row } from "./styles";

export const AddressForm = ({ onChange, data }) => {
  const handleZipCodeChange = (event) => {
    const { value } = event.target;
    onChange({ id: "zip_code", value });
  };

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <>
      <Row>
        <span className="p-float-label">
          <InputText
            id="zip_code"
            value={data.zip_code}
            onChange={handleZipCodeChange}
            onKeyPress={handleKeyPress}
            required
            maxLength={8}
            minLength={8}
          />
          <label htmlFor="zip_code">CEP</label>
        </span>
        <span className="p-float-label">
          <InputText
            type="text"
            id="state"
            onChange={(event) =>
              onChange({ id: "state", value: event.target.value })
            }
            value={data.state}
            required
          />
          <label htmlFor="state">Estado</label>
        </span>
        <span className="p-float-label">
          <InputText
            type="text"
            id="city"
            onChange={(event) =>
              onChange({ id: "city", value: event.target.value })
            }
            value={data.city}
            required
          />
          <label htmlFor="city">Cidade</label>
        </span>
      </Row>
      <Row>
        <span className="p-float-label">
          <InputText
            type="text"
            id="neighborhood"
            onChange={(event) =>
              onChange({ id: "neighborhood", value: event.target.value })
            }
            value={data.neighborhood}
            required
          />
          <label htmlFor="neighborhood">Bairro</label>
        </span>
        <span className="p-float-label">
          <InputText
            type="text"
            id="street"
            onChange={(event) =>
              onChange({ id: "street", value: event.target.value })
            }
            value={data.street}
            required
          />
          <label htmlFor="street">Logradouro</label>
        </span>
        <span className="p-float-label">
          <InputNumber
            type="text"
            id="number"
            onChange={(event) =>
              onChange({ id: "number", value: event.target.value })
            }
            value={data.number}
            required
            maxLength={5}
          />
          <label htmlFor="number">Número</label>
        </span>
      </Row>
    </>
  );
};

AddressForm.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.object,
};
