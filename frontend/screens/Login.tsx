import React, { useRef, useMemo, useEffect, useState } from "react";
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
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
} from "react-native";
import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  videos,
} from "../../constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  TextButton,
  LinearGradientPrimary,
  LinearGradientSilver,
} from "../../components";
import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from "@env";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

import localhost from "react-native-localhost";
import Web3 from "web3";
import MenuConnect from "../screens/MenuConnect";

import PizzaShop from "../../artifacts/contracts/PizzaShop.sol/PizzaShop.json";
import AwesomeAlert from "react-native-awesome-alerts";
import { Divider } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const shouldDeployContract = async (web3, abi, data, from: string) => {
  const deployment = new web3.eth.Contract(abi).deploy({ data });
  const gas = await deployment.estimateGas();
  const {
    options: { address: contractAddress },
  } = await deployment.send({ from, gas });
  return new web3.eth.Contract(abi, contractAddress);
};

const Login = ({ navigation }) => {
  const connector = useWalletConnect();
  const [message, setMessage] = React.useState<string>("Loading...");
  const web3 = React.useMemo(
    () =>
      new Web3(
        new Web3.providers.HttpProvider(`http://${localhost}:${HARDHAT_PORT}`)
      ),
    [HARDHAT_PORT]
  );
  React.useEffect(() => {
    void (async () => {
      const { address } = await web3.eth.accounts.privateKeyToAccount(
        HARDHAT_PRIVATE_KEY
      );
      const contract = await shouldDeployContract(
        web3,
        PizzaShop.abi,
        PizzaShop.bytecode,
        address
      );
    })();
  }, [web3, shouldDeployContract, setMessage, HARDHAT_PRIVATE_KEY]);
  const connectWallet = React.useCallback(() => {
    return connector.connect();
    
  }, [connector]);

  const [isSelected, setSelection] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <ScrollView>
        <ImageBackground
          style={styles.img}
          resizeMode="stretch"
          source={images.betting_bg}
        >
          <View style={styles.mainBody}>
            <View style={styles.topLayout}>
              <View style={{ width: 231, height: 67 }}>
                <Image
                  source={images.Logo}
                  style={{ position: "absolute", width: 231, height: 67 }}
                />
              </View>
              <View style={styles.topButton}>
                <Image
                  source={images.language}
                  style={{ width: 46, height: 46 }}
                />
                <Image
                  source={images.contact}
                  style={{ width: 46, height: 46 }}
                />
              </View>
            </View>
            <View style={styles.bottomLayout}>
              <View style={styles.cardLayout}>
                {dummyData.cartLogin.map((e) => (
                  <LinearGradientSilver style={styles.topCard}>
                    <LinearGradientPrimary style={styles.card}>
                      <View style={styles.cart}>
                        <View style={styles.cartTop}>
                          <Image source={e.video} />
                          <View style={styles.cartTopleft}>
                            <Text style={[FONTS.h5, styles.txtRace]}>
                              {e.name}
                            </Text>
                            <TouchableOpacity
                              style={{ width: windowWidth - 278 }}
                              onPress={() =>
                                e.id == 1 ? setShowAlert(!showAlert) : null
                              }
                            >
                              <Image
                                source={e.button}
                                style={{ width: 140, height: 30 }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                        <LinearGradientPrimary style={styles.midCart}>
                          <Text style={[FONTS.body2, styles.jackpot]}>
                            Jackpot
                          </Text>
                          <View style={styles.coinLayout}>
                            <Image source={icons.coin} />
                            <Text
                              style={[
                                FONTS.body4,
                                {
                                  letterSpacing: 0.02,
                                  color: "#00CDEC",
                                  marginTop: -2,
                                },
                              ]}
                            >
                              {e.price}
                            </Text>
                          </View>
                        </LinearGradientPrimary>
                        <View style={styles.cartBottom}>
                          <View style={styles.txt}>
                            <Text
                              style={[
                                FONTS.body5,
                                {
                                  fontWeight: "500",
                                  textAlign: "center",
                                  letterSpacing: 0.03,
                                  color: "#FFFFFF",
                                },
                              ]}
                            >
                              The last race starts in:
                            </Text>
                            <Text
                              style={[
                                FONTS.body3,
                                {
                                  letterSpacing: 0.02,
                                  color: "#00CDEC",
                                  marginLeft: 8,
                                  marginTop: -2,
                                },
                              ]}
                            >
                              {e.time}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </LinearGradientPrimary>
                  </LinearGradientSilver>
                ))}
              </View>
            </View>
          </View>
        </ImageBackground>
        {/* {!connector.connected && (
            <TextButton
              label={"Connet Wallet"}
              customContainerStyle={{
                width: 80 + "%",
                marginLeft: 40,
                marginTop: 50,
                backgroundColor: COLORS.primary,
              }}
              onPress={connectWallet}
            />
          )}
          {!!connector.connected && navigation.navigate("Home")} */}
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          customView={
            <>
              <View style={styles.containerTitle}>
                <View style={styles.titleWallet}>
                  <Text
                    style={[FONTS.body2, styles.title, { fontWeight: "700" }]}
                  >
                    Your wallet
                  </Text>
                  <View style={styles.accountWallet}>
                    <View style={styles.addressWallet}>
                      <Image source={images.icon_meta} />
                      <Text
                        style={[
                          FONTS.body4,
                          styles.title,
                          { fontWeight: "500", marginLeft: 4 },
                        ]}
                      >
                        02Kp3MafNa1p3MafN
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.containerWallet}>
                  <View style={styles.multiWallet}>
                    <Text
                      style={[
                        FONTS.body2,
                        { fontWeight: "700", height: 24, color: "#FFFFFF" },
                      ]}
                    >
                      Wallets
                    </Text>
                    <ScrollView>
                      <View style={styles.scrollWallet}>
                        <View style={styles.walletTop}>
                          <View style={styles.containerIcon}>
                            <Image source={images.icon_meta} />
                            <Text
                              style={[
                                FONTS.body4,
                                styles.title,
                                { fontWeight: "500", marginTop: 4 },
                              ]}
                            >
                              Metamask
                            </Text>
                          </View>
                        </View>
                      </View>
                    </ScrollView>
                    <View
                      style={[
                        styles.divider,
                        { width: (windowWidth / 3) * 2 + 98 },
                      ]}
                    />
                  </View>
                  <View style={styles.containerButton}>
                    <Text
                      style={[
                        FONTS.body4,
                        styles.title,
                        { fontWeight: "500", marginBottom: 8 },
                      ]}
                    >
                      Haven’t got a crypto wallet yet?
                    </Text>
                    {!connector.connected && (
                    <TouchableOpacity onPress={connectWallet}>
                      <Image source={images.connect} style={{ height: 42 }} />
                    </TouchableOpacity>
                    )}
                    {!!connector.connected && navigation.navigate("Home")}
                  </View>
                </View>
              </View>
            </>
          }
          contentContainerStyle={{ backgroundColor: null }}
          contentStyle={styles.alert}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
        ></AwesomeAlert>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: (windowWidth / 3) * 2 + 56,
    height: 106,
    padding: 16,
    marginTop: 4,
  },
  containerIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    width: windowWidth / 5 + 8,
    height: 72,
    borderRadius: 8,
    backgroundColor: COLORS.transparentBlack,
  },
  walletTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 0,
    width: (windowWidth / 3) * 2 + 52,
    height: 73,
    marginTop: 8,
  },
  scrollWallet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: (windowWidth / 3) * 2 + 56,
    height: windowHeight / 3,
    padding: 8,
    paddingTop: 0,
  },
  multiWallet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: (windowWidth / 3) * 2 + 72,
    height: windowHeight / 4 + 50,
    padding: 3,
    paddingTop: 0,
  },
  containerWallet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: (windowWidth / 3) * 2 + 72,
    height: windowHeight / 2 - 12,
    marginTop: 16,
  },
  divider: {
    left: -windowWidth / 26,
    height: 1,
    backgroundColor: COLORS.transparentBlack,
  },
  addressWallet: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    width: (windowWidth / 3) * 2 + 72,
  },
  accountWallet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: (windowWidth / 3) * 2 + 72,
    height: 80,
    marginTop: 8,
  },
  title: {
    fontStyle: "normal",
    color: "#FFFFFF",
  },
  titleWallet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: (windowWidth / 3) * 2 + 72,
    height: 80,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    width: (windowWidth / 3) * 2 + 104,
    left: -windowWidth / 40,
    height: 112,
  },
  alert: {
    width: (windowWidth / 3) * 2 + 106,
    height: (windowHeight / 3) * 2,
    backgroundColor: COLORS.transparentBlur,
    borderColor: "#A4A4A4",
    borderWidth: 1,
    borderRadius: 10,
    left: -windowWidth / 12,
    top: windowHeight / 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  txt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    width: windowWidth - 281,
    height: 18,
  },
  cartBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    width: windowWidth - 80,
    height: 28,
    marginTop: 8,
  },
  coinLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth - 302,
    height: 24,
  },
  jackpot: {
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    color: "#FFFFFF",
  },
  midCart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    width: windowWidth - 80,
    height: 32,
    borderColor: COLORS.transparentBlack,
    borderStyle: "solid",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  txtRace: {
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.02,
    color: "#FFFFFF",
    height: 24,
    marginBottom: 16,
  },
  cartTopleft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    marginLeft: 16,
    width: windowWidth - 278,
    height: 71,
  },
  cartTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    width: windowWidth - 80,
    height: 103,
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth - 80,
    height: 135,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: windowWidth - 80,
    height: 179,
    borderRadius: 4,
    marginTop: 2,
  },
  topCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 8,
    width: windowWidth - 64,
    height: windowHeight / 3 - 30,
    borderRadius: 8,
    shadowColor: COLORS.transparentWhite,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 2,
    elevation: 8,
    marginBottom: 16,
  },
  cardLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth - 64,
    height: (windowHeight / 3) * 2 + 20,
  },
  bottomLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    width: windowWidth - 32,
    height: windowHeight - 26,
    backgroundColor: COLORS.stroke,
    borderRadius: 16,
    marginTop: 43,
  },
  topButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 10,
    width: windowWidth / 3 - 29,
    height: 46,
  },
  topLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth / 2 + 200,
    height: windowHeight / 4 - 120,
    marginTop: -4,
  },
  mainBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    width: windowWidth,
    height: windowHeight,
  },
  img: {
    height: windowHeight + 140,
    width: windowWidth,
  },
});
