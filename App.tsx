import { QueryClient, QueryClientProvider  } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Navegador from './src/navigators/Navegador';
import { MainNavigator } from './src/navigators/MainNavigator';


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <NavigationContainer>
            <Navegador />
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
