import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCodeScanner from 'react-native-qrcode-scanner';

//const color = () => Math.floor(255 * Math.random());

class ColorView extends Component {

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
  // static displayName = 'ColorView';
  //
  // static navigationOptions = {
  //   title: 'Colors!',
  //   tabBarIcon: (props) => (
  //       <Icon name='color-lens' size={24} color={props.tintColor} />
  //     ),
  //   // TODO: move this into global config?
  //   headerTintColor: 'white',
  //   headerStyle: {
  //     backgroundColor: '#39babd'
  //   }
  // }
  //
  // static propTypes = {
  //   navigate: PropTypes.func.isRequired
  // };
  //
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     background: `rgba(${color()},${color()},${color()}, 1)`
  //   };
  // }
  //
  // open = () => {
  //   this.props.navigate({routeName: 'InfiniteColorStack'});
  // };
  //
  // render() {
  //   const buttonText = 'Open in Stack Navigator';
  //   return (
  //     <View style={[styles.container, {backgroundColor: this.state.background}]}>
  //       <Button color='#ee7f06' title={buttonText} onPress={this.open}/>
  //     </View>
  //   );
  // }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ColorView;
