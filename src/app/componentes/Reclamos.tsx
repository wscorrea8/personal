import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Reclamos() {
  return (
    <Form>
      <div className="container mt-5">
        <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Id Vendedor</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Ingrese código de vendedor" />
        <fieldset disabled>
        <Form.Label htmlFor="disabledTextInput">Id Reclamo</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="" />
          <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="" />
          <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="" />
          <Form.Label htmlFor="disabledTextInput"></Form.Label>
        </fieldset>
          <Form.Control id="disabledTextInput" placeholder="Ingrese su Correo" />
          <Form.Label htmlFor="disabledTextInput"></Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Ingrese su Teléfono" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Elija una Opción</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Tela decolorada</option>
            <option>Espera prolongada</option>
            <option>Tela equivocada</option>
            <option>Cantidad no coincide</option>
            <option>Factura no llego</option>
            <option>Valor Factura equivocado</option>
            <option>Otro</option>
          </Form.Select>
        </Form.Group>
       <Button type="submit">Agregar</Button>
      </div>
    </Form>
  );
}
export default Reclamos;
