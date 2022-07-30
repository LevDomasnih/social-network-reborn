import 'styled-components';

type HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e'| 'f' | 'A' | 'B' | 'C' | 'D' | 'E'| 'F';
export type HexColor<T extends string> =
    T extends `#${HexDigit}${HexDigit}${HexDigit}${infer Rest1}`
        ? (Rest1 extends ``
            ? T // three-digit hex color
            : (
                Rest1 extends `${HexDigit}${HexDigit}${HexDigit}`
                    ? T  // six-digit hex color
                    : never
                )
            )
        : never;


type Sizes = 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type Colors = 'dark' | 'grey' | 'white' | 'purple' | 'violet' | 'whiteGrey' | 'black'

declare module 'styled-components' {
    export interface DefaultTheme  {
        fontFamily: string[];
        colors: Record<Colors, HexColor>;
        fontSize: Record<Sizes, `${number}px`>;
        lineHeight: Record<Sizes, `${number}px`>;
    }
}
