// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_a2a_extension_history_v1_history_pb = require('../../../../../alis/a2a/extension/history/v1/history_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_iam_v1_policy_pb = require('@alis-build/google-common-protos/google/iam/v1/policy_pb.js');
var google_iam_v1_iam_policy_pb = require('@alis-build/google-common-protos/google/iam/v1/iam_policy_pb.js');
var alis_open_iam_v1_iam_pb = require('@open.alis.services/protobuf/alis/open/iam/v1/iam_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var lf_a2a_v1_a2a_pb = require('@alis-build/a2a/lf/a2a/v1/a2a_pb.js');

function serialize_alis_a2a_extension_history_v1_A2AHistory(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.A2AHistory)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.A2AHistory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_A2AHistory(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.A2AHistory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_A2AHistoryEvent(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.A2AHistoryEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_A2AHistoryEvent(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_AppendEventRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.AppendEventRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.AppendEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_AppendEventRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.AppendEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_AppendEventResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.AppendEventResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.AppendEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_AppendEventResponse(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.AppendEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_DeleteA2AHistoryRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.DeleteA2AHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_DeleteA2AHistoryRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_GetA2AHistoryRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.GetA2AHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_GetA2AHistoryRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListA2AHistoriesRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListA2AHistoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListA2AHistoriesRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListA2AHistoriesResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListA2AHistoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListA2AHistoriesResponse(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListEventsRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListEventsRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListEventsRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListEventsResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListEventsResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListEventsResponse(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_StreamEventsRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.StreamEventsRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.StreamEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_StreamEventsRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.StreamEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_AddIamBindingsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.AddIamBindingsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.AddIamBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_AddIamBindingsRequest(buffer_arg) {
  return alis_open_iam_v1_iam_pb.AddIamBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_BatchTestIamPermissionsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.BatchTestIamPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_BatchTestIamPermissionsRequest(buffer_arg) {
  return alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_BatchTestIamPermissionsResponse(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse)) {
    throw new Error('Expected argument of type alis.open.iam.v1.BatchTestIamPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_BatchTestIamPermissionsResponse(buffer_arg) {
  return alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_open_iam_v1_RemoveIamBindingsRequest(arg) {
  if (!(arg instanceof alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest)) {
    throw new Error('Expected argument of type alis.open.iam.v1.RemoveIamBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_open_iam_v1_RemoveIamBindingsRequest(buffer_arg) {
  return alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_GetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.GetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.GetIamPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_GetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.GetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_Policy(arg) {
  if (!(arg instanceof google_iam_v1_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v1.Policy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_Policy(buffer_arg) {
  return google_iam_v1_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_SetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.SetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.SetIamPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_SetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.SetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsResponse(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsResponse(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A2AHistoryService
var A2AHistoryServiceService = exports.A2AHistoryServiceService = {
  // Gets the IAM policy for a resource implemented in this service.
getIamPolicy: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the IAM policy for a resource implemented in this service.
setIamPolicy: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that a caller has on the specified resource.
testIamPermissions: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Returns permissions that a caller has on the specified resources.
batchTestIamPermissions: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/BatchTestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest,
    responseType: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse,
    requestSerialize: serialize_alis_open_iam_v1_BatchTestIamPermissionsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_BatchTestIamPermissionsRequest,
    responseSerialize: serialize_alis_open_iam_v1_BatchTestIamPermissionsResponse,
    responseDeserialize: deserialize_alis_open_iam_v1_BatchTestIamPermissionsResponse,
  },
  // Adds principals or updates the roles existing principals have on an IAM Policy protected resource.
addIamBindings: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/AddIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_AddIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_AddIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Removes principals or some of the roles they have on an IAM Policy protected resource.
removeIamBindings: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/RemoveIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Lists all histories.
listA2AHistories: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/ListA2AHistories',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse,
    requestSerialize: serialize_alis_a2a_extension_history_v1_ListA2AHistoriesRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_ListA2AHistoriesRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_ListA2AHistoriesResponse,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_ListA2AHistoriesResponse,
  },
  // Gets an A2AHistory by its resource name.
getA2AHistory: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/GetA2AHistory',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.A2AHistory,
    requestSerialize: serialize_alis_a2a_extension_history_v1_GetA2AHistoryRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_GetA2AHistoryRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_A2AHistory,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_A2AHistory,
  },
  // Deletes an A2AHistory.
deleteA2AHistory: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/DeleteA2AHistory',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.A2AHistory,
    requestSerialize: serialize_alis_a2a_extension_history_v1_DeleteA2AHistoryRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_DeleteA2AHistoryRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_A2AHistory,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_A2AHistory,
  },
  // Appends an event to a given A2AHistory
appendEvent: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/AppendEvent',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.AppendEventRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.AppendEventResponse,
    requestSerialize: serialize_alis_a2a_extension_history_v1_AppendEventRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_AppendEventRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_AppendEventResponse,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_AppendEventResponse,
  },
  // Lists all events.
listEvents: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/ListEvents',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.ListEventsRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.ListEventsResponse,
    requestSerialize: serialize_alis_a2a_extension_history_v1_ListEventsRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_ListEventsRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_ListEventsResponse,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_ListEventsResponse,
  },
  // Stream events.
streamEvents: {
    path: '/alis.a2a.extension.history.v1.A2AHistoryService/StreamEvents',
    requestStream: false,
    responseStream: true,
    requestType: alis_a2a_extension_history_v1_history_pb.StreamEventsRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent,
    requestSerialize: serialize_alis_a2a_extension_history_v1_StreamEventsRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_StreamEventsRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_A2AHistoryEvent,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_A2AHistoryEvent,
  },
};

exports.A2AHistoryServiceClient = grpc.makeGenericClientConstructor(A2AHistoryServiceService, 'A2AHistoryService');