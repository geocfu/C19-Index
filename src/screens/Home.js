import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
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
      <Layout
        style={{
          flex: 1,
        }}
      >
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
          </Text>
          <Text
            category="h1"
            style={{
              fontWeight: "bold",
            }}
          >
            Stay Safe
          </Text>
          <Card
            appearance="filled"
            style={styles.card}
            onPress={() => {
              Linking.openURL("https://github.com/geocfu/");
            }}
          >
            <Text category="h6">George Mantellos</Text>
            <Text appearance="hint">App Developer</Text>
          </Card>
          <Button
            style={{}}
            status="success"
            size="giant"
            accessoryRight={ForwardIcon}
          >
            Index Calculator
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

export default Home;
