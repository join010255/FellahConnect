export const tools = [
  {
    name: "getBestPrice",
    description: "Get the best market price for a product.",
    parameters: {
      type: "object",
      properties: {
        productName: {
          type: "string"
        }
      },
      required: ["productName"]
    }
  },

  {
    name: "getMarketPrices",
    description: "Get all market prices for a product.",
    parameters: {
      type: "object",
      properties: {
        productName: {
          type: "string"
        }
      },
      required: ["productName"]
    }
  },

  {
    name: "getFarmerHarvests",
    description: "Get all harvests of a farmer.",
    parameters: {
      type: "object",
      properties: {
        farmerId: {
          type: "number"
        }
      },
      required: ["farmerId"]
    }
  },

  {
    name: "getFarmerParcels",
    description: "Get all parcels of a farmer.",
    parameters: {
      type: "object",
      properties: {
        farmerId: {
          type: "number"
        }
      },
      required: ["farmerId"]
    }
  },

  {
    name: "createHarvest",
    description: "Create a new harvest for a farmer.",
    parameters: {
      type: "object",
      properties: {
        parcelleId: {
          type: "number"
        },
        produitId: {
          type: "number"
        },
        quantite: {
          type: "number"
        },
        dateRecolte: {
          type: "string"
        }
      },
      required: [
        "parcelleId",
        "produitId",
        "quantite",
        "dateRecolte"
      ]
    }
  },

  {
    name: "createSaleOffer",
    description: "Create a new sale offer from a harvest.",
    parameters: {
      type: "object",
      properties: {
        recolteId: {
          type: "number"
        },
        prix: {
          type: "number"
        },
        quantite: {
          type: "number"
        }
      },
      required: [
        "recolteId",
        "prix",
        "quantite"
      ]
    }
  },

  {
    name: "updateHarvest",
    description: "Update harvest information.",
    parameters: {
      type: "object",
      properties: {
        recolteId: {
          type: "number"
        },
        quantite: {
          type: "number"
        }
      },
      required: [
        "recolteId",
        "quantite"
      ]
    }
  },

  {
    name: "deleteSaleOffer",
    description: "Delete a sale offer.",
    parameters: {
      type: "object",
      properties: {
        offreId: {
          type: "number"
        }
      },
      required: ["offreId"]
    }
  }
];