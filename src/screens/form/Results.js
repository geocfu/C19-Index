import React from "react";
import {
  SafeAreaView,
  Linking,
  View,
  ScrollView,
  BackHandler,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  Button,
  useTheme,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";

import Spacer from "../../components/Spacer";
import CircularProgress from "../../components/CircularProgress";

const RestartIcon = (props) => <Icon {...props} name="sync" />;

const Results = ({ navigation, route }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [circularBarProgress, setCircularBarProgress] = React.useState(0.0);
  const [circularBarColor, setCircularBarColor] = React.useState(
    theme["color-primary-500"]
  );

  const [vulnerabilityTitle, setVulnerabilityTitle] = React.useState(
    "Loading..."
  );
  const [
    vulnerabilityDescription,
    setVulnerabilityDescription,
  ] = React.useState("Loading...");

  useFocusEffect(
    React.useCallback(() => {
      calculateVulnerabilityIndex();

      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    })
  );

  const calculateVulnerabilityIndex = () => {
    let vulnerabilityIndexData = JSON.parse(route.params);

    let calculatedVulnerabilityIndex =
      -5.49 +
      (vulnerabilityIndexData.sex ? 1 : 0) * -0.212 +
      vulnerabilityIndexData.numberOfHospitalAdmissions * 0.186 +
      vulnerabilityIndexData.age * -0.014 +
      (vulnerabilityIndexData.pneumoniaExceptThatCausedByTuberculosis ? 1 : 0) *
        0.117 +
      (vulnerabilityIndexData.otherAndIllDefinedHeartDisease ? 1 : 0) * -0.111 +
      (vulnerabilityIndexData.heartFailure ? 1 : 0) * -0.271 +
      (vulnerabilityIndexData.acuteRheumaticHeartFailure ? 1 : 0) * -0.008 +
      (vulnerabilityIndexData.coronaryAtherosclerosisAndOtherHeartDisease
        ? 1
        : 0) *
        -0.529 +
      (vulnerabilityIndexData.pulmonaryHeartDisease ? 1 : 0) * -0.005 +
      (vulnerabilityIndexData.chronicRheumaticHeartDisease ? 1 : 0) * -0.014 +
      (vulnerabilityIndexData.diabetesMellitusWithComplication ? 1 : 0) *
        -0.273 +
      (vulnerabilityIndexData.diabetesMellitusWithoutComplication ? 1 : 0) *
        -0.496 +
      (vulnerabilityIndexData.chronicObstructivePulmonaryDiseaseAndBronchiectasis
        ? 1
        : 0) *
        -0.269 +
      (vulnerabilityIndexData.otherSpecifiedAndUnspecifiedLowerRespiratoryDisease
        ? 1
        : 0) *
        -0.02 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.pneumonia ? 1 : 0) *
        0.01 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.otherAndIllDefinedHeartDisease ? 1 : 0) *
        0.003 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.heartFailure ? 1 : 0) *
        0.009 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.acuteRheumaticHeartFailure ? 1 : 0) *
        0.003 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.coronaryAtherosclerosisAndOtherHeartDisease
          ? 1
          : 0) *
        0.011 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.pulmonaryHeartDisease ? 1 : 0) *
        -0.0 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.chronicRheumaticHeartDisease ? 1 : 0) *
        -0.001 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.diabetesMellitusWithComplication ? 1 : 0) *
        0.007 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.diabetesMellitusWithoutComplication ? 1 : 0) *
        0.009 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.chronicObstructivePulmonaryDiseaseAndBronchiectasis
          ? 1
          : 0) *
        0.013 +
      vulnerabilityIndexData.age *
        (vulnerabilityIndexData.otherSpecifiedAndUnspecifiedLowerRespiratoryDisease
          ? 1
          : 0) *
        0.006;

    let factor = 1.0 / (1.0 + Math.pow(2, -calculatedVulnerabilityIndex));

    if (factor.toFixed(3) < 0.5) {
      // The propability is very small, so in order for the user to see something on the graph, raise it a bit.
      setCircularBarProgress(factor.toFixed(3) < 0.1 ? 0.1 : factor.toFixed(3));
      setCircularBarColor(theme["color-info-500"]);

      setVulnerabilityTitle("Normal");
      setVulnerabilityDescription(
        "You have normal vulnerability to severe complications\nfrom COVID-19"
      );
    } else if (factor.toFixed(3) >= 0.5 && factor.toFixed(3) < 0.6) {
      setCircularBarProgress(factor.toFixed(3));
      setCircularBarColor(theme["color-warning-500"]);

      setVulnerabilityTitle("1X Increased");
      setVulnerabilityDescription(
        "You are 1 times more vulnerable to severe complications\nfrom COVID-19"
      );
    } else if (factor.toFixed(3) >= 0.6 && factor.toFixed(3) < 0.7) {
      setCircularBarProgress(factor.toFixed(3));
      setCircularBarColor(theme["color-danger-500"]);

      setVulnerabilityTitle("2X Increased");
      setVulnerabilityDescription(
        "You are 2 times more vulnerable to severe complications\nfrom COVID-19"
      );
    } else if (factor.toFixed(3) >= 0.7 && factor.toFixed(3) < 0.8) {
      setCircularBarProgress(factor.toFixed(3));
      setCircularBarColor(theme["color-danger-500"]);

      setVulnerabilityTitle("3X Increased");
      setVulnerabilityDescription(
        "You are 3 times more vulnerable to severe complications\nfrom COVID-19"
      );
    } else if (factor.toFixed(3) >= 0.8 && factor.toFixed(3) < 0.9) {
      setCircularBarProgress(factor.toFixed(3));
      setCircularBarColor(theme["color-danger-500"]);

      setVulnerabilityTitle("4X Increased");
      setVulnerabilityDescription(
        "You are 4 times more vulnerable to severe complications\nfrom COVID-19"
      );
    } else if (factor.toFixed(3) >= 0.9 && factor.toFixed(3) < 1.0) {
      setCircularBarProgress(factor.toFixed(3));
      setCircularBarColor(theme["color-danger-500"]);

      setVulnerabilityTitle("5X Increased");
      setVulnerabilityDescription(
        "You are 5 times more vulnerable to severe complications\nfrom COVID-19"
      );
    } else {
      setCircularBarProgress(factor.toFixed(3));
      setCircularBarColor(theme["color-danger-500"]);

      setVulnerabilityTitle("6X Increased");
      setVulnerabilityDescription(
        "You are 6 times more vulnerable to severe complications\nfrom COVID-19"
      );
    }
  };

  const renderScreenTitle = () => (
    <Text category="h6" style={{ fontWeight: "bold" }}>
      Results
    </Text>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={renderScreenTitle} alignment="center" />
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
            <Text
              category="h3"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Vulnerability To Severe Illness from COVID-19
            </Text>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                category="h1"
                style={{ color: circularBarColor, textAlign: "center" }}
              >
                {vulnerabilityTitle} {"\n"}Vulnerability
              </Text>
              <Text
                category="p1"
                style={{
                  color: circularBarColor,
                  textAlign: "center",
                  width: "60%",
                }}
              >
                {vulnerabilityDescription}
              </Text>
            </View>

            <CircularProgress
              progress={parseFloat(circularBarProgress)}
              color={circularBarColor}
            />

            <Spacer top={30} />
            <View style={styles.card}>
              <Text category="h5" style={{ textAlign: "left" }}>
                What should I do if I feel sick?
              </Text>
              <Text appearance="hint" style={{ marginTop: 5 }}>
                If you’ve been exposed to the coronavirus – or think you have –
                and have a fever or symptoms like a cough or difficulty
                breathing, call a doctor. They should give you advice on how to
                get tested and how to seek medical treatment without potentially
                infecting or exposing others. The Centers for Disease Control
                and Prevention says that if you’re sick or think you’re sick,
                but only mildly ill, you should isolate yourself, and you
                shouldn’t leave your house except to go to the doctor.
              </Text>
            </View>
            <Spacer top={10} />
            <View style={styles.card}>
              <Text category="h5" style={{ textAlign: "left" }}>
                Symptoms
              </Text>
              <Text appearance="hint" style={{ marginTop: 5 }}>
                If you think you have been exposed to COVID-19, watch for
                symptoms. The following symptoms may appear within 2-14 days
                after exposure:{"\n\t\t"}- Fever{"\n\t\t"}- Cough{"\n\t\t"}-
                Shortness of breath
                {"\n"}
                {"\n"}
                If you think you have been exposed to COVID-19 and develop a
                fever and symptoms, call your healthcare provider for medical
                advice. Know that symptoms associated with COVID-19 are also
                related to other medical conditions. Make sure to discuss these
                with your doctor.
                {"\n"}
                {"\n"}
                If you are experiencing emergency warning signs for COVID-19,
                please get medical attention immediately. These emergency
                warning signs include:{"\n\t\t"}- Trouble breathing{"\n\t\t"}-
                Persistent pain or pressure in the chest{"\n\t\t"}- New
                confusion or inability to arouse breath
                {"\n"}
                {"\n"}
                This list does not include all emergency warning signs. If you
                are experiencing any other symptoms that are severe or
                concerning, please contact your medical provider immediately.
                {"\n"}
                {"\n"}
                If you believe you are having an emergency, call 9-1-1.
              </Text>
            </View>
            <Spacer top={20} />
            <View style={styles.card}>
              <Text category="h5" style={{ textAlign: "left" }}>
                When should high-risk patients seek care?
              </Text>
              <Text appearance="hint" style={{ marginTop: 5 }}>
                Patients at high-risk should check in with their doctors as soon
                as they have symptoms. A doctor who knows your situation can
                help you navigate the system and advise you on how and when to
                seek treatment. High-risk patients include the elderly as well
                as people with asthma or lung disease, or a history of
                pneumonia, heart disease, kidney disease, diabetes, a
                compromised immune system due to illness or a drug therapy, or a
                person who has recently been treated for cancer.
              </Text>
            </View>
            <Spacer top={20} />
            <View style={styles.card}>
              <Text category="h5" style={{ textAlign: "left" }}>
                Call your doctor first. Don’t just show up.
              </Text>
              <Text appearance="hint" style={{ marginTop: 5 }}>
                If you’re worried (and have symptoms that would send you to the
                doctor during normal times), call your family doctor and ask for
                guidance. You can also call your emergency room for advice. The
                important thing is that you shouldn’t just show up. Hospitals
                have plans for the arrival of potential coronavirus patients, to
                protect staff and other patients, so call ahead.
              </Text>
            </View>
            <Spacer top={20} />
            <View style={styles.card}>
              <Text category="h5" style={{ textAlign: "left" }}>
                Don’t rush to the emergency room.
              </Text>
              <Text appearance="hint" style={{ marginTop: 5 }}>
                Emergency room waiting rooms are packed with very sick people
                and overworked staff and doctors. It’s not a place you want to
                be, and if you show up unnecessarily, you’re taking care away
                from people who really need it. Before going to the E.R., stop
                and ask yourself, “Would I go to the E.R. for these symptoms (a
                cough or fever) under normal circumstances?” In most cases, the
                answer is probably no. Coughs, fevers, sore throats and runny
                noses have rarely been an emergency in the past, and those
                symptoms, even if due to the coronavirus, won’t be an emergency
                in most cases. Call your doctor.
              </Text>
            </View>
            <Spacer top={20} />
            <View style={styles.card}>
              <Text category="h5" style={{ textAlign: "left" }}>
                Why can’t I just go to the doctor or the emergency room?
              </Text>
              <Text appearance="hint" style={{ marginTop: 5 }}>
                “If you show up unnecessarily, you’re taking care away from
                people who really need it,” writes Tara Parker-Pope, columnist
                for Well, The Times’s consumer health section. “Before going to
                the E.R., stop and ask yourself, ‘Would I go to the E.R. for
                these symptoms (a cough or fever) under normal circumstances?’
                In most cases, the answer is probably no.” Instead, you should
                call ahead and ask a doctor or the emergency room for advice.
                They’re likely to have the most up-to-date information for
                potential patients in your area, and they’ll tell you what to do
                next.
              </Text>
            </View>
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
            accessoryLeft={RestartIcon}
            onPress={() => navigation.navigate("Home")}
          >
            Retake Survey
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  card: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "background-basic-color-3",
    backgroundColor: "background-basic-color-1",
    padding: 15,
  },
});

export default Results;
