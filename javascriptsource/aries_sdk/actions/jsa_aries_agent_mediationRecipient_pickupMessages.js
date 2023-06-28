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
import{MediatorPickupStrategy}from'@aries-framework/core'
import support from"../support/entidad";
// END EXTRA CODE

/**
 * pickupMessages(mediatorConnection: AriesCore.ConnectionRecord, pickupStrategy?: AriesCore.MediatorPickupStrategy): Promise<void>
 * @param {string} agent_key
 * @param {string} mediatorConnection - json?
 * @param {"Aries_SDK.enum_aries_MediatorPickupStrategy.PickUpV1"|"Aries_SDK.enum_aries_MediatorPickupStrategy.PickUpV2"|"Aries_SDK.enum_aries_MediatorPickupStrategy.Implicit"} pickupStrategy
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_mediationRecipient_pickupMessages(agent_key, mediatorConnection, pickupStrategy) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");						//mandatory
		if(mediatorConnection==null)return Promise.reject("Invalid mediatorConnection parameter");		//mandatory
		try{
			mediatorConnection=JSON.parse(mediatorConnection);
		}catch(e){
			return Promise.reject("Argument mediatorConnection is not a valid JSON object");
		}
		if(pickupStrategy==null);																		//optional
		switch(pickupStrategy){																			// -
			case"PickUpV1":																				// -
				pickupStrategy=MediatorPickupStrategy.PickUpV1;											// -
				break;																					// -
			case"PickUpV2":																				// -
				pickupStrategy=MediatorPickupStrategy.PickUpV2;											// -
				break;																					// -
			case"Implicit":																				// -
				pickupStrategy=MediatorPickupStrategy.Implicit;											// -
				break;																					// -
			default:																					// -
				//return Promise.reject("Invalid pickupStrategy parameter");								// -
				break;																					// -
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		      if(pickupStrategy==null){
			agent.mediationRecipient.pickupMessages(mediatorConnection);
		}else if(pickupStrategy!=null){
			agent.mediationRecipient.pickupMessages(mediatorConnection,pickupStrategy);
		}
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
