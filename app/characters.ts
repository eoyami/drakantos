type CharacterProps = {
    id: number,
    name: string,
    src: string,
    alt: string,
    type: "support" | "tank" | "dps" | "none",
  }
  
  export const characters: CharacterProps[] = [
    { id: 1,
      name: "Ozul",
      src: "/ozul.png",
      alt: "Ozul",
      type: "dps",
    },
    {
      id: 2,
      name: "Arryn",
      src: "/arryn.png",
      alt: "Arryn",
      type: "dps",
    },
    {
      id: 3,
      name: "Byron",
      src: "/byron.png",
      alt: "Byron",
      type: "support",
    },
    {
      id: 4,
      name: "Iris",
      src: "/iris.png",
      alt: "Iris",
      type: "tank",
    },
    {
      id: 5,
      name: "Kavras",
      src: "/kavras.png",
      alt: "Kavras",
      type: "support",
    },
    {
      id: 6,
      name: "Korz",
      src: "/korz.png",
      alt: "Korz",
      type: "tank",
    },
    {
      id: 7,
      name: "Ojore",
      src: "/ojore.png",
      alt: "Ojore",
      type: "tank",
    },
    {
      id: 8,
      name: "Ophis",
      src: "/ophis.png",
      alt: "Ophis",
      type: "dps",
    },
    {
      id: 9,
      name: "Orbryn",
      src: "/orbryn.png",
      alt: "Orbryn",
      type: "dps",
    },
    {
      id: 10,
      name: "Reya",
      src: "/reya.png",
      alt: "Reya",
      type: "dps",
    },
    {
      id: 11,
      name: "Thomas",
      src: "/thomas.png",
      alt: "Thomas",
      type: "support"
    },
    {
      id: 12,
      name: "Urijor",
      src: "/urijor.png",
      alt: "Urijor",
      type: "tank"
    }
  ]
  