import React from "react";
import { SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  useTheme,
  CheckBox,
  Input
} from "@ui-kitten/components";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import Spacer from "../../components/Spacer";

const BackIcon = (props) => <Icon { ...props } name="arrow-back" />;
const ForwardIcon = (props) => <Icon { ...props } name="arrow-forward" />;

const FormStep3 = ({ navigation, route }) => {
  const theme = useTheme();

  const [diabetesMellitusWithComplicationChecked, setDiabetesMellitusWithComplicationChecked] = React.useState(false);
  const [diabetesMellitusWithoutComplicationChecked, setDiabetesMellitusWithoutComplicationChecked] = React.useState(false);

  const { register, setValue, handleSubmit, errors } = useForm({
    defaultValues: {
      diabetesMellitusWithComplication: false,
      diabetesMellitusWithoutComplication: false,
      hif1a: 0,
      vegf1: 0,
      epo: 0,
      glut1: 0,
      glut3: 0,
    },
  });

  useFocusEffect(
    React.useCallback(() => {
      register({ name: "diabetesMellitusWithComplication" });
      register({ name: "diabetesMellitusWithoutComplication" });
      register(
        { name: "hif1a" },
        { max: 10, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "vegf1" },
        { max: 10, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "epo" },
        { max: 10, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "glut1" },
        { max: 10, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "glut3" },
        { max: 10, min: 0, pattern: /^\d+$/ }
      );
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
    input: {
      backgroundColor: theme["background-basic-color-1"]
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
    let oldRouteParams = route.params;
    let currentRouteParams = JSON.stringify(data);

    let newRouteParams = Object.assign(
      JSON.parse(oldRouteParams),
      JSON.parse(currentRouteParams)
    );

    navigation.navigate("FormStep4", JSON.stringify(newRouteParams));
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
      Step 3 / 5
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
        <ScrollView>
          <View style={ styles.container }>
            <CheckBox
              style={ styles.checkBox }
              checked={ diabetesMellitusWithComplicationChecked }
              onChange={ (nextChecked) => {
                setValue("diabetesMellitusWithComplication", nextChecked);
                setDiabetesMellitusWithComplicationChecked(nextChecked);
              } }
            >
              <Text category="h6">Diabetes mellitus with complication</Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={ diabetesMellitusWithoutComplicationChecked }
              onChange={ (nextChecked) => {
                setValue("diabetesMellitusWithoutComplication", nextChecked);
                setDiabetesMellitusWithoutComplicationChecked(nextChecked);
              } }
            >
              <Text category="h6">Diabetes mellitus without complication</Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">HIF-1A - Enzyme-linked immunosorbent assay</Text> }
              size="large"
              onChangeText={ (text) => setValue("hif1a", text, true) }
              keyboardType="number-pad"
              name="hif1a"
              style={ styles.input }
              status={ errors.hif1a ? "danger" : "basic" }
            />
            {/* { errors.hk1 && errors.hk1.type === "required" && (
              <Text status="danger">Age is required.</Text>
            ) } */}
            {
              errors.hif1a && errors.hif1a.type === "max" &&
              <Text status="danger">HIF-1A cannot be more than 10</Text>
            }
            {
              errors.hif1a && errors.hif1a.type === "min" &&
              <Text status="danger">HIF-1A cannot be less than 0</Text>
            }
            {
              errors.hif1a && errors.hif1a.type === "pattern" &&
              <Text status="danger">HIF-1A must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">Vascular endothelium factor VEGF1, growth factor leading to angiogenesis</Text> }
              size="large"
              onChangeText={ (text) => setValue("vegf1", text, true) }
              keyboardType="number-pad"
              name="vegf1"
              style={ styles.input }
              status={ errors.vegf1 ? "danger" : "basic" }
            />
            {/* { errors.hk1 && errors.hk1.type === "required" && (
              <Text status="danger">Age is required.</Text>
            ) } */}
            {
              errors.vegf1 && errors.vegf1.type === "max" &&
              <Text status="danger">VEGF1 cannot be more than 10</Text>
            }
            {
              errors.vegf1 && errors.vegf1.type === "min" &&
              <Text status="danger">VEGF1 cannot be less than 0</Text>
            }
            {
              errors.vegf1 && errors.vegf1.type === "pattern" &&
              <Text status="danger">VEGF1 must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">Erythropoietin EPO leading to Erythropoiesis</Text> }
              size="large"
              onChangeText={ (text) => setValue("epo", text, true) }
              keyboardType="number-pad"
              name="epo"
              style={ styles.input }
              status={ errors.epo ? "danger" : "basic" }
            />
            {/* { errors.hk1 && errors.hk1.type === "required" && (
              <Text status="danger">Age is required.</Text>
            ) } */}
            {
              errors.epo && errors.epo.type === "max" &&
              <Text status="danger">EPO cannot be more than 10</Text>
            }
            {
              errors.epo && errors.epo.type === "min" &&
              <Text status="danger">EPO cannot be less than 0</Text>
            }
            {
              errors.epo && errors.epo.type === "pattern" &&
              <Text status="danger">EPO must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">GLUT 1 (Glucose transporter isoform 1)</Text> }
              size="large"
              onChangeText={ (text) => setValue("glut1", text, true) }
              keyboardType="number-pad"
              name="glut1"
              style={ styles.input }
              status={ errors.glut1 ? "danger" : "basic" }
            />
            {/* { errors.hk1 && errors.hk1.type === "required" && (
              <Text status="danger">Age is required.</Text>
            ) } */}
            {
              errors.glut1 && errors.glut1.type === "max" &&
              <Text status="danger">GLUT 1 cannot be more than 10</Text>
            }
            {
              errors.glut1 && errors.glut1.type === "min" &&
              <Text status="danger">GLUT 1 cannot be less than 0</Text>
            }
            {
              errors.glut1 && errors.glut1.type === "pattern" &&
              <Text status="danger">GLUT 1 must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">GLUT 3 (Glucose transporter isoform 3)</Text> }
              size="large"
              onChangeText={ (text) => setValue("glut3", text, true) }
              keyboardType="number-pad"
              name="glut3"
              style={ styles.input }
              status={ errors.glut3 ? "danger" : "basic" }
            />
            {/* { errors.hk1 && errors.hk1.type === "required" && (
              <Text status="danger">Age is required.</Text>
            ) } */}
            {
              errors.glut3 && errors.glut3.type === "max" &&
              <Text status="danger">GLUT 3 cannot be more than 10</Text>
            }
            {
              errors.glut3 && errors.glut3.type === "min" &&
              <Text status="danger">GLUT 3 cannot be less than 0</Text>
            }
            {
              errors.glut3 && errors.glut3.type === "pattern" &&
              <Text status="danger">GLUT 3 must be numeric</Text>
            }

          </View>
        </ScrollView>
        <View style={ styles.buttonContainer }>
          <Button
            size="giant"
            accessoryRight={ ForwardIcon }
            onPress={ handleSubmit(onSubmit) }
          >
            Go to Step 4
          </Button>
        </View>
      </Layout>
    </SafeAreaView >
  );
};

export default FormStep3;
