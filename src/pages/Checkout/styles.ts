import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 640px 448px;
  justify-content: space-between;
  padding-top: 2.5rem;
`

export const CheckoutTitle = styled.h1`
  font-size: 18px;
`

export const CheckoutFormContainer = styled.div`
  margin-top: 1.25rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.card};
`

export const CheckoutFormHeader = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${(props) => props.theme.darkYellow};
  }
`

export const CheckoutFormTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
`

export const CheckoutFormSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme.text};
`

export const CheckoutForm = styled.form`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  input {
    padding: 12px;
    background: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.button};
    border-radius: 4px;
    outline: none;
  }

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  .complement::after {
    content: 'Opcional';
  }
`

export const CheckoutFormInputGroupOne = styled.div`
  grid-template-columns: 33.3%;
`

export const CheckoutFormInputGroupTwo = styled.div`
  grid-template-columns: 1fr 2fr;
`

export const CheckoutFormInputGroupThree = styled.div`
  grid-template-columns: 3fr 4fr 1fr;
`
export const CheckoutFormInput = styled.input``
