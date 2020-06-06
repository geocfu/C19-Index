import React from "react";
import { SafeAreaView, View, Linking, ScrollView } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  useTheme,
  CheckBox,
} from "@ui-kitten/components";
import { useForm } from "react-hook-form";

import Spacer from "../../components/Spacer";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const ForwardIcon = (props) => <Icon {...props} name="done-all" />;

const FormStep3 = ({ navigation, route }) => {
  const theme = useTheme();

  const [
    diabetesMellitusWithoutComplicationChecked,
    setDiabetesMellitusWithoutComplicationChecked,
  ] = React.useState(false);
  const [
    chronicObstructivePulmonaryDiseaseAndBronchiectasisChecked,
    setChronicObstructivePulmonaryDiseaseAndBronchiectasisChecked,
  ] = React.useState(false);
  const [
    otherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked,
    setOtherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked,
  ] = React.useState(false);

  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      diabetesMellitusWithoutComplication: false,
      chronicObstructivePulmonaryDiseaseAndBronchiectasis: false,
      otherSpecifiedAndUnspecifiedLowerRespiratoryDisease: false,
    },
  });

  React.useEffect(() => {
    register({ name: "diabetesMellitusWithoutComplication" });
    register({ name: "chronicObstructivePulmonaryDiseaseAndBronchiectasis" });
    register({ name: "otherSpecifiedAndUnspecifiedLowerRespiratoryDisease" });
  }, [register]);

  const onSubmit = (data) => {
    let oldRouteParams = route.params;
    let currentRouteParams = JSON.stringify(data);

    let newRouteParams = Object.assign(
      JSON.parse(oldRouteParams),
      JSON.parse(currentRouteParams)
    );

    navigation.navigate("Results", JSON.stringify(newRouteParams));
  };

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
  //@refresh reset
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title={renderScreenTitle}
        alignment="center"
        accessoryLeft={renderBackAction}
      />
      <Layout style={{ flex: 1 }} level="2">
        <ScrollView>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <CheckBox
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: theme["background-basic-color-3"],
                backgroundColor: theme["background-basic-color-1"],
                padding: 20,
              }}
              checked={diabetesMellitusWithoutComplicationChecked}
              onChange={(nextChecked) => {
                setValue("diabetesMellitusWithoutComplication", nextChecked);
                setDiabetesMellitusWithoutComplicationChecked(nextChecked);
              }}
            >
              <Text category="h6">Diabetes mellitus without complication</Text>
            </CheckBox>

            <Spacer top={10} bottom={10} />

            <CheckBox
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: theme["background-basic-color-3"],
                backgroundColor: theme["background-basic-color-1"],
                padding: 20,
              }}
              checked={
                chronicObstructivePulmonaryDiseaseAndBronchiectasisChecked
              }
              onChange={(nextChecked) => {
                setValue(
                  "chronicObstructivePulmonaryDiseaseAndBronchiectasis",
                  nextChecked
                );
                setChronicObstructivePulmonaryDiseaseAndBronchiectasisChecked(
                  nextChecked
                );
              }}
            >
              <Text category="h6">
                Chronic obstructive pulmonary disease and bronchiectasis
              </Text>
            </CheckBox>

            <Spacer top={10} bottom={10} />

            <CheckBox
              style={{
                borderRadius: 4,
                borderWidth: 1,
                borderColor: theme["background-basic-color-3"],
                backgroundColor: theme["background-basic-color-1"],
                padding: 20,
              }}
              checked={
                otherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked
              }
              onChange={(nextChecked) => {
                setValue(
                  "otherSpecifiedAndUnspecifiedLowerRespiratoryDisease",
                  nextChecked
                );
                setOtherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked(
                  nextChecked
                );
              }}
            >
              <Text category="h6">
                Other specified and unspecified lower respiratory disease
              </Text>
            </CheckBox>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 30,
            marginTop: 80,
          }}
        >
          <Button
            size="giant"
            accessoryLeft={ForwardIcon}
            onPress={handleSubmit(onSubmit)}
          >
            Get The Results
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep3;
