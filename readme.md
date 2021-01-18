# Welcome to enoch 🤖

enoch is a custom template for react-native

### How to use?

    npx react-native init your-project-name --template https://github.com/rishikeshgaikar/enoch

for android

    npx react-native run-android

for ios

    cd ios
    pod install
    cd ..
    npx react-native run-ios

for react-native-vector-icons linking

    npx react-native link

also if you get "Copy Pods Resources" issue in react-native-vector-icons in ios follow this
xcode => Build phases => Copy Bundle Resources => Remove all vector icons fonts

### Included libraries

- [react-navigation v5](https://reactnavigation.org/docs/getting-started)
- [axios](https://www.npmjs.com/package/axios)
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
- [react-native-responsive-screen](https://www.npmjs.com/package/react-native-responsive-screen)
- [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
- [@react-native-community/async-storage](https://www.npmjs.com/package/@react-native-community/async-storage)

### File structure

Files structure is from [React-Native boilerplate](https://marketplace.visualstudio.com/items?itemName=rishikeshgaikar.react-native-boilerplate)

<pre>
app/  
┣ res/  
┃ ┣ fonts/  
┃ ┣ images/  
┃ ┣ colors.js  
┃ ┣ dimensions.js  
┃ ┣ fonts.js  
┃ ┗ images.js  
┗ src/
  ┣ components/  
  ┃ ┣ CButton.js  
  ┃ ┣ CTextInput.js  
  ┃	┣ Card.js  
  ┃	┗ index.js  
  ┣ context/  
  ┣ navigation/  
  ┣ scenes/  
  ┃ ┣ Details.js  
  ┃ ┣ Home.js  
  ┃ ┗ index.js  
  ┣ utils/  
  ┃ ┗ Constants.js  
  ┣ App.js  
  ┣ R.js  
  ┗ Routes.js
</pre>

### To-Do

- [ ] Add more custom components

### Known Issues

None. If you find something, please report it by opening [new issue](https://github.com/rishikeshgaikar/enoch/issues/new).
