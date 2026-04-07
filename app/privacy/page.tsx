import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy — RepurposeTube",
  description:
    "RepurposeTube privacy policy. Learn what data we collect, how we use it, how we protect it, and your rights as a user.",
  canonical: "https://repurposetube.com/privacy",
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading mb-4 text-lg font-bold text-stone-100">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-stone-400">{children}</div>
    </div>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="mb-1.5 text-sm font-semibold text-stone-300">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar variant="page" />
      <main className="flex-1 bg-stone-950">

        {/* Page header */}
        <div className="border-b border-stone-800 bg-stone-900/60 py-14">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-400">Legal</p>
            <h1 className="font-heading mb-3 text-3xl font-extrabold tracking-tight text-stone-50 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-stone-500">
              Effective date: 7 April 2026 &nbsp;·&nbsp; Last updated: 7 April 2026
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">

          <div className="mb-10 rounded-xl border border-stone-800 bg-stone-900/50 p-5 text-sm leading-relaxed text-stone-400">
            <strong className="text-stone-300">Plain-English summary:</strong> We collect the minimum data needed to run the service. We don&apos;t sell your data. We don&apos;t show you ads. The YouTube URLs and transcripts you submit are used only to generate your content — we don&apos;t store the raw transcript beyond the generation run.
          </div>

          <Section title="1. Who we are">
            <p>
              RepurposeTube (&ldquo;RepurposeTube&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at repurposetube.com and the RepurposeTube application. We are the data controller for personal data collected through this service.
            </p>
            <p>
              For privacy matters, contact us at:{" "}
              <a href="mailto:privacy@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">
                privacy@repurposetube.com
              </a>
            </p>
          </Section>

          <Section title="2. Data we collect">
            <Sub title="2.1 Account data">
              <p>When you create an account we collect:</p>
              <Ul items={[
                "Email address",
                "Password (stored as a cryptographic hash — we never store your plain-text password)",
                "If you sign in with Google: your Google account email, display name, and profile picture URL provided by Google OAuth",
                "Account creation timestamp",
              ]} />
            </Sub>

            <Sub title="2.2 Content you submit">
              <p>When you use the service we process:</p>
              <Ul items={[
                "YouTube video URLs you submit",
                "The video transcript fetched from YouTube's public caption data (used only to generate your outputs — not retained beyond the active generation job)",
                "Video metadata (title, thumbnail URL) fetched from YouTube's oEmbed API",
              ]} />
            </Sub>

            <Sub title="2.3 Generated content">
              <p>We store the AI-generated outputs we produce for you so you can access your history. This includes:</p>
              <Ul items={[
                "Blog posts, Twitter threads, LinkedIn posts, YouTube SEO packages, newsletter emails, and Shorts scripts generated for each video",
                "The video URL and metadata associated with each result",
                "Timestamps of generation runs",
              ]} />
            </Sub>

            <Sub title="2.4 Usage and technical data">
              <p>We automatically collect:</p>
              <Ul items={[
                "Pages you visit and features you use within the application",
                "Your IP address",
                "Browser type, version, and operating system",
                "Referring URL",
                "Session duration and activity timestamps",
              ]} />
            </Sub>
          </Section>

          <Section title="3. How we use your data">
            <Ul items={[
              "To create and manage your account and authenticate your sessions",
              "To fetch YouTube transcripts and generate AI content on your behalf",
              "To store and display your generation history",
              "To send transactional emails (account confirmation, password reset, material service updates)",
              "To detect, investigate, and prevent abuse, fraud, and security incidents",
              "To improve the product — understanding how features are used helps us prioritise what to build",
              "To comply with legal obligations",
            ]} />
            <p className="mt-3">
              We do not use your data to serve advertising. We do not sell, rent, or trade your personal data to any third party for their own marketing purposes. We work with trusted infrastructure and technology service providers who process data only as necessary to operate the service on our behalf.
            </p>
          </Section>

          <Section title="4. Legal basis for processing (GDPR)">
            <p>For users in the European Economic Area and United Kingdom, our legal basis for processing is:</p>
            <Ul items={[
              "Contract performance — to deliver the service you signed up for",
              "Legitimate interests — to operate, secure, and improve the service",
              "Legal obligation — where applicable law requires it",
              "Consent — for any processing we explicitly ask your permission for",
            ]} />
          </Section>

          <Section title="5. Data retention">
            <Ul items={[
              "Account data: retained while your account is active, and deleted within 30 days of account deletion",
              "Generated content and history: retained for as long as your account is active. You can delete individual history items at any time",
              "Raw YouTube transcripts: not retained — used only during the active generation job and discarded immediately after",
              "Usage logs: retained for 90 days for security and debugging purposes",
              "Email communications: retained as required for legal and support purposes",
            ]} />
          </Section>

          <Section title="6. Cookies and local storage">
            <p>We use the following browser storage mechanisms:</p>
            <Ul items={[
              "Session cookie: a secure, HTTP-only cookie to maintain your authenticated session. This cookie is strictly necessary for the service to function",
              "No advertising cookies, no third-party tracking pixels, no analytics cookies from ad networks",
            ]} />
            <p>We do not use advertising or analytics tracking services.</p>
          </Section>

          <Section title="7. Data security">
            <Ul items={[
              "All data in transit is encrypted using TLS 1.2 or higher",
              "Passwords are hashed using a secure cryptographic algorithm before storage — we never store plain-text passwords",
              "Database access is restricted to application services using row-level security policies",
              "We do not store payment card data",
              "Internal access to production data is limited to authorised team members",
            ]} />
            <p>No system can guarantee 100% security. In the event of a data breach that affects your personal data, we will notify you as required by applicable law.</p>
          </Section>

          <Section title="8. Your rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>

            <Sub title="Right of access">
              <p>You can request a copy of the personal data we hold about you.</p>
            </Sub>
            <Sub title="Right to rectification">
              <p>You can correct inaccurate personal data through your account settings or by contacting us.</p>
            </Sub>
            <Sub title="Right to erasure">
              <p>You can delete your account and all associated data at any time from your account settings. We will delete your data within 30 days.</p>
            </Sub>
            <Sub title="Right to data portability">
              <p>You can request an export of your generated content and account data.</p>
            </Sub>
            <Sub title="Right to object / restrict processing">
              <p>You can object to certain types of processing by contacting us.</p>
            </Sub>
            <Sub title="California residents (CCPA)">
              <p>California residents have additional rights under the California Consumer Privacy Act, including the right to know what data is collected and the right to opt out of data sale (we do not sell data). To exercise these rights, email privacy@repurposetube.com.</p>
            </Sub>

            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:privacy@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">privacy@repurposetube.com</a>. We will respond within 30 days.</p>
          </Section>

          <Section title="9. Children's privacy">
            <p>RepurposeTube is not directed at children under the age of 13 (or 16 in the EU/UK). We do not knowingly collect personal data from children. If you believe a child has created an account, please contact us and we will delete the account and associated data immediately.</p>
          </Section>

          <Section title="10. International data transfers">
            <p>RepurposeTube is operated from and our primary infrastructure is located in the United States. If you are located in the European Economic Area, United Kingdom, or Switzerland, your data may be transferred to and processed in the United States. We rely on appropriate safeguards (including Standard Contractual Clauses where applicable) for these transfers.</p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>We may update this Privacy Policy from time to time. For material changes — changes that affect how we collect, use, or share your data in ways that are less protective than this policy — we will notify you by email at least 30 days before the change takes effect.</p>
            <p>The date at the top of this page reflects when the policy was last updated. Continued use of the service after a change constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="12. Contact">
            <p>For privacy-related questions, data requests, or concerns:</p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">
                privacy@repurposetube.com
              </a>
            </p>
            <p>We aim to respond to all privacy enquiries within 5 business days.</p>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
