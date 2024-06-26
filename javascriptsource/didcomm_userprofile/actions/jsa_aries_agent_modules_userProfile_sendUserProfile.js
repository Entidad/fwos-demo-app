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
import support from "../../agent_sdk/support/entidad";
// END EXTRA CODE

/**
 *   UserProfileApi.sendUserProfile(options: { connectionId: string; profileData?: Partial<UserProfileData>; sendBackYours?: boolean; }): Promise<void>
 * Sends User Profile to a given connection. It will send our own stored profile data if profileData is not specified.
 * 
 * Note: to specify a profileData here does not mean that it will persist and be used in further profile data sharing. It is meant in case we want to send diferent profiles to each connection or update it according to the context.
 * 
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} profileData_displayName
 * @param {string} profileData_displayPicture
 * @param {string} profileData_description
 * @param {boolean} send_back_yours
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_userProfile_sendUserProfile(agent_key, connectionId, profileData_displayName, profileData_displayPicture, profileData_description, send_back_yours) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return(Promise.resolve(JSON.stringify(await agent.modules.userProfile.sendUserProfile({
			connectionId:connectionId,
			profileData:{
				displayName:profileData_displayName,
				displayPicture:profileData_displayPicture,
				description:profileData_description
			},
			send_back_yours:send_back_yours
		}),0,2)));
	}catch(e){
		return Promise.reject(e.toString());
	}

	// END USER CODE
}
