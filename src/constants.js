
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
