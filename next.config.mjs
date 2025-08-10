import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  search: { codeblocks: false }, // Disable search in code blocks
  defaultShowCopyCode: true, // Enable copy code by default
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // Next.js config options
  output: 'standalone'
})