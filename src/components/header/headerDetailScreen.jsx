import { useRef, useState } from "react";
import React from "react";
import {
  ScrollView,
  View,
  ImageBackground,
  Animated,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "./header.style.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const images = [
  require("../assets/BMW-1.webp"),
  require("../assets/BMW-2.webp"),
  require("../assets/BMW-3.webp"),
  require("../assets/BMW-4.jpg"),
];

const HeaderDetailScreen = () => {
  const scrollX = new Animated.Value(0);
  const { width: windowWidth } = Dimensions.get("window");
  const handleBack = () => {
    console.log("Voltar");
  };
  const handleDownload = () => {
    console.log("Download");
  };
  const [isFavorite, setIsFavorited] = useState(false);
  const handleSave = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <View style={{ paddingTop: 0, paddingBottom: 200 }}
    showsVerticalScrollIndicator={false}
    bounces={false}
    contentInsetAdjustmentBehavior="never"
    contentContainerStyle={{ paddingBottom: 160 }}
    keyboardShouldPersistTaps="handled">

      {/* Cabeçalho com os Icons  fixo */}
      <View style={styles.fixedHeader}>
        <View style={styles.iconBack}>
          <TouchableOpacity style={styles.back} onPress={handleBack}>
            <MaterialIcons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.topIconContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleDownload}
          >
            <MaterialIcons
              name="file-download"
              size={20}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleSave}
          >
            <MaterialIcons
              name={isFavorite ? "favorite" : "favorite-border"}
              size={20}
              color={isFavorite ? "red" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.contentContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => (
            <View style={{ width: windowWidth, height: 300 }} key={imageIndex}>
              <ImageBackground source={image} style={{flex: 1}} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>BMW 320i 2022</Text>
          <Text style={styles.subtitle}>Berlin, Germany</Text>
          <View style={styles.infoBox}>
            <View style={styles.infoBoxItem}>
              <Text style={styles.infoText}>2.0 Turbo</Text>
            </View>
            <View style={styles.infoBoxItem}>
              <Text style={styles.infoText}>Automatic</Text>
            </View>
            <View style={styles.infoBoxItem}>
              <Text style={styles.infoText}>White</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator}></View>

        <View style={styles.carTitleSub}>
          <Text style={styles.carTitle}>Vehicle Features</Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.column}>
            <View style={styles.detailBox}>
              <MaterialIcons name="directions-car" size={20} color="gray" />
              <Text style={styles.detailText}>320i</Text>
            </View>
            <View style={styles.detailBox}>
              <MaterialIcons name="palette" size={20} color="gray" />
              <Text style={styles.detailText}>White</Text>
            </View>
            <View style={styles.detailBox}>
              <MaterialIcons name="speed" size={20} color="gray" />
              <Text style={styles.detailText}>Automatic</Text>
            </View>
            <View style={styles.detailBox}>
              <MaterialIcons name="home" size={20} color="gray" />
              <Text style={styles.detailText}>4 doors</Text>
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.detailBox}>
              <MaterialIcons name="calendar-today" size={20} color="gray" />
              <Text style={styles.detailText}>2022</Text>
            </View>
            <View style={styles.detailBox}>
              <MaterialIcons name="settings" size={20} color="gray" />
              <Text style={styles.detailText}>2.0 Turbo</Text>
            </View>
            <View style={styles.detailBox}>
              <MaterialIcons name="autorenew" size={20} color="gray" />
              <Text style={styles.detailText}>Electric</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator}></View>

        <View style={styles.carTitleSub}>
          <Text style={styles.carTitle}>Price List</Text>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.daysColumn}>
            <View style={styles.daysBox}>
              <Text style={styles.daysText}>Daily Rate</Text>
            </View>
            <View style={styles.daysBox}>
              <Text style={styles.daysText}>3 to 7 days</Text>
            </View>
            <View style={styles.daysBox}>
              <Text style={styles.daysText}>7 to 15 days</Text>
            </View>
            <View style={styles.daysBox}>
              <Text style={styles.daysText}>15 to 30 days</Text>
            </View>
            <View style={styles.daysBox}>
              <Text style={styles.daysText}>30 our more days</Text>
            </View>
          </View>

          <View style={styles.priceColumn}>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>€ 350</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>€ 2.100</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>€ 4.200</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>€ 8.400</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>€ 8.000</Text>
            </View>
          </View>
        </View>
         <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>About the Owner</Text>
       <View style={styles.ownerCircle}>
       <Text style={styles.ownerLetter}>A</Text>
       </View>
       <View style={styles.sectionContainer2}>
       <Text style={styles.sectionTitle}>Tom's Cars</Text>
       <Text style={styles.sectionSubTitle}>Member since 2024 · 15 Cars</Text>
       </View>
             <View style={styles.detailBox}>
              <MaterialIcons name="star" size={20} color="#FF8C00" />
              <Text style={styles.sectionView}>496</Text>
              <Text style={styles.sectionSubView}>· 36 reviews</Text>
            </View>
          </View>
       
           <View style={styles.sectionCancel}>
           <Text style={styles.cancelTitle}> Cancellation Policy</Text>
           <Text style={styles.cancelText}>Free cancellation up to 48 hours before the pickup date. 
            </Text>
              
           </View>

        
      </ScrollView>

      {/* Footer fixo fora da ScrollView */}
      <View style={styles.footer}>
        <View style={styles.buttonBox}>
          <Text style={styles.finalPrice}>€ 350</Text>
          <Text style={styles.dailyPrice}>/ day</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default HeaderDetailScreen;

