import styles from "./StyleSheet.js";
import React, { useState } from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import Inputs from "../../Inputs/Input.js";
import StyleButton from "../../buttons/button1.js";

const SignUP = props => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        checkTestInputChange: false,
    });
    const textInputChange = (value) => {
        if (value.length > 0) {
            setData({
                ...data,
                checkTestInputChange: true,
            }
            );
        }
        else {
            setData({
                ...data,
                checkTestInputChange: false,
            }
            );
        }
    }
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/KABFI.jpg')}
                    style={styles.image} />
                <Text style={styles.textTitle}>CREATE AN ACCOUNT</Text>
                <Text style={styles.textContainer}>Name</Text>
                <View style={styles.halfContainer}>
                    <Inputs name='first name' onChangeText={data.email}/>
                    <Inputs name='last name' />
                </View>
                <Text style={styles.textContainer}>E-mail</Text>
                <View style={{ width: '97%' }}>
                    <Inputs name='email@example.com' icon="mail" />
                </View>
                <Text style={styles.textContainer}>Mobile Country</Text>
                <View style={{ width: '97%' }}>
                    <Inputs name='7000 000 00' />
                </View>
                <View style={styles.halfContainer}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.textContainer}>Badge Number</Text>
                        <Inputs name='upload Image' icon='image' />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.textContainer}>Taxi License</Text>
                        <Inputs name='upload Image' icon='image' />
                    </View>

                </View>
                <Text style={styles.textContainer}>Password</Text>
                <View style={{ width: '97%' }}>
                    <Inputs name='*********' pass={true} />
                </View>
                <View style={[{ width: '95%' }, { marginTop: 30 }]}>
                    <View style={styles.container}>
                        <Text >by clicking the submit below you are agreeing to kabfi</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable >
                                <Text style={{ color: 'orange' }}>Terms and Conditions</Text>
                            </Pressable>
                            <Text style={{ marginHorizontal: 5 }}>and</Text>
                            <Pressable>
                                <Text style={{ color: 'orange' }}>Privacy Policy</Text>
                            </Pressable>
                        </View>
                    </View>
                    <StyleButton type="primary"
                        content={"Submit"}
                        onPress={() => { }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
export default SignUP;
