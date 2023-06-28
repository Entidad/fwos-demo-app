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
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
// END EXTRA CODE

/**
 * decodes base64 value
 * 
 * npm install base-64
 * 
 * https://stackoverflow.com/questions/60361519/cant-find-a-variable-atob
 * @param {string} value
 * @returns {Promise.<string>}
 */
export async function jsa_base64_decode(value) {
	// BEGIN USER CODE
	try{
		return Promise.resolve(atob(value));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
