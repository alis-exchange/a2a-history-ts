// GENERATED CODE -- DO NOT EDIT!

// package: alis.a2a.extension.history.v1
// file: alis/a2a/extension/history/v1/history.proto

import * as alis_a2a_extension_history_v1_history_pb from "../../../../../alis/a2a/extension/history/v1/history_pb";
import * as google_iam_v1_policy_pb from "../../../../../google/iam/v1/policy_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../../google/iam/v1/iam_policy_pb";
import * as alis_open_iam_v1_iam_pb from "../../../../../alis/open/iam/v1/iam_pb";
import * as grpc from "grpc";

interface IA2AHistoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  batchTestIamPermissions: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest, alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>;
  addIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  listA2AHistories: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest, alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse>;
  getA2AHistory: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest, alis_a2a_extension_history_v1_history_pb.A2AHistory>;
  deleteA2AHistory: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest, alis_a2a_extension_history_v1_history_pb.A2AHistory>;
  appendEvent: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.AppendEventRequest, alis_a2a_extension_history_v1_history_pb.AppendEventResponse>;
  listEvents: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.ListEventsRequest, alis_a2a_extension_history_v1_history_pb.ListEventsResponse>;
  streamEvents: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.StreamEventsRequest, alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent>;
}

export const A2AHistoryServiceService: IA2AHistoryServiceService;

export interface IA2AHistoryServiceServer extends grpc.UntypedServiceImplementation {
  getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  batchTestIamPermissions: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest, alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>;
  addIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  listA2AHistories: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest, alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse>;
  getA2AHistory: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest, alis_a2a_extension_history_v1_history_pb.A2AHistory>;
  deleteA2AHistory: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest, alis_a2a_extension_history_v1_history_pb.A2AHistory>;
  appendEvent: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.AppendEventRequest, alis_a2a_extension_history_v1_history_pb.AppendEventResponse>;
  listEvents: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.ListEventsRequest, alis_a2a_extension_history_v1_history_pb.ListEventsResponse>;
  streamEvents: grpc.handleServerStreamingCall<alis_a2a_extension_history_v1_history_pb.StreamEventsRequest, alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent>;
}

export class A2AHistoryServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  batchTestIamPermissions(argument: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest, callback: grpc.requestCallback<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>): grpc.ClientUnaryCall;
  batchTestIamPermissions(argument: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>): grpc.ClientUnaryCall;
  batchTestIamPermissions(argument: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  addIamBindings(argument: alis_open_iam_v1_iam_pb.AddIamBindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  removeIamBindings(argument: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  listA2AHistories(argument: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse>): grpc.ClientUnaryCall;
  listA2AHistories(argument: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse>): grpc.ClientUnaryCall;
  listA2AHistories(argument: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse>): grpc.ClientUnaryCall;
  getA2AHistory(argument: alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.A2AHistory>): grpc.ClientUnaryCall;
  getA2AHistory(argument: alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.A2AHistory>): grpc.ClientUnaryCall;
  getA2AHistory(argument: alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.A2AHistory>): grpc.ClientUnaryCall;
  deleteA2AHistory(argument: alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.A2AHistory>): grpc.ClientUnaryCall;
  deleteA2AHistory(argument: alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.A2AHistory>): grpc.ClientUnaryCall;
  deleteA2AHistory(argument: alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.A2AHistory>): grpc.ClientUnaryCall;
  appendEvent(argument: alis_a2a_extension_history_v1_history_pb.AppendEventRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.AppendEventResponse>): grpc.ClientUnaryCall;
  appendEvent(argument: alis_a2a_extension_history_v1_history_pb.AppendEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.AppendEventResponse>): grpc.ClientUnaryCall;
  appendEvent(argument: alis_a2a_extension_history_v1_history_pb.AppendEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.AppendEventResponse>): grpc.ClientUnaryCall;
  listEvents(argument: alis_a2a_extension_history_v1_history_pb.ListEventsRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: alis_a2a_extension_history_v1_history_pb.ListEventsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: alis_a2a_extension_history_v1_history_pb.ListEventsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  streamEvents(argument: alis_a2a_extension_history_v1_history_pb.StreamEventsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent>;
  streamEvents(argument: alis_a2a_extension_history_v1_history_pb.StreamEventsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent>;
}
