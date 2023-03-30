import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      padding: 0.5rem calc(0.5rem + 3px) 0.5rem 0.5rem;
      border-radius: 8px;

      background: ${(props) => props.theme.lightPurple};
      color: ${(props) => props.theme.darkPurple};

      svg {
        color: ${(props) => props.theme.purple};
      }
    }

    a {
      display: flex;

      padding: 0.5rem;
      border-radius: 8px;

      background: ${(props) => props.theme.lightYellow};
      color: ${(props) => props.theme.darkYellow};
    }
  }
`
