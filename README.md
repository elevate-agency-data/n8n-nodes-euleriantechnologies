# n8n-nodes-euleriantechnologies  

This is an n8n community node. It lets you interact with Eulerian Technologies in your n8n workflows.  

Eulerian Technologies is a unified platform combining analytics, attribution, CMP, and DMP capabilities, enabling granular customer-journey analysis, real-time data exploitation, audience activation across all channels, and AI-driven insights to continuously optimize marketing performance.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.  

[Installation](#installation)  
[Credentials](#credentials)    
[Operations](#operations)   
[Using as a Tool](#using-as-a-tool)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation  

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.  

Alternatively, you can manually install it:  

```sh  
git clone https://github.com/elevate-agency-data/n8n-nodes-euleriantechnologies.git 
cd n8n-nodes-euleriantechnologies 
npm install  
```  

Then, place the node file in the `~/.n8n/custom-nodes` directory (or follow instructions specific to your n8n installation).   

## Credentials  

To use this node, you need an Eulerian Technologies API key with access to Eulerian Technologies.  

## Operations  

This node supports the following operations within Eulerian Technologies:  

* **Activation**
    * **RunTimeError**
        - Searches & filters through all available entries
    * **S2S Connector**
        - Clones a S2S
        - Copies a S2S to another website
        - Displays consent information
    * **S2S-Estimate**
        - Searches & filters through all available entries
    * **S2S-Order**
        - Searches & filters through all available entries
    * **Tag Management Solution**
        - Activates a tag
        - Checks if a tag exists
        - Clones a tag
        - Copies a tag to another website
        - Disactivates a tag
        - Displays consent information
        - Enables as a pending tag
        - Enables as test tag
        - Searches & filters through all available entries
        - Updates an existing tag
    * **Tag Management Solution-Estimate**
        - Searches & filters through all available entries
    * **Tag Management Solution-Order**
        - Searches & filters through all available entries
* **Analytics**
    * **AutoReport**
        - Checkes if a autoreport exists
        - Gets latest status of an autoreport
        - Launches an autoreport with a specific configuration
        - Lists status of an autoreport
        - Searches & filters through all available entries
        - Updates an autoreport
    * **Batch Reporting**
        - Gets available dimensions
        - Gets available kinds
        - Gets available metrics
        - Gets available segmentations
        - Downloads batch reporting
        - Queries data
        - Gets status
    * **Datamining: Estimates**
        - Cancels an estimate
        - Downloads the report
        - Gets an estimate
        - Gets the generation status
        - Replays an estimate
        - Searches & filters through all available entries
        - Validates an estimate
    * **Datamining: Goals**
        - Downloads the report
        - Gets the generation status
        - Searches & filters through all available entries
    * **Datamining: Internal Searchengine Request**
        - Downloads the report
        - Gets the generation status
        - Searches & filters through all available entries
    * **Datamining: Outbound Click**
        - Downloads the report
        - Gets the generation status
        - Searches & filters through all available entries
    * **Datamining: Sales**
        - Cancels a sale
        - Downloads the report
        - Gets a sale
        - Gets the generation status
        - Replays a sale
        - Searches & filters through all available entries
        - Updates amount of a sale
        - Validates a sale    
    * **Datamining: Shopping Carts**
        - Downloads the report
        - Gets a shopping cart
        - Gets the generation status
        - Searches & filters through all available entries
    * **Datamining: Third-Party Sales**
        - Downloads the report
        - Gets a third party sale
        - Gets the generation status
        - Searches & filters through all available entries
    * **DEDimension**
        - Checks if a dedimension name exists
        - Searches & filters through all available entries
* **Attribution**
    * **Customer Journey**
        - Assist - gets available dimensions
        - Assist - gets available goals
        - Assist - gets available STA rules
        - Bias - gets available bias
        - Bias - gets available dimensions
        - Bias - gets available goals
        - Bias - gets available models
        - Device exclusivity - gets available goals
        - Device exclusivity - gets available type of devices
        - Device path - gets available goals
        - Device path - gets available KPI for analysis
        - Device path - gets available type of devices
        - Duration - gets available journeys
        - Duration - gets available slots
        - Media exclusivity - gets available dimensions
        - Media exclusivity - gets available goals
        - Media exclusivity - gets available items for a given dimension
        - Media path - gets available dimensions
        - Media path - gets available goals
        - Media path - gets available items for a given dimension
        - Media path - gets available KPI for analysis
        - Qualify engage - gets available dimensions
        - Qualify engage - gets available profile sequence
        - Qualify engage - gets available STA rules
        - Touch - gets available goals
        - Velocity - gets available dimensions
        - Velocity - gets available items for a given dimension
        - Velocity - gets available journeys
        - Velocity - gets available KPI for analysis
        - Velocity - gets available scales
    * **Incrementality**
        - Generates a model on specific parameters
    * **MediaCategory**
        - Checks if a mediacategory name exists
        - Creates a new mediacategory entry
        - Searches & filters through all available entries
        - Updates an existing mediacategory
    * **MMM**
        - Check if an MMM Exists
        - Get Saturation Curve Data for a Given Job, Model and Scenario Details
        - Search & Filter Through All Available Entries
    * **MMM DataSource**
        - Checks data before upload via API
        - Checks if a mmmdatasource name exists
        - Creates a new mmmdatasource entry
        - Deletes a mmmdatasource and all associated mmmdatasourcechunk
        - Searches & filters through all available entries
        - Searches and filters available entries by input_type source
        - Searches and filters available entries by source_type
        - Updates an existing mmmdatasource
        - Uploads your data to a chunk associated with your mmmdatasource
    * **Multi-Touch Attribution**
        - Gets available algorithms
        - Gets available distribution
        - Gets available options for a given algorithm
        - Generates a model on specific parameters
        - Gets sample models
        - Get sample distribution datapoints
        - Simulates a model on a provided dataset
    * **Single Touch Attribution**
        - Gets all the entries
    * **View Augmented**
        - Disables custom weights linked to a model for default ones
        - Shows the configured weights
        - Shows the default configured weights
        - Shows the epc used for all augmented models
        - Updates and customizes weights
* **CMP**
    * **Category**
        - Checks if a collectorconfigpmcategory name exists
        - Creates a new CMP category
        - Searches & filters through all available entries
        - Updates an existing collectorconfigpmcategory
    * **Category Language**
        - Checks if a collectorconfigpmcategorylang name exists
        - Creates a new collectorconfigpmcategorylang entry
        - Gets all language authorized by CMP
        - Gets all language for a given category
        - Gets all the entries for a category and language
        - Updates an existing category
    * **Server2Server DataConnector**
        - Checks if the category is linked to a dataconnector
        - Gets all entries for a given category
        - Gets all the linked categories
        - Links a dataconnector to an CMP category
    * **TCFV2 Custom Vendor**
        - Checks if a tcfv2vendorcustom name exists
        - Creates a new tcfv2vendorcustom entry
        - Searches & filters through all available entries
        - Updates an existing tcfv2vendorcustom
    * **TMS Tag**
        - Checks if the category is linked to a tag
        - Gets all entries for a given category
        - Gets all the linked categories
        - Links a tag to an CMP category
* **Collect**
    * **ActionLabel1**
        - Checks if a actionlabel1 name exists
        - Creates a new actionlabel1 entry
        - Searches & filters through all available entries
        - Updates an existing actionlabel1
    * **Actionlabel2**
        - Checks if a actionlabel2 name exists
        - Creates a new actionlabel2 entry
        - Searches & filters through all available entries
        - Updates an existing actionlabel2
    * **Actionlabel3**
        - Checks if a actionlabel3 name exists
        - Creates a new actionlabel3 entry
        - Searches & filters through all available entries
        - Updates an existing actionlabel3
    * **Actionlabel4**
        - Checks if a actionlabel4 name exists
        - Creates a new actionlabel4 entry
        - Searches & filters through all available entries
        - Updates an existing actionlabel4
    * **Actionlabel5**
        - Checks if a actionlabel5 name exists
        - Creates a new actionlabel5 entry
        - Searches & filters through all available entries
        - Updates an existing actionlabel5
    * **Adhoc**
        - Gets latest status of a adhoc
        - Launches a adhoc
        - Launches a adhoc with a specific configuration
        - Lists status of a adhoc
        - Searches & filters through all available entries
        - Updates a adhoc
    * **Campaign**
        - Lists campaigns linked to a creative
        - Lists campaigns linked to a location
        - Lists campaigns linked to a media channel
        - Lists campaigns linked to a publisher
        - Checks if a campaign exists
        - Links a campaign to a virtual subchannel
        - Resets uploaded data
        - Unlinks a campaign from a virtual subchannel
        - Uploads data for affiliate campaigns
        - Uploads data for display campaigns
        - Uploads data for eulerian media campaigns
        - Uploads data for mailing campaigns
        - Uploads data for product based campaigns
    * **ContextFlag**
        - Checks if a contextflag name exists
        - Looks up the usage of the contextflag
        - Searches & filters through all available contextflag entries
        - Updates an existing contextflag
    * **ContextFlag Category**
        - Checks if a contextflagcategory name exists
        - Looks up the usage of the contextflagcategory
        - Searches & filters through all available contextflagcategory entries
        - Updates an existing contextflagcategory
    * **Creative**
        - Checks if a creative exists
        - Lists creatives linked to a location
        - Searches & filters through all available creatives
    * **CRM Parameters**
        - Checks if a given iduserparam name exists
        - Checks if the values of an iduserparam match a given pattern
        - Creates a new entry for an iduserparam
        - Looks up the usage of the specified user parameter
        - Searches and filters through all available iduserparam entries
        - Updates an existing iduserparam entry
    * **Custom Parameters**
        - Checks if a custom parameter exists
        - Creates a new custom parameter entry
        - Looks up the usage of the custom parameter
        - Searches & filters through all available custom parameters
        - Updates an existing custom parameter
    * **Custom Parameters Value**
        - Checks if a value for a custom parameter exists
        - Hashes the value of a given custom parameter entry
        - Searches and filters through all available custom parameter values
    * **Data Provider**
        - Checks if a data provider exists
        - Creates a new data provider
        - Real time S2S API
        - Searches and filters through all available custom parameter values
        - Updates an existing data provider
    * **Data Provider Parameters**
        - Checks if a partneruserparam name exists
        - Creates a new data provider parameter entry
        - Looks up the usage of a specific data provider parameter
        - Searches and filters through all available data provider parameters
        - Updates an existing data provider parameter entry
    * **Deny**
        - Checks if a deny name exists
        - Creates a new deny entry
        - Removes an existing deny entry
        - Searches & filters through all available deny entries
        - Updates an existing deny entry
    * **Device Type**
        - Gets all the entries
    * **Encrypt/Decrypt**
        - Decrypts a payload
        - Encrypts a payload
        - Gets sample formats
    * **EPC**
        - Checks if an EPC exists
        - Downloads EPC partner file
        - Gets mapping configuration from target cost EPC in json format for debug purposes
        - Gets latest status of an EPC
        - Lists status of an EPC
        - Relaunches an EPC
        - Relaunches an EPC in raw mode
        - Relaunches an EPC in testing mode
        - Resets data synchronized by an EPC
        - Searches & filters through all available entries
        - Updates an EPC
    * **EstimateType**
        - Checks if an estimatetype key exists
        - Searches & filters through all available entries
        - Updates an existing estimate type
    * **EstimateTypeCustom**
        - Checks if an estimatetypecustom name exists
        - Links estimate type
        - Searches & filters through all available entries
        - Unlinks estimate type
        - Updates an existing estimate type
    * **ETrim**
        - Batches update urls
        - Checks if a shorten code exists
        - Checks if a URL exists
        - Shortens a URL
        - Updates a destination URL
    * **ExpandLimit**
        - Checks if an expandlimit name exists
        - Searches & filters through all available entries
    * **Funnel**
        - Checks if a funnel name exists
        - Creates a new funnel entry
        - Searches & filters through all available entries
        - Updates an existing funnel
    * **Goal**
        - Checks if a action name exists
        - Creates a new action goal entry
        - Returns tracking tags in out for a given action goal
        - Searches & filters through all available entries
        - Updates an existing action goal
    * **IP Whitelist**
        - Checks if an IP is whitelisted
        - Creates a new wsipwhitelist entry
        - Removes wsipwhitelist ipblock
        - Searches & filters through all available entries
    * **Label**
        - Checks if a label name exists
        - Creates a new label entry
        - Removes an existing label entry
        - Searches & filters through all available entries
        - Updates an existing label
    * **Location**
        - Checks if a location exists
        - Creates a new location
        - Searches & filters through all available entries
        - Updates an existing location
    * **OmniChannelGroup1**
        - Checks if a omnichannelgroup1 name exists
        - Creates a new omnichannelgroup1 entry
        - Searches & filters through all available entries
        - Updates an existing omnichannelgroup1
    * **OmniChannelGroup2**
        - Checks if a omnichannelgroup2 name exists
        - Creates a new omnichannelgroup2 entry
        - Searches & filters through all available entries
        - Updates an existing omnichannelgroup2
    * **OmniChannelGroup3**
        - Checks if a omnichannelgroup3 name exists
        - Creates a new omnichannelgroup3 entry
        - Searches & filters through all available entries
        - Updates an existing omnichannelgroup3
    * **OmniChannelGroup4**
        - Checks if a omnichannelgroup4 name exists
        - Creates a new omnichannelgroup4 entry
        - Searches & filters through all available entries
        - Updates an existing omnichannelgroup4
    * **OmniChannelGroup5**
        - Checks if a omnichannelgroup5 name exists
        - Creates a new omnichannelgroup5 entry
        - Searches & filters through all available entries
        - Updates an existing omnichannelgroup5
    * **OrderPayment**
        - Checks if a orderpayment key exists
        - Searches & filters through all available entries
        - Updates an existing order payment
    * **OrderPaymentCustom**
        - Checks if a orderpaymentcustom name exists
        - Links order payment
        - Searches & filters through all available entries
        - Unlinks order payment
        - Updates an existing order payment
    * **OrderType**
        - Checks if a ordertype key exists
        - Searches & filters through all available entries
        - Updates an existing order type
    * **OrderTypeCustom**
        - Checks if a ordertypecustom name exists
        - Links order type
        - Searches & filters through all available entries
        - Unlinks order type
        - Updates an existing order type
    * **Outbound Campaigns Parameters**
        - Gets information for a specific campaign
        - Gets global parameters information
        - Updates the global parameters information
        - Updates the parameters for a given campaign
    * **Outbound Publishers Parameters**
        - Gets information for a specific publisher
        - Updates the parameters for a given publisher
    * **PageGroup**
        - Checks if a pagegroup name exists
        - Creates a new pagegroup entry
        - Lists all the pages linked to a pagegroup
        - Searches & filters through all available entries
    * **PageInfo**
        - Searches & filters through all available entries
        - Updates attributes linked to a pageinfo name
    * **PageLabel1**
        - Checks if a pagelabel1 name exists
        - Creates a new pagelabel1 entry
        - Searches & filters through all available entries
        - Updates an existing pagelabel1
    * **PageLabel2**
        - Checks if a pagelabel2 name exists
        - Creates a new pagelabel2 entry
        - Searches & filters through all available entries
        - Updates an existing pagelabel2
    * **PageLabel3**
        - Checks if a pagelabel3 name exists
        - Creates a new pagelabel3 entry
        - Searches & filters through all available entries
        - Updates an existing pagelabel3
    * **PageLabel4**
        - Checks if a pagelabel4 name exists
        - Creates a new pagelabel4 entry
        - Searches & filters through all available entries
        - Updates an existing pagelabel4
    * **PageLabel5**
        - Checks if a pagelabel5 name exists
        - Creates a new pagelabel5 entry
        - Searches & filters through all available entries
        - Updates an existing pagelabel5
    * **Partner Publisher**
        - Checks if a rootpublisher name or cgiparam exists
        - Gets all the existing partner publisher
    * **Product**
        - Gets params for a product reference
        - Sets one or more products offline
        - Sets one or more products online
    * **Product Parameters**
        - Checks if a productparam name exists
        - Creates a new productparam entry
        - Lookups the usage of the productparam parameter
        - Searches & filters through all available entries
        - Updates an existing productparam
    * **Profile**
        - Checks if a profile name exists
        - Creates a new profile entry
        - Searches & filters through all available entries
        - Updates an existing profile    
    * **Publisher**
        - Checks if a publisher exists
        - Creates a new publisher
        - Gets publishers linked to location
        - Searches & filters through all available entries
        - Updates an existing publisher
    * **Purge**
        - Creates a purge request
        - Gets pending users to purge
        - Searches & filters through all available entries
        - Gets statistics on purged users
    * **RedirectDomainAllow**
        - Checks if a redirectdomainallow name exists
        - Creates a new redirectdomainallow entry
        - Searches & filters through all available entries
        - Updates an existing redirectdomainallow
    * **SEM Account**
        - Checks if a semaccount exists
        - Creates a new semaccount
        - Searches & filters through all available entries
        - Updates an existing semaccount
    * **SEM AdGroup**
        - Checks if a semadgroup exists
        - Searches & filters through all available entries
        - Updates an existing semadgroup
    * **SEM Campaign**
        - Checks if a semcampaign exists
        - Creates an alias for a semcampaign
        - Gets the alias linked to the semcampaign
        - Links the semcampaigns to a semaccount
        - Removes an alias for a semcampaign
        - Searches & filters through all available entries
        - Updates an existing semcampaign
    * **SEM Creative**
        - Checks if a semcreative exists
        - Searches & filters through all available entries
        - Updates an existing semcreative
    * **SEM CreativeGroup**
        - Checks if a semcreativegroup exists
        - Creates a new semcreativegroup
        - Links semcreative
        - Removes semcreativegroup
        - Searches & filters through all available entries
        - Unlinks all semcreative
        - Updates an existing semcreativegroup
    * **Shop**
        - Checks if a shop key exists
        - Creates a new shop entry
        - Searches & filters through all available entries
        - Updates an existing shop
    * **SubKey2**
        - Checks if a subkey2 name exists
        - Creates a new subkey2 entry
        - Creates a subkey2 cancel key
        - Removes a subkey2 cancel key
        - Searches & filters through all available entries
        - Updates an existing subkey2
    * **Tag**
        - Checks if a tag name exists
        - Searches & filters through all available entries
        - Updates an existing tag
    * **ThirdParty RedirectDomainAllow**
        - Checks if a tpredirectdomainallow name exists
        - Creates a new userdatass entry
        - Searches & filters through all available entries
        - Updates an existing tpredirectdomainallow
    * **TrackingHostname**
        - Checks if a trackinghostname hostname exists
        - Checks the last status for a given hostname
        - Creates a new trackinghostname entry
        - Searches & filters through all available entries
        - Updates an existing trackinghostname
    * **TrackingHostnameLog**
        - Searches & filters through all available entries
    * **UIDSticky**
        - Checks if a uidsticky name exists
        - Creates a new uidsticky entry
        - Searches & filters through all available entries
        - Updates an existing uidsticky
    * **UParamInject**
        - Gets latest status of a uparaminject
        - Launches a uparaminject
        - Lists status of a uparaminject
        - Searches & filters through all available entries
        - Gets token for the targeted job
        - Updates a uparaminject
    * **Upload**
        - Adds a new file to the upload service
        - Checks if a file ID exists
    * **User**
        - Denies data collection for a user
        - Provides information about a user
        - Undenies data collection for a user
    * **Virtual SubChannel**
        - Checks if a submedia name exists
        - Creates a virtual subchannel
        - Searches & filters through all available entries
        - Updates an existing submedia
    * **Website**
        - Applies a hash calculation
        - Edw status
        - Gets a current settings for viewability setup
        - Gets a session token with expire date
        - Gets all available identifiers by type
        - Gets All Available Partner Publisher
        - Gets an access token linked to a list of IP addresses
        - Gets information about current website
        - Gets list of last seen headings
        - Gets visit information
        - Lookups where a clause is used in triggering rules
* **CookieControl**
    * **CookieControl**
        - Loads the cookiecontrol advanced report
        - Loads the cookiecontrol simple report
        - Searches & filters through all available entries
    * **CookieControlFamily**
        - Creates a new cookiecontrolfamily
        - Removes an existing cookiecontrolfamily entry
        - Searches & filters through all available entries
        - Updates a cookiecontrolfamily parameter
    * **CookieControlRules**
        - Creates a new cookiecontrolrules
        - Removes an existing cookiecontrolrules entry
        - Searches & filters through all available entries
        - Updates a cookiecontrolrules parameter
    * **CookieControlValueExample**
        - Searches & filters through all available entries
    * **Cookiepedia**
        - Searches & filters through all available entries
    * **Cookiepedia Company**
        - Searches & filters through all available entries
    * **Cookiepedia Company Tool**
        - Searches & filters through all available entries
* **DMP**
    * **Audience**
        - Changes segment sorting for an audience
        - Checks if a cluster name exists
        - Creates a new audience
        - Lookups the usage of the audience
        - Removes a label for an audience
        - Searches & filters through all available entries
        - Sets a label on an audience
        - Updates an audience
        - Upgrades the version number of the audience
    * **Audience Engine**
        - Adds a custom criteria
        - Checks if a custom criteria exists
        - Checks request status
        - Counts users linked to a custom criteria
        - Counts users linked to a custom criteria with distributed values
        - Counts users linked to a custom request
        - Counts users linked to a saved query
        - Downloads file
        - Downloads request results
        - Estimates the reach for a given criteria
        - Estimates the reach for a given partner
        - Exports the users belonging to a saved query
        - Gets the distribution by criteria for a given population
        - Lists allowed type of uniq for user deduplication when counting
        - Lists the available colums for cold audience engine file download
        - Returns the historical volume linked to a custom criteria
        - Searches & filters through all available custom criterias
        - Updates a custom criteria
    * **External Segment**
        - Checks if an external segment exists
        - Searches & filters through all available entries
    * **Partner Segments**
        - Batches update partner segments
        - Checks if a partner segment exists
        - Gets linked automated job cold export
        - Gets linked job workflows
        - Queries the partner
        - Returns the historical cold volume linked to a rootpublisher cluster
        - Searches & filters through all available entries
        - Gets statistics for partner segments
        - Updates a partner segment
    * **Saved Queries**
        - Checks if a saved query exists
        - Clones a saved query to an audience
        - Gets linked automated job cold export
        - Gets linked job workflows
        - Searches & filters through all available entries
    * **Segment**
        - Checks if a segment exists
        - Creates a new segment
        - Lookups the usage of the segment
        - Removes a label for a segment
        - Searches & filters through all available entries
        - Sets a label on a segment
        - Updates a segment
    * **Shared Segment**
        - Checks if a shared segment exists
        - Creates a new shared segment entry
        - Searches & filters through all available entries
        - Updates attributes of an existing shared segment entry
    * **UserData ServerSide**
        - Checks if a userdatass name exists
        - Creates a new userdatass entry
        - Gets a session token with expire date
        - Gets an access token linked to a list of IP addresses
        - Gets the real time URL to be called with etuix
        - Gets the real time URL to be called with uid
        - Searches & filters through all available entries
        - Updates an existing userdatass
    * **Workflow**
        - Checks if a workflow exists
        - Gets latest status of a workflow
        - Launches a workflow
        - Launches a workflow with a specific configuration
        - Lists status of a workflow
        - Searches & filters through all available entries
        - Gets token for a given workflow
        - Updates a workflow
* **EDW**
    * **EDW-Job**
        - Adds and start a new eulerian data warehouse analysis
        - Cancels an existing eulerian data warehouse analysis
        - Fetches the EDW session token
        - Gets the status of an existing eulerian data warehouse analysis
    * **Scheduled Job**
        - Checks if a scheduled EDW job exists
        - Gets latest status of a scheduled EDW job
        - Launches a scheduled EDW job
        - Lists status of a schedules EDW job
        - Searches & filters through all available entries
        - Updates an EDW scheduled job
    * **Templated Job**
        - Downloads the report
        - Gets the generation status
        - Sends the query for treatment
* **Marketplace**
    * **DataMember**
        - Gets information about current datamember
        - Updates an existing datamember
* **MTA**
    * **EMPDB**
        - Lists status of a relaunch
        - Relaunches an EPC
* **User Interface**
    * **Account**
        - Gets billing information for a given webmaster account
        - Disables a user account
        - Enables a user account
        - Gets a session token with expire date for realtime DW
        - Gets a session token with expire date for realtime kafka injection
        - Gets an access token for realtime DW
        - Pings the API so that we know we have access to it
        - Pings the session of the provided user account
        - Resets the API token for a user account
        - Retrieves the authorization tree
        - Retrieves the token for replay of data
        - Return list of websites you are authorized to access
        - Returns the API token for a user account
    * **Override Text**
        - Checks if a override PO exists
        - Creates a new override
        - Gets the mapping for a language
        - Purges all the overridden PO keys for all languages
        - Removes an existing overriden PO key
        - Updates an existing overriden PO key

Retrieve information from the [Eulerian Technologies API](https://doc.api.eulerian.com/). 

## Using as a Tool

This node can be used as a tool in n8n AI Agents. To enable community nodes as tools, you need to set the `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE` environment variable to `true`.

### Setting the Environment Variable

**If you're using a bash/zsh shell:**
```bash
export N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
n8n start
```

**If you're using Docker:**
Add to your docker-compose.yml file:
```yaml
environment:
  - N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

**If you're using the desktop app:**
Create a `.env` file in the n8n directory:
```
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

**If you want to set it permanently on Mac/Linux:**
Add to your `~/.zshrc` or `~/.bash_profile`:
```bash
export N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

## Compatibility  

- Tested with: 1.116.2 (Success)

## Resources  

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)  
- [Eulerian Technologies API documentation](https://doc.api.eulerian.com/)