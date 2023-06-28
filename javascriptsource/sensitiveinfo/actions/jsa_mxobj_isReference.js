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
 * https://apidocs.rnd.mendix.com/9/client/mendix_lib_MxObject.html
 * 
 * isReference()
 * 
 * Convenience function
 * 
 * See:
 * 
 *         mendix/lib/MxMetaObject#isReference
 * 
 * Example
 * 
 * if (mxobject.isReference("Children")) {
 *     alert("Attribute Children is a reference set");
 * } else {
 *     alert("Attribute Children is not a reference set");
 * }
 * @param {MxObject} input
 * @param {string} attribute
 * @returns {Promise.<boolean>}
 */
export async function jsa_mxobj_isReference(input, attribute) {
	// BEGIN USER CODE
	try{
		if(input==null)return Promise.reject("Invalid argument input");
		//todo:handle return type serialization
		return Promise.resolve(input.isReference(attribute));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
