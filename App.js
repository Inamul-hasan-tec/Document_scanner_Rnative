import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import DocumentScanner from "react-native-document-scanner-plugin";

const App = () => {
  const [scannedDoc, setScannedDoc] = useState(null);
  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument({
      croppedImageQuality: 100,
    });

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedDoc(scannedImages[0]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {scannedDoc != null && (
        <Image
          source={{ uri: scannedDoc }}
          style={{ width: "100%", height: "50%" }}
        />
      )}

      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "black",
          position: "absolute",
          bottom: 20,
          alignSelf: "center",
        }}
        onPress={() => {
          scanDocument();
        }}
      ></TouchableOpacity>
    </View>
  );
};

export default App;
