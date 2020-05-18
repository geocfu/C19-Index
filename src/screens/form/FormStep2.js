import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
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
const ForwardIcon = (props) => <Icon {...props} name="arrow-forward" />;

const FormStep2 = ({ navigation, route }) => {
  const theme = useTheme();

  const [heartFailureChecked, setHeartFailureChecked] = React.useState(false);
  const [
    acuteRheumaticHeartFailureChecked,
    setAcuteRheumaticHeartFailureChecked,
  ] = React.useState(false);
  const [
    coronaryAtherosclerosisAndOtherHeartDiseaseChecked,
    setCoronaryAtherosclerosisAndOtherHeartDiseaseChecked,
  ] = React.useState(false);
  const [
    pulmonaryHeartDiseaseChecked,
    setPulmonaryHeartDiseaseChecked,
  ] = React.useState(false);
  const [
    chronicRheumaticHeartDiseaseChecked,
    setChronicRheumaticHeartDiseaseChecked,
  ] = React.useState(false);
  const [
    diabetesMellitusWithComplicationChecked,
    setDiabetesMellitusWithComplicationChecked,
  ] = React.useState(false);

  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      heartFailure: false,
      acuteRheumaticHeartFailure: false,
      coronaryAtherosclerosisAndOtherHeartDisease: false,
      pulmonaryHeartDisease: false,
      chronicRheumaticHeartDisease: false,
      diabetesMellitusWithComplication: false,
    },
  });

  React.useEffect(() => {
    register({ name: "heartFailure" });
    register({ name: "acuteRheumaticHeartFailure" });
    register({ name: "coronaryAtherosclerosisAndOtherHeartDisease" });
    register({ name: "pulmonaryHeartDisease" });
    register({ name: "chronicRheumaticHeartDisease" });
    register({ name: "diabetesMellitusWithComplication" });
  }, [register]);

  const onSubmit = (data) => {
    navigation.navigate(
      "FormStep3",
      JSON.stringify(route.params.concat(JSON.stringify(data)))
    );
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
      Step 2 / 3
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
              checked={heartFailureChecked}
              onChange={(nextChecked) => {
                setValue("heartFailure", nextChecked);
                setHeartFailureChecked(nextChecked);
              }}
            >
              <Text category="h6">Heart failure</Text>
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
              checked={acuteRheumaticHeartFailureChecked}
              onChange={(nextChecked) => {
                setValue("acuteRheumaticHeartFailure", nextChecked);
                setAcuteRheumaticHeartFailureChecked(nextChecked);
              }}
            >
              <Text category="h6">Acute rheumatic heart disease</Text>
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
              checked={coronaryAtherosclerosisAndOtherHeartDiseaseChecked}
              onChange={(nextChecked) => {
                setValue(
                  "coronaryAtherosclerosisAndOtherHeartDisease",
                  nextChecked
                );
                setCoronaryAtherosclerosisAndOtherHeartDiseaseChecked(
                  nextChecked
                );
              }}
            >
              <Text category="h6">
                Coronary atherosclerosis and other heart disease
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
              checked={pulmonaryHeartDiseaseChecked}
              onChange={(nextChecked) => {
                setValue("pulmonaryHeartDisease", nextChecked);
                setPulmonaryHeartDiseaseChecked(nextChecked);
              }}
            >
              <Text category="h6">Pulmonary heart disease</Text>
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
              checked={chronicRheumaticHeartDiseaseChecked}
              onChange={(nextChecked) => {
                setValue("chronicRheumaticHeartDisease", nextChecked);
                setChronicRheumaticHeartDiseaseChecked(nextChecked);
              }}
            >
              <Text category="h6">Chronic rheumatic heart disease</Text>
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
              checked={diabetesMellitusWithComplicationChecked}
              onChange={(nextChecked) => {
                setValue("diabetesMellitusWithComplication", nextChecked);
                setDiabetesMellitusWithComplicationChecked(nextChecked);
              }}
            >
              <Text category="h6">Diabetes mellitus with complication</Text>
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
            accessoryRight={ForwardIcon}
            onPress={handleSubmit(onSubmit)}
          >
            Go to Step 3
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep2;
