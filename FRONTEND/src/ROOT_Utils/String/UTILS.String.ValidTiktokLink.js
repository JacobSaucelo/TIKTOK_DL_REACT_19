export function UTILS_STRING_VALID_TIKTOK_LINK(PARAM_URL) {
  const REGEX_TIKTOK_LINK =
    /^https?:\/\/(?:www\.)?tiktok\.com\/(?:@[\w.-]+\/video\/\d+|v\/\d+|t\/[\w-]+)/i;
  return REGEX_TIKTOK_LINK.test(PARAM_URL);
}
