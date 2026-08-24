# FAQ to Code Map

Note: several file paths assumed in the original task prompt don't exist in `parmana-exp` as named
(`PolicyEngine.ts`, `VerificationService.ts`, and `EnvelopeVerifier.ts` are not under
`execution-gateway/src` or `execution-control/src`). A repo-wide search found the real locations
below; `VerificationService.ts` doesn't exist anywhere in the repo — `EnvelopeVerifier` +
`GatewayVerificationResult` are the actual verification-evidence types.

| FAQ | Key Claim | Actual Code Files Checked |
|---|---|---|
| 1 | Checks action against business rules before it happens | `execution-gateway/src/ExecutionGateway.ts` (`verify`/`execute`), `policy/src/PolicyEngine.ts` |
| 2 | Agent doesn't get direct authority to move money | `execution-control/src/SessionCredentialVault.ts`, `execution-control/src/SessionCredentialSecureConnector.ts` |
| 3 | Request must pass rules even if guardrails fail | `execution-control/src/ConnectorPolicy.ts` (`DefaultConnectorPolicy.assertAllowed`), `execution-gateway/src/ExecutionGateway.ts` |
| 4 | Capability does not become authority | `policy/src/types/Policy.ts` (`PolicyOperator` doc comment), `policy/src/PolicyEngine.ts`, `policy/src/types/PolicySignals.ts` |
| 5 | Works regardless of AI vendor/model | Same as FAQ 4, plus a repo-wide grep for model/vendor coupling in `policy`, `execution-gateway`, `execution-control` (none found) |
| 6 | Matches rules → proceeds; else refused | `policy/src/PolicyEngine.ts` (`PolicyOutcome`), `execution-gateway/src/ExecutionGateway.ts` |
| 7 | Checked before execution, can be stopped | Same as FAQ 1/3 |
| 8 | Works for any request source | `policy/src/types/PolicySignals.ts`, `shared/src/domain/executable-content.ts` |
| 9 | Records decision before action, evidence of what was authorized | `execution-gateway/src/ExecutionGateway.ts`, `execution-control/src/MemoryExecutionAuditSink.ts`, `receipt/src/ReceiptEngine.ts`, `replay/src/ReplayEngine.ts`, `storage/src/` (postgres/supabase backends) |
| 10 | Verifiable evidence, doesn't replace compliance program | Same as FAQ 9 |
| 11 | Kill switch vs. individual-action check | `execution-control/src/ConnectorPolicy.ts`, `execution-gateway/src/ExecutionGateway.ts` |
| 12 | Can run in customer's cloud/infrastructure | `parmana-exp/Dockerfile`, `parmana-exp/docker/` |
| 13 | Crypto can evolve without changing business rules | `crypto/src/providers/signature/Ed25519SignatureProvider.ts`, `Dilithium3SignatureProvider.ts`, `HybridSignatureProvider.ts`, `SignatureRegistry.ts`, `envelope-verifier/src/EnvelopeVerifier.ts` (`keyProvider`/`keyId` rotation) |
| 14 | Authority belongs to the business, not Parmana | `parmana-exp/Dockerfile` (keys/ deliberately excluded from image), `policy/src/FilePolicyRepository.ts` |
| 15 | Works alongside existing systems | `execution-gateway/src/Connector.ts` (interface doc comment), `execution-gateway/src/HttpConnector.ts` |
| 16 | Can protect non-payment actions | `shared/src/domain/executable-content.ts`, `connector-github/src/`, `connector-hubspot/src/` |
