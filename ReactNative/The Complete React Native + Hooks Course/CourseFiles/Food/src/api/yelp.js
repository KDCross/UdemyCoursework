import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Z0TR5DVzGCa1U7Ra_eH-ZYyMPtTxlJVNBgPlwwsiuSUyLdaWtnoghuhzQ0WTKwtReGmGuvHgtbc9PXbdLSZoto4-vD4ckOx34vMK3iDS5PZVsKaiOPPPWFa1iKhiZHYx",
  },
});
