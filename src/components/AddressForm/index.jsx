import PropTypes from "prop-types";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

import { Row } from "./styles";

export const AddressForm = ({ onChange, data }) => {
  return (
    <>
      <Row>
        <span className="p-float-label">
          <InputNumber
            id="zip_code"
            onValueChange={(event) =>
              onChange({ id: "zip_code", value: event.value })
            }
            value={data.zip_code}
            required
            maxLength={8}
            minLength={8}
            useGrouping={false}
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
          <label htmlFor="zip_code">Cidade</label>
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
            initialvalue={data.neighborhood}
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
            initialvalue={data.street}
            required
          />
          <label htmlFor="street">Logradouro</label>
        </span>
        <span className="p-float-label">
          <InputText
            type="text"
            id="number"
            onChange={(event) =>
              onChange({ id: "number", value: event.target.value })
            }
            initialvalue={data.number}
            required
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
