import React from "react";
import { SafeAreaView, Linking, View, ScrollView } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  CheckBox,
  useTheme,
} from "@ui-kitten/components";

import Spacer from "../../components/Spacer";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const ForwardIcon = (props) => <Icon {...props} name="arrow-forward" />;
const InfoIcon = (props) => <Icon {...props} name="info" />;

const FormStep2 = ({ navigation, route }) => {
  const theme = useTheme();
  console.log(route.params);

  const [checked, setChecked] = React.useState(false);

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
      Step 2 / 3
    </Text>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title={renderScreenTitle}
        alignment="center"
        accessoryLeft={renderBackAction}
      />
      <Layout style={{ flex: 1 }} level="3">
        <ScrollView>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <View
              style={{
                borderRadius: 4,
                borderWidth: 2,
                borderColor: theme["background-basic-color-4"],
                backgroundColor: theme["background-basic-color-2"],
              }}
            >
              <CheckBox
                style={{ padding: 20 }}
                checked={checked}
                onChange={(nextChecked) => setChecked(nextChecked)}
              >
                <Text category="h6">
                  Pneumonia except that caused by tuberculosis
                </Text>
              </CheckBox>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 50,
          }}
        >
          <Button
            size="giant"
            accessoryRight={ForwardIcon}
            onPress={() => navigation.navigate("FormStep3")}
          >
            Go to Step 3
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep2;
