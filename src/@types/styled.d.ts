import 'styled-components/native'
import { onSecondary } from '../common/constants/styles/colors';

declare module 'styled-components/native' {
    export type ColorPalette = 'primary' | 'secondary' | 'onSecondary' | 'caption' | 'surface' | 'brand' | 'alert'

    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            onSecondary: string
            caption: string
            surface: string
            brand: string
            alert: string
        },
        borders: {
            radius: {
                small: number
                xxxlarge: number
            }
        },
        spacing: {
            sm: number
            md: number
            ls: number
        }
    }
}