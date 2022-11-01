import React, { useRef, useMemo, useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  FlatList,
  Touchable,
} from "react-native";
import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
} from "../../constants";
import { TextButton } from "../../components";
import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from "@env";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import localhost from "react-native-localhost";
import Web3 from "web3";
import PizzaShop from "../../artifacts/contracts/PizzaShop.sol/PizzaShop.json";
const DetailsPizza = ({ navigation }) => {
  const connector = useWalletConnect();
  const shouldDeployContract = async (web3, abi, data, from) => {
    const deployment = new web3.eth.Contract(abi).deploy({ data });
    const gas = await deployment.estimateGas();
    const {
      options: { address: contractAddress },
    } = await deployment.send({ from, gas });
    return new web3.eth.Contract(abi, contractAddress);
  };

  const transfer = React.useCallback(async () => {
    try {
      await connector.sendTransaction({
        data: "0x11", //data pizza
        from: `${connector.accounts}`,
        to: "0xCB77b578a10c54e4BF2f0AEB68Cf828232B0cf85",
        value: "1" + "000000000000000",
      });
    } catch (e) {
      console.error(e);
    }
  }, [connector]);

  // const signTransaction = React.useCallback(async () => {
  //   try {
  //     await connector.signTransaction({
  //       data: "0x",
  //       from: `${connector.accounts}`,
  //       gas: "0x9c40",
  //       gasPrice: "0x02540be400",
  //       nonce: "0x0114",
  //       to: "0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359",
  //       value: "0x00",
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [connector]);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const menuScrollViewRef = React.useRef();
  const numberOfCharts = [1, 2, 3];
  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={{ height: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -60,
          }}
        >
          {numberOfCharts.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [10, 30, 10],
              extrapolate: "clamp",
            });
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.red2, COLORS.primary, COLORS.white],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: 10,
                  backgroundColor: dotColor,
                  marginTop: -20,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderList() {
    return (
      <>
        <View>
          <Animated.FlatList
            ref={menuScrollViewRef}
            data={dummyData.pizzaList}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `${item.id}`}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            renderItem={({ item, index }) => {
              return (
                <SafeAreaView
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    width: SIZES.width,
                  }}
                >
                  <SafeAreaView
                    style={{
                      width: "100%",
                      marginTop: 50,
                    }}
                  >
                    <Image
                      // source={item.thumbnail}
                      source={images.Logo}
                      resizeMode="stretch"
                      style={{
                        width: "100%",
                      }}
                    />
                  </SafeAreaView>
                  <View
                    style={{
                      marginTop: 90,
                      height: 200,
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.red,
                        ...FONTS.h2,
                        textAlign: "center",
                        marginHorizontal: 40,
                      }}
                    >
                      {/* {item.name}  */}
                      TEST TRANSFER SPC
                    </Text>
                    <Text
                      style={{
                        color: COLORS.gray,
                        ...FONTS.body3,
                        textAlign: "center",
                        margin: 20,
                      }}
                    >
                      {" "}
                      {item.description}{" "}
                    </Text>
                    <View
                      style={{
                        height: 80,
                        width: 80,
                        borderRadius: 40,
                        backgroundColor: COLORS.primary,
                        marginLeft: "25%",
                        marginTop: -180,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          alignSelf: "center",
                          marginTop: 30,
                          color: COLORS.white,
                        }}
                      >
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </SafeAreaView>
              );
            }}
          />
          {renderDots()}
        </View>
      </>
    );
  }
  return (
    <>
      {/* <SafeAreaView
            style={{
                alignItems:'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 100
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image 
                    source={icons.leftArrow}
                    style={{
                        height: 30,
                        width: 15,
                        marginLeft:-80,
                        margin:10
                    }}
                />
            </TouchableOpacity>
            <Text
                style={{
                    color: COLORS.primary,
                    ...FONTS.h1,
                    
                }}
            >
                Pizza Menu
            </Text>
        </SafeAreaView> */}
      <ScrollView
        style={
          {
            // backgroundColor: COLORS.backColar,
            // borderTopLeftRadius: 50,
            // borderTopRightRadius: 50,
          }
        }
      >
        <View>{renderList()}</View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: -50,
            }}
          >
            <TextButton
              label={"DEPOSIT"}
              customContainerStyle={{
                width: 40 + "%",
                marginLeft: 20,
              }}
              onPress={transfer}
            />
            <TextButton
              label={"TRANSACATION"}
              // onPress={signTransaction}
              customContainerStyle={{
                width: 40 + "%",
                marginLeft: 30,
                backgroundColor: COLORS.red,
                marginBottom: 20,
              }}
            />
          </View>
          <TextButton
            label={"Back"}
            onPress={() => navigation.navigate("Home")}
            customContainerStyle={{
              width: 40 + "%",
              marginLeft: 30,
              backgroundColor: COLORS.red,
              marginBottom: 20,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default DetailsPizza;
