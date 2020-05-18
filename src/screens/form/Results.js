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
  Button,
} from "@ui-kitten/components";
import { useFocusEffect } from "@react-navigation/native";

const RestartIcon = (props) => <Icon {...props} name="sync" />;

const Results = ({ navigation, route }) => {
  console.log(route.params);
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
