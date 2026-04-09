import { SiteHeader } from './components/layout/SiteHeader';
import { HeroSection } from './components/sections/HeroSection';
import { StorySplitSection } from './components/sections/StorySplitSection';
import { OfferingsSection } from './components/sections/OfferingsSection';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { NewsletterSection } from './components/sections/NewsletterSection';
import { HighlightWord } from './components/shared/HighlightWord';
import {
  featureSections,
  footerColumns,
  heroSection,
  navLinks,
  offeringRows,
  testimonialSection,
} from './data/siteContent';

function App() {
  return (
    <div className="page-shell">
      <div className="page-wire page-wire--left" aria-hidden="true" />
      <div className="page-wire page-wire--mid" aria-hidden="true" />
      <div className="page-wire page-wire--bottom" aria-hidden="true" />

      <SiteHeader brand="Elementum" links={navLinks} />

      <main>
        <HeroSection
          id="home"
          title={
            <>
              <span>The thinkers and</span>
              <span>
                doers were <HighlightWord tone="pink">changing</HighlightWord>
              </span>
              <span>
                the <HighlightWord tone="mint">status</HighlightWord> Quo with
              </span>
            </>
          }
          subtitle={heroSection.subtitle}
          heroImage={heroSection.image}
        />

        <div className="content-stack">
          <StorySplitSection
            id="studio"
            title={
              <>
                Tomorrow should
                <br />
                be better than <HighlightWord tone="mint">today</HighlightWord>
              </>
            }
            body={featureSections[0].body}
            image={featureSections[0].image}
            accentShape="skewed"
            imageAlign="right"
            imageClassName="image-circle--story-primary"
          />

          <StorySplitSection
            title={
              <>
                See how we can
                <br />
                help you <HighlightWord tone="mint">progress</HighlightWord>
              </>
            }
            body={featureSections[1].body}
            image={featureSections[1].image}
            accentShape="triangle"
            imageAlign="left"
            imageClassName="image-circle--story-secondary"
            reverse
          />
        </div>

        <OfferingsSection
          id="services"
          title={
            <>
              What we <HighlightWord tone="mint">can</HighlightWord>
              <br />
              offer you!
            </>
          }
          rows={offeringRows}
        />

        <TestimonialSection
          image={testimonialSection.image}
        />

        <NewsletterSection
          id="newsletter"
          title={
            <>
              Subscribe to
              <br />
              our newsletter
            </>
          }
          subtitle="To make your stay special and even more memorable"
          buttonLabel="Subscribe Now"
          footerColumns={footerColumns}
          copyright="©2023 Elementum. All rights reserved"
        />
      </main>
    </div>
  );
}

export default App;
