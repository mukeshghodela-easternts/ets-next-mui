export interface IBannerData {
  homeBannerCollection: {
    items: IHomeBannerItem[];
  };
}

export interface IHomeBannerItem {
  isAdvantage: boolean;
  contentBannerCollection: {
    items: IContentBannerItem[];
  };
}

export interface IContentBannerItem {
  slug: string;
  title: string;
  description: {
    json: {
      data: Record<string, any>;
      content: IContent[];
      nodeType: string;
    };
  };
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  image: {
    url: string;
    title: string;
    height: number;
    width: number;
  };
  iconCollection: {
    items: any[]; // The actual type for "items" is not specified in the provided data
  };
  cta: {
    name: string;
    url: string;
  };
}

interface IContent {
  data: Record<string, any>;
  content: IContentElement[];
  nodeType: string;
}

interface IContentElement {
  data: Record<string, any>;
  marks: IMark[];
  value: string;
  nodeType: string;
}

interface IMark {
  type: string;
}
export const bannerData: IBannerData = {
  homeBannerCollection: {
    items: [
      {
        isAdvantage: false,
        contentBannerCollection: {
          items: [
            {
              slug: "hero-banner",
              title: "Price drops are here to stay",
              description: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "on",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [
                            {
                              type: "bold",
                            },
                          ],
                          value: " ",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            "products you know and love across home, apparel and toys.\n\n",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
              },
              backgroundColor: "#FFEACA",
              textColor: "#222222",
              buttonTextColor: "#ffffff",
              buttonColor: "#253746",
              image: {
                url: "https://images.ctfassets.net/nxp56cevvnsk/1zwuJLkogPRTjZvke0nzNi/53150ab7437f36817a6c51209dfadc89/P1W3_pricedrops_1232x694_au_owned.png",
                title:
                  "Price Drop. We've dropped prices on over 1,000 products. ",
                height: 694,
                width: 1232,
              },
              iconCollection: {
                items: [],
              },
              cta: {
                name: "Shop all price drops",
                url: "/category/home-and-living/price-drops/",
              },
            },
          ],
        },
      },
      {
        isAdvantage: false,
        contentBannerCollection: {
          items: [
            {
              slug: "hero-banner",
              title: "Honey bee and beautiful yellow flower",
              description: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "on",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [
                            {
                              type: "bold",
                            },
                          ],
                          value: " ",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            "products you know and love across home, apparel and toys.\n\n",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
              },
              backgroundColor: "#FFEACA",
              textColor: "#222222",
              buttonTextColor: "#ffffff",
              buttonColor: "#253746",
              image: {
                url: "https://thumbs.dreamstime.com/z/bee-flower-27533578.jpg?w=1200",
                title:
                  "Honey bee and beautiful yellow flower, spring summer season, Wild nature landscape, banner, beauty in Nature",
                height: 694,
                width: 1232,
              },
              iconCollection: {
                items: [],
              },
              cta: {
                name: "Shop all honey bee",
                url: "/category/home-and-living/price-drops/",
              },
            },
          ],
        },
      },
      {
        isAdvantage: false,
        contentBannerCollection: {
          items: [
            {
              slug: "hero-banner",
              title: "Online shopping",
              description: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "on",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [
                            {
                              type: "bold",
                            },
                          ],
                          value: " ",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            "products you know and love across home, apparel and toys.\n\n",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
              },
              backgroundColor: "#FFEACA",
              textColor: "#222222",
              buttonTextColor: "#ffffff",
              buttonColor: "#253746",
              image: {
                url: "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=1060&t=st=1689940955~exp=1689941555~hmac=0e69de1599285aa38b6b76163b88d16b663ec210a3a94f987d624c8f0c72fe39",
                title: "Horizontal banner for online fashion sale",
                height: 694,
                width: 1232,
              },
              iconCollection: {
                items: [],
              },
              cta: {
                name: "Shop all banners",
                url: "/category/home-and-living/price-drops/",
              },
            },
          ],
        },
      },
    ],
  },
};
export const diffBGBannerData: IBannerData = {
  homeBannerCollection: {
    items: [
      {
        isAdvantage: false,
        contentBannerCollection: {
          items: [
            {
              slug: "hero-banner",
              title: "Price drops are here to stay",
              description: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "on",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [
                            {
                              type: "bold",
                            },
                          ],
                          value: " ",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            "products you know and love across home, apparel and toys.\n\n",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
              },
              backgroundColor: "#FFEACA",
              textColor: "#222222",
              buttonTextColor: "#ffffff",
              buttonColor: "#253746",
              image: {
                url: "https://images.ctfassets.net/nxp56cevvnsk/1zwuJLkogPRTjZvke0nzNi/53150ab7437f36817a6c51209dfadc89/P1W3_pricedrops_1232x694_au_owned.png",
                title:
                  "Price Drop. We've dropped prices on over 1,000 products. ",
                height: 694,
                width: 1232,
              },
              iconCollection: {
                items: [],
              },
              cta: {
                name: "Shop all price drops",
                url: "/category/home-and-living/price-drops/",
              },
            },
          ],
        },
      },
      {
        isAdvantage: false,
        contentBannerCollection: {
          items: [
            {
              slug: "hero-banner",
              title: "Honey bee and beautiful yellow flower",
              description: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "on",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [
                            {
                              type: "bold",
                            },
                          ],
                          value: " ",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            "products you know and love across home, apparel and toys.\n\n",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
              },
              backgroundColor: "#e0caf3",
              textColor: "#222222",
              buttonTextColor: "#ffffff",
              buttonColor: "#253746",
              image: {
                url: "https://thumbs.dreamstime.com/z/bee-flower-27533578.jpg?w=1200",
                title:
                  "Honey bee and beautiful yellow flower, spring summer season, Wild nature landscape, banner, beauty in Nature",
                height: 694,
                width: 1232,
              },
              iconCollection: {
                items: [],
              },
              cta: {
                name: "Shop all honey bee",
                url: "/category/home-and-living/price-drops/",
              },
            },
          ],
        },
      },
      {
        isAdvantage: false,
        contentBannerCollection: {
          items: [
            {
              slug: "hero-banner",
              title: "Online shopping",
              description: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "on",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [
                            {
                              type: "bold",
                            },
                          ],
                          value: " ",
                          nodeType: "text",
                        },
                        {
                          data: {},
                          marks: [],
                          value:
                            "products you know and love across home, apparel and toys.\n\n",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "document",
                },
              },
              backgroundColor: "#e5e2ad",
              textColor: "#222222",
              buttonTextColor: "#ffffff",
              buttonColor: "#253746",
              image: {
                url: "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=1060&t=st=1689940955~exp=1689941555~hmac=0e69de1599285aa38b6b76163b88d16b663ec210a3a94f987d624c8f0c72fe39",
                title: "Horizontal banner for online fashion sale",
                height: 694,
                width: 1232,
              },
              iconCollection: {
                items: [],
              },
              cta: {
                name: "Shop all banners",
                url: "/category/home-and-living/price-drops/",
              },
            },
          ],
        },
      },
    ],
  },
};
