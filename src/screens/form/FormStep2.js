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
} from "@ui-kitten/components";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import Spacer from "../../components/Spacer";

const BackIcon = (props) => <Icon { ...props } name="arrow-back" />;
const ForwardIcon = (props) => <Icon { ...props } name="arrow-forward" />;

const FormStep2 = ({ navigation, route }) => {
  const theme = useTheme();

  const [heartFailureChecked, setHeartFailureChecked] = React.useState(false);
  const [acuteRheumaticHeartFailureChecked, setAcuteRheumaticHeartFailureChecked] = React.useState(false);
  const [coronaryAtherosclerosisAndOtherHeartDiseaseChecked, setCoronaryAtherosclerosisAndOtherHeartDiseaseChecked] = React.useState(false);
  const [pulmonaryHeartDiseaseChecked, setPulmonaryHeartDiseaseChecked] = React.useState(false);
  const [chronicRheumaticHeartDiseaseChecked, setChronicRheumaticHeartDiseaseChecked] = React.useState(false);
  const [otherAndIllDefinedHeartDiseaseChecked, setOtherAndIllDefinedHeartDiseaseChecked] = React.useState(false);

  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      heartFailure: false,
      acuteRheumaticHeartFailure: false,
      coronaryAtherosclerosisAndOtherHeartDisease: false,
      pulmonaryHeartDisease: false,
      chronicRheumaticHeartDisease: false,
      otherAndIllDefinedHeartDisease: false,
    },
  });

  useFocusEffect(
    React.useCallback(() => {
      register({ name: "heartFailure" });
      register({ name: "acuteRheumaticHeartFailure" });
      register({ name: "coronaryAtherosclerosisAndOtherHeartDisease" });
      register({ name: "pulmonaryHeartDisease" });
      register({ name: "chronicRheumaticHeartDisease" });
      register({ name: "otherAndIllDefinedHeartDisease" });
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

    navigation.navigate("FormStep3", JSON.stringify(newRouteParams));
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
      Step 2 / 5
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
              checked={ heartFailureChecked }
              onChange={ (nextChecked) => {
                setValue("heartFailure", nextChecked);
                setHeartFailureChecked(nextChecked);
              } }
            >
              <Text category="h6">Heart failure</Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={ acuteRheumaticHeartFailureChecked }
              onChange={ (nextChecked) => {
                setValue("acuteRheumaticHeartFailure", nextChecked);
                setAcuteRheumaticHeartFailureChecked(nextChecked);
              } }
            >
              <Text category="h6">Acute rheumatic heart disease</Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={ coronaryAtherosclerosisAndOtherHeartDiseaseChecked }
              onChange={ (nextChecked) => {
                setValue("coronaryAtherosclerosisAndOtherHeartDisease", nextChecked);
                setCoronaryAtherosclerosisAndOtherHeartDiseaseChecked(nextChecked);
              } }
            >
              <Text category="h6">
                Coronary atherosclerosis and other heart disease
              </Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={ pulmonaryHeartDiseaseChecked }
              onChange={ (nextChecked) => {
                setValue("pulmonaryHeartDisease", nextChecked);
                setPulmonaryHeartDiseaseChecked(nextChecked);
              } }
            >
              <Text category="h6">Pulmonary heart disease</Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={ chronicRheumaticHeartDiseaseChecked }
              onChange={ (nextChecked) => {
                setValue("chronicRheumaticHeartDisease", nextChecked);
                setChronicRheumaticHeartDiseaseChecked(nextChecked);
              } }
            >
              <Text category="h6">Chronic rheumatic heart disease</Text>
            </CheckBox>

            <Spacer top={ 10 } bottom={ 10 } />

            <CheckBox
              style={ styles.checkBox }
              checked={ otherAndIllDefinedHeartDiseaseChecked }
              onChange={ (nextChecked) => {
                setValue("otherAndIllDefinedHeartDisease", nextChecked);
                setOtherAndIllDefinedHeartDiseaseChecked(nextChecked);
              } }
            >
              <Text category="h6">Other and ill-defined heart disease</Text>
            </CheckBox>
          </View>
        </ScrollView>
        <View style={ styles.buttonContainer }>
          <Button
            size="giant"
            accessoryRight={ ForwardIcon }
            onPress={ handleSubmit(onSubmit) }
          >
            Go to Step 3
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep2;
