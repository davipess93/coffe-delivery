import { MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
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
        </CheckoutFormContainer>
      </div>
      <div>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      </div>
    </CheckoutContainer>
  )
}
