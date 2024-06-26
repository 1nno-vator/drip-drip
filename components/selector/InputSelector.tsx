import { View, Text, Input, InputField } from "@gluestack-ui/themed";
import { useState } from "react";
import { Alert, Button, StyleSheet, Image } from "react-native";
import Dropdown, { DropdownSelect } from "react-native-input-select";

export default function InputSelector() {
  const [country, setCountry] = useState();
  const [countries, setContries] = useState<
    {
      name: string;
      code: string;
    }[]
  >([
    { name: "Nigeria", code: "Nigeria" },
    { name: "Åland Islands", code: "Åland Islands" },
    { name: "Algeria", code: "Algeria" },
    { name: "American Samoa", code: "American Samoa" },
    { name: "Andorra", code: "Andorra" },
  ]);
  const [newContries, setNewContries] = useState<string>("");

  const handleAddButton = () => {
    setContries([
      ...countries,
      {
        name: newContries,
        code: newContries,
      },
    ]);
  };

  // TODO: 내가 구상한대로 만들기... <Modal><FlatList>
  // 추가 누르면 -> 원두추가 화면

  return (
    <DropdownSelect
      label="Customized components in list"
      placeholder="Select multiple countries..."
      options={countries.slice(0, 30)}
      optionLabel={"name"}
      optionValue={"code"}
      selectedValue={country}
      onValueChange={(itemValue: any) => setCountry(itemValue)}
      //   isMultiple
      //   isSearchable
      primaryColor={"orange"}
      dropdownStyle={{
        borderWidth: 0, // To remove border, set borderWidth to 0
      }}
      dropdownIcon={
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
      }
      dropdownIconStyle={{ top: 20, right: 20 }}
      listHeaderComponent={
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          {/* <Text style={styles.text}>
            💡 You can add any component to the top of this list
          </Text>
          <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert("Left button pressed")}
              color="#007AFF"
            />
            <Button
              title="Right button"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View> */}
          <Input size="md" flex={1} bgColor="white" borderRadius="$lg">
            <InputField
              type="text"
              placeholder="원두"
              value={newContries}
              onChangeText={setNewContries}
            />
          </Input>
          <Button title="추가" onPress={handleAddButton} />
        </View>
      }
      //   listFooterComponent={
      //     <View style={styles.customComponentContainer}>
      //       <Text>You can add any component to the bottom of this list</Text>
      //     </View>
      //   }
      modalControls={{
        modalOptionsContainerStyle: {
          padding: 10,
          //   backgroundColor: "cyan",
        },
        modalProps: {
          supportedOrientations: [
            "portrait",
            "portrait-upside-down",
            "landscape",
            "landscape-left",
            "landscape-right",
          ],
          transparent: true,
        },
      }}
      listComponentStyles={{
        listEmptyComponentStyle: {
          //   color: "red",
        },
        itemSeparatorStyle: {
          opacity: 0,
          //   borderColor: "black",
          borderWidth: 1,
          //   backgroundColor: "cyan",
        },
        sectionHeaderStyle: {
          //   padding: 10,
          //   backgroundColor: "cyan",
        },
      }}
      listControls={{
        selectAllText: "Choose everything",
        unselectAllText: "Remove everything",
        selectAllCallback: () => Alert.alert("You selected everything"),
        unselectAllCallback: () => Alert.alert("You removed everything"),
        emptyListMessage: "No record found",
      }}
    />
  );
}

const styles = StyleSheet.create({
  customComponentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    marginBottom: 20,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
});
