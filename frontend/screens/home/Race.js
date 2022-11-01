import React, { useRef, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import RaceList from "./RaceList";
import { useNavigation } from "@react-navigation/native";
import { COLORS, images, windowHeight, windowWidth } from "../../../constants";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  Filter,
  LinearGradientBtn,
  LinearGradientPrimary,
  LinearGradientSilver,
} from "../../../components";
import HistoryCard from './HistoryCard';

export default function Race() {
  const refRBSheet = useRef();

  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LinearGradientSilver style={styles.container}>
        <LinearGradientBtn
          angle={180}
          local={[0.0, 0.1615, 0.3385, 0.474, 0.9115, 1.0]}
          color={[
            "#F8F8F8",
            "#D0D0D0",
            "#F8F8F8",
            "#A4A4A4",
            "#5F5F5F",
            "#959595",
          ]}
          style={styles.Viewcontainer}
        >
          <LinearGradientPrimary style={styles.ViewcontainerRace}>
            <View style={styles.rowContent}>
              <Image source={images.label_card} style={{ marginLeft: 3 }} />
              {!isOpen ? (
                <LinearGradientBtn
                  angle={180}
                  local={[0.0, 0.758, 0.7847, 1.0]}
                  color={["#373F4F", "#8690A4", "#13161D", "#5D667A"]}
                  style={styles.containerButton}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("History")}
                  >
                    <Image source={images.history} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <Image source={images.filter} />
                  </TouchableOpacity>
                </LinearGradientBtn>
              ) : null}
            </View>
            {!isOpen ? (
              <RaceList />
            ) : (
              <View style={styles.containerHistory}>
                <View style={styles.containerNote}>
                  {/* <FontAwesomeIcon
                    icon={faExclamationCircle}
                    color="#8E8E8E"
                    size={32}
                  /> */}
                  <Text style={styles.txtNote}>
                    The race list has not been updated, you can see the previous
                    races
                  </Text>
                </View>
                <HistoryCard />
              </View>
            )}
          </LinearGradientPrimary>
        </LinearGradientBtn>
      </LinearGradientSilver>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        height={windowHeight - 73}
        customStyles={{
          container: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            backgroundColor: COLORS.blueDark,
          },
          wrapper: {
            backgroundColor: COLORS.transparent,
          },
          draggableIcon: {
            backgroundColor: COLORS.transparentBlack,
            width: windowWidth - 278,
          },
        }}
      >
        <View style={styles.menu}>
          <View style={styles.layout}>
            <Filter/>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Image
                source={images.btnAccept}
                style={{
                  width: windowWidth - 18,
                  height: windowHeight - 640,
                  marginLeft: -(windowWidth - 407),
                  marginTop: windowHeight - 663,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  txtNote: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    width: windowWidth - 112,
    height: windowHeight - 651,
    color: COLORS.grayRed,
    marginTop: windowHeight - 672,
  },
  containerNote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
    width: windowWidth - 34,
    height: windowHeight - 611,
  },
  containerHistory: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 0,
    margin: 2,
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth - 16,
    height: windowHeight - 347,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: (0, 16),
    width: windowWidth,
    height: windowHeight - 268,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: windowWidth - 223,
    height: windowHeight - 634,
    marginLeft: windowWidth - 362,
    padding: (7, 5, 4),
    borderRadius: (0, 0, 4, 4),
  },
  containerRace: {
    margin: 8,
    width: windowWidth - 55,
    height: windowHeight - 597,
    flexDirection: "column",
    display: "flex",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 0.5,
    borderColor: "rgba(19, 0, 0, 0.25)",
  },
  rowContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 0,
    width: windowWidth - 32,
    height: windowHeight - 627,
  },
  txtCome: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: "#383838",
  },
  history: {
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    width: windowWidth - 302,
    height: windowHeight - 649,
    marginLeft: windowWidth - 278,
    paddingTop: windowHeight - 675,
    paddingRight: windowWidth - 404,
    paddingBottom: windowHeight - 681,
    paddingLeft: windowWidth - 404,
    borderRadius: (0, 0, 4, 4),
  },
  raceList: {
    width: windowWidth - 292,
    height: windowHeight - 637,
    borderRadius: (0, 0, 4, 4),
    paddingLeft: windowWidth - 404,
    paddingBottom: 0,
    paddingRight: windowWidth - 404,
    paddingTop: windowHeight - 675,
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    left: windowWidth - 404,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: windowHeight - 667,
    paddingLeft: windowWidth - 406,
    paddingRight: windowWidth - 408,
    width: windowWidth,
    height: windowHeight + 1377,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "rgba(255, 255, 255, 0.5)",
    shadowOpacity: 2,
    shadowOffset: { height: 0, width: 2 },
  },
  Viewcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 5,
    width: windowWidth - 13,
    height: windowHeight + 1367,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: COLORS.transparent1,
    shadowOpacity: 0.5,
    elevation: 8,
    shadowOffset: { height: -2, width: 2 },
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderTopWidth: 0.1,
    borderBottomWidth: 0.1,
  },
  ViewcontainerRace: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 4,
    paddingRight: 4,
    width: windowWidth - 23,
    height: windowHeight + 1357,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: COLORS.transparent1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 8,
  },
  Content: {
    display: "flex",
    alignItems: "center",
    width: windowWidth -308,
    height: windowHeight - 663,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 24,
    color: COLORS.purple,
  },
});
