// GENERATED CODE -- DO NOT EDIT!

// package: alis.a2a.extension.history.v1
// file: alis/a2a/extension/history/v1/history.proto

import * as alis_a2a_extension_history_v1_history_pb from "../../../../../alis/a2a/extension/history/v1/history_pb";
import * as google_iam_v1_policy_pb from "../../../../../google/iam/v1/policy_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../../google/iam/v1/iam_policy_pb";
import * as alis_open_iam_v1_iam_pb from "../../../../../alis/open/iam/v1/iam_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IThreadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  batchTestIamPermissions: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest, alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>;
  addIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.MethodDefinition<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  listThreads: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.ListThreadsRequest, alis_a2a_extension_history_v1_history_pb.ListThreadsResponse>;
  getThread: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.GetThreadRequest, alis_a2a_extension_history_v1_history_pb.Thread>;
  deleteThread: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest, google_protobuf_empty_pb.Empty>;
  appendThreadEvent: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest, alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse>;
  listThreadEvents: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest, alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse>;
  streamThreadEvents: grpc.MethodDefinition<alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest, alis_a2a_extension_history_v1_history_pb.ThreadEvent>;
}

export const ThreadServiceService: IThreadServiceService;

export interface IThreadServiceServer extends grpc.UntypedServiceImplementation {
  getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  batchTestIamPermissions: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest, alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>;
  addIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.AddIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  removeIamBindings: grpc.handleUnaryCall<alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest, google_iam_v1_policy_pb.Policy>;
  listThreads: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.ListThreadsRequest, alis_a2a_extension_history_v1_history_pb.ListThreadsResponse>;
  getThread: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.GetThreadRequest, alis_a2a_extension_history_v1_history_pb.Thread>;
  deleteThread: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest, google_protobuf_empty_pb.Empty>;
  appendThreadEvent: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest, alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse>;
  listThreadEvents: grpc.handleUnaryCall<alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest, alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse>;
  streamThreadEvents: grpc.handleServerStreamingCall<alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest, alis_a2a_extension_history_v1_history_pb.ThreadEvent>;
}

export class ThreadServiceClient extends grpc.Client {
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
  listThreads(argument: alis_a2a_extension_history_v1_history_pb.ListThreadsRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListThreadsResponse>): grpc.ClientUnaryCall;
  listThreads(argument: alis_a2a_extension_history_v1_history_pb.ListThreadsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListThreadsResponse>): grpc.ClientUnaryCall;
  listThreads(argument: alis_a2a_extension_history_v1_history_pb.ListThreadsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListThreadsResponse>): grpc.ClientUnaryCall;
  getThread(argument: alis_a2a_extension_history_v1_history_pb.GetThreadRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.Thread>): grpc.ClientUnaryCall;
  getThread(argument: alis_a2a_extension_history_v1_history_pb.GetThreadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.Thread>): grpc.ClientUnaryCall;
  getThread(argument: alis_a2a_extension_history_v1_history_pb.GetThreadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.Thread>): grpc.ClientUnaryCall;
  deleteThread(argument: alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteThread(argument: alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteThread(argument: alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  appendThreadEvent(argument: alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse>): grpc.ClientUnaryCall;
  appendThreadEvent(argument: alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse>): grpc.ClientUnaryCall;
  appendThreadEvent(argument: alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse>): grpc.ClientUnaryCall;
  listThreadEvents(argument: alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse>): grpc.ClientUnaryCall;
  listThreadEvents(argument: alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse>): grpc.ClientUnaryCall;
  listThreadEvents(argument: alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse>): grpc.ClientUnaryCall;
  streamThreadEvents(argument: alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ThreadEvent>;
  streamThreadEvents(argument: alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ThreadEvent>;
}
