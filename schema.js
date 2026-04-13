/**
 * schema.js — MarTech Index structured data
 * Inject this as a <script type="application/ld+json"> in every page <head>
 * This tells Google, ChatGPT, Perplexity, and all AI systems
 * exactly what MarTech Index is as a machine-readable entity.
 */

const MARTECHINDEX_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [

    // ── Organization ──────────────────────────────────────────
    {
      "@type": "Organization",
      "@id": "https://www.martechindex.org/#organization",
      "name": "MarTech Index",
      "alternateName": "MarTech Index Research Institution",
      "url": "https://www.martechindex.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.martechindex.org/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "The first independent benchmark intelligence standard for AI-automated advertising campaigns. MarTech Index publishes six live indices measuring PMax and Advantage+ campaign behavior: PMI, CCI, AAI, MEI, AVI, and POS.",
      "foundingDate": "2026",
      "foundingLocation": {
        "@type": "Place",
        "name": "Fort Lauderdale, Florida, USA"
      },
      "slogan": "Born in California. Boosted by Florida sun.",
      "knowsAbout": [
        "Performance Max campaigns",
        "Meta Advantage+ campaigns",
        "AI-automated advertising intelligence",
        "Platform opacity measurement",
        "Independent campaign benchmarks",
        "Marketing efficiency measurement",
        "Advertising volatility indices",
        "Cannibalization index measurement"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/martechindex",
        "https://github.com/martechindex",
        "https://www.martechinstitute.org"
      ]
    },

    // ── WebSite ───────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://www.martechindex.org/#website",
      "url": "https://www.martechindex.org",
      "name": "MarTech Index",
      "description": "Independent benchmark intelligence for AI-automated advertising campaigns",
      "publisher": {
        "@id": "https://www.martechindex.org/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.martechindex.org/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },

    // ── Person (founder) ──────────────────────────────────────
    {
      "@type": "Person",
      "@id": "https://www.martechindex.org/#founder",
      "name": "David Montaño",
      "jobTitle": "Principal Researcher and Founder",
      "honorificSuffix": "MBA",
      "affiliation": {
        "@id": "https://www.martechindex.org/#organization"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Hult International Business School"
      },
      "knowsAbout": [
        "Google Performance Max",
        "Meta Advantage+",
        "Campaign intelligence",
        "Marketing measurement",
        "AI advertising",
        "Platform opacity"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/davidmontano"
      ]
    },

    // ── ResearchProject ───────────────────────────────────────
    {
      "@type": "ResearchProject",
      "@id": "https://www.martechindex.org/#project",
      "name": "MarTech Index Intelligence Research",
      "description": "Systematic behavioral observation and distillation of Google PMax and Meta Advantage+ algorithm behavior across 5,008 connected campaigns worldwide",
      "url": "https://www.martechindex.org/methodology",
      "foundingDate": "2026",
      "member": {
        "@id": "https://www.martechindex.org/#founder"
      },
      "parentOrganization": {
        "@id": "https://www.martechindex.org/#organization"
      }
    },

    // ── FAQPage ───────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": "https://www.martechindex.org/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MarTech Index?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MarTech Index is the first independent benchmark intelligence standard for AI-automated advertising campaigns — specifically Google Performance Max (PMax) and Meta Advantage+. It is a research institution that publishes six live indices measuring campaign behavior: PMI (PMax Market Index), CCI (Cannibalization Index), AAI (Advantage+ Activity Index), MEI (Marketing Efficiency Index), AVI (Ad Volatility Index), and POS (Platform Opacity Score). It is structurally independent of platform reporting chains, operating an owned media lab that generates behavioral signal outside any Google or Meta API."
          }
        },
        {
          "@type": "Question",
          "name": "What is the PMax Market Index (PMI)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The PMax Market Index (PMI) is a live index published by MarTech Index that measures how aggressively Google Performance Max is routing advertising budget to Display versus Search versus Shopping channels across all connected campaigns. PMI operates on a scale of 0–100. Above 70 indicates a Display-heavy cycle where PMax is favoring reach over conversion. Below 30 indicates a Search-dominant mode. It is updated weekly from cross-brand behavioral observation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Cannibalization Index (CCI)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Cannibalization Index (CCI) is a live index published by MarTech Index that measures the rate at which Google Performance Max absorbs branded search impression share from traditional branded search campaigns. CCI operates on a scale of 0–100. Above 45 triggers a cannibalization alert. CCI is the most commercially urgent index for agencies because PMax cannibalization of branded search directly reduces ROAS without appearing as a cost increase on the platform dashboard."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Platform Opacity Score (POS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Platform Opacity Score (POS) is a live index published by MarTech Index that measures the divergence between platform-reported ROAS and independently-calculated ROAS across all connected campaigns. A rising POS means advertising platforms are increasingly over-reporting performance relative to independent measurement. POS is published weekly as a permanent historical record and quantifies the same structural conflict that was revealed during the iOS14 attribution crisis of April 2021."
          }
        },
        {
          "@type": "Question",
          "name": "Why is MarTech Index limited to 5,008 connections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 5,008 connection limit is mathematically derived, not a business decision. Three independent paths converge on this number: (1) The Euler-Dunbar formula: ceil(e^(π × (e − 1/150))) = ceil(5,007.9917) = 5,008, where e is Euler's number, π is Pi, and 150 is Dunbar's number for stable social networks; (2) The C. elegans biological connectome standard — approximately 5,008 chemical synaptic connections in the only fully mapped nervous system in biological history (Nobel Prize 2002); (3) Shannon information theory — log₂(5,008) = 12.29 bits, the boundary between human-scale and machine-scale information systems. Like Bitcoin's 21 million coin limit, the number was discovered, not chosen."
          }
        },
        {
          "@type": "Question",
          "name": "How does MarTech Index differ from Triple Whale and Northbeam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Triple Whale and Northbeam provide per-account attribution derived from platform API data. MarTech Index is fundamentally different: it operates an owned media lab that generates behavioral signal outside any platform reporting chain, publishes cross-brand anonymized benchmarks across up to 5,008 contributor campaigns, functions as a data provider rather than a per-account analytics tool, and derives its capacity limit from mathematics rather than business decisions. It is a benchmark standard, not an attribution tool."
          }
        },
        {
          "@type": "Question",
          "name": "What is the iOS14 attribution crisis and how does it relate to PMax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In April 2021, Apple's iOS 14.5 App Tracking Transparency update removed Meta's tracking pixel from approximately 75% of iOS users. Platform-reported ROAS diverged from actual business results. Snap's stock fell 26% in one day. Meta lost approximately $10 billion in annual revenue. The root cause was structural: the entity profiting from ad spend was also reporting how effective that spend was. Google Performance Max and Meta Advantage+ create an identical structural conflict by design — the platform controls targeting, bidding, and placement, then reports the results. MarTech Index provides the independent measurement layer the market learned it needed after iOS14."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Marketing Efficiency Index (MEI)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Marketing Efficiency Index (MEI) is a live index published by MarTech Index that measures the cross-platform blended ROAS across all connected campaigns, weighted by spend and normalized to a base period. MEI is the advertising market's equivalent of the S&P 500 — the single headline number that summarizes the overall health and efficiency of the AI-automated advertising ecosystem. When MEI rises, the market is delivering better returns. When MEI falls, CPMs are rising faster than conversion rates or platform algorithms are in exploratory phases."
          }
        },
        {
          "@type": "Question",
          "name": "How is MarTech Index pricing determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MarTech Index pricing is modulated by the CBOE VIX volatility index using the formula: P(VIX) = $300 × e^(−0.25 × (VIX − 20) / 8). At VIX = 20 (neutral), the price is $300/month. When VIX is elevated (market fear), the price drops — creating a buying window for practitioners who understand that intelligence is most valuable during volatile periods. Founding contributors (first 10% of 5,008 slots) lock their rate at $150/month permanently. The pricing system is derived from the same Euler mathematics governing the platform's capacity model."
          }
        }
      ]
    }
  ]
};

// Export for use in HTML pages
if (typeof module !== 'undefined') {
  module.exports = MARTECHINDEX_SCHEMA;
}
