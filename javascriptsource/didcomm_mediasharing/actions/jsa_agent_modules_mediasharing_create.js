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
import support from"../../../javascriptsource/agent_sdk/support/entidad";
// END EXTRA CODE

/**
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} metadata - json
 * @returns {Promise.<string>}
 */
export async function jsa_agent_modules_mediasharing_create(agent_key, connectionId, metadata) {
	// BEGIN USER CODE
	/*
import {
	CipheringInfo,
	CreateMediaSharingRecordOptions,
	MediaSharingEventTypes,
	MediaSharingModule,
	MediaSharingRecord,
	MediaSharingRepository,
	MediaSharingRole,
	MediaSharingService,
	MediaSharingState,
	MediaSharingStateChangedEvent,
	MediaSharingStorageProps,
	RequestMediaHandler,
	RequestMediaMessage,
	RequestMediaMessageOptions,
	RequestMediaSharingRecordOptions,
	ShareMediaHandler,
	ShareMediaMessage,
	ShareMediaMessageOptions,
	ShareMediaSharingRecordOptions,
	SharedMediaItem,
	SharedMediaItemOptions
} from '../../../javascriptsource/agent_sdk/node_modules/aries-framework-media-sharing';
	*/
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");
		if(metadata==null)metadata="{}";
		try{
			metadata=JSON.parse(metadata);
		}catch(e){
			return Promise.reject("Argument metadata is not a valid json")
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		const record = await agent.modules.media.create({
			connectionId: connectionId,//aliceConnectionRecord!.id,
			metadata:metadata,// {metadataKey1: 'metadata-val',metadataKey2: { key21: 'value21', key22: 'value22' },
		});
		return Promise.resolve(JSON.stringify(
			record
		));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}