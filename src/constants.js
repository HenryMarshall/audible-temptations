
export const AUDIBLE_CLIENT_ID = 
  "amzn1.application-oa2-client.6cb3fbe8ae624b05ab9458f698945ef7";

// OAUTH
export const AUDIBLE_REDIRECT_URI = (__DEV__)
  ? "http://localhost:3000/auth"
  : "https://audibleTemptations.firebaseapp.com/auth";
export const OAUTH_REQUEST = "https://www.amazon.com/ap/oa"
  + "?client_id=" + AUDIBLE_CLIENT_ID
  + "&scope=profile%20profile:user_id%20audible:annotations_read%20audible:browse_read%20audible:catalog_read%20audible:content_read"
  + "&response_type=token"
  + "&redirect_uri=" + AUDIBLE_REDIRECT_URI;

// Recommendations
export const AUDIBLE_RECOMMENDATIONS_URL = 
  "https://api.audible.com/1.0/recommendations?response_groups=product_desc&num_results=5"


// Sample Data because of CORS problems
export const SAMPLE_BOOKS = {
  "products": [
    {
      "asin": "B01BNV6HPG",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/61mikBPhPDL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/tant/005700/bk_tant_005700_sample.mp3",
      "subtitle": "The Men Who Won the Roman Empire",
      "title": "In the Name of Rome"
    },
    {
      "asin": "B00TSRX9I6",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/51XxVZ4CKCL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/tant/004536/bk_tant_004536_sample.mp3",
      "subtitle": "The Story of History's Most Famous Assassination",
      "title": "The Death of Caesar"
    },
    {
      "asin": "B01A1FD032",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/61N0SPxErpL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/tcco/000428/bk_tcco_000428_sample.mp3",
      "title": "The Mysterious Etruscans"
    },
    {
      "asin": "B00LPMD72K",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/514mZ8eoG0L._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/adbl/018757/bk_adbl_018757_sample.mp3",
      "subtitle": "Paths, Dangers, Strategies",
      "title": "Superintelligence"
    },
    {
      "asin": "B00ICRLMWI",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/51yotsewD6L._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/sans/006646/bk_sans_006646_sample.mp3",
      "subtitle": "A Wall Street Revolt",
      "title": "Flash Boys"
    },
    {
      "asin": "B01865AOJW",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/51vjHVIvmjL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/reco/009110/bk_reco_009110_sample.mp3",
      "subtitle": "A History of Ancient Rome",
      "title": "SPQR"
    }
  ],
  "response_groups": [
    "product_desc",
    "always-returned",
    "media",
    "sample"
  ],
  "total_results": 6
}
