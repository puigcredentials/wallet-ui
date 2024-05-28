export const environment = {
  production: true,
  server_url:window["env"]["server_url"] || 'http://localhost:8081',
  iam_url: window["env"]["iam_url"] || 'http://localhost:9099',
  websocket_url: window["env"]["websocket_url"] || 'ws://localhost:8081',
  iam_params: {
    iam_uri: window["env"]["iam_uri"] || '/realms/wallet',
    client_id: window["env"]["client_id"] ||  'auth-client',
    scope: window["env"]["scope"] || 'openid profile email offline_access',
    grant_type: window["env"]["grant_type"] || 'code'
  },
  server_uri: {
    execute_content_uri: window["env"]["execute_content_uri"] || '/api/v2/execute-content',
    request_credential_uri: window["env"]["request_credential_uri"] || '/api/v2/request-credential',
    verifiable_presentation_uri: window["env"]["verifiable_presentation_uri"] || '/api/v2/verifiable-presentation',
    credentials_uri: window["env"]["credentials_uri"] || '/api/v2/credentials',
    credentials_by_id_uri: window["env"]["credentials_by_id_uri"] || '/api/v2/credentials?credentialId=',
    credentials_signed_by_id_uri: window["env"][" credentials_signed_by_id_uri"] || '/api/v1/request-signed-credential',
    users_uri: window["env"]["users_uri"] || '/api/v2/users',
    ebsi_did_uri: window["env"]["ebsi_did_uri"] || '/api/v2/ebsi-did',
    cbor: window["env"]["cbor_uri"] || '/api/v2/vp/cbor'

  },
  websocket_uri: window["env"]["websocket_uri"] || '/api/v2/pin'
};
