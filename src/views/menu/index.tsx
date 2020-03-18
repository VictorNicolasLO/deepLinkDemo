import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Easing, Linking} from 'react-native';
import {styles, ShowTitle} from './styles';
import {useThemeProvider} from '../../providers/theme-provider';
import Typography from '../../components/ui/typography';

function Menu() {
  const {
    theme: {
      colors: {primary: primaryColor},
    },
  } = useThemeProvider();
  const [url, setUrl] = useState('');
  useEffect(() => {
    Linking.getInitialURL()
      .then((newUrl: any) => {
        if (newUrl) {
          setUrl(newUrl);
          console.log(url);
          console.log(newUrl);
        }
      })
      .catch((err: any) => console.error('An error occurred', err));
  }, [url]);
  return (
    <SafeAreaView>
      <View style={{...styles.container}}>
        <View style={{...styles.topContent, backgroundColor: primaryColor}}>
          <ShowTitle duration={0.3} easing={Easing.out(Easing.circle)}>
            <Typography color="white" variant="title1">
              {url}
            </Typography>
          </ShowTitle>
        </View>
        <View style={{...styles.bottomControls}} />
      </View>
    </SafeAreaView>
  );
}

export default Menu;
