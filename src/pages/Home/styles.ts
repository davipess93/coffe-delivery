import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 4rem 0;
`

export const HeroContainer = styled.header`
  display: flex;
  gap: 1rem;
`

export const HeroGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const HeroInfos = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;

    span {
      display: flex;
      align-items: center;

      flex: 1;
      gap: 1rem;

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`

export const IconContainer = styled.div`
  background: ${(props) => props.theme.purple};
  padding: 8px;
  border-radius: 50%;
`
