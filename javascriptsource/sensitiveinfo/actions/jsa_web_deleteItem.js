// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} sharedPreferencesName
 * @param {string} key
 * @returns {Promise.<void>}
 */
export async function jsa_web_deleteItem(sharedPreferencesName, key) {
	// BEGIN USER CODE
	return new Promise(function(resolve,reject){
		try{
			sharedPreferencesName=sharedPreferencesName==null?"default":sharedPreferencesName;
			let data=JSON.parse(localStorage.getItem(sharedPreferencesName));
			delete data[key];
			localStorage.setItem(sharedPreferencesName,JSON.stringify(data));
			resolve();
		}catch(e){
			reject(e.toString());
		}
	});
	// END USER CODE
}
