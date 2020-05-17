import React from "react";
import { SafeAreaView, Linking, View, ScrollView } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
} from "@ui-kitten/components";

import { ThemeContext } from "../../hooks/theme-context";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const DoneIcon = (props) => <Icon {...props} name="done-all" />;
const InfoIcon = (props) => <Icon {...props} name="info" />;

const FormStep3 = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);

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
      Step 3 / 3
    </Text>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title={renderScreenTitle}
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
            <Button
              size="giant"
              accessoryRight={DoneIcon}
              onPress={() => navigation.navigate("Results")}
            >
              Get The Results
            </Button>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep3;
