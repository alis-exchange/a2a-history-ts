import * as grpcWeb from 'grpc-web';

import * as alis_a2a_extension_history_v1_history_pb from '../../../../../alis/a2a/extension/history/v1/history_pb'; // proto import: "alis/a2a/extension/history/v1/history.proto"
import * as alis_open_iam_v1_iam_pb from '../../../../../alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"


export class A2AHistoryServiceClient {
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

  listA2AHistories(
    request: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse>;

  getA2AHistory(
    request: alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.A2AHistory) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.A2AHistory>;

  deleteA2AHistory(
    request: alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.A2AHistory) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.A2AHistory>;

  appendEvent(
    request: alis_a2a_extension_history_v1_history_pb.AppendEventRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.AppendEventResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.AppendEventResponse>;

  listEvents(
    request: alis_a2a_extension_history_v1_history_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_a2a_extension_history_v1_history_pb.ListEventsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.ListEventsResponse>;

  streamEvents(
    request: alis_a2a_extension_history_v1_history_pb.StreamEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent>;

}

export class A2AHistoryServicePromiseClient {
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

  listA2AHistories(
    request: alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.ListA2AHistoriesResponse>;

  getA2AHistory(
    request: alis_a2a_extension_history_v1_history_pb.GetA2AHistoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.A2AHistory>;

  deleteA2AHistory(
    request: alis_a2a_extension_history_v1_history_pb.DeleteA2AHistoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.A2AHistory>;

  appendEvent(
    request: alis_a2a_extension_history_v1_history_pb.AppendEventRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.AppendEventResponse>;

  listEvents(
    request: alis_a2a_extension_history_v1_history_pb.ListEventsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_a2a_extension_history_v1_history_pb.ListEventsResponse>;

  streamEvents(
    request: alis_a2a_extension_history_v1_history_pb.StreamEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<alis_a2a_extension_history_v1_history_pb.A2AHistoryEvent>;

}

