import React from "react";
import { SafeAreaView, Linking, View, StyleSheet } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Radio,
  RadioGroup,
  Card,
} from "@ui-kitten/components";

import { ThemeContext } from "../hooks/theme-context";

import ThemeCard from "../components/ThemeCard";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const ExternalLinkIcon = (props) => <Icon {...props} name="external-link" />;

const Settings = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Settings"
        alignment="center"
        accessoryLeft={renderBackAction}
      />
      <Layout style={{ flex: 1 }} level="2">
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            category="h5"
            style={{
              fontWeight: "bold",
            }}
          >
            Themes
          </Text>

          <View style={{ flexDirection: "column" }}>
            <ThemeCard
              onPress={() => {
                if (themeContext.theme === "dark") {
                  themeContext.toggleTheme();
                }
              }}
              title="Light"
            />
            <ThemeCard
              onPress={() => {
                if (themeContext.theme === "light") {
                  themeContext.toggleTheme();
                }
              }}
              title="Dark"
            />
          </View>
          <Text
            category="h5"
            style={{
              fontWeight: "bold",
            }}
          >
            About
          </Text>
          <Card
            style={styles.card}
            onPress={() => {
              Linking.openURL("http://bihelab.di.ionio.gr");
            }}
            appearance="filled"
          >
            <Text category="h5">BiHELab</Text>
            <Text appearance="hint">Organizer</Text>
            <ExternalLinkIcon />
          </Card>

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
          <Card appearance="filled" style={styles.card}>
            <Text category="h6">Themis Exarchos</Text>
            <Text appearance="hint">Supervisor</Text>
          </Card>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
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

export default Settings;
