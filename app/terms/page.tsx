import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service — RepurposeTube",
  description:
    "RepurposeTube terms of service. Read the rules and conditions governing your use of the RepurposeTube application and website.",
  canonical: "https://repurposetube.com/terms",
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading mb-4 text-lg font-bold text-stone-100">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-stone-400">{children}</div>
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

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar variant="page" />
      <main className="flex-1 bg-stone-950">

        {/* Page header */}
        <div className="border-b border-stone-800 bg-stone-900/60 py-14">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-400">Legal</p>
            <h1 className="font-heading mb-3 text-3xl font-extrabold tracking-tight text-stone-50 sm:text-4xl">
              Terms of Service
            </h1>
            <p className="text-sm text-stone-500">
              Effective date: 7 April 2026 &nbsp;·&nbsp; Last updated: 7 April 2026
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">

          <div className="mb-10 rounded-xl border border-stone-800 bg-stone-900/50 p-5 text-sm leading-relaxed text-stone-400">
            <strong className="text-stone-300">Plain-English summary:</strong> Use the service fairly, don&apos;t abuse it, and don&apos;t repurpose content you don&apos;t have rights to. The generated content belongs to you. We&apos;re not liable if the AI makes a mistake — always review outputs before publishing.
          </div>

          <Section title="1. Acceptance of terms">
            <p>
              By accessing or using RepurposeTube (&ldquo;the Service&rdquo;) at repurposetube.com, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Service.
            </p>
            <p>
              These Terms form a legally binding agreement between you and RepurposeTube (&ldquo;RepurposeTube&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
          </Section>

          <Section title="2. Description of service">
            <p>
              RepurposeTube is an AI-powered content repurposing application. It accepts YouTube video URLs, retrieves publicly available video transcripts and metadata, and uses AI language models to generate written content including blog posts, social media posts, newsletter emails, YouTube SEO copy, and short-form video scripts.
            </p>
            <p>
              The Service is currently in beta. Features may change, be removed, or be temporarily unavailable without prior notice. We will make reasonable efforts to communicate significant changes.
            </p>
          </Section>

          <Section title="3. Eligibility">
            <Ul items={[
              "You must be at least 13 years old (or 16 in the EU/UK) to use the Service",
              "You must have the legal capacity to enter into a binding agreement",
              "If you are using the Service on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms",
            ]} />
          </Section>

          <Section title="4. Account registration">
            <p>To access most features of the Service, you must create an account. By registering you agree to:</p>
            <Ul items={[
              "Provide accurate, current, and complete information during registration",
              "Keep your account information up to date",
              "Maintain the security of your password and not share account credentials",
              "Notify us immediately at support@repurposetube.com if you suspect unauthorised access to your account",
              "Be responsible for all activity that occurs under your account",
            ]} />
            <p>We reserve the right to refuse registration or terminate accounts at our sole discretion.</p>
          </Section>

          <Section title="5. Acceptable use">
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>

            <p className="font-medium text-stone-300 mt-2">Content and copyright</p>
            <Ul items={[
              "Submit YouTube URLs for videos whose content you do not have the right to repurpose commercially (e.g., videos you did not create, or licensed content without appropriate rights)",
              "Use the Service to infringe the intellectual property rights of any third party",
              "Generate content that you intend to pass off as original when it is substantially derived from another creator's work without attribution",
            ]} />

            <p className="font-medium text-stone-300 mt-3">Prohibited activities</p>
            <Ul items={[
              "Use the Service to generate spam, mass unsolicited communications, or misleading content",
              "Generate content that is defamatory, harassing, abusive, threatening, obscene, or otherwise objectionable",
              "Attempt to deceive, defraud, or mislead users or third parties using AI-generated outputs",
              "Use the Service to generate disinformation, false news, or content designed to manipulate public opinion through deception",
              "Scrape, crawl, or extract data from the Service using automated means beyond normal application usage",
              "Attempt to reverse engineer, decompile, or extract the source code or underlying algorithms of the Service",
              "Attempt to gain unauthorised access to any part of the Service, its infrastructure, or other users' accounts",
              "Circumvent usage limits, rate limits, or access controls",
              "Resell, sublicense, or provide access to the Service to third parties without our explicit written permission",
              "Use the Service in any way that imposes an unreasonable or disproportionate load on our infrastructure",
            ]} />
          </Section>

          <Section title="6. Content ownership and licensing">
            <p className="font-medium text-stone-300">Your generated content</p>
            <p>Subject to these Terms, the AI-generated outputs produced by the Service for you (&ldquo;Generated Content&rdquo;) are owned by you. RepurposeTube does not claim ownership of the outputs we generate on your behalf.</p>

            <p className="font-medium text-stone-300 mt-3">Your licence to us</p>
            <p>By submitting YouTube URLs and using the Service, you grant RepurposeTube a limited, non-exclusive licence to process the associated transcript data solely for the purpose of generating your requested outputs. This licence does not extend to using your generated content for training AI models or for any other commercial purpose.</p>

            <p className="font-medium text-stone-300 mt-3">Your responsibility</p>
            <p>You are solely responsible for ensuring that:</p>
            <Ul items={[
              "You have the necessary rights to repurpose the source video content",
              "Your generated content complies with applicable laws, platform terms of service, and third-party rights before you publish it",
              "Generated content is reviewed for accuracy before public use — AI outputs can contain errors",
            ]} />
          </Section>

          <Section title="7. AI-generated content disclaimer">
            <p>
              RepurposeTube uses AI language models to generate content. AI-generated content is produced probabilistically and may:
            </p>
            <Ul items={[
              "Contain factual inaccuracies, misrepresentations, or errors",
              "Produce outputs that differ in tone, quality, or focus from what you expected",
              "Occasionally reproduce patterns that resemble existing published content",
              "Not accurately reflect nuanced professional, legal, medical, or financial advice",
            ]} />
            <p>
              Always review AI-generated content before publishing. We are not responsible for any consequences arising from the publication of unreviewed AI-generated content. RepurposeTube is a drafting tool, not a publisher.
            </p>
          </Section>

          <Section title="8. Beta service and availability">
            <p>
              The Service is currently in beta. We provide the Service on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis during beta. We make no guarantees regarding:
            </p>
            <Ul items={[
              "Uptime or availability",
              "The preservation of your data during beta (we will make reasonable efforts but beta data may be subject to loss during infrastructure changes)",
              "The continued existence of specific features",
            ]} />
            <p>We will provide reasonable notice of significant service changes or discontinuation.</p>
          </Section>

          <Section title="9. Pricing and payment">
            <p>
              The Service is currently free during beta. When paid plans are introduced:
            </p>
            <Ul items={[
              "We will notify all existing users at least 30 days before any charges are applied",
              "You will not be charged without explicitly selecting a paid plan",
              "Pricing, plan features, and billing terms will be clearly communicated before any purchase",
              "Founding members (users who sign up during beta) will receive a permanent discount from the public launch pricing, applied automatically to their account",
            ]} />
            <p>
              If you have questions about future pricing, contact us at <a href="mailto:hello@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">hello@repurposetube.com</a>.
            </p>
          </Section>

          <Section title="10. Intellectual property">
            <p>
              The RepurposeTube name, logo, website design, application code, and underlying technology are the intellectual property of RepurposeTube and are protected by applicable copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              Nothing in these Terms grants you any right to use our brand name, logo, or trademarks without our prior written consent.
            </p>
          </Section>

          <Section title="11. Third-party services and links">
            <p>
              The Service integrates with and relies on third-party services including YouTube, Supabase, Vercel, and AI API providers. Your use of those services is governed by their respective terms of service and privacy policies. We are not responsible for the availability, accuracy, or practices of third-party services.
            </p>
            <p>
              Any links to third-party websites are provided for convenience only. We do not endorse and are not responsible for third-party content or practices.
            </p>
          </Section>

          <Section title="12. Termination">
            <p className="font-medium text-stone-300">Termination by you</p>
            <p>You may delete your account at any time through your account settings. Deletion is permanent and removes all associated data in accordance with our Privacy Policy.</p>

            <p className="font-medium text-stone-300 mt-3">Termination by us</p>
            <p>We may suspend or terminate your account immediately and without notice if:</p>
            <Ul items={[
              "You violate these Terms",
              "Your use of the Service creates legal risk for us or other users",
              "You engage in abusive, fraudulent, or harmful behaviour",
              "Continued provision of the Service to you is impractical or unlawful",
            ]} />
            <p>We may terminate the Service entirely with 30 days&apos; notice unless circumstances make immediate termination necessary.</p>
          </Section>

          <Section title="13. Disclaimers">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY OF AI-GENERATED CONTENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>
          </Section>

          <Section title="14. Limitation of liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, REPURPOSETUBE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
            </p>
            <p>
              OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM (OR $50 USD IF NO PAYMENTS HAVE BEEN MADE).
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability. In such jurisdictions, our liability is limited to the greatest extent permitted by law.
            </p>
          </Section>

          <Section title="15. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless RepurposeTube and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from:
            </p>
            <Ul items={[
              "Your use of the Service",
              "Your violation of these Terms",
              "Your violation of any third-party rights, including intellectual property rights",
              "Content you generate and publish using the Service",
            ]} />
          </Section>

          <Section title="16. Governing law and disputes">
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Before initiating any formal legal proceeding, you agree to first contact us at <a href="mailto:legal@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">legal@repurposetube.com</a> and attempt to resolve the dispute informally. Most concerns can be resolved quickly this way.
            </p>
            <p>
              Any dispute that cannot be resolved informally shall be submitted to binding arbitration in accordance with the American Arbitration Association rules, unless you are located in a jurisdiction where arbitration clauses are not enforceable, in which case disputes shall be resolved in the courts of Delaware.
            </p>
          </Section>

          <Section title="17. Changes to these terms">
            <p>
              We may update these Terms from time to time. We will notify you of material changes by email at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.
            </p>
            <p>
              If you do not agree to the updated Terms, you may delete your account before the effective date.
            </p>
          </Section>

          <Section title="18. Miscellaneous">
            <p><strong className="text-stone-300">Entire agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and RepurposeTube regarding the Service.</p>
            <p><strong className="text-stone-300">Severability:</strong> If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions remain in full force.</p>
            <p><strong className="text-stone-300">Waiver:</strong> Our failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce it in the future.</p>
            <p><strong className="text-stone-300">Assignment:</strong> You may not assign your rights under these Terms without our prior written consent. We may assign our rights in connection with a merger, acquisition, or sale of assets.</p>
          </Section>

          <Section title="19. Contact">
            <p>For general enquiries:</p>
            <p><a href="mailto:hello@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">hello@repurposetube.com</a></p>
            <p className="mt-2">For legal matters:</p>
            <p><a href="mailto:legal@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">legal@repurposetube.com</a></p>
            <p className="mt-2">For privacy matters:</p>
            <p><a href="mailto:privacy@repurposetube.com" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">privacy@repurposetube.com</a></p>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
