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
// END EXTRA CODE

/**
 * acceptRequest(connectionId: string): Promise<AriesCore.ConnectionRecord>
 * the id of the connection for which to accept the request
 * 
 * 
 * Accept a connection request as inviter (by sending a connection response message) for the connection with the specified connection id. This is not needed when auto accepting of connection is enabled.
 * 
 * @returns — connection record
 * @param {string} agent_key
 * @param {string} connectionId
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_connections_acceptRequest(agent_key, connectionId) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.connections.acceptRequest(connectionId)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
