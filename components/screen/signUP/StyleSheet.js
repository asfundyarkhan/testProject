import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    halfContainer: {
        flexDirection: 'row',
        marginHorizontal: '2%',
        width: "96%",
        justifyContent: 'space-between',
    },
    container: {
        alignItems: 'center',
    },
    image: {
        marginVertical: 10,
        marginTop: '10%',
    },
    textTitle: {
        fontSize: 15,
        fontFamily: 'Foundation',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '2%',
        marginBottom: 10,
    },
    textContainer: {
        width: '100%',
        marginLeft: '4%',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Foundation',
    },
});
export default styles;