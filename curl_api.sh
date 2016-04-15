#!/bin/bash

# I have been having real difficulty with getting the API to work in the browser
# using CORS, To remedy this, I'm temporarily using curl to do the API calls
# and doing development with saved responses.

BASE_URL="https://api.audible.com/1.0"
CLIENT_ID="amzn1.application-oa2-client.6cb3fbe8ae624b05ab9458f698945ef7"
ACCESS_TOKEN="Atza|IQEBLjAsAhRdgKNHKTdRg_VIi9lFcSKZ03j6-gIUHjSjp1M6YWRjd90Zt0mJXs0MiK7DlddJg1rh9_wmK4PL6F46B_-fYBx1IimoyokjbSZK8MVz9JtrpcDx51bu7w669mxCkkhPTio7rR8ZEEZOHigDUvg7A2o80qLPuVmCZ-BMyXgp2bu5VSH8yJHlfohw6CabklzvmaPs_jWF6xz4fnpgCoNxqZXFv9Zs3KsOMsMcFvtFN6YveP8U8OA_bWimyXD-V0O8-w0N5Ejbypphss9RrXqV9Off9dlRLaSCCZtHbTp987QBy9fXICtKeYF2Y9wPJzDwcuPBRky1X-Jaw1H6sDZsqxMiaUW_7wwxFGtoo9bb7VEI7tbnmEDzYxYHdWxYp9zh2wJysdH5JS0Yu6mWmBy9UplLxksBqVefU3eVmroNbhFwXT7VwviaeNqEIGegvcBVeomueFpDBBfUJxLMEbRLiR4ubmLDQs8N72gJ4qFssduzozuW0uEdi4qpfWwaFB8me7hqykFa3OB5GaiutrDhWHetfrbP8Oo7RvSYmZtq6v1NiZpJtbLkknPh7PshNY4MI932e1PGQ4b38WTVVKZzu2MYhKaBFIEzsOKUOtI"

# ASINS="$NAME_OF_ROME_ASIN,$FLASH_BOYS,$INDUSTRIES_FUTURE,$"

ANCIENT_HISTORY_ID="2226720011"
NAME_OF_ROME_ASIN="B01BNV6HPG"
ASINS="B00LPMD72K,B00ICRLMWI,$NAME_OF_ROME_ASIN,B01865AOJW,B01A1FD032,B00TSRX9I6"

case "$1" in
  "categories")
    URL_PATH="catalog/categories"
    curl "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;

  "categories_id")
    URL_PATH="catalog/categories/$ANCIENT_HISTORY_ID?response_groups=products,product_desc&products_num_results=10"
    curl \
      "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;

  "products")
    URL_PATH="catalog/products?asins=$ASINS&response_groups=product_desc,sample,media"
    curl \
      "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;

  "product")
    URL_PATH="catalog/products/$NAME_OF_ROME_ASIN?response_groups=sku,contributors,product_desc,product_attrs,product_extended_attrs,product_plans,media,sample,price,rating,reviews,review_attrs,ws4v,member_giving_invites,ae_details,category_ladders,category_metadata,category_media"
    curl \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Client-ID: $CLIENT_ID" \
      "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;

  "test")
    URL_PATH="catalog"
    curl \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Client-ID: $CLIENT_ID" \
      "$BASE_URL/$URL_PATH"
    ;;

  # ========================== #
  # All Following Require Auth #
  # ========================== #

  "lastPositions")
    URL_PATH="annotations/lastpositions?asins=$NAME_OF_ROME_ASIN"
    curl \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Client-ID: $CLIENT_ID" \
      "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;
  "recommendations")
    URL_PATH="recommendations?response_groups=product_desc&num_results=5"
    curl \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Client-ID: $CLIENT_ID" \
      "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;
  "lastPositions")
    URL_PATH="annotations/lastpositions?asins=$NAME_OF_ROME_ASIN"
    curl \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Client-ID: $CLIENT_ID" \
      "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;
  "metadata")
    URL_PATH="content/$NAME_OF_ROME_ASIN/metadata?response_groups=last_position_heard,chapter_info,content_reference,content_license_key,content_url"
    curl \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Client-ID: $CLIENT_ID" \
      "$BASE_URL/$URL_PATH" | python -m json.tool
    ;;
  "stream")
    URL_PATH="content/$NAME_OF_ROME_ASIN/licenserequest"
    curl \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Client-ID: $CLIENT_ID" \
      -H "Content-Type: application/json" \
      -X POST \
      -d '{ "consumption_type":"Streaming", "drm_type":"Hls" }' \
      "$BASE_URL/$URL_PATH" | python -m json.tool

    ;;

  *)
    echo "Invalid argument. Unauth accepts:"
    echo "  categories"
    echo "  categories_id"
    ;;
esac
