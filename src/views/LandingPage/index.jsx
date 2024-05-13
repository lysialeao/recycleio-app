import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { Layout } from "../../components/Layout";

import {
  Container,
  Banner,
  WrapperCards,
  Section,
  Image,
  Wrapper,
} from "./styles";

import { CardsInfos } from "../../components/CardsInfos";
export const LandingPage = () => {
  return (
    <Layout>
      <Container>
        <Section>
          <Wrapper>
            <h1>
              <span>Comece a reciclar</span> hoje mesmo
            </h1>
            Encontre pontos coletores de resíduos próximos a você
            <NavLink to="/find-collection-point">
              <Button
                label={"Achar pontos de coleta"}
                icon="pi pi-fw pi-search-plus"
                iconPos="right"
                severity="success"
              />
            </NavLink>
          </Wrapper>
          <Image src="https://cdn.dribbble.com/users/1565012/screenshots/6301921/ecology_0-1.jpg?resize=800x600&vertical=center" />
        </Section>
        <Section>
          <Image src="https://cdn.dribbble.com/users/2024671/screenshots/5454342/media/dc359a5525f186dcc64e13b8dd2bac14.jpg?resize=800x600&vertical=center" />
          <Wrapper>
            <h1>
              <span>Encontre</span> pontos coletores próximos
            </h1>
            Para agendar uma coleta, crie login na plataforma. Busque pelo ponto
            coletor e agende no dia e horários disponíveis
            <NavLink to="/register">
              <Button
                label={"Fazer cadastro na plataforma"}
                icon="pi pi-fw pi-search-plus"
                iconPos="right"
                severity="success"
              />
            </NavLink>
          </Wrapper>
        </Section>
        <Section>
          <Wrapper>
            <h1>
              Você, <span>empresa</span>
            </h1>
            Se interessou pela proposta de ajudar a reciclar o lixo no mundo e
            quer contribuir? Torne-se um ponto coletor e receba resíudos para
            descarte
            <NavLink to="/register">
              <Button
                label={"Fazer cadastro de ponto coletor"}
                icon="pi pi-fw pi-search-plus"
                iconPos="right"
                severity="success"
              />
            </NavLink>
          </Wrapper>
          <Image src="https://cdn.dribbble.com/users/2024671/screenshots/5454098/media/b9f345266ff578a296f0d01c5e3697c9.jpg?resize=800x600&vertical=center" />
        </Section>
        <WrapperCards>
          <CardsInfos />
        </WrapperCards>
      </Container>
    </Layout>
  );
};
