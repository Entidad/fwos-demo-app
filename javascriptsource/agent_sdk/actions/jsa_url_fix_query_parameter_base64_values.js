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
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
// END EXTRA CODE

/**
 * Fix buggy base64 query parameters
 * 
 * e.g.
 *   https://didcomm.demo.animo.id/?d_m=eyJAdHlwZSI6ImRpZDpzb3Y6QnpDYnNOWWhNcmpIaXFaRFRVQVNIZztzcGVjL3ByZXNlbnQtcHJvb2YvMS4wL3JlcXVlc3QtcHJlc2VudGF0aW9uIiwiQGlkIjoiMTBjZjkyMjEtMmZkMS00ZmRmLWE1YTctOGE0ZDU3OWJhN2NhIiwiY29tbWVudCI6IkNsdWIgQW5pbW8gd2FudHMgdG8ga25vdyBpZiB5b3UncmUgb3ZlciAxOCIsInJlcXVlc3RfcHJlc2VudGF0aW9uc35hdHRhY2giOlt7IkBpZCI6ImxpYmluZHktcmVxdWVzdC1wcmVzZW50YXRpb24tMCIsIm1pbWUtdHlwZSI6ImFwcGxpY2F0aW9uL2pzb24iLCJkYXRhIjp7ImJhc2U2NCI6ImV5SnVZVzFsSWpvaVFXZGxJRkpsY1hWbGMzUWlMQ0oyWlhKemFXOXVJam9pUVdkbElGSmxjWFZsYzNRaUxDSnViMjVqWlNJNklqRXdNelF5TnpneU9UY3hOVFEyTURRNU16QTFOekUxTmlJc0luSmxjWFZsYzNSbFpGOWhkSFJ5YVdKMWRHVnpJanA3ZlN3aWNtVnhkV1Z6ZEdWa1gzQnlaV1JwWTJGMFpYTWlPbnNpUVc1cGJXOGdTVVFnUTJGeVpDSTZleUp5WlhOMGNtbGpkR2x2Ym5NaU9sdDdJbU55WldSZlpHVm1YMmxrSWpvaVdUYzFXR055T0hKdE1sQkhkSHBhUVhOYVoxUlpRem96T2tOTU9qWXpORE00TmpwQmJtbHRieUJKUkNCRFlYSmtJbjFkTENKdVlXMWxJam9pUkdGMFpTQnZaaUJpYVhKMGFDSXNJbkJmZG1Gc2RXVWlPakl3TURVd016QTVMQ0p3WDNSNWNHVWlPaUk4UFNKOWZYMD0ifX1dLCJ-c2VydmljZSI6eyJyZWNpcGllbnRLZXlzIjpbIjVNdUZWUVI1TTFqUm00ZkxnZThMTkwyTjVKOG1zYktNV0ZoRE1FMWhEa29OIl0sInJvdXRpbmdLZXlzIjpbXSwic2VydmljZUVuZHBvaW50IjoiaHR0cHM6Ly9kaWRjb21tLmRlbW8uYW5pbW8uaWQifX0
 * 
 * Note that the query parameter consists of two base64 encoded values joined with a hyphen
 * @param {string} url
 * @returns {Promise.<string>}
 */
export async function jsa_url_fix_query_parameter_base64_values(url) {
	// BEGIN USER CODE
	try{
		let chunks=[];		
		url.split("?")[1].split("&").forEach((kv)=>{
			try{
				let parts=[];
				let k=kv.split("=")[0];
				//try{
				//	k=decodeURIComponent(k);
				//}catch(e){
				//}
				let v=kv.split("=")[1];
				//let v=kv.substring(kv.indexOf("=")+1);
				//try{
				//	v=decodeURIComponent(v);
				//}catch(e){
				//}
				v.split("-").forEach((p)=>{
					parts.push(atob(p));
				});
				let part=parts.join("");
				let json=JSON.parse(part);
				let jsonbase64=btoa(JSON.stringify(json));
				while(jsonbase64[jsonbase64.length-1]=="=")jsonbase64=jsonbase64.substring(0,jsonbase64.length-1);
				chunks.push([k,jsonbase64].join("="));
			}catch(e){
				chunks.push(kv);
			}
		});
		url=url.split("?")[0]+"?"+chunks.join("&");
		return Promise.resolve(url);
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
