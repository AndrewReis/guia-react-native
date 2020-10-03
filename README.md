

# Axios
- IOS com emulador: localhost
- IOS com dispositivo fisico: IP da maquina
- Android com Emulador: adb reverse tcp: 3333 tcp:3333 (localhost)
- Android com Emulador: 10.0.2.2 (Android Studio)
- Android com dispositivo fisico: IP da maquina
ex:  baseURL: 'http://192.168.0.14:3333'

# Comandos uteis no Ubuntu

IP da maquina:
- hostname -I

# Navegação
[React Navigation](https://reactnavigation.org/docs/getting-started)

Importante!
Para usuarios mac é importante fazer algumas configurações extras.
- Intalar o [CocoaPods](https://cocoapods.org/). Apois a instalação siga os passos a seguir:
 
 Entre na pasta IOS na raíz do seu projeto. 
 ``
  cd ios
  
  pod install
 ``
 Após fazer as instalações que pedem na documentação oficial do [React Navigation](https://reactnavigation.org/docs/getting-started), faça um reload da sua aplicação.
 
 
``
yarn add @react-navigation/stack
``

