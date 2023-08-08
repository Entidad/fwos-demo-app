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
import support from"../../../javascriptsource/aries_sdk/support/entidad";
// END EXTRA CODE

/**
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} config - json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_questionnaire_sendQuestion(agent_key, connectionId, config) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");
		if(config==null)return Promise.reject("Invalid config parameter");
		console.info("0");
		try{
		console.info("1");
			config=JSON.parse(config);
		}catch(e){
		console.info("2");
			return Promise.reject("Invalid config parameter: failed to parse")
		}
		console.info("3");
		let agent=support.cache.get(agent_key);
		console.info("4");
		if(agent==null)return Promise.reject("Agent not found in cache");
		console.info("5");
		return Promise.resolve(JSON.stringify(
			await agent.modules.questionnaire.sendQuestion(connectionId,config)
		));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
