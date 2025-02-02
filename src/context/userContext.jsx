import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

import { toast } from "react-hot-toast";

import { getAddress } from "../services/login";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedAddressId = localStorage.getItem("address_id");

    const cpfUser = localStorage.getItem("cpf");
    const cnpjUser = localStorage.getItem("cnpj");

    let document;

    if (cnpjUser) {
      document = { cnpj: cnpjUser };
    } else if (cpfUser) {
      document = { cpf: cpfUser };
    }

    return {
      login: localStorage.getItem("login") || false,
      data: {
        address_id: storedAddressId,
        ...document,
      },
    };
  });

  const [loading, setLoading] = useState(false);

  const getUserAddress = async ({ id }) => {
    await getAddress({ id })
      .then(({ data }) =>
        setUser((prevState) => ({
          ...prevState,
          address: data.address[0],
        }))
      )
      .catch((error) => toast.error(error.message));
  };

  useEffect(() => {
    if (user.login) {
      getUserAddress({ id: user?.data?.address_id });
    }
  }, [user.login]);

  const signout = () => {
    setUser({
      login: false,
    });
    localStorage.clear();
  };

  const values = {
    user,
    setUser,
    loading,
    setLoading,
    signout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
