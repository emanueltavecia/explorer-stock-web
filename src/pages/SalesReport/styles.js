import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  padding-inline: 0.5rem;
  text-align: center;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  > div {
    width: 100%;
    max-width: 600px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  > button {
    max-width: 200px;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  background-color: #222222;
  border-radius: 0.5rem;
`