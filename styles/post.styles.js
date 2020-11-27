import { css } from 'styled-components';

export default css`
  font-size: 1.12rem;

  /* Lists styles */
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }
  }

  /* Links styles */
  a {
    filter: brightness(0.9);
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      filter: brightness(0.7);
    }
  }

  /* Code blocks styles */
  pre {
    background-color: #333;
    color: #fff;
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.85rem;
    font-size: 0.9rem;
  }
`;
