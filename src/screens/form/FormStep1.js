import React from "react";
import { SafeAreaView, Alert, View, ScrollView } from "react-native";
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
} from "@ui-kitten/components";
import { useForm } from "react-hook-form";

import Spacer from "../../components/Spacer";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const ForwardIcon = (props) => <Icon {...props} name="arrow-forward" />;

const FormStep1 = ({ navigation }) => {
  const theme = useTheme();

  const [sexSelectedIndex, setSexSelectedIndex] = React.useState(null);

  const { register, setValue, handleSubmit, errors } = useForm();

  React.useEffect(() => {
    register(
      { name: "age" },
      {
        required: true,
        max: 110,
        min: 1,
        pattern: /^\d+$/,
      }
    );
    register({ name: "sex" }, { required: true });
    register(
      { name: "admissions" },
      { required: true, min: 1, pattern: /^\d+$/ }
    );
  }, [register]);

  const onSubmit = (data) => {
    navigation.navigate("FormStep2", JSON.stringify(data));
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
      Step 1 / 3
    </Text>
  );
  // @refresh reset
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
            <Input
              label={<Text category="h6">What is your age?</Text>}
              size="large"
              onChangeText={(text) => setValue("age", text, true)}
              keyboardType="number-pad"
              name="age"
              selectionColor={theme["background-basic-color-4"]}
            />
            {errors.age && errors.age.type === "required" && (
              <Text status="danger">Age is required.</Text>
            )}
            {errors.age && errors.age.type === "max" && (
              <Text status="danger">Age cannot be more than 110</Text>
            )}
            {errors.age && errors.age.type === "min" && (
              <Text status="danger">Age cannot be less than 1</Text>
            )}
            {errors.age && errors.age.type === "pattern" && (
              <Text status="danger">Age must be numeric</Text>
            )}

            <Spacer top={10} bottom={10} />

            <Text category="h6">What is your sex?</Text>
            <RadioGroup
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                padding: 0,
              }}
              selectedIndex={sexSelectedIndex}
              onChange={(index) => {
                setValue("sex", index, true);
                setSexSelectedIndex(index);
              }}
            >
              <Radio
                style={{
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: theme["background-basic-color-4"],
                  backgroundColor: theme["background-basic-color-2"],
                  padding: 15,
                }}
              >
                <Text>Female</Text>
              </Radio>
              <Radio
                style={{
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: theme["background-basic-color-4"],
                  backgroundColor: theme["background-basic-color-2"],
                  padding: 15,
                }}
              >
                <Text>Male</Text>
              </Radio>
            </RadioGroup>
            {errors.sex && errors.sex.type === "required" && (
              <Text status="danger">Sex is required.</Text>
            )}

            <Spacer top={0} bottom={10} />

            <Input
              label={
                <Text category="h6">
                  Number of Hospital admissions (Last 12M)
                </Text>
              }
              size="large"
              onChangeText={(text) => setValue("admissions", text, true)}
              keyboardType="number-pad"
            />
            {errors.admissions && errors.admissions.type === "required" && (
              <Text status="danger">
                Number of Hospital admissions is required.
              </Text>
            )}
            {errors.admissions && errors.admissions.type === "min" && (
              <Text status="danger">
                Number of Hospital admissions cannot be less than 1.
              </Text>
            )}
            {errors.admissions && errors.admissions.type === "pattern" && (
              <Text status="danger">
                Number of Hospital admissions must be numeric.
              </Text>
            )}
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 30,
          }}
        >
          <Button
            size="giant"
            accessoryRight={ForwardIcon}
            onPress={handleSubmit(onSubmit)}
          >
            Go to Step 2
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default FormStep1;
