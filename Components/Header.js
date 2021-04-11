import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
	return (
		<View style={styles.titleContainer}> 
			<Text style={styles.appTitle}>Mi Lista de Compras</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titleContainer:{
		backgroundColor: '#9513d1',
		height: 60,
		padding: 15,
	},
	appTitle:{
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
});

export default Header;