export type Step3FormForValidation = {
  primaryBusinessActivity: string;
  mainProductCategories: string;
  productSubcategories: string;
  productName: string;
  productDescription: string;
  productSpecifications: string;
  moq: string;
  productionCapacity: string;
  leadTime: string;
  packagingType: string;
  portOfLoading: string;
  shippingAvailability: string;
  exportMarkets: string;
  paymentTermsAccepted: string;
  incotermsSupported: string;
  marketplaceVisibility: string;
  rfqParticipation: string;
  featuredSupplierEligibility: string;
};

export type Step3FilesForValidation = {
  mainProductImage: File | null;
  additionalProductImages: File[];
};

export function validateStep3(
  form: Step3FormForValidation,
  files: Step3FilesForValidation
): string {
  if (!form.primaryBusinessActivity) return "Primary Business Activity is required.";
  if (!form.mainProductCategories) return "Main Product Category is required.";
  if (!form.productSubcategories) return "Product Subcategory is required.";
  if (!form.productName) return "Product Name is required.";
  if (!form.productDescription) return "Product Description is required.";
  if (!form.productSpecifications) return "Product Specifications are required.";
  if (!files.mainProductImage) return "Main Product Image is required.";
  if (!files.additionalProductImages || files.additionalProductImages.length === 0) {
    return "At least one Additional Product Image is required.";
  }
  if (!form.moq) return "MOQ is required.";
  if (!form.productionCapacity) return "Production Capacity is required.";
  if (!form.leadTime) return "Lead Time is required.";
  if (!form.packagingType) return "Packaging Type is required.";
  if (!form.portOfLoading) return "Port of Loading is required.";
  if (!form.shippingAvailability) return "Shipping Availability is required.";
  if (!form.exportMarkets) return "Export Markets are required.";
  if (!form.paymentTermsAccepted) return "Payment Terms Accepted are required.";
  if (!form.incotermsSupported) return "Incoterms Supported are required.";
  if (!form.marketplaceVisibility) return "Marketplace Visibility is required.";
  if (!form.rfqParticipation) return "RFQ Participation is required.";
  if (!form.featuredSupplierEligibility) {
    return "Featured Supplier Eligibility is required.";
  }

  return "";
}