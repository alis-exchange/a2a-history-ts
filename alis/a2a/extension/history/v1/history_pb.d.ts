import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_iam_v1_policy_pb from '@alis-build/google-common-protos/google/iam/v1/policy_pb'; // proto import: "google/iam/v1/policy.proto"
import * as google_iam_v1_iam_policy_pb from '@alis-build/google-common-protos/google/iam/v1/iam_policy_pb'; // proto import: "google/iam/v1/iam_policy.proto"
import * as alis_open_iam_v1_iam_pb from '@open.alis.services/protobuf/alis/open/iam/v1/iam_pb'; // proto import: "alis/open/iam/v1/iam.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as lf_a2a_v1_a2a_pb from '@alis-build/a2a/lf/a2a/v1/a2a_pb'; // proto import: "lf/a2a/v1/a2a.proto"


export class A2AHistory extends jspb.Message {
  getName(): string;
  setName(value: string): A2AHistory;

  getDisplayName(): string;
  setDisplayName(value: string): A2AHistory;

  getAgentId(): string;
  setAgentId(value: string): A2AHistory;

  getAgentDisplayName(): string;
  setAgentDisplayName(value: string): A2AHistory;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): A2AHistory;
  hasCreateTime(): boolean;
  clearCreateTime(): A2AHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): A2AHistory.AsObject;
  static toObject(includeInstance: boolean, msg: A2AHistory): A2AHistory.AsObject;
  static serializeBinaryToWriter(message: A2AHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): A2AHistory;
  static deserializeBinaryFromReader(message: A2AHistory, reader: jspb.BinaryReader): A2AHistory;
}

export namespace A2AHistory {
  export type AsObject = {
    name: string,
    displayName: string,
    agentId: string,
    agentDisplayName: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class A2AHistoryEvent extends jspb.Message {
  getName(): string;
  setName(value: string): A2AHistoryEvent;

  getTask(): lf_a2a_v1_a2a_pb.Task | undefined;
  setTask(value?: lf_a2a_v1_a2a_pb.Task): A2AHistoryEvent;
  hasTask(): boolean;
  clearTask(): A2AHistoryEvent;

  getMessage(): lf_a2a_v1_a2a_pb.Message | undefined;
  setMessage(value?: lf_a2a_v1_a2a_pb.Message): A2AHistoryEvent;
  hasMessage(): boolean;
  clearMessage(): A2AHistoryEvent;

  getStatusUpdate(): lf_a2a_v1_a2a_pb.TaskStatusUpdateEvent | undefined;
  setStatusUpdate(value?: lf_a2a_v1_a2a_pb.TaskStatusUpdateEvent): A2AHistoryEvent;
  hasStatusUpdate(): boolean;
  clearStatusUpdate(): A2AHistoryEvent;

  getArtifactUpdate(): lf_a2a_v1_a2a_pb.TaskArtifactUpdateEvent | undefined;
  setArtifactUpdate(value?: lf_a2a_v1_a2a_pb.TaskArtifactUpdateEvent): A2AHistoryEvent;
  hasArtifactUpdate(): boolean;
  clearArtifactUpdate(): A2AHistoryEvent;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): A2AHistoryEvent;
  hasCreateTime(): boolean;
  clearCreateTime(): A2AHistoryEvent;

  getPayloadCase(): A2AHistoryEvent.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): A2AHistoryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: A2AHistoryEvent): A2AHistoryEvent.AsObject;
  static serializeBinaryToWriter(message: A2AHistoryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): A2AHistoryEvent;
  static deserializeBinaryFromReader(message: A2AHistoryEvent, reader: jspb.BinaryReader): A2AHistoryEvent;
}

export namespace A2AHistoryEvent {
  export type AsObject = {
    name: string,
    task?: lf_a2a_v1_a2a_pb.Task.AsObject,
    message?: lf_a2a_v1_a2a_pb.Message.AsObject,
    statusUpdate?: lf_a2a_v1_a2a_pb.TaskStatusUpdateEvent.AsObject,
    artifactUpdate?: lf_a2a_v1_a2a_pb.TaskArtifactUpdateEvent.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    TASK = 2,
    MESSAGE = 3,
    STATUS_UPDATE = 4,
    ARTIFACT_UPDATE = 5,
  }
}

export class GetA2AHistoryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetA2AHistoryRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetA2AHistoryRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetA2AHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetA2AHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetA2AHistoryRequest): GetA2AHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetA2AHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetA2AHistoryRequest;
  static deserializeBinaryFromReader(message: GetA2AHistoryRequest, reader: jspb.BinaryReader): GetA2AHistoryRequest;
}

export namespace GetA2AHistoryRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteA2AHistoryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteA2AHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteA2AHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteA2AHistoryRequest): DeleteA2AHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteA2AHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteA2AHistoryRequest;
  static deserializeBinaryFromReader(message: DeleteA2AHistoryRequest, reader: jspb.BinaryReader): DeleteA2AHistoryRequest;
}

export namespace DeleteA2AHistoryRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListA2AHistoriesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListA2AHistoriesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListA2AHistoriesRequest;

  getAgentId(): string;
  setAgentId(value: string): ListA2AHistoriesRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListA2AHistoriesRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListA2AHistoriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListA2AHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListA2AHistoriesRequest): ListA2AHistoriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListA2AHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListA2AHistoriesRequest;
  static deserializeBinaryFromReader(message: ListA2AHistoriesRequest, reader: jspb.BinaryReader): ListA2AHistoriesRequest;
}

export namespace ListA2AHistoriesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    agentId: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListA2AHistoriesResponse extends jspb.Message {
  getHistoriesList(): Array<A2AHistory>;
  setHistoriesList(value: Array<A2AHistory>): ListA2AHistoriesResponse;
  clearHistoriesList(): ListA2AHistoriesResponse;
  addHistories(value?: A2AHistory, index?: number): A2AHistory;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListA2AHistoriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListA2AHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListA2AHistoriesResponse): ListA2AHistoriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListA2AHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListA2AHistoriesResponse;
  static deserializeBinaryFromReader(message: ListA2AHistoriesResponse, reader: jspb.BinaryReader): ListA2AHistoriesResponse;
}

export namespace ListA2AHistoriesResponse {
  export type AsObject = {
    historiesList: Array<A2AHistory.AsObject>,
    nextPageToken: string,
  }
}

export class GetA2AHistoryEventRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetA2AHistoryEventRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetA2AHistoryEventRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetA2AHistoryEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetA2AHistoryEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetA2AHistoryEventRequest): GetA2AHistoryEventRequest.AsObject;
  static serializeBinaryToWriter(message: GetA2AHistoryEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetA2AHistoryEventRequest;
  static deserializeBinaryFromReader(message: GetA2AHistoryEventRequest, reader: jspb.BinaryReader): GetA2AHistoryEventRequest;
}

export namespace GetA2AHistoryEventRequest {
  export type AsObject = {
    name: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListEventsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListEventsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListEventsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListEventsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListEventsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
  static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListEventsResponse extends jspb.Message {
  getEventsList(): Array<A2AHistoryEvent>;
  setEventsList(value: Array<A2AHistoryEvent>): ListEventsResponse;
  clearEventsList(): ListEventsResponse;
  addEvents(value?: A2AHistoryEvent, index?: number): A2AHistoryEvent;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
  static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
  export type AsObject = {
    eventsList: Array<A2AHistoryEvent.AsObject>,
    nextPageToken: string,
  }
}

export class StreamEventsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): StreamEventsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): StreamEventsRequest;
  hasReadMask(): boolean;
  clearReadMask(): StreamEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamEventsRequest): StreamEventsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamEventsRequest;
  static deserializeBinaryFromReader(message: StreamEventsRequest, reader: jspb.BinaryReader): StreamEventsRequest;
}

export namespace StreamEventsRequest {
  export type AsObject = {
    parent: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class AppendEventRequest extends jspb.Message {
  getEvent(): A2AHistoryEvent | undefined;
  setEvent(value?: A2AHistoryEvent): AppendEventRequest;
  hasEvent(): boolean;
  clearEvent(): AppendEventRequest;

  getAgentId(): string;
  setAgentId(value: string): AppendEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppendEventRequest): AppendEventRequest.AsObject;
  static serializeBinaryToWriter(message: AppendEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendEventRequest;
  static deserializeBinaryFromReader(message: AppendEventRequest, reader: jspb.BinaryReader): AppendEventRequest;
}

export namespace AppendEventRequest {
  export type AsObject = {
    event?: A2AHistoryEvent.AsObject,
    agentId: string,
  }
}

export class AppendEventResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppendEventResponse): AppendEventResponse.AsObject;
  static serializeBinaryToWriter(message: AppendEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendEventResponse;
  static deserializeBinaryFromReader(message: AppendEventResponse, reader: jspb.BinaryReader): AppendEventResponse;
}

export namespace AppendEventResponse {
  export type AsObject = {
  }
}
