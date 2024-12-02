# Blogging Mobile

Aplicação mobile do Grupo 3 da Pós Graduação Full Stack Development - FIAP

<div align="center">
    <img src="https://imgur.com/7ehqu7c.png">
</div>

## 🚀 Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[Expo](https://expo.dev)** como ferramenta de construção do projeto.
- **[TypeScript - v5.3.3](https://www.typescriptlang.org/)** para auxiliar na tipagem e detecção de erros em tempo de execução.
- **[React Native- v0.76.2](https://reactnative.dev/)** para desenvolver a interface gráfica.
- **[React hook form - v7.53.0](https://react-hook-form.com/)** e **[Yup - v1.4.0](https://github.com/jquense/yup)** para manipulação de formulários e a validação de dados.
- **[Axios - v1.7.7](https://getbootstrap.com/)** para fazer requisições HTTP.

## ⚠️ Requisitos

- [Node.js](https://nodejs.org/) v18+ e [NPM](https://www.npmjs.com/) para rodar o projeto
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)

## 💻 Como baixar e inicializar o projeto

1. Clonar o repositório

```shell
    git clone https://github.com/beatrizpenalva/blogging-mobile.git
```

2. Entrar no diretório

```shell
    cd blogging-mobile
```

3. Instalar as dependências

```shell
    npm install
```

4. Inicializar o projeto

```shell
    npx expo start
```

💡 A aplicação estará disponível em http://localhost:8081 ou instale o aplicativo do Expo Go no dispositivo [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) ou no [iOS](https://apps.apple.com/br/app/expo-go/id982107779) e leia o QR code que irá aparecer no terminal com a câmera do celular

## 🗂️ Arquitetura do repositório

```
 BLOGGING-WEB/
 ├── src/
 │ ├── api/
 │ ├── app/
 │ ├──├── routes
 │ ├──└── screens/
 │ ├── components/
 │ ├── context/
 │ ├── hooks/
 │ ├── model/
 │ ├── templates/
 │ ├── utils/
 │ └── ...
 ├── .env
 ├── package.json
 ├── tsconfig.json
 └── ...

```
