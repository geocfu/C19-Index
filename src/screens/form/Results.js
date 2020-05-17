import React from "react";
import {
  SafeAreaView,
  Linking,
  View,
  ScrollView,
  BackHandler,
} from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
} from "@ui-kitten/components";
import { useFocusEffect } from "@react-navigation/native";

import { ThemeContext } from "../../hooks/theme-context";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const RestartIcon = (props) => <Icon {...props} name="sync" />;

const Results = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    })
  );

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const renderScreenTitle = () => (
    <Text category="h6" style={{ fontWeight: "bold" }}>
      Results
    </Text>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={renderScreenTitle} alignment="center" />
      <Layout style={{ flex: 1 }} level="1">
        <ScrollView>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Button
              size="giant"
              accessoryLeft={RestartIcon}
              onPress={() => navigation.navigate("Home")}
            >
              Retake Survey
            </Button>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default Results;
