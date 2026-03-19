import * as grpcWeb from 'grpc-web';

import * as alis_a2a_extension_history_v1_history_pb from '../../../../../alis/a2a/extension/history/v1/history_pb'; // proto import: "alis/a2a/extension/history/v1/history.proto"
import * as alis_open_iam_v1_iam_pb from '@open.alis.services/protobuf/alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as google_iam_v1_iam_policy_pb from '@alis-build/google-common-protos/google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '@alis-build/google-common-protos/google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class ThreadServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  batchTestIamPermissions(
    request: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>;

  addIamBindings(
    request: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  removeIamBindings(
    request: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  listThreads(
    request: alis_a2a_extension_history_v1_history_pb.ListThreadsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.ListThreadsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ListThreadsResponse>;

  getThread(
    request: alis_a2a_extension_history_v1_history_pb.GetThreadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.Thread) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.Thread>;

  deleteThread(
    request: alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  appendThreadEvent(
    request: alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse>;

  listThreadEvents(
    request: alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse>;

  streamThreadEvents(
    request: alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ThreadEvent>;

}

export class ThreadServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  batchTestIamPermissions(
    request: alis_open_iam_v1_iam_pb.BatchTestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_open_iam_v1_iam_pb.BatchTestIamPermissionsResponse>;

  addIamBindings(
    request: alis_open_iam_v1_iam_pb.AddIamBindingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  removeIamBindings(
    request: alis_open_iam_v1_iam_pb.RemoveIamBindingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  listThreads(
    request: alis_a2a_extension_history_v1_history_pb.ListThreadsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.ListThreadsResponse>;

  getThread(
    request: alis_a2a_extension_history_v1_history_pb.GetThreadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.Thread>;

  deleteThread(
    request: alis_a2a_extension_history_v1_history_pb.DeleteThreadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  appendThreadEvent(
    request: alis_a2a_extension_history_v1_history_pb.AppendThreadEventRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.AppendThreadEventResponse>;

  listThreadEvents(
    request: alis_a2a_extension_history_v1_history_pb.ListThreadEventsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.ListThreadEventsResponse>;

  streamThreadEvents(
    request: alis_a2a_extension_history_v1_history_pb.StreamThreadEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ThreadEvent>;

}
