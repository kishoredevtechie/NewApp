import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { viewDocument } from '@react-native-documents/viewer'

const DocumentPreviewScreen = ({route}) => {
    console.log("aaa",route.params)
    const {uri,type:mimeType}=route.params;

    useEffect(()=>{
        viewDocument({uri,mimeType})
    },[])

  return (
    <View>
      <Text>DocumentPreviewScreen</Text>
    </View>
  )
}

export default DocumentPreviewScreen

const styles = StyleSheet.create({})