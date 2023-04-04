import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 640px 448px;
  justify-content: space-between;
  padding-top: 40px;
`

export const CheckoutTitle = styled.h1`
  font-size: 18px;
`

export const CheckoutFormContainer = styled.div`
  margin-top: 20px;
  padding: 40px;
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
