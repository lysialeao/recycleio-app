import { TabPanel, TabView } from "primereact/tabview";
import { Toast } from "primereact/toast";

import { Layout } from "../../components/Layout";

import { USERS } from "../../constants/user";

import { RegisterFormUser } from "../../components/RegisterFormUser";

import { useRegister } from "../../hooks/useRegister";

import { Container } from "./styles";

export const RegisterUser = () => {
  const { onChange, onSubmit, data, toast } = useRegister();

  return (
    <Layout>
      <Container>
        <Toast ref={toast} />
        <TabView>
          <TabPanel header={USERS.USER}>
            <div id="register-user">
              <RegisterFormUser
                onChange={onChange}
                onSubmit={onSubmit}
                data={data}
              />
            </div>
          </TabPanel>
        </TabView>
      </Container>
    </Layout>
  );
};
