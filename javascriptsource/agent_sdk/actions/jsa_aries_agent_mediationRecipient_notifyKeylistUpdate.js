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
import support from"../support/entidad";
// END EXTRA CODE

/**
 * notifyKeylistUpdate(connection: AriesCore.ConnectionRecord, verkey: string, action?: AriesCore.KeylistUpdateAction): Promise<void>
 * @param {string} agent_key
 * @param {string} connection - json?
 * @param {string} verkey
 * @param {string} action - optional json?
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_mediationRecipient_notifyKeylistUpdate(agent_key, connection, verkey, action) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");	//mandatory
		if(connection==null)return Promise.reject("Invalid connection parameter");	//mandatory
		try{
			connection=JSON.parse(connection);
		}catch(e){
			return Promise.reject("Argument connection is not a valid JSON object");
		}
		if(verkey==null)return Promise.reject("Invalid verkey parameter");			//mandatory
		if(action==null);															//optional
		if(action!=null){
			try{
				action=JSON.parse(action);
			}catch(e){
				return Promise.reject("Argument action is not a valid JSON object");
			}
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		      if(action==null){
				await agent.mediationRecipient.notifyKeylistUpdate(connection,verkey);
		}else if(action!=null){
				await agent.mediationRecipient.notifyKeylistUpdate(connection,verkey,action);
		}
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
