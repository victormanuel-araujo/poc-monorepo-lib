/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react'

import {
  View,
  ScrollView,
  Screen,
  Header,
  Icon,
  Text,
  TimelineBullets,
  Card,
  DrawerConsumer,
} from '@gama-academy/smash'
import { Image } from 'react-native'

const App = () => {
  return (
    <>
      <View flex={1}>
        <Header
          leftAdornment={
            <Image source={{ uri: 'https://i.imgur.com/Dv0AhuW.png' }} style={{ width: 99, height: 34 }} />
          }
          leftAdornmentProps={{ spacing: 'md', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}
          rightAdornment={<Icon.Material icon="notifications" background="primary" size={16} />}
          rightAction={() => null}
        />

        <ScrollView background="white" contentInsetAdjustmentBehavior="always">
          <Screen>
            <View spacing="lg">
              <TimelineBullets activeIndex={1}>
                <View spacing="sm">
                  <Card>
                    <View>
                      <Text> Lorem Ipsum</Text>
                    </View>
                  </Card>
                </View>
                <View spacing="sm">
                  <Card>
                    <View>
                      <Text> Lorem Ipsum</Text>
                      <Text> Lorem Ipsum</Text>
                      <Text> Lorem Ipsum</Text>
                    </View>
                  </Card>
                </View>
                <View spacing="sm">
                  <Card>
                    <View>
                      <Text> Lorem Ipsum</Text>
                      <Text> Lorem Ipsum</Text>
                      <Text> Lorem Ipsum</Text>
                    </View>
                  </Card>
                </View>
              </TimelineBullets>
            </View>
          </Screen>
        </ScrollView>
      </View>
    </>
  )
}

export default App
