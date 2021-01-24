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
const ForwardIcon = (props) => <Icon { ...props } name="arrow-forward" />;
const ResultsIcon = (props) => <Icon { ...props } name="done-all" />;

const FormStep4 = ({ navigation, route }) => {
  const [buttonIsDisabled, setButtonIsDisabled] = React.useState(false);

  const theme = useTheme();

  const { register, setValue, handleSubmit, errors } = useForm({
    defaultValues: {
      hk1: 0,
      hk2: 0,
      gpi: 0,
      pfk: 0,
      alda: 0,
      tpi: 0,
      // gapdh: 0,
      // pgk1: 0,
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
        { name: "hk1" },
        { max: 10, min: 0, max: 10, pattern: /^\d+$/ }
      );
      register(
        { name: "hk2" },
        { max: 10, min: 0, max: 10, pattern: /^\d+$/ }
      );
      register(
        { name: "gpi" },
        { max: 10, min: 0, max: 10, pattern: /^\d+$/ }
      );
      register(
        { name: "pfk" },
        { max: 10, min: 0, max: 10, pattern: /^\d+$/ }
      );
      register(
        { name: "alda" },
        { max: 10, min: 0, max: 10, pattern: /^\d+$/ }
      );
      register(
        { name: "tpi" },
        { max: 10, min: 0, max: 10, pattern: /^\d+$/ }
      );
      // register(
      //   { name: "gapdh" },
      //   { max: 10, min: 0, pattern: /^\d+$/ }
      // );
      // register(
      //   { name: "pgk1" },
      //   { max: 10, min: 0, pattern: /^\d+$/ }
      // );
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
    setButtonIsDisabled(true);

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
      Step 4 / 5
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
              label={ <Text category="h6">HK 1 (Hexokinase isoform 1)</Text> }
              size="large"
              onChangeText={ (text) => setValue("hk1", text, true) }
              keyboardType="number-pad"
              name="hk1"
              style={ styles.input }
              status={ errors.hk1 ? "danger" : "basic" }
            />
            {
              errors.hk1 && errors.hk1.type === "max" &&
              <Text status="danger">HK 1 cannot be more than 10</Text>
            }
            {
              errors.hk1 && errors.hk1.type === "min" &&
              <Text status="danger">HK 1 cannot be less than 0</Text>
            }
            {
              errors.hk1 && errors.hk1.type === "pattern" &&
              <Text status="danger">HK 1 must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">HK 2 (Hexokinase isoform 2)</Text> }
              size="large"
              onChangeText={ (text) => setValue("hk2", text, true) }
              keyboardType="number-pad"
              name="hk2"
              style={ styles.input }
              status={ errors.hk2 ? "danger" : "basic" }
            />
            {
              errors.hk2 && errors.hk2.type === "max" &&
              <Text status="danger">HK 2 cannot be more than 10</Text>
            }
            {
              errors.hk2 && errors.hk2.type === "min" &&
              <Text status="danger">HK 2 cannot be less than 0</Text>
            }
            {
              errors.hk2 && errors.hk2.type === "pattern" &&
              <Text status="danger">HK 2 must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">GPI (Glucose phosphate Isomerase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("gpi", text, true) }
              keyboardType="number-pad"
              name="gpi"
              style={ styles.input }
              status={ errors.gpi ? "danger" : "basic" }
            />
            {
              errors.gpi && errors.gpi.type === "max" &&
              <Text status="danger">GPI cannot be more than 10</Text>
            }
            {
              errors.gpi && errors.gpi.type === "min" &&
              <Text status="danger">GPI cannot be less than 0</Text>
            }
            {
              errors.gpi && errors.gpi.type === "pattern" &&
              <Text status="danger">GPI must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">PFK (phosphofructokinase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("pfk", text, true) }
              keyboardType="number-pad"
              name="pfk"
              style={ styles.input }
              status={ errors.pfk ? "danger" : "basic" }
            />
            {
              errors.pfk && errors.pfk.type === "max" &&
              <Text status="danger">PFK cannot be more than 10</Text>
            }
            {
              errors.pfk && errors.pfk.type === "min" &&
              <Text status="danger">PFK cannot be less than 0</Text>
            }
            {
              errors.pfk && errors.pfk.type === "pattern" &&
              <Text status="danger">PFK must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">ALD A (Aldolase A isoform)</Text> }
              size="large"
              onChangeText={ (text) => setValue("alda", text, true) }
              keyboardType="number-pad"
              name="alda"
              style={ styles.input }
              status={ errors.alda ? "danger" : "basic" }
            />
            {
              errors.alda && errors.alda.type === "max" &&
              <Text status="danger">ALD A cannot be more than 10</Text>
            }
            {
              errors.alda && errors.alda.type === "min" &&
              <Text status="danger">ALD A cannot be less than 0</Text>
            }
            {
              errors.alda && errors.alda.type === "pattern" &&
              <Text status="danger">ALD A must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">TPI (Triose phosphate isomerase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("tpi", text, true) }
              keyboardType="number-pad"
              name="tpi"
              style={ styles.input }
              status={ errors.tpi ? "danger" : "basic" }
            />
            {
              errors.tpi && errors.tpi.type === "max" &&
              <Text status="danger">TPI cannot be more than 10</Text>
            }
            {
              errors.tpi && errors.tpi.type === "min" &&
              <Text status="danger">TPI cannot be less than 0</Text>
            }
            {
              errors.tpi && errors.tpi.type === "pattern" &&
              <Text status="danger">TPI must be numeric</Text>
            }

            {/* <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">GAPDH (Glyceraldehyde 3 phosphate dehydrogenase)</Text> }
              size="large"
              onChangeText={ (text) => setValue("gapdh", text, true) }
              keyboardType="number-pad"
              name="gapdh"
              style={ styles.input }
              status={ errors.gapdh ? "danger" : "basic" }
            />
            {
              errors.gapdh && errors.gapdh.type === "max" &&
              <Text status="danger">GAPDH cannot be more than 10</Text>
            }
            {
              errors.gapdh && errors.gapdh.type === "min" &&
              <Text status="danger">GAPDH cannot be less than 0</Text>
            }
            {
              errors.gapdh && errors.gapdh.type === "pattern" &&
              <Text status="danger">GAPDH must be numeric</Text>
            }

            <Spacer top={ 10 } bottom={ 10 } />

            <Input
              label={ <Text category="h6">PGK 1(Phosphoglycerate kinase isoform)</Text> }
              size="large"
              onChangeText={ (text) => setValue("pgk1", text, true) }
              keyboardType="number-pad"
              name="pgk1"
              style={ styles.input }
              status={ errors.pgk1 ? "danger" : "basic" }
            />
            {
              errors.pgk1 && errors.pgk1.type === "max" &&
              <Text status="danger">PGK 1 cannot be more than 10</Text>
            }
            {
              errors.pgk1 && errors.pgk1.type === "min" &&
              <Text status="danger">PGK 1 cannot be less than 0</Text>
            }
            {
              errors.pgk1 && errors.pgk1.type === "pattern" &&
              <Text status="danger">PGK 1 must be numeric</Text>
            } */}
          </View>
        </ScrollView>
        {/* <View style={ styles.buttonContainer }>
          <Button
            size="giant"
            accessoryRight={ ForwardIcon }
            onPress={ handleSubmit(onSubmit) }
          >
            Go to Step 5
          </Button>
        </View> */}
        <View
          style={ styles.buttonContainer }>
          <Button
            size="giant"
            accessoryLeft={ ResultsIcon }
            onPress={ handleSubmit(onSubmit) }
            disabled={ buttonIsDisabled }
          >
            Get the results
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep4;
