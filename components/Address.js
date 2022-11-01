import React from "react";
import { Text, StyleSheet } from "react-native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

export default function Address(props) {
  const walletAddress = useWalletConnect();

  return (
    <Text
      style={[styles.headerText, { width: props.width }]}
      ellipsizeMode={props.data}
      numberOfLines={1}
    >
      {walletAddress.accounts}
    </Text>
  );
}
const styles = StyleSheet.create({
  headerText: {
    height: 16,
    fontStyle: "normal",
    fontSize: 14,
    color: "#00CDEC",
    fontWeight: "300",
    display: "flex",
    alignItems: "flex-start",
    marginLeft: 48,
    marginTop: 0,
  },
});
