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

/**
 * Should match any HTML tag insige the text
 */
export const filterHtmlRegex = /(<([^>]+)>)/g

/**
 * Should match any link inside the text
 */
export const filterLinksRegex = /([^\S]|^)(((https?:\/\/)|(www\.)|([a-z0-9-]+\.))(\S+))/gi

/**
 * Should match any hashtag inside the text
 */
export const filterHashtagsRegex = /#\w+/gi

/**
 * Should match empty spaces before and after the text
 */
export const trimRegex = /^\s+|\s+$/g

/**
 * Should match string junks with more than 2 \n
 */
export const filterMultipleEmptyLines = /\n{3,}/g
