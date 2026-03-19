// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_a2a_extension_history_v1_history_pb = require('../../../../../alis/a2a/extension/history/v1/history_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_iam_v1_policy_pb = require('../../../../../google/iam/v1/policy_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../../google/iam/v1/iam_policy_pb.js');
var alis_open_iam_v1_iam_pb = require('../../../../../alis/open/iam/v1/iam_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var lf_a2a_v1_a2a_pb = require('../../../../../lf/a2a/v1/a2a_pb.js');

function serialize_alis_a2a_extension_history_v1_AppendThreadEventRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.AppendThreadEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_AppendThreadEventRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_AppendThreadEventResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.AppendThreadEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_AppendThreadEventResponse(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_DeleteThreadRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.DeleteThreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_DeleteThreadRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_GetThreadRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.GetThreadRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.GetThreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_GetThreadRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.GetThreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListThreadEventsRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListThreadEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListThreadEventsRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListThreadEventsResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListThreadEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListThreadEventsResponse(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListThreadsRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListThreadsRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListThreadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListThreadsRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListThreadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ListThreadsResponse(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ListThreadsResponse)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ListThreadsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ListThreadsResponse(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ListThreadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_StreamThreadEventsRequest(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.StreamThreadEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_StreamThreadEventsRequest(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_Thread(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.Thread)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.Thread');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_Thread(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.Thread.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_a2a_extension_history_v1_ThreadEvent(arg) {
  if (!(arg instanceof alis_a2a_extension_history_v1_history_pb.ThreadEvent)) {
    throw new Error('Expected argument of type alis.a2a.extension.history.v1.ThreadEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_a2a_extension_history_v1_ThreadEvent(buffer_arg) {
  return alis_a2a_extension_history_v1_history_pb.ThreadEvent.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages persisted A2A conversation threads and their events, including
// thread listing, event appends, event streaming, and IAM policy access.
var ThreadServiceService = exports.ThreadServiceService = {
  // Gets the IAM policy for a resource implemented in this service.
getIamPolicy: {
    path: '/alis.a2a.extension.history.v1.ThreadService/GetIamPolicy',
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
    path: '/alis.a2a.extension.history.v1.ThreadService/SetIamPolicy',
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
    path: '/alis.a2a.extension.history.v1.ThreadService/TestIamPermissions',
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
    path: '/alis.a2a.extension.history.v1.ThreadService/BatchTestIamPermissions',
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
    path: '/alis.a2a.extension.history.v1.ThreadService/AddIamBindings',
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
    path: '/alis.a2a.extension.history.v1.ThreadService/RemoveIamBindings',
    requestStream: false,
    responseStream: false,
    requestType: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    requestDeserialize: deserialize_alis_open_iam_v1_RemoveIamBindingsRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Lists all Threads.
listThreads: {
    path: '/alis.a2a.extension.history.v1.ThreadService/ListThreads',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.ListThreadsRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.ListThreadsResponse,
    requestSerialize: serialize_alis_a2a_extension_history_v1_ListThreadsRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_ListThreadsRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_ListThreadsResponse,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_ListThreadsResponse,
  },
  // Gets an Thread by its resource name.
getThread: {
    path: '/alis.a2a.extension.history.v1.ThreadService/GetThread',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.GetThreadRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.Thread,
    requestSerialize: serialize_alis_a2a_extension_history_v1_GetThreadRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_GetThreadRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_Thread,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_Thread,
  },
  // Deletes an Thread.
deleteThread: {
    path: '/alis.a2a.extension.history.v1.ThreadService/DeleteThread',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_alis_a2a_extension_history_v1_DeleteThreadRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_DeleteThreadRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Appends an event to a given Thread
appendThreadEvent: {
    path: '/alis.a2a.extension.history.v1.ThreadService/AppendThreadEvent',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse,
    requestSerialize: serialize_alis_a2a_extension_history_v1_AppendThreadEventRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_AppendThreadEventRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_AppendThreadEventResponse,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_AppendThreadEventResponse,
  },
  // Lists all events.
listThreadEvents: {
    path: '/alis.a2a.extension.history.v1.ThreadService/ListThreadEvents',
    requestStream: false,
    responseStream: false,
    requestType: alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse,
    requestSerialize: serialize_alis_a2a_extension_history_v1_ListThreadEventsRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_ListThreadEventsRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_ListThreadEventsResponse,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_ListThreadEventsResponse,
  },
  // Stream events.
streamThreadEvents: {
    path: '/alis.a2a.extension.history.v1.ThreadService/StreamThreadEvents',
    requestStream: false,
    responseStream: true,
    requestType: alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest,
    responseType: alis_a2a_extension_history_v1_history_pb.ThreadEvent,
    requestSerialize: serialize_alis_a2a_extension_history_v1_StreamThreadEventsRequest,
    requestDeserialize: deserialize_alis_a2a_extension_history_v1_StreamThreadEventsRequest,
    responseSerialize: serialize_alis_a2a_extension_history_v1_ThreadEvent,
    responseDeserialize: deserialize_alis_a2a_extension_history_v1_ThreadEvent,
  },
};

exports.ThreadServiceClient = grpc.makeGenericClientConstructor(ThreadServiceService, 'ThreadService');
