import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import CustomHeader from "@/components/CustomHeader";

const view = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <CustomHeader title="Acerca de Breaking Bad" />
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/eswikia/images/8/80/Breaking_Bad.png/revision/latest?cb=20160906023713",
        }}
        width={450}
        height={280}
        resizeMode="cover"
        style={{
          alignSelf: "center",
          borderRadius: 10,
        }}
      />

      <Text style={style.text}>
        "Breaking Bad" es una serie de televisión estadounidense creada por Vince Gilligan. La serie
        se emitió por primera vez el 20 de enero de 2008 y concluyó el 29 de septiembre de 2013. En
        total, la serie consta de 5 temporadas con un total de 62 episodios.
      </Text>
      <Text style={style.text}>
        La trama sigue la historia de Walter White, un profesor de química de secundaria que se
        convierte en fabricante de metanfetaminas después de ser diagnosticado con cáncer de pulmón
        terminal. Con la ayuda de su ex alumno, Jesse Pinkman, Walter se adentra en el mundo del
        crimen con el objetivo de asegurar el futuro financiero de su familia.
      </Text>
    </View>
  );
};

export default view;

const style = StyleSheet.create({
  text: {
    alignSelf: "center",
    width: 400,
    fontSize: 18,
    lineHeight: 28,
    marginTop: 24,
    color: "white",
    textAlign: "justify",
  },
});
