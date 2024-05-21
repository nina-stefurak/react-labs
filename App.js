import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Switch,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { ListItem } from "./components/ListItem";
import { MyList } from "./components/MyList";
import { Tile } from "./components/Tile";

export default function App(message, duration) {
  useEffect(() => {
    fetchData();
  }, []);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  [on, setOn] = useState(false);
  [text, setText] = useState("Marek");
  [light, setLight] = useState(false);

  const [radius, setRadius] = useState(25);

  const [selected, setSelected] = useState(new Set());
  const photos = [
    {
      id: 1,
      title: "AAA",
      thumbnailUrl: "https://reactnative.dev/img/tiny_logo.png",
      width: 60,
      height: 60,
    },
    {
      id: 2,
      title: "BBB",
      thumbnailUrl: "https://reactnative.dev/img/tiny_logo.png",
      width: 50,
      height: 60,
    },
    {
      id: 3,
      title: "CCC",
      thumbnailUrl: "https://reactnative.dev/img/tiny_logo.png",
      width: 80,
      height: 80,
    },
  ];

  const fetchData = async () => {
    try {
      const body = await fetch("https://jsonplaceholder.typicode.com/photos");
      let r = await body.json();
      r = r.map((item) => ({
        title: item.title,
        thumbnailUrl: item.thumbnailUrl,
        id: item.id,
        width: 100,
        height: 100,
      }));
      setListData(r);
      setLoading(false);
    } catch (e) {
      ToastAndroid.show("Error " + e, ToastAndroid.SHORT);
    }
  };

  const list = (
    <MyList
      data={listData}
      onPressItem={(item) =>
        ToastAndroid.show("selected item " + item.id, ToastAndroid.SHORT)
      }
    />
  );

  return (
    <View style={styles.container}>
      {/* <ListItem title='Test' thumbnailUrl='https://reactnative.dev/img/tiny_logo.png' width={30} height={30}/> */}
      {/* <Tile title='Test' thumbnailUrl='https://reactnative.dev/img/tiny_logo.png' width={50} height={50} /> */}
      <Text>
        Hello, <Text style={{ fontWeight: "bold" }}>{text}!</Text>
      </Text>
      <Pressable onPress={() => setLight(!light)}>
        <View style={styles.circle(light, radius)}></View>
      </Pressable>
      <Button
        title="Click"
        onPress={() => {
          setText("Karol");
        }}
        color={"darkblue"}
        accessibilityLabel="Learn more about this purple button"
      />
      <TextInput
        placeholder="Enter radius"
        value={radius.toString()}
        onChangeText={(value) => setRadius(parseInt(value) || 10)} //promien
        keyboardType="numeric"
        style={{
          padding: 5,
          textAlignVertical: "top",
          width: "95%",
          borderWidth: 1,
          borderRadius: 5,
          marginVertical: 10,
        }}
      />
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.tinyLogo}
      />
      <Switch onChange={() => setOn(!on)} value={on} thumbColor={"blue"} />
      <ListItem
        title="Test"
        thumbnailUrl="https://reactnative.dev/img/tiny_logo.png"
        width={50}
        height={50}
      />
      <Tile
        title="Test"
        thumbnailUrl="https://reactnative.dev/img/tiny_logo.png"
        width={50}
        height={50}
      />
      {/* <MyList
                data={photos}
                renderItem={({item}) => <Tile title={item.title} thumbnailUrl={item.thumbnailUrl} width={item.width} height={item.height}/>}
                keyExtractor={(item) => item.id}
                onPressItem={(item) => ToastAndroid.show("selected item " + item.id, ToastAndroid.SHORT)}
                /> */}
      {loading ? <ActivityIndicator /> : <></>}
      {listData ? list : <></>}
      <Button
        title="Click"
        onPress={() =>
          ToastAndroid.show("Selected " + selected.size, ToastAndroid.LONG)
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  circle: (light, radius) => ({
    borderRadius: radius,
    borderWidth: 5,
    borderColor: "blue",
    width: radius * 2,
    height: radius * 2,
    padding: 5,
    backgroundColor: light ? "blue" : "darkblue",
    marginVertical: 10,
  }),
});
