import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Container, Form, Row } from "./styles"
import { Accordion, AccordionTab } from 'primereact/accordion'

export const RegisterFormCollectionPoint = ({ onChange, onSubmit, loading }) => {
  return (
    <Container>
      <h2>Quer se tornar um ponto coletor?</h2>
      <h3>Juste se agora mesmo a uma rede de colaboradoes que ajudam com o descarte responsável do lixo</h3>
      <Accordion activeIndex={0}>
      <AccordionTab header="Dados da empresa">
      <Form>
        <Row>
      <span className="p-float-label">
        <InputText type='email' id="login" onChange={(event) => onChange({ id: 'login', value: event.target.value })} required />
        <label htmlFor="login">Login</label>
      </span>
      <span className="p-float-label">
        <Password id="password" onChange={(event) => onChange({ id: 'password', value: event.target.value })} required />
        <label htmlFor="password">Senha</label>
      </span>
      </Row>
      </Form>
      </AccordionTab>
      <AccordionTab header="Responsável por coletas">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </AccordionTab>
      <AccordionTab header="Endereço">
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
      </AccordionTab>
    </Accordion>
    </Container>
  )
}