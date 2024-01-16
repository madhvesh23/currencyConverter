import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// constant and component
import {currencyByRupee} from './constant';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [resultValue, setResultValue] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Please enter some value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmt = parseFloat(inputValue);

    if (!isNaN(inputAmt)) {
      const converted = inputAmt * targetValue.value;
      const result = `${targetValue.symbol} ${converted.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)

    } else {
      Snackbar.show({
        text: `${inputValue} not a valid input`,
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
