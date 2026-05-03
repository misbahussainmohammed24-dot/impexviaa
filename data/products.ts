import { Product } from "@/types/product";
import { imageMap } from "./imageMap";

export const products: Product[] = [
  {
    id: "1",
    name: "GoPro Action Cameras",
    image: imageMap["GoPro Action Cameras"],
    rating: 4.7,
    origin: "China",
    category: "Electronics",

    specs: [
      "5K/4K video",
      "20-27MP photo",
      "HyperSmooth stabilization",
      "Wi-Fi/BT/USB-C",
      "Waterproof 10m"
    ],

    certifications: ["CE", "FCC", "RoHS"],
    packaging: "Individual retail box, 20-50 per carton, includes accessories",
    supply: "50,000 units/month | Lead: 10-20 days",

    targetMarket: [
      "Retail stores",
      "Online marketplaces",
      "Sports distributors",
      "Content creators"
    ],

    tradeTerms: "FOB/CIF/EXW",
    hsn: "85258020",

    description:
      "High-performance portable recording for extreme environments. Used in adventure sports, vlogging, content creation. Premium product with strong demand.",

    comments: [
      { name: "Daniel Ferreira", comment: "Premium with strong demand" },
      { name: "Ahmed Raza", comment: "High-quality video" },
      { name: "Luca Romano", comment: "Good resale value" }
    ],

    moq: "Flexible"
  },

  {
    id: "2",
    name: "Adapters",
    image: imageMap["Adapters"],
    rating: 4.2,
    origin: "China",
    category: "Electronics",

    specs: [
      "USB/Type-C/HDMI/VGA",
      "Multi-device",
      "110V-240V",
      "USB 3.0/3.1"
    ],

    certifications: ["CE", "FCC", "RoHS"],
    packaging: "Polybag/retail box, 100-500 per carton",
    supply: "200,000 units/month | Lead: 10-20 days",

    targetMarket: [
      "Electronics retailers",
      "IT distributors",
      "Office supply"
    ],

    tradeTerms: "FOB/CIF/EXW",
    hsn: "85366990",

    description:
      "Essential connectivity devices for data transfer and power supply. Fast-moving, high-demand accessory with universal utility.",

    comments: [
      { name: "Arjun Mehta", comment: "Fast-moving" },
      { name: "Carlos Fernandes", comment: "Wide compatibility" }
    ],

    moq: "Flexible"
  }

  // 👉 CONTINUE SAME FORMAT FOR ALL 51
];