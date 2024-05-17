# Farmworker Wallet OS (FWOS) Demo App
Decentralized identity, also known as Web3 Identity or self-sovereign identity, is a way to manage digital identities that gives users control over their personal information and how it's used. It uses blockchain, cryptography, and other decentralized technologies to eliminate central authorities and provide authentication and identification without sharing sensitive data (Dock.io).

![Three-party digital identity model](https://github.com/Entidad/fwos-demo-app/assets/87044489/5b6a8c9c-79b2-4aa4-b68c-4008c8e6b2a4)
### <center>Three-party digital identity model</center>

In decentralized identity systems, identities are spread across a network of nodes, rather than stored in centralized repositories or controlled by identity providers. This gives users full control over how their identity data is shared and verified.
Decentralized identity systems can involve multiple entities working together to establish trust and authenticate identities. 

A verifiable credential is a tamper-evident credential that has authorship that can be cryptographically verified. Verifiable credentials can be used to build verifiable presentations, which can also be cryptographically verified (W3C).

### Architecture and Reference Framework
![Wallet-driven_ecosystem_architecture](https://github.com/Entidad/fwos-demo-app/assets/87044489/a049327d-809b-4f13-b8fc-3feab3d2e9de)
A digital wallet is an app installed on smart devices that securely stores electronic identity credentials and payment instruments, such as driver licenses, passports, membership cards and credit cards. It also supports the secure sharing of necessary information in order to prove the identity of the wallet holder, thus enabling them to access a desired service or to complete a purchase.

---
#### Farmworker Wallet OS Ecosystem

~~~
NOTES:
* Maintenance modules are uploaded individually to Mendix Marketplace (public)
* Maintenance projects are hosted on github.com/Entidad (public)
* Farmworker Wallet OS ecosystem is hosted on Open Wallet Foundation github
~~~

#### FWOS Native Agent
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [NativeMobileResources](https://marketplace.mendix.com/link/component/109513)
* [AgentSDK (CredoJS)](FWOSNativeCore/Agent_SDK)
* [Native Template](FWOS_Native_Template/Native_Template)
* [KeyManagement](KeyManagement)
  
#### FWOS Cloud Agent
* [CommunityCommons](https://marketplace.mendix.com/link/component/170)
* [DigitalID_SDK](FWOS_Cloud_Agent_Core/DigitalID_SDK)
  * Controller, connection, verification, credential
* [VC_AnonCreds_SDK](FWOS_Cloud_Agent_Core/VCAnonCreds_SDK)
  * Schema, CredentialDefinition, AnonCreds
* [DIDComm_SDK](FWOS_Cloud_Agent_DIDComm/DIDComm_SDK)
  * BasicMessage

##### FWOS Other Resources
* [Website/Community](Website/Community)

----

| FWOS Native Agent | FWOS Cloud Agent | FWOS Native Agent Reference | FWOS Cloud Agent Reference| FWOS Other Resources |
| ------------- |-------------|-----|-----|------|
| [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515) | [CommunityCommons](https://marketplace.mendix.com/link/component/170) | [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515) | [CommunityCommons](https://marketplace.mendix.com/link/component/170)| [Website/Community](Website/Community) |
| [NativeMobileResources](https://marketplace.mendix.com/link/component/109513) | [DigitalID_SDK](FWOS_Cloud_Agent_Core/DigitalID_SDK) (Controller, connection, verification, credential)| [NativeMobileResources](https://marketplace.mendix.com/link/component/109513) |[DigitalID_SDK](FWOS_Cloud_Agent_Core/DigitalID_SDK) (Controller, connection, verification, credential)|
| [AgentSDK (CredoJS)](FWOSNativeCore/Agent_SDK)  | [VC_AnonCreds_SDK](FWOS_Cloud_Agent_Core/VCAnonCreds_SDK) (Schema, CredentialDefinition, AnonCreds) | [AgentSDK (CredoJS)](FWOSNativeCore/Agent_SDK) | [VC_AnonCreds_SDK](FWOS_Cloud_Agent_Core/VCAnonCreds_SDK) (Schema, CredentialDefinition, AnonCreds) | 
| [Native Template](FWOS_Native_Template/Native_Template) | [DIDComm_SDK (BasicMessage)](FWOS_Cloud_Agent_DIDComm/DIDComm_SDK) | [Native Template](FWOS_Native_Agent_Reference/Native_Template)| [DIDComm_SDK (BasicMessage)](FWOS_Cloud_Agent_DIDComm/DIDComm_SDK) |
| [KeyManagement](KeyManagement) | | [KeyManagement](KeyManagement) | [DIDComm_MediaSharing (Surveys)](FWOS_Cloud_Agent_DIDComm/DIDComm_MediaSharing) |
| | | [Native Mobile](FWOS_Native_Agent_Reference/Native_Mobile) | [DIDComm_Questionnaire (Surveys)](FWOS_Cloud_Agent_DIDComm/DIDComm_Questionnaire) |
| | | [Native Wallet](FWOS_Native_Agent_Reference/Native_Wallet) | [Connector_Paradym](Paradym/Connector_Paradym) (Projects, actions, workflows) |
| | | [Connector_Paradym](Paradym/Connector_Paradym) (Projects, actions, workflows) | [Pusher]([FWOS_Native_Agent_Reference/Native_Mobile](https://marketplace.mendix.com/link/component/107957)) |
| | | | [Encryption](https://marketplace.mendix.com/link/component/1011) |
| | | | [DigitalID_Implementation](FWOS_Cloud_Agent_Reference/DigitalID_Implementation) (Implementation logic) |
| | | | [DIDComm_Chat](FWOS_Cloud_Agent_Reference/DIDComm_Chat) (Chat layer via basicMessage) |
