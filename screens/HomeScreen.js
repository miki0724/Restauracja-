import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import * as Location from "expo-location";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import PasekPrzewijany from "../components/PasekPrzewijany";
import Menu from "../components/Menu";
import Pizza from "../components/Pizza";
const HomeScreen = () => {
  //pobieranie lokalizacji i zapisywanie jej żeby nie pytało za każdym razem
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "pobieranie twojej lokalizacji"
  );
  const [locationServiceEnabled, setlocationServicesEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnabled = async () => {
    // funkcja z expo-location do pobrania kordynatów
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Lokalizacja nie jest włączona",
        "Prosze włączyć lokalizację",
        [
          {
            text: "Anuluj",
            onPress: () => console.log("Anulowano"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  // użytkownik nie zezwolił na pobranie lokalizacji więc wysyłamy zapytanie jeszcze raz
  //requestForeground bo z backgrounda na wersji > android 11 coś nie ściąga
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Nie zaakceptowano pozwolenia na pobranie lokalizacji",
        "Prosze zezwolić na pobranie lokalizacji :)",
        [
          {
            text: "Anuluj",
            onPress: () => console.log("Anulowano"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK") },
        ],
        { cancelable: false }
      );
    }
    //pobieranie kordynatów jako długość i szeorkość geograficzna
    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };
  const styles = StyleSheet.create({
    baseText: {
      fontWeight: "bold",
    },
    innerText: {
      color: "#ED474A",
    },
  });
  const PizzaMenu = [
    {
      id: "10",
      image:
        "https://i.pinimg.com/236x/ba/40/9f/ba409f605be3d50773826994b7e37929.jpg",
      name: "Double Cheese",
      quantity: 0,
      price: 22.49,
    },
    {
      id: "11",
      image:
        "https://www.zajadam.pl/wp-content/uploads/2015/05/pizza-wiejska-4.jpg",
      name: "Pepperoni ",
      quantity: 0,
      price: 25.99,
    },
    {
      id: "12",
      image:
        "https://therecipecritic.com/wp-content/uploads/2022/12/salami_pizza-1.jpg",
      name: "Salami ",
      quantity: 0,
      price: 32.99,
    },
    {
      id: "13",
      image:
        "https://najlepszewkuchni.pl/storage/recipes/2017_11_15/0nTr3qWbjMvD50pE1rRp.jpg",
      name: "Vege ",
      quantity: 0,
      price: 24.99,
    },
    {
      id: "14",
      image:
        "https://tuscaneats.com/wp-content/uploads/2022/02/supreme-pizza.jpg",
      name: "Supreme ",
      quantity: 0,
      price: 45.99,
    },
    {
      id: "15",
      image:
        "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza_Hut_PL/NEW_WWW/pizze%20maj%202021/PH_1000x1000_teksas.jpg",
      name: "Teksas",
      quantity: 0,
      price: 43.99,
    },
    {
      id: "16",
      image:
        "https://www.zajadam.pl/wp-content/uploads/2015/05/pizza-wiejska-4.jpg",
      name: "Wiejska ",
      quantity: 0,
      price: 37.99,
    },
    {
      id: "17",
      image:
        "https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg",
      name: "New York ",
      quantity: 0,
      price: 33.99,
    },
    {
      id: "18",
      image:
        "https://gdansk-poludnie.pl/wp-content/uploads/2021/05/Pizzerie-w-Gda%C5%84sku-najlepsza-pizza-tr%C3%B3jmiasto.jpeg",
      name: "Trójmiasto",
      quantity: 0,
      price: 33.33,
    },
    {
      id: "19",
      image: "https://img.chozoba.pl/23/05/1683032329793137.jpg",
      name: "RadomCity",
      quantity: 0,
      price: 29.99,
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#FFCF00", flex: 1 }}>
      {/*POCZĄTEK PASKA LOKALIZACJI */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 35,
          padding: 15,
        }}
      >
        <Ionicons name="md-location-sharp" size={28} color="#ED474A" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 10 }}>
            Moja Lokalizacja
          </Text>
          <Text style={{ marginRight: 10 }}>{displayCurrentAddress}</Text>
        </View>
        <Pressable style={{ marginLeft: "auto", marginRight: 10 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri: "https://m.natemat.pl/3f4065ccaf8415526b08e8721dd14bfb,0,0,0,0.jpg",
            }}
          ></Image>
        </Pressable>
      </View>
      {/*KONIEC PASKA LOKALIZACJI */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        Panie Areczku, <Text style={styles.innerText}> zapraszamy </Text>
        do jedzenia!
      </Text>
      {/*PASEKPRZEWIJANY START */}
      <PasekPrzewijany />
      {/*PASEKPRZEWIJANY KONIEC */}
      {/*WYSZUKIWARKA START */}
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 20,
        }}
      >
        <TextInput
          style={{ fontSize: 18, color: "black" }}
          placeholder="Wpisz nazwe produktu"
        ></TextInput>
        <AntDesign name="search1" size={24} color="red" />
      </View>
      {/*WYSZUKIWARKA KONIEC */}
      <Menu />
      {/*WSZYSTKIE PRODUKTY START*/}
      {PizzaMenu.map((item, index) => (
        <Pizza item={item} key={index} />
      ))}
      {/*WSZYSTKIE PRODUKTY KONIEC*/}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
