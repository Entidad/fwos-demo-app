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
import support from"../support/entidad";
// END EXTRA CODE

/**
 * https://github.com/hyperledger/aries-framework-javascript/blob/dbfebb4720da731dbe11efdccdd061d1da3d1323/packages/core/src/modules/credentials/CredentialsApi.ts
 * 
 *    * Negotiate a credential proposal as issuer (by sending a credential offer message) to the connection
 *    * associated with the credential record.
 *    *
 *    * @param options configuration for the offer see {@link NegotiateCredentialProposalOptions}
 *    * @returns Credential exchange record associated with the credential offer
 *    *
 *   public async negotiateProposal(options: NegotiateCredentialProposalOptions<CPs>): Promise<CredentialExchangeRecord> {
 * @param {string} agent_key
 * @param {string} credentialRecordId - mandatory
 * @param {string} credentialFormats_indy_credentialDefinitionId - mandatory
 * @param {string} credentialFormats_indy_attributes - json?mandatory
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_credentials_negotiateProposal(agent_key, credentialRecordId, credentialFormats_indy_credentialDefinitionId, credentialFormats_indy_attributes) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(credentialRecordId==null)return Promise.reject("Invalid credentialRecordId parameter");										//mandatory
		if(credentialFormats_indy_credentialDefinitionId==null)return Promise.reject("Invalid credentialFormats_indy_credentialDefinitionId parameter");										//mandatory
		if(credentialFormats_indy_attributes==null)return Promise.reject("Invalid credentialFormats_indy_attributes parameter");										//mandatory
		try{
			credentialFormats_indy_attributes=JSON.parse(credentialFormats_indy_attributes);
		}catch(e){
			return Promise.reject("Argument credentialFormats_indy_attributes is not a valid json array")
		}
		let options={};
		if(
			credentialFormats_indy_credentialDefinitionId!=null||
			credentialFormats_indy_attributes!=null||
			credentialFormats_indy_attributes!=null
		)options.credentialFormats={indy:{}};
		if(credentialRecordId)options.credentialRecordId=credentialRecordId;
		if(credentialFormats_indy_credentialDefinitionId)options.credentialFormats.indy.credentialDefinitionId=credentialFormats_indy_credentialDefinitionId;
		if(credentialFormats_indy_attributes)options.credentialFormats.indy.attributes=credentialFormats_indy_attributes;
		if(credentialFormats_indy_attributes)options.credentialFormats.indy.attributes=credentialFormats_indy_attributes;
		console.info("#>: "+JSON.stringify(options,0,2));
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.credentials.negotiateProposal(options)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
