import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--black);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  font-size: var(--fontSmall);
  word-wrap: break-word;
`;

export const Content = styled.div`
  display: flex;
  height: 1110px;

  h4 {
    margin: 12px 0;
    color: ${({ bgColor }) => (bgColor ? `${bgColor}` : 'var(--defaultBlue)')};
    padding: 2px 0;
    font-size: var(--fontMed);
    font-weight: normal;
    border-bottom: 1px solid var(--lightGray);
  }
`;

export const HeaderSpace = styled.div`
  color: var(--white);
  height: 110px;
  width: 100%;
  padding: 20px 40px;
  background-color: ${({ bgColor }) =>
    bgColor ? `${bgColor}` : 'var(--defaultBlue)'};

  h1 {
    font-size: var(--fontExtraBig);
  }

  p {
    font-size: var(--fontBig);
  }
`;

export const MainContent = styled.div`
  background-color: var(--lightWhite);
  padding: 20px 40px;
  width: 75%;

  .description {
    font-style: italic;
    color: var(--black);
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
  background-color: var(--medGray);
  width: 25%;
  padding: 40px 16px;
  word-wrap: break-word;

  img {
    width: 100%;
    height: 210px;
  }
`;
