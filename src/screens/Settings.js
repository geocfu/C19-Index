import React from "react";
import { SafeAreaView, Linking, View, ScrollView } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  ListItem,
} from "@ui-kitten/components";
import Constants from "expo-constants";

import { ThemeContext } from "../hooks/theme-context";

import ThemeCard from "../components/ThemeCard";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const VersionIcon = (props) => <Icon {...props} name="clock-outline" />;
const ExternalLinkIcon = (props) => <Icon {...props} name="external-link" />;
const BugIcon = (props) => <Icon {...props} name="github" />;

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

            <ListItem
              style={{ borderRadius: 5 }}
              title={
                <Text category="h6" appearance="hint">
                  Version
                </Text>
              }
              description={
                <Text>
                  {Constants.manifest.version} ({Constants.nativeBuildVersion})
                </Text>
              }
              accessoryLeft={VersionIcon}
              disabled
            />
            <ListItem
              style={{ borderRadius: 5 }}
              title={<Text category="h6">Report an issue</Text>}
              description={
                <Text appearance="hint">Having an issue? Report it here</Text>
              }
              accessoryLeft={BugIcon}
              onPress={() => {
                Linking.openURL("https://github.com/geocfu/C19-Index/issues");
              }}
            />
            <ListItem
              style={{ borderRadius: 5 }}
              title={<Text category="h6">BiHELab</Text>}
              description={<Text appearance="hint">Organizer</Text>}
              accessoryLeft={ExternalLinkIcon}
              onPress={() => {
                Linking.openURL("http://bihelab.di.ionio.gr/");
              }}
            />
            <ListItem
              style={{ borderRadius: 5 }}
              title={<Text category="h6">George Mantellos</Text>}
              description={<Text appearance="hint">App Developer</Text>}
              accessoryLeft={ExternalLinkIcon}
              onPress={() => {
                Linking.openURL("https://github.com/geocfu/");
              }}
            />
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default Settings;
