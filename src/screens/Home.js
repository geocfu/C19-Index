import React from "react";
import { SafeAreaView, View, ScrollView, Image } from "react-native";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text,
  Button,
  useTheme,
} from "@ui-kitten/components";

import SurgicalMaskImage from "../components/svgs/SurgicalMaskImage";

import VirusImage from "../components/svgs/VirusImage.js";
import Virus1Image from "../components/svgs/Virus1Image.js";
import Virus3Image from "../components/svgs/Virus3Image.js";
import Virus4Image from "../components/svgs/Virus4Image.js";
import Virus2Image from "../components/svgs/Virus2Image.js";
import Virus5Image from "../components/svgs/Virus5Image.js";

const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;
const ForwardIcon = (props) => <Icon {...props} name="arrow-forward" />;

const Home = ({ navigation }) => {
  const theme = useTheme();

  const renderSettingsAction = () => (
    <TopNavigationAction
      icon={SettingsIcon}
      onPress={() => {
        navigation.navigate("Settings");
      }}
    />
  );
  //@refresh reset
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation accessoryRight={renderSettingsAction} />
      <Layout style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
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
            <SurgicalMaskImage width="100" height="100" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 10,
              zIndex: -10,
            }}
          >
            <VirusImage width="50" height="50" />
            <Virus1Image width="50" height="50" />
            <Virus2Image width="50" height="50" />
            <Virus3Image width="50" height="50" />
            <Virus4Image width="50" height="50" />
            <Virus5Image width="50" height="50" />
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
