import { createGlobalStyle, DefaultTheme } from "styled-components"
import { HexColor } from "../styled"

function hex<T extends string>(s: HexColor<T>): T {
    return s;
}

export const defaultTheme: DefaultTheme = {
    colors: {
        dark: hex('#161616'),
        grey: hex('#B7B7B7'),
        white: hex('#FFFFFF'),
        purple: hex('#6962A8'),
        violet: hex('#F3F1FF'),
        whiteGrey: hex('#F5F7F9'),
        black: hex('#000000'),
    },
    fontFamily: ['"TT Norms"', 'sans-serif'],
    fontSize: {
        'sm': '12px',
        'base': '14px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
    },
    lineHeight: {
        'sm': '16px',
        'base': '17px',
        'lg': '19px',
        'xl': '21px',
        '2xl': '21px',
        '3xl': '30px',
        '4xl': '38px',
    },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily.toString()};
  }
  .RichEditor-root {
    background: #fff;
    border: 1px solid #ddd;

    padding: 15px;
  }

  .RichEditor-pick {
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

  .RichEditor-editor {
    cursor: text;
    font-size: 16px;
  }

  .RichEditor-editor-watch {
    max-height: 200px;
    overflow: hidden;
  }

  .RichEditor-editor .public-DraftEditorPlaceholder-root,
  .RichEditor-editor .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 15px;
  }

  .RichEditor-editor .public-DraftEditor-content {
    min-height: 100px;
  }

  .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
    display: none;
  }

  .RichEditor-editor .RichEditor-blockquote {
    border-left: 5px solid #eee;
    color: #666;
    margin: 16px 0;
    padding: 10px 20px;
  }

  .RichEditor-editor .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 20px;
  }

  .RichEditor-controls {
    margin-bottom: 5px;
    user-select: none;
  }

  .RichEditor-styleButton {
    color: #999;
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
  }

  .RichEditor-activeButton {
    color: #5890ff;
  }
`;

export default GlobalStyle;
