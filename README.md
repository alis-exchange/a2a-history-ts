# a2a-history

TypeScript/JavaScript client and protobuf definitions for the **A2A History API** — an extension for managing agent-to-agent (A2A) conversation histories and their events.

## Overview

This package provides:

- **Generated protobuf types** (`alis/a2a/extension/history/v1/`) — Message classes and `AsObject` types for history resources, events, and requests/responses
- **JSON-RPC transport** (`transport/jsonrpc/`) — HTTP JSON-RPC 2.0 client for calling the A2A history service

## Installation

```bash
pnpm add @alis-build/a2a-history
# or
npm install @alis-build/a2a-history
```

### Peer dependencies

- `google-protobuf` — protobuf runtime
- `grpc-web` / `@grpc/grpc-js` — gRPC support (if using gRPC transport)
- `@alis-build/google-common-protos` — shared Google API protos

## Import paths

- JSON-RPC client: `@alis-build/a2a-history/transport/jsonrpc` (or `@alis-build/a2a-history/dist/transport/jsonrpc` if built)
- Protobuf types: `@alis-build/a2a-history/alis/a2a/extension/history/v1/history_pb`

## Quick start

```typescript
import {
  A2AHistoryClient,
  JsonRpcProtocolError,
  JsonRpcTransportError,
} from "@alis-build/a2a-history/transport/jsonrpc";

const client = new A2AHistoryClient({
  baseUrl: "https://api.example.com",
  // Optional: bearer token when not behind auth gateway
  getToken: async () => (await getAuthToken()).accessToken,
});

// Fetch a single history by resource name
const history = await client.getHistory({ name: "histories/abc123" });

// List histories with pagination
const { historiesList, nextPageToken } = await client.listHistories({
  parent: "agents/xyz",
  pageSize: 20,
  pageToken: "",
});

// List events within a history
const { eventsList } = await client.listEvents({
  parent: "histories/abc123",
  pageSize: 50,
});
```

## JSON-RPC client

### Configuration

| Option      | Type                             | Required | Description                                                                 |
|-------------|----------------------------------|----------|-----------------------------------------------------------------------------|
| `baseUrl`   | `string`                         | Yes      | Base URL of the A2A history service (e.g. `https://api.example.com`). No trailing slash. |
| `getToken`  | `() => string \| Promise<string>` | No       | Bearer token provider. Use when calling the service directly (not via auth gateway). Can be async for token refresh. |

### API methods

| Method           | JSON-RPC method           | Description                                          |
|------------------|---------------------------|------------------------------------------------------|
| `getHistory`     | `history/get`             | Get a single history by resource name                |
| `listHistories`  | `history/list`            | List histories with optional filtering & pagination |
| `listEvents`     | `history/events/list`     | List events within a history with pagination        |

### Error handling

Two error types can be thrown:

- **`JsonRpcTransportError`** — Network failure, non-2xx HTTP response, or invalid JSON in the response. Has optional `status` for HTTP status code (e.g. 401, 500).
- **`JsonRpcProtocolError`** — Server returned a JSON-RPC error object (e.g. method not found, invalid params). Has `code` and `data` for application-level handling.

```typescript
try {
  const history = await client.getHistory({ name: "histories/123" });
} catch (err) {
  if (err instanceof JsonRpcTransportError) {
    console.error("HTTP/network:", err.message, err.status);
  } else if (err instanceof JsonRpcProtocolError) {
    console.error("RPC error:", err.code, err.message, err.data);
  }
}
```

### Endpoint

All requests are sent as HTTP POST to:

```
{baseUrl}/extensions/a2ahistory
```

## Protobuf types

The generated protobuf definitions live under `alis/a2a/extension/history/v1/` and include:

- **Resources:** `A2AHistory`, `Thread`, `ThreadEvent`
- **Requests/responses:** `GetA2AHistoryRequest`, `ListA2AHistoriesRequest`, `ListEventsRequest`, etc.

Use `.AsObject` types for plain JSON-like objects returned by the JSON-RPC client.

## Project structure

```
a2a-history-ts/
├── alis/a2a/extension/history/v1/   # Generated protobuf code
│   ├── history_pb.js / .d.ts       # Message types
│   ├── history_grpc_pb.js / .d.ts  # gRPC Node
│   └── history_grpc_web_pb.js / .d.ts  # gRPC-Web
├── transport/jsonrpc/               # JSON-RPC transport
│   ├── client.ts                   # A2AHistoryClient
│   ├── types.ts                    # JsonRpc* types, config
│   └── index.ts                    # Public exports
├── package.json
└── README.md
```

## License

Internal Alis Build package.