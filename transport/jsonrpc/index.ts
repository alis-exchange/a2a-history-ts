/**
 * A2A History JSON-RPC transport.
 *
 * Re-exports the client, error types, and configuration interfaces for the
 * JSON-RPC 2.0 A2A history API.
 */
export {
  A2AHistoryClient,
  JsonRpcProtocolError,
  JsonRpcTransportError,
} from "./client";
export type {
  A2AHistoryClientConfig,
  JsonRpcError,
  JsonRpcRequest,
  JsonRpcResponse,
} from "./types";
