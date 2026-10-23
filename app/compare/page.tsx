import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Parmana compares to other approaches | Parmana Systems",
  description: "A comparison of Parmana with three common ways teams try to control AI agent actions, and what each one leaves out.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <main className="question-page">
      <h1>How Parmana compares</h1>
      <p>
        Teams usually control AI agent actions in one of three ways. This page compares each with Parmana
        on the points a security reviewer asks about. It describes categories, not named products.
      </p>

      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>API key and logs</th>
            <th>Prompt or output filter</th>
            <th>Approval workflow without signed records</th>
            <th>Parmana</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Is each action checked against a stated rule before it runs?</td>
            <td>No. Logs show what happened after the fact.</td>
            <td>Checks the text, not the business action.</td>
            <td>Only where a person is asked.</td>
            <td>Yes. A named, versioned policy decides, and the policy content is recorded.</td>
          </tr>
          <tr>
            <td>Does a person approve the action, and is that approval recorded?</td>
            <td>No.</td>
            <td>No.</td>
            <td>Usually recorded as a log entry.</td>
            <td>Yes. The approval is a signature, checked before the action is released.</td>
          </tr>
          <tr>
            <td>Can a third party verify the record without your system?</td>
            <td>Only if you export and share the logs.</td>
            <td>No.</td>
            <td>Usually no.</td>
            <td>Yes. Public keys and verification endpoints let a third party check a record.</td>
          </tr>
          <tr>
            <td>What happens when a check cannot run?</td>
            <td>Not applicable.</td>
            <td>Varies.</td>
            <td>Varies.</td>
            <td>The action is refused.</td>
          </tr>
        </tbody>
      </table>

      <h2>What Parmana does not do</h2>
      <p>
        Parmana does not prove a policy is correct, and it does not prove that the external system carried
        out an action. It records what was checked, approved, and released. See the{" "}
        <Link href="/security">security review page</Link> for the full list.
      </p>
    </main>
  );
}
