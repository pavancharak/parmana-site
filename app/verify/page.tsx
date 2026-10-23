import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Check a Parmana record yourself | Parmana Systems",
  description: "Run the Parmana verifier offline to check an Execution Trust Record's hash and signatures. No network calls, no Parmana account.",
  alternates: { canonical: "/verify" },
};

export default function VerifyPage() {
  return (
    <main className="question-page">
      <h1>Check a Parmana record yourself</h1>
      <p>
        A Parmana record is only useful if you can check it without trusting Parmana. The verifier does
        that. It recomputes the record&apos;s hash and checks its Ed25519 signature, and its ML-DSA-65
        signature where one is present, against keys you pin in a trust file. It makes no network calls.
      </p>

      <h2>Run a valid record</h2>
      <pre><code>{`node bin/parmana-verify.mjs test/vectors/record-whole-record-v3.json test/vectors/trust-whole-record.json`}</code></pre>
      <p>Output, exit code 0:</p>
      <pre><code>{`{"valid":true,"coverage":"full","errors":[],"checks":{"trustRecordHash":true,"signature":true,"hybridSignatures":true}}`}</code></pre>

      <h2>Run a changed record</h2>
      <pre><code>{`node bin/parmana-verify.mjs test/vectors/record-tampered-amount.json test/vectors/trust.json`}</code></pre>
      <p>
        Output, exit code 1. The record was changed after it was signed, so the hash and signatures no
        longer match, and the verifier lists each failed check.
      </p>

      <h2>Before you use it on real records</h2>
      <ul>
        <li>Requires Node.js 24 or later. ML-DSA-65 checks also need OpenSSL 3.5 or later.</li>
        <li>The files under <code>test/vectors</code> are test material. Use your own records and pin the keys you trust.</li>
        <li>Pinning a key means adding it, with its fingerprint and validity dates, to your trust file.</li>
      </ul>

      <p>
        Source, installation and key-pinning instructions are in the{" "}
        <a href="https://github.com/pavancharak/parmana-verifier" target="_blank" rel="noreferrer">verifier repository</a>.
        For what a signed record does and does not prove, see the <Link href="/security">security review page</Link>.
      </p>
    </main>
  );
}
