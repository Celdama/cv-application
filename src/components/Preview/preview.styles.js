import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #333;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  font-size: 0.9rem;
`;

export const Content = styled.div`
  display: flex;
  height: 1110px;

  h4 {
    margin: 12px 0;
    color: ${({ bgColor }) => (bgColor ? `${bgColor}` : 'red')};
    padding: 2px 0;
    font-size: 1.1rem;
    font-weight: normal;
    border-bottom: 1px solid rgb(204, 204, 204);
  }
`;

export const HeaderSpace = styled.div`
  color: #fff;
  height: 110px;
  width: 100%;
  padding: 20px 40px;
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : 'red')};
  /* background-color: #143e72; */

  h1 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.4rem;
  }
`;

export const MainContent = styled.div`
  background-color: whitesmoke;
  padding: 20px 40px;
  width: 75%;

  .description {
    font-style: italic;
    color: #333;
    line-height: 1.6;
  }

  .practical-date,
  .educational-date {
    width: 20%;
    padding: 6px;
  }

  .practical-details,
  .educational-details {
    width: 80%;
    padding: 6px;
  }

  .practical-container,
  .educational-container {
    .practical,
    .educational {
      display: flex;
      gap: 20px;

      div {
        p:first-child {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const SideContent = styled.div`
  background-color: #eee;
  width: 25%;
  padding: 40px 16px;

  img {
    width: 100%;
    height: 210px;
  }
`;
