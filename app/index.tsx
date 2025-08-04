import {Text, View, SafeAreaView, ScrollView, Image} from "react-native";
import {colors, font, structure} from './theme';
import React, {useEffect, useState} from 'react';

export default function Index() {
    // <Image style={{width: 70, height: 70, borderRadius: '100%', marginEnd: structure.margin_small}} source={{uri:'https://placehold.co/250x250/png'}} />

    return (
        <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
            <ScrollView style={{paddingHorizontal: structure.padding}}>
                <Text style={{color: colors.text, fontSize: font.subtitle}}>Welcome back,</Text>
                <Text style={{color: colors.text, fontSize: font.title, fontWeight: 'bold', marginBottom: structure.margin_big}}>[Name]</Text>

                <Text style={{color: colors.text, fontSize: font.subtitle, marginBottom: structure.margin_small, fontWeight: 'bold' }}>Friend Activity</Text>
                <ScrollView horizontal={true}>
                    <Image style={{width: 70, height: 70, borderRadius: '100%', marginEnd: structure.margin_small}} source={{uri:'https://placehold.co/250x250/png'}} />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}