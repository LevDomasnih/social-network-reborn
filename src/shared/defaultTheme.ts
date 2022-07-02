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

  /* Указываем box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Убираем внутренние отступы */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Убираем внешние отступы */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Выставляем основные настройки по-умолчанию для body */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Упрощаем работу с изображениями */
  img {
    max-width: 100%;
    display: block;
  }

  /* Указываем понятную периодичность в потоке данных у article*/
  article > * + * {
    margin-top: 1em;
  }

  /* Наследуем шрифты для инпутов и кнопок */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
