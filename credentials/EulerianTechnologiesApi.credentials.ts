import { 
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon
} from 'n8n-workflow';

export class EulerianTechnologiesApi implements ICredentialType {
	name = 'eulerianTechnologiesApi';
	displayName = 'Eulerian Technologies API';
	documentationUrl = 'https://doc.api.eulerian.com/';
  icon: Icon = 'file:icons/euleriantechnologies.svg';
	properties: INodeProperties[] = [
    {
			displayName: 'Customer',
			name: 'customer',
			type: 'string',
			default: '',
			placeholder: 'app',
			required: true,
			description: 'Customer for the Eulerian Technologies API'
		},
    {
			displayName: 'Datacenter',
			name: 'datacenter',
			type: 'options',
			options: [
				{ name: 'CA', value: 'ca'},
				{ name: 'COM', value: 'com'}
			],
			default: 'com',
			required: true,
			description: 'Datacenter for the Eulerian Technologies API'
		},
    {
			displayName: 'Custom Domain',
			name: 'customDomain',
			type: 'string',
			default: '',
			description: 'Custom domain for the Eulerian Technologies API'
		},
		{
			displayName: 'API Authentification Token',
			name: 'apiAuthentificationToken',
			type: 'string',
			typeOptions: {
				password: true
			},
			default: '',
			required: true,
			description: 'API Authentification Token for the Eulerian Technologies API'
		}
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
        'Content-Type': 'application/json',	
        'Accept': 'application/json'
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
      method: 'POST',
			url: '=https://{{$credentials.customer}}.api.eulerian.{{$credentials.datacenter}}/ea/v2/er/account/authtree.json',
			headers: {
        'Content-Type': 'application/json',	
        'Accept': 'application/json'
			},
			body: {
        'Authorization': 'Bearer {{$credentials.apiAuthentificationToken}}'
			},
			json: true,
		},
	};
}
