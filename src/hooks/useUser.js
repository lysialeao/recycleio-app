import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { UserContext } from "../context/userContext";

import { getUser } from "../services/login";

import { ERRORS } from "../constants/errors";
import { SUCCESS } from "../constants/success";

export const useUser = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const { user, setUser, loading, setLoading } = useContext(UserContext);

  const handleOnChange = ({ id, value }) => {
    setData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await getUser({ ...data })
      .then((data) => {
        data &&
          setUser({
            login: true,
            data: data.data.user[0],
          });
        localStorage.setItem("login", true);

        if (data.data.user[0].cnpj) {
          localStorage.setItem("cnpj", data.data.user[0].cnpj);
        } else {
          localStorage.setItem("cpf", data.data.user[0].cpf);
        }

        localStorage.setItem("address_id", data.data.user[0].address_id);

        toast.success(SUCCESS.WELCOME);
        navigate("/profile");
      })
      .catch(({ error }) => {
        toast.error(error || ERRORS.GENERIC);

        localStorage.setItem("login", false);
      })
      .finally(setLoading(false));
  };

  return {
    handleOnChange,
    onSubmit,
    loading,
    user,
  };
};
