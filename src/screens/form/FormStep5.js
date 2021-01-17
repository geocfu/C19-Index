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
  Input,
} from "@ui-kitten/components";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import Spacer from "../../components/Spacer";

const BackIcon = (props) => <Icon { ...props } name="arrow-back" />;
const ResultsIcon = (props) => <Icon { ...props } name="done-all" />;

const FormStep5 = ({ navigation, route }) => {
  const theme = useTheme();

  const { register, setValue, handleSubmit, errors } = useForm({
    defaultValues: {
      pgm: 0,
      enol1: 0,
      ldha: 0,
      th: 0,
      pdh: 0,
      cpt: 0
    },
  });

  useFocusEffect(
    React.useCallback(() => {
      register(
        { name: "pgm" },
        { max: 100000, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "enol1" },
        { max: 100000, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "ldha" },
        { max: 100000, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "th" },
        { max: 100000, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "pdh" },
        { max: 100000, min: 0, pattern: /^\d+$/ }
      );
      register(
        { name: "cpt" },
        { max: 100000, min: 0, pattern: /^\d+$/ }
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

    navigation.navigate("Results", JSON.stringify(newRouteParams));
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
      Step 5 / 5
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
            <Input
              label={ <Text category="h6">PGM (Phosphoglucomutase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("pgm", text, true) }
              keyboardType="number-pad"
              name="pgm"
              style={ styles.input }
              status={ errors.pgm ? "danger" : "basic" }
            />
            {
              errors.pgm && errors.pgm.type === "max" &&
              <Text status="danger">PGM cannot be more than 100000</Text>
            }
            {
              errors.pgm && errors.pgm.type === "min" &&
              <Text status="danger">PGM cannot be less than 0</Text>
            }
            {
              errors.pgm && errors.pgm.type === "pattern" &&
              <Text status="danger">PGM must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">ENOL 1 (Enolase 1 isoform)</Text> }
              size="large"
              onChangeText={ (text) => setValue("enol1", text, true) }
              keyboardType="number-pad"
              name="enol1"
              style={ styles.input }
              status={ errors.enol1 ? "danger" : "basic" }
            />
            {
              errors.enol1 && errors.enol1.type === "max" &&
              <Text status="danger">ENOL 1 cannot be more than 100000</Text>
            }
            {
              errors.enol1 && errors.enol1.type === "min" &&
              <Text status="danger">ENOL 1 cannot be less than 0</Text>
            }
            {
              errors.enol1 && errors.enol1.type === "pattern" &&
              <Text status="danger">ENOL 1 must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">LDH A (lactate dehydrogenase muscle isoform)</Text> }
              size="large"
              onChangeText={ (text) => setValue("ldha", text, true) }
              keyboardType="number-pad"
              name="ldha"
              style={ styles.input }
              status={ errors.ldha ? "danger" : "basic" }
            />
            {
              errors.ldha && errors.ldha.type === "max" &&
              <Text status="danger">LDH A cannot be more than 100000</Text>
            }
            {
              errors.ldha && errors.ldha.type === "min" &&
              <Text status="danger">LDH A cannot be less than 0</Text>
            }
            {
              errors.ldha && errors.ldha.type === "pattern" &&
              <Text status="danger">LDH A must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">TH (Thyroxine Hydroxylase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("th", text, true) }
              keyboardType="number-pad"
              name="th"
              style={ styles.input }
              status={ errors.th ? "danger" : "basic" }
            />
            {
              errors.th && errors.th.type === "max" &&
              <Text status="danger">TH cannot be more than 100000</Text>
            }
            {
              errors.th && errors.th.type === "min" &&
              <Text status="danger">TH cannot be less than 0</Text>
            }
            {
              errors.th && errors.th.type === "pattern" &&
              <Text status="danger">TH must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">PDH (Pyruvate Dehydrogenase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("pdh", text, true) }
              keyboardType="number-pad"
              name="pdh"
              style={ styles.input }
              status={ errors.pdh ? "danger" : "basic" }
            />
            {
              errors.pdh && errors.pdh.type === "max" &&
              <Text status="danger">PDH cannot be more than 100000</Text>
            }
            {
              errors.pdh && errors.pdh.type === "min" &&
              <Text status="danger">PDH cannot be less than 0</Text>
            }
            {
              errors.pdh && errors.pdh.type === "pattern" &&
              <Text status="danger">PDH must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">CPT (Carnitine Palmitoyl Transferase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("cpt", text, true) }
              keyboardType="number-pad"
              name="cpt"
              style={ styles.input }
              status={ errors.cpt ? "danger" : "basic" }
            />
            {
              errors.cpt && errors.cpt.type === "max" &&
              <Text status="danger">CPT cannot be more than 100000</Text>
            }
            {
              errors.cpt && errors.cpt.type === "min" &&
              <Text status="danger">CPT cannot be less than 0</Text>
            }
            {
              errors.cpt && errors.cpt.type === "pattern" &&
              <Text status="danger">CPT must be numeric</Text>
            }
          </View>
        </ScrollView>
        <View
          style={ styles.buttonContainer }>
          <Button
            size="giant"
            accessoryLeft={ ResultsIcon }
            onPress={ handleSubmit(onSubmit) }
          >
            Get the results
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep5;
