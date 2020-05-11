import React from "react";
import { SafeAreaView, Linking, View, StyleSheet } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
} from "@ui-kitten/components";
import Constants from "expo-constants";

import { ThemeContext } from "../hooks/theme-context";

import ThemeCard from "../components/ThemeCard";
import ThemeCardHeader from "../components/ThemeCardHeader";

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
      <Layout style={{ flex: 1 }} level="1">
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
              marginTop: 10,
            }}
          >
            About
          </Text>

          <Button style={styles.aboutButton} status="basic" size="giant">
            Version
            {"\n"}
            <Text appearance="hint">
              {Constants.manifest.version} ({Constants.nativeBuildVersion})
            </Text>
          </Button>

          <Button
            style={styles.aboutButton}
            status="basic"
            size="giant"
            accessoryRight={ExternalLinkIcon}
            onPress={() => {
              Linking.openURL("http://bihelab.di.ionio.gr/");
            }}
          >
            BiHELab
            {"\n"}
            <Text appearance="hint">Organizer</Text>
          </Button>

          <Button
            style={styles.aboutButton}
            status="basic"
            size="giant"
            accessoryRight={ExternalLinkIcon}
            onPress={() => {
              Linking.openURL("https://github.com/geocfu/");
            }}
          >
            George Mantellos
            {"\n"}
            <Text appearance="hint">App Developer</Text>
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aboutButton: {
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default Settings;
