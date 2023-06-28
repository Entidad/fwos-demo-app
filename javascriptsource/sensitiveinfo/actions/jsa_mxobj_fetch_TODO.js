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
 * fetch(path, callback, error)
 * 
 * Gets an object or value of an attribute, through a path from this object.
 * 
 * The result is passed to a callback and depends on the requested path:
 * 
 * | Path resolves to | Result |------------------------------------------------------------------------------------- | attribute | value of the attribute | object reference | GUID of the object | object reference set | array of GUIDs with the objects | entity | array of GUIDs for a reference set, MxObject otherwise
 * 
 * If no path is given, the result is set to the object itself. A reference set can only be the last reference in the path.
 * Parameters:
 * Name  Type  Description
 * path  string  
 * 
 * path from the object to the desired object or attribute
 * callback  mendix/lib/MxObject~FetchCallback  
 * 
 * called when fetching is done
 * error  mendix/lib/MxObject~FetchErrorCallback  
 * 
 * function to handle errors
 * 
 * Examples
 * 
 * Retrieving an attribute value from an object is essentially a callback version of mx.data.get:
 * 
 * mxobj.fetch("Name", function(value) {
 *     alert("Person's name is " + value);
 * });
 * 
 * Retrieving an object through a reference:
 * 
 * mxobj.fetch("MyFirstModule.Friend/MyFirstModule.Person", function(value) {
 *     alert("Name of person's friend is " + value.get("Name"));
 * });
 * 
 * When retrieving an object through a reference set, the result will be an Array:
 * 
 * mxobj.fetch("MyFirstModule.Owns/MyFirstModule.Pet", function(value) {
 *     alert("Person owns the following pets: " + value);
 * });
 * 
 * Retrieving an attribute through several references:
 * 
 * mxobj.fetch("MyFirstModule.Friend/MyFirstModule.Person/" +
 *             "MyFirstModule.Father/MyFirstModule.Person/" +
 *             "Age", function(value) {
 *     alert("Name of the father of this person's friend is " + value);
 * });
 * @param {MxObject} input
 * @param {string} path
 * @param {Nanoflow} callback
 * @param {Nanoflow} error
 * @returns {Promise.<void>}
 */
export async function jsa_mxobj_fetch_TODO(input, path, callback, error) {
	// BEGIN USER CODE
	try{
		if(input==null)return Promise.reject("Invalid argument input");
		input.fetch(path,(o)=>{
			//call callback and pass in o
		},(e)=>{
			//call error and pass in e
		});
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
