import type{ NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParamsList ={
    Home: undefined;
    Search: undefined;
    Detail:{ name: string }
    Detalle:{ id: number }
    Buscador: undefined;
    Inicio: undefined;
}

export type MainStackScreenProps<T extends keyof MainStackParamsList> = NativeStackScreenProps<MainStackParamsList, T>;