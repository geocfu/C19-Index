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

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const ExternalLinkIcon = (props) => <Icon {...props} name="external-link" />;

const Settings = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);

  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    if (themeContext.theme === "light") {
      return 0;
    } else {
      return 1;
    }
  });

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const onCheckedChange = (index) => {
    if (selectedIndex != index) {
      themeContext.toggleTheme();
      setSelectedIndex(index);
    }
  };

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
            Theme
          </Text>
          <RadioGroup
            selectedIndex={selectedIndex}
            onChange={onCheckedChange}
            style={{ left: 10 }}
          >
            <Radio>
              {(evaProps) => (
                <Text style={{ marginHorizontal: 8 }}>Light Theme</Text>
              )}
            </Radio>
            <Radio>
              {(evaProps) => (
                <Text style={{ marginHorizontal: 8 }}>Dark Theme</Text>
              )}
            </Radio>
          </RadioGroup>
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
