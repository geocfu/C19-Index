import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text,
  Button,
  Card,
} from "@ui-kitten/components";

const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;
const ForwardIcon = (props) => <Icon {...props} name="arrow-forward" />;

const Home = ({ navigation }) => {
  const renderSettingsAction = () => (
    <TopNavigationAction
      icon={SettingsIcon}
      onPress={() => {
        navigation.navigate("Settings");
      }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation accessoryRight={renderSettingsAction} />
      <Layout style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Text
              category="h1"
              style={{
                fontWeight: "bold",
              }}
            >
              Stay Home
              {"\n"}
              Stay Safe
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 30,
          }}
        >
          <Button
            status="success"
            size="giant"
            accessoryRight={ForwardIcon}
            onPress={() => navigation.navigate("FormStep1")}
          >
            Index Calculator
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
