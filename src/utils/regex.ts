/**
 * Should match {{(link|hashtag)-1}} on post and comments contents
 */
export const matchLinkOrHashtagRegex = /\{\{(hashtag|link)-[0-9]*\}\}/g

/**
 * Should split {{link-1}} into ['', link, 1, ']
 */
export const splitLinkOrHashtagRegex = /\{\{|-|\}\}/

/**
 * Should test if url starts with http:// or https://
 */
export const testLinkProtocolRegex = /^(https?:\/\/)/
