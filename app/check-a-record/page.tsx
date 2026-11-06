import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function CheckARecord() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Check a record" title="You do not have to take our word for it.">
        <p>
          Every decision Parmana records can be checked by anyone who has been given it. You do not need an account
          with us, and you do not need an internet connection to check it.
        </p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <ol className="steps">
            <li>
              <h2>Get the record</h2>
              <p className="body">The organisation that ran the action gives you the record it kept.</p>
            </li>
            <li>
              <h2>Check it on your own computer</h2>
              <p className="body">The check compares the record with the rules and the approvals it refers to.</p>
            </li>
            <li>
              <h2>Know what happened</h2>
              <p className="body">You see what was requested, who approved it, and what was done. Nothing is hidden.</p>
            </li>
          </ol>
        </div>
      </section>

      <CallToAction
        heading="Need help checking a record?"
        text="Send us the record and we will explain what it shows."
      />

      <SiteFooter />
    </main>
  );
}
