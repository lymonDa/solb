/**
 * Claims Gating Registry
 * All unverified marketing claims remain strictly gated (false) until client provides written verification.
 * See IMPLEMENTATION_PLAN.md §9.4 and §15.1
 */
export const GATED_CLAIMS = {
  // German manufacturing or machinery origin claim
  germanEquipment: false,
  
  // Specific maximum core drilling diameter "up to 12 inches"
  maxDiameter12Inch: false,
  
  // "Laser saw" colloquial terminology (must not be published as laser)
  laserSawTerminology: false,
  
  // Zero vibration or structural impact guarantees
  vibrationGuarantee: false,
} as const;
