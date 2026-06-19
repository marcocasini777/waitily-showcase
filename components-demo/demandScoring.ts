type DemandPoolSignal = {
  demandCount: number;
  averageReferencePrice: number | null;
  requestGrowth: number;
  offerCount: number;
  contactDensity: number;
};

export function calculateShowcaseOpportunityScore(pool: DemandPoolSignal) {
  const demandScore = Math.min(pool.demandCount * 8, 40);
  const priceScore = Math.min((pool.averageReferencePrice ?? 0) / 25, 24);
  const growthScore = Math.min(pool.requestGrowth * 10, 20);
  const contactScore = Math.round(pool.contactDensity * 10);
  const offerCoverageScore = pool.offerCount > 0 ? 8 : 0;

  return Math.round(demandScore + priceScore + growthScore + contactScore + offerCoverageScore);
}

export function getFounderDecision(score: number, offerCount: number) {
  if (score >= 80 && offerCount === 0) return "Retailer outreach";
  if (score >= 55 && offerCount === 0) return "Source fallback offer";
  if (score >= 55 && offerCount > 0) return "Monitor offer performance";
  return "Keep collecting";
}
