import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        //backgroundImage: 'url(https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    },
    image: {
        width: 320,
        height: 1,
        marginVertical: 1,
    },
    text: {
        marginTop: 70,
        fontSize: 13,
        color: 'black',
        textAlign: 'center',
        position: 'absolute',
        bottom: '10%',
        marginHorizontal: '10%',
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'normal',
        marginTop: '30 %',
        marginLeft: '2%',
        alignContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .2)',
    },
})
export default styles;