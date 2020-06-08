import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text,
  Button,
  useTheme,
} from "@ui-kitten/components";

import Spacer from "../components/Spacer";

import SurgicalMask from "../components/svgs/SurgicalMask";
import VirusImage from "../components/svgs/VirusImage.js";
import Virus3Image from "../components/svgs/Virus3Image.js";

const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;
const ForwardIcon = (props) => <Icon {...props} name="arrow-forward" />;

const Home = ({ navigation, route }) => {
  const theme = useTheme();
  route.params = {};
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
      <VirusImage
        width="60"
        height="55"
        style={{ position: "absolute", left: -20 }}
      />
      <Layout style={{ flex: 1 }}>
        <View
          style={{
            felx: 1,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
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
            <SurgicalMask width="80" height="80" style={{ top: 0 }} />
          </View>
          <Spacer top={10} />
          <ScrollView style={{ height: "70%" }}>
            <View
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: theme["background-basic-color-3"],
                backgroundColor: theme["background-basic-color-2"],
                padding: 10,
              }}
            >
              <Text category="h5" style={{ textAlign: "left" }}>
                How vulnerable are you or a loved one to serious illness from
                COVID-19.
              </Text>
              <Text appearance="hint" style={{ marginTop: 5 }}>
                CDC guidelines highlight that older adults and people of any age
                with certain underlying medical conditions might be at higher
                risk for severe illness from COVID-19.
                {"\n"}
                {"\n"}
                The C19-Severity Estimator Survey, or C19-Index, combines these
                CDC risk factors with other related risk factors that are known
                to impact the severity of respiratory infections, and to create
                a tool that can help individuals understand how vulnerable they
                or their loved ones are to severe complications from COVID-19.
                {"\n"}
                {"\n"}
                By completing the C19-Severity Estimator Survey, individuals can
                get a more complete view into their own vulnerability and help
                to identify others who are among the most vulnerable, so that
                resources can be mobilized to assist them and help them remain
                safe.
              </Text>
            </View>
          </ScrollView>
          <Spacer top={10} bottom={10} />
          <Button
            size="giant"
            accessoryRight={ForwardIcon}
            onPress={() => navigation.navigate("FormStep1")}
          >
            Severity Estimator Survey
          </Button>
        </View>
        <Virus3Image
          width="100"
          height="100"
          style={{ position: "absolute", bottom: -15, zIndex: -1, left: 15 }}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
