import { MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContainer,
  CheckoutFormHeader,
  CheckoutFormSubtitle,
  CheckoutFormTitle,
  CheckoutTitle,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <CheckoutFormContainer>
          <CheckoutFormHeader>
            <MapPinLine size={22} />
            <div>
              <CheckoutFormTitle>Endereço de Entrega</CheckoutFormTitle>
              <CheckoutFormSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </CheckoutFormSubtitle>
            </div>
          </CheckoutFormHeader>
          <CheckoutForm>
            <input type="text" placeholder="CEP" className="cep" />
            <input type="text" placeholder="Rua" className="street" />
            <input type="text" placeholder="Número" />
            <input
              type="text"
              placeholder="Complemento"
              className="complement"
            />

            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </CheckoutForm>
        </CheckoutFormContainer>
      </div>
      <div>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      </div>
    </CheckoutContainer>
  )
}
