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
const keywords=[
	"abstract",
	"assert",
	"boolean",
	"break",
	"byte",
	"case",
	"catch",
	"char",
	"class",
	"const",
	"continue",
	"default",
	"do",
	"double",
	"else",
	"enum",
	"extends",
	"false",
	"final",
	"finally",
	"float",
	"for",
	"if",
	"goto",
	"implements",
	"import",
	"instanceof",
	"int",
	"interface",
	"long",
	"native",
	"new",
	"null",
	"package",
	"private",
	"protected",
	"public",
	"return",
	"short",
	"static",
	"strictfp",
	"super",
	"switch",
	"synchronized",
	"this",
	"throw",
	"throws",
	"transient",
	"true",
	"try",
	"void",
	"volatile",
	"while",
	"currentUser",
	"object",
	"type",
	"guid",
	"id",
	"submetaobjectname",
	"createddate",
	"changeddate",
	"owner",
	"changedby",
	"empty",
	"MendixObject",
	"context",
	"__filename__",
	"con"
];
const special_chars=[
	"@",
	"!",
	"#",
	"%",
	"^",
	"+",
	"-",
	"*",
	"/",
	"$",
	"&"
];
const special_chars_begin=[
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
];
const translate=(kwin,kwout)=>{
	let omap={};
	kwin.forEach((kin)=>{
		let kin_=kin;
		let mapped=false;
		(special_chars).forEach((c)=>{
			//kin_=kin_.replaceAll(c,"_");
			//string.
			kin_=kin_.split(c).join("_");
		});
		let iskw=false;
		(keywords).forEach((s)=>{
			if(kin_==s)iskw=true;
		});
		kwout.forEach((kout)=>{
			let kout_=kout;
			if(kin_==kout){
				omap[kin]=kout;
				mapped=true;
			}
			if(!mapped&&iskw){
				if((kin_+"_")==kout){
					omap[kin]=kout;
				}else if(("_"+kin_)==kout){
					omap[kin]=kout;
				}
			}
			if(!mapped){
				kin2_=kin;
				kin2_=kin2_.split("_").join("");
				(special_chars).forEach((c)=>{
					kin2_=kin2_.split(c).join("");
				});
				kout2_=kout;
				kout2_=kout_.split("_").join("");
				(special_chars).forEach((c)=>{
					kout2_=kout2_.split(c).join("");
				});
				if(kin2_==kout2_){
					omap[kin]=kout;
					mapped=true;
				}
			}
		});
	});
	return(omap);
};
const untranslate=(kwin,kwout)=>{
	let omap={};
	kwin.forEach((kin)=>{
		let mapped=false;
		kwout.forEach((kout)=>{
			if(kin==kout){
				omap[kin]=kout;
				mapped=true;
			}
		});
		if(!mapped){
			let kin_=kin;
			kin_=kin_.split("_").join("");
			(special_chars).forEach((c)=>{
				kin_=kin_.split(c).join("");
			});
			kwout.forEach((kout)=>{
				let kout_=kout;
				kout_=kout_.split("_").join("");
				(special_chars).forEach((c)=>{
					kout_=kout_.split(c).join("");
				});
				if(kin_==kout_){
					omap[kin]=kout;
					mapped=true;
				}
			});
		}
		if(!mapped){
			omap[kin]=kin;
		}
	});
	return(omap);
};
// END EXTRA CODE

/**
 * Serializes input typeparameter Mendix object  to JSON string
 * 
 * Store Mendix object in keychain
 * 
 * input -> Mendix Object
 *   the mendix object to store
 * hint -> optional json string
 *   translation hint, e.g. {"@id":0,"foo#":0} will store attributes like id against a key called @id and attributes like foo against a key called foo#
 * @param {MxObject} input
 * @param {string} hint - optional json string
 * @returns {Promise.<string>}
 */
export async function jsa_mxobj2json(input, hint) {
	// BEGIN USER CODE
	try{
		
		//input.getOriginalReferences()
		//--------------------------------------
		//version 12:00 2023/06/13 - beg
		//--------------------------------------
		try{
			try{
				hint=typeof(hint)!="string"?input.getAttributes():Object.keys(JSON.parse(hint));
			}catch(e){
				console.error(e.toString());
				hint=input.getAttributes();
			}
			let kin=input.getAttributes();
			let kout=hint;
			let mapping=untranslate(kin,kout);
			let json={};
			Object.keys(mapping).forEach((k)=>{
				let attr=k;
				let attr_=mapping[k];
				if(input.isReadonlyAttr(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isBoolean(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isDate(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isEnum(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isLocalizedDate(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isNumeric(attr)){
					json[attr_]=Number(input.get(attr));
				}
				else if(input.isPassword(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isReference(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isObjectReference(attr)){
					json[attr_]=input.get(attr);
				}
				else if(input.isObjectReferenceSet(attr)){
					json[attr_]=input.get(attr);
				}
				/*
				else if(attr.split(".").length>1){
					//alternate reference attribute check
				}
				*/
				else{//string
					json[attr_]=input.get(attr);
				}
			});
			return Promise.resolve(JSON.stringify(json));
		}catch(e){
			console.error(e.toString());
			return Promise.reject(e.toString());
		}
		//--------------------------------------
		//version 12:00 2023/06/13 - end
		//--------------------------------------
		//--------------------------------------
		//version 12:00 2023/06/12 - beg
		//--------------------------------------
		/*
		let json={};
		input.getAttributes().forEach((attr)=>{
			let attr_=attr;
			//console.info(`attr:${attr}`);
			keywords.forEach((k)=>{
				//postfix: use only this for now
				if(attr==(k+"_")){
					attr_=attr.substring(0,attr.length-1);
				}
				//prefix: skip for now
			});
			if(input.isReadonlyAttr(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isBoolean(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isDate(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isEnum(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isLocalizedDate(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isNumeric(attr)){
				json[attr_]=Number(input.get(attr));
			}
			else if(input.isObjectReference(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isObjectReferenceSet(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isPassword(attr)){
				json[attr_]=input.get(attr);
			}
			else if(input.isReference(attr)){
				json[attr_]=input.get(attr);
			}
			else{//string
				json[attr_]=input.get(attr);
			}
		});
		return Promise.resolve(JSON.stringify(json));
		*/
		//--------------------------------------
		//version 12:00 2023/06/12 - end
		//--------------------------------------
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
