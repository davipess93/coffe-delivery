import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonToggle,
  ButtonToggleContainer,
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
            <MapPinLine size={22} color="#c47f17" />
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

        <CheckoutFormContainer>
          <CheckoutFormHeader>
            <CurrencyDollar size={22} color="#8047f8" />
            <div>
              <CheckoutFormTitle>Pagamaento</CheckoutFormTitle>
              <CheckoutFormSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </CheckoutFormSubtitle>
            </div>
          </CheckoutFormHeader>
          <ButtonToggleContainer>
            <ButtonToggle>
              <CreditCard size={16} color="#8047f8" />
              CARTÃO DE CRÉDITO
            </ButtonToggle>
            <ButtonToggle>
              <Bank size={16} color="#8047f8" />
              CARTÃO DE DÉBITO
            </ButtonToggle>
            <ButtonToggle>
              <Money size={16} color="#8047f8" />
              DINHEIRO
            </ButtonToggle>
          </ButtonToggleContainer>
        </CheckoutFormContainer>
      </div>
      <div>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      </div>
    </CheckoutContainer>
  )
}
