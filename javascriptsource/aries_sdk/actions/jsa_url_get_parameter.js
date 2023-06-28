// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
import 'react-native-url-polyfill/auto';
// END EXTRA CODE

/**
 * return URL parameter value, e.g.
 * 
 * url: http://foo.com?bar=baz
 * param: bar
 * 
 * returns baz
 * @param {string} url
 * @param {string} param
 * @returns {Promise.<string>}
 */
export async function jsa_url_get_parameter(url, param) {
	// BEGIN USER CODE
	try{
		return Promise.resolve((new URL(url)).searchParams.get(param)); 
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
