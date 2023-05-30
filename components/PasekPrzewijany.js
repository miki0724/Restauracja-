import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, Text, View } from "react-native";
const PasekPrzewijany = () => {
  const images = [
    "https://cdn.galleries.smcloud.net/t/galleries/gf-cgdk-p5yy-aE4f_pizza-pepperoni-z-jalapeno-to-jadl-joe-biden-z-zolnierzami-w-rzeszowie-1920x1080-nocrop.jpg",
    "https://www.horecanet.pl/wp-content/uploads/2017/02/burgery-zdjecie-tytulowe-1200x900.jpg",
    "https://bi.im-g.pl/im/93/a3/19/z26884499IER,Frytki.jpg",
    "https://images.aws.nestle.recipes/resized/6088ce09df35477928ccfa9722816560_kebab_na_frytkach__20_744_419.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="red"
        inactiveDotColor="white"
        ImageComponentStyle={{ borderRadius: 6, width: "94%" }}
        sliderBoxHeight={180}
        autoplayInterval={1000}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 10,
          padding: 0,
          margin: 0,
        }}
      />
    </View>
  );
};

export default PasekPrzewijany;
