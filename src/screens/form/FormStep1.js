import React from "react";
import { SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  Input,
  Radio,
  RadioGroup,
  useTheme,
  CheckBox,
} from "@ui-kitten/components";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import Spacer from "../../components/Spacer";

const BackIcon = (props) => <Icon { ...props } name="arrow-back" />;
const ForwardIcon = (props) => <Icon { ...props } name="arrow-forward" />;

const FormStep1 = ({ navigation }) => {
  const theme = useTheme();

  const [sexSelectedIndex, setSexSelectedIndex] = React.useState(null);
  const [pneumoniaExceptThatCausedByTuberculosisChecked, setPneumoniaExceptThatCausedByTuberculosisChecked] = React.useState(false);
  const [chronicObstructivePulmonaryDiseaseAndBronchiectasisChecked, setChronicObstructivePulmonaryDiseaseAndBronchiectasisChecked] = React.useState(false);
  const [otherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked, setOtherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked] = React.useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = React.useState(false);

  const { register, setValue, handleSubmit, errors } = useForm({
    defaultValues: {
      pneumoniaExceptThatCausedByTuberculosis: false,
      chronicObstructivePulmonaryDiseaseAndBronchiectasis: false,
      otherSpecifiedAndUnspecifiedLowerRespiratoryDisease: false,
    },
  });

  useFocusEffect(
    React.useCallback(() => {
      setButtonIsDisabled(false);
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      register(
        { name: "age" },
        { required: true, max: 110, min: 1, pattern: /^\d+$/ }
      );
      register(
        { name: "sex" },
        { required: true }
      );
      register(
        { name: "numberOfHospitalAdmissions" },
        { required: true, max: 10, min: 0, pattern: /^\d+$/ }
      );
      register({ name: "pneumoniaExceptThatCausedByTuberculosis" });
      register({ name: "chronicObstructivePulmonaryDiseaseAndBronchiectasis" });
      register({ name: "otherSpecifiedAndUnspecifiedLowerRespiratoryDisease" });
    }, [register])
  );

  const styles = StyleSheet.create({
    container: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    checkBox: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: theme["background-basic-color-3"],
      backgroundColor: theme["background-basic-color-1"],
      padding: 20,
    },
    radioButtonGroup: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      padding: 0,
    },
    radioButton: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: theme["background-basic-color-3"],
      backgroundColor: theme["background-basic-color-1"],
      padding: 20,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "flex-end",
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 30,
      marginTop: 80,
    }
  });

  const onSubmit = (data) => {
    setButtonIsDisabled(true);

    const newRouteParams = data;

    navigation.navigate("FormStep2", JSON.stringify(newRouteParams));
  };

  const renderBackAction = () => (
    <TopNavigationAction
      icon={ BackIcon }
      onPress={ () => {
        navigation.goBack();
      } }
    />
  );

  const renderScreenTitle = () => (
    <Text category="h6" style={ { fontWeight: "bold" } }>
      Step 1 / 5
    </Text>
  );
  //@refresh reset
  return (
    <SafeAreaView style={ { flex: 1 } }>
      <TopNavigation
        title={ renderScreenTitle }
        alignment="center"
        accessoryLeft={ renderBackAction }
      />
      <Layout style={ { flex: 1 } } level="2">
        <ScrollView keyboardShouldPersistTaps="handled">
          <View
            style={ styles.container }
          >
            <Input
              label={ <Text category="h6">What is your age? *</Text> }
              size="large"
              onChangeText={ (text) => setValue("age", text, true) }
              keyboardType="number-pad"
              name="age"
              style={ { backgroundColor: theme["background-basic-color-1"] } }
              status={ errors.age ? "danger" : "basic" }
            />
            { errors.age && errors.age.type === "required" && (
              <Text status="danger">Age is required.</Text>
            ) }
            { errors.age && errors.age.type === "max" && (
              <Text status="danger">Age cannot be more than 110</Text>
            ) }
            { errors.age && errors.age.type === "min" && (
              <Text status="danger">Age cannot be less than 1</Text>
            ) }
            { errors.age && errors.age.type === "pattern" && (
              <Text status="danger">Age must be numeric</Text>
            ) }

            <Spacer top={ 10 } bottom={ 10 } />

            <Text category="h6">What is your sex? *</Text>
            <RadioGroup
              style={ styles.radioButtonGroup }
              selectedIndex={ sexSelectedIndex }
              onChange={ (index) => {
                setValue("sex", index, true);
                setSexSelectedIndex(index);
              } }
            >
              <Radio
                style={ styles.radioButton }
                status={ errors.sex ? "danger" : "basic" }
              >
                <Text>Female</Text>
              </Radio>
              <Radio
                style={ styles.radioButton }
                status={ errors.sex ? "danger" : "basic" }
              >
                <Text>Male</Text>
              </Radio>
            </RadioGroup>
            { errors.sex && errors.sex.type === "required" && (
              <Text status="danger">Sex is required.</Text>
            ) }

            <Spacer top={ 0 } bottom={ 10 } />

            <Input
              label={
                <Text category="h6">
                  Number of Hospital admissions (Last 12M) *
                </Text>
              }
              size="large"
              onChangeText={ (text) =>
                setValue("numberOfHospitalAdmissions", text, true)
              }
              keyboardType="number-pad"
              style={ { backgroundColor: theme["background-basic-color-1"] } }
              status={ errors.numberOfHospitalAdmissions ? "danger" : "basic" }
            />
            { errors.numberOfHospitalAdmissions &&
              errors.numberOfHospitalAdmissions.type === "required" && (
                <Text status="danger">
                  Number of Hospital admissions is required.
                </Text>
              ) }
            { errors.numberOfHospitalAdmissions &&
              errors.numberOfHospitalAdmissions.type === "max" && (
                <Text status="danger">
                  Number of Hospital admissions cannot be more than 10
                </Text>
              ) }
            { errors.numberOfHospitalAdmissions &&
              errors.numberOfHospitalAdmissions.type === "min" && (
                <Text status="danger">
                  Number of Hospital admissions cannot be less than 0.
                </Text>
              ) }
            { errors.numberOfHospitalAdmissions &&
              errors.numberOfHospitalAdmissions.type === "pattern" && (
                <Text status="danger">
                  Number of Hospital admissions must be numeric.
                </Text>
              ) }

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={ pneumoniaExceptThatCausedByTuberculosisChecked }
              onChange={ (nextChecked) => {
                setValue("pneumoniaExceptThatCausedByTuberculosis", nextChecked);
                setPneumoniaExceptThatCausedByTuberculosisChecked(nextChecked);
              } }
            >
              <Text category="h6">
                Pneumonia except that caused by tuberculosis
              </Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={
                chronicObstructivePulmonaryDiseaseAndBronchiectasisChecked
              }
              onChange={ (nextChecked) => {
                setValue("chronicObstructivePulmonaryDiseaseAndBronchiectasis", nextChecked);
                setChronicObstructivePulmonaryDiseaseAndBronchiectasisChecked(nextChecked);
              } }
            >
              <Text category="h6">
                Chronic obstructive pulmonary disease and bronchiectasis
              </Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={
                otherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked
              }
              onChange={ (nextChecked) => {
                setValue("otherSpecifiedAndUnspecifiedLowerRespiratoryDisease", nextChecked);
                setOtherSpecifiedAndUnspecifiedLowerRespiratoryDiseaseChecked(nextChecked);
              } }
            >
              <Text category="h6">
                Other specified and unspecified lower respiratory disease
              </Text>
            </CheckBox>
          </View>
        </ScrollView>
        <View style={ styles.buttonContainer } >
          <Button
            size="giant"
            accessoryRight={ ForwardIcon }
            onPress={ handleSubmit(onSubmit) }
            disabled={ buttonIsDisabled }
          >
            Go to Step 2
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep1;
