import React from 'react';
import { View } from 'react-native';
import BlurOverlay from 'react-native-blur-overlay';
import Icon from '../toolBox/icon';
import { H4, P } from '../toolBox/typography';
import { colors } from '../../constants/styleGuide';
import withTheme from '../withTheme';
import getStyles from './styles';

class FingerprintOverlay extends React.Component {
  componentDidUpdate() {
    if (this.props.show) {
      this.ref.openOverlay();
    } else {
      this.ref.closeOverlay();
    }
  }

  closeModal = () => {
    this.ref.closeOverlay();
    if (typeof this.props.onModalClosed === 'function') {
      this.props.onModalClosed();
    }
  }

  render() {
    const { styles, error } = this.props;
    const iconColor = error ? colors.light.red : colors.light.blue;
    const message = error ? 'Unauthorized! Please try again.' :
      'Scan your fingerprint on the\ndevice scanner to continue';
    return (<BlurOverlay
      ref={(ref) => { this.ref = ref; }}
      radius={24}
      brightness={-50}
      onPress={this.closeModal}
      customStyles={styles.blurContainer}
      blurStyle='light'
      show={this.props.show}
    >
      <View style={styles.container}>
        <H4 style={styles.title}>Fingerprint Verification</H4>
        <View style={styles.innerContainer}>
          <View style={styles.iconWrapper}>
            <Icon name='touch-id-full' size={60} color={iconColor} style={styles.icon} />
          </View>
          <P style={styles.description}>{message}</P>
        </View>
      </View>
    </BlurOverlay>);
  }
}
export default withTheme(FingerprintOverlay, getStyles());
