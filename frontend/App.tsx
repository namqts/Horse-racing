import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from "@env";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import localhost from "react-native-localhost";
import Web3 from "web3";
import {
  DetailsPizza,
  Login,
  DetailsDesserts,
  DetailsDrinks,
  Live2D,
  History,
  RaceDetail,
} from "./screens";
import Home from "./screens/home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  DefaultTheme,
} from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Tabs from "../navigation/tabs.js";

const Stack = createStackNavigator();
import PizzaShop from "../artifacts/contracts/PizzaShop.sol/PizzaShop.json";
import { COLORS, FONTS } from "../constants";
import { Header, HeaderAfter, HeaderLeft } from "../components";
import { HorseDetail, BetConfirm } from "./screens/RaceDetail";
import { MyAccount } from "./screens/MyAccount";
import { News, BettingNew } from "./screens/News";
import WithDraw from "./screens/withdraw/withdraw";
import TopBar from "../components/TopBar";

const shouldDeployContract = async (web3, abi, data, from: string) => {
  const deployment = new web3.eth.Contract(abi).deploy({ data });
  const gas = await deployment.estimateGas();
  const {
    options: { address: contractAddress },
  } = await deployment.send({ from, gas });
  return new web3.eth.Contract(abi, contractAddress);
};

export default function App(): JSX.Element {
  React.useEffect(() => {
    SplashScreen.hide();
  });

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
  const signTransaction = React.useCallback(async () => {
    try {
      await connector.signTransaction({
        data: "0x",
        from: "0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3",
        gas: "0x9c40",
        gasPrice: "0x02540be400",
        nonce: "0x0114",
        to: "0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359",
        value: "0x00",
      });
    } catch (e) {
      console.error(e);
    }
  }, [connector]);
  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: "rgb(53, 60, 62)",
      background: COLORS.transparentBlur,
    },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
          initialRouteName={"Login"}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => <Header />,
            }}
          />
          {/* <Stack.Screen name="Order" component={Tabs} />
          <Stack.Screen name="Wallet" component={Tabs} /> */}
          <Stack.Screen name="Live2D" component={Live2D} />
          <Stack.Screen
            name="History"
            component={History}
            options={{
              headerTitle: (props) => <HeaderAfter />,
            }}
          />
          <Stack.Screen
            name="RaceDetail"
            component={RaceDetail}
            options={{
              headerTitle: (props) => <HeaderAfter />,
            }}
          />

          <Stack.Screen
            name="HorseDetail"
            component={HorseDetail}
            options={{
              headerTitle: (props) => <HeaderAfter />,
            }}
          />
          <Stack.Screen
            name="BetConfirm"
            component={BetConfirm}
            options={{
              headerTitle: (props) => <HeaderAfter />,
            }}
          />
          <Stack.Screen
            name="MyAccount"
            component={MyAccount}
            options={{
              headerTitle: (props) => (
                <TopBar>
                  <HeaderLeft />
                  <Text style={[FONTS.barTitle, styles.title]}>My account</Text>
                </TopBar>
              ),
            }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              headerTitle: (props) => (
                <TopBar>
                  <HeaderLeft />
                  <Text style={[FONTS.barTitle, styles.title]}>News</Text>
                </TopBar>
              ),
            }}
          />
          <Stack.Screen
            name="BettingNew"
            component={BettingNew}
            options={{
              headerTitle: (props) => (
                <TopBar>
                  <HeaderLeft />
                  <Text style={[FONTS.barTitle, styles.title]}>Betting news</Text>
                </TopBar>
              ),
            }}
          />
          <Stack.Screen
            name="WithDraw"
            component={WithDraw}
            options={{
              headerTitle: (props) => (
                <TopBar>
                  <HeaderLeft />
                  <Text style={[FONTS.barTitle, styles.title]}>Withdraw</Text>
                </TopBar>
              ),
            }}
          />
          <Stack.Screen name="DetailsDesserts" component={DetailsDesserts} />
          <Stack.Screen name="DetailsDrinks" component={DetailsDrinks} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    color: "#FFFFFF",
    marginLeft: 16,
    marginTop: 10,
  },
});
