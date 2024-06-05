import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  padding-inline: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  > button {
    max-width: 200px;
  }
`