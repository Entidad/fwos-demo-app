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
import "../shim.js";
// END EXTRA CODE

/**
 * @param {string} json
 * @param {string} key
 * @returns {Promise.<string>}
 */
export async function jsa_json_getkey_string(json, key) {
	// BEGIN USER CODE
	return new Promise(function(resolve,reject){
		try{
			let o=JSON.parse(json);
			let v=o[key];
			switch(typeof(v)){
				case"string":
					resolve(v);
					break;
				default:
					resolve(JSON.stringify(v));
					break;
			}
		}catch(e){
			reject(e.toString());
		}
	});
	// END USER CODE
}