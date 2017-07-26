import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Image,

} from 'react-native';

import PhotoView from 'react-native-photo-view';

export default class Mrt extends Component {
    static dimen = Dimensions.get('window');

    render() {
        const full_size = {
            width: Mrt.dimen.width,
            height: Mrt.dimen.height,
        }
        return (
            <View style={styles.container_dot}>

                <View style={{
                    position: 'absolute',
                    top: 0, left: 0
                }}>
         
                    <PhotoView
                        style={[full_size, {
                            backgroundColor:"#d5e2d8",
                            borderColor:"#d5e2d8",
                        }]}
                        source={require('../Images/mrt.jpg')}
                        minimumZoomScale={1.0}
                        maximumZoomScale={6}
                        scale={0.5}
                        fadeDuration={5500}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        androidScaleType="fitCenter"
                    />
                </View>
            </View>)
    }
}
const styles = StyleSheet.create({
    centeringAnimationCircle: {
        alignItems: 'center'
    },
    container_dot: {
        flex: 1,
        width: Mrt.dimen.width,
    },
    photostatic: {
        position: 'absolute',
        top: 0, left: 0
    }
});

/*
export default class Mrt extends Component{
	render(){
		return(
				<PhotoView
					source={require('../Images/mrt.jpg')}
					minimumZoomScale={0.1}
					maximumZoomScale={3}
					androidScaleType="center"
					//style={{width: 4860, height: 3456}} 
					resizeMode='contain'
					androidScaleType={'fitCenter'}
				/>
		)
	}
}
*/
 /*
import ImageViewer from 'react-native-image-zoom-viewer';
 
const images = [{
    //url:'file:// mrt.jpg'
	url:'http://cdn.greatdeals.com.sg/wp-content/uploads/2014/08/10062231/new-mrt-stations-2014.jpg'
}]

class Mrt extends Component {
    render(){
        return (
			<View>
				<Modal visible={true} transparent={true}>
					<ImageViewer imageUrls={images}/>
				</Modal>
			</View>
        )
    }
}
*/
 