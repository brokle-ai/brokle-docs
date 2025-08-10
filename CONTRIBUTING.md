# Contributing to Brokle Documentation

Thank you for helping improve the Brokle Platform documentation! Clear, accurate documentation is essential for our community, and we appreciate your contributions.

## Table of Contents
- [Getting Started](#getting-started)
- [Documentation Structure](#documentation-structure)
- [Making Changes](#making-changes)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Writing Guidelines](#writing-guidelines)
- [Local Development](#local-development)

## Getting Started

### Prerequisites
- Node.js 16+ and npm/pnpm
- Basic knowledge of Markdown and MDX
- Familiarity with Next.js (helpful but not required)

### Development Setup

1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/brokle-docs.git
   cd brokle-docs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**: Visit `http://localhost:3000`

## Documentation Structure

```
src/content/
├── index.mdx              # Homepage content
├── api-examples.mdx       # API usage examples
├── sdk-examples.mdx       # SDK examples and tutorials
├── sample-data.mdx        # Sample data and responses
└── _meta.json            # Navigation and metadata
```

### Content Types
- **Guides**: Step-by-step tutorials and how-tos
- **API Reference**: Detailed API endpoint documentation
- **SDK Documentation**: Language-specific SDK guides
- **Examples**: Code samples and use cases

## Making Changes

### Types of Contributions
- **Content updates**: Fix errors, improve clarity, add missing information
- **New documentation**: Add guides, examples, or API documentation
- **Structure improvements**: Better organization, navigation, or layout
- **Code examples**: Add or improve code samples

### Creating a Branch
```bash
git checkout -b docs/update-python-sdk-guide
git checkout -b fix/api-endpoint-examples
git checkout -b feat/add-authentication-tutorial
```

## Commit Guidelines

We appreciate clear commit messages! While not strictly enforced, following these guidelines helps maintain project history:

### Preferred Format
```
<type>: <description>
```

### Types
- **`feat`**: New documentation or major additions
- **`fix`**: Fix errors, broken links, or outdated information
- **`docs`**: General documentation improvements
- **`style`**: Formatting, layout, or presentation changes
- **`refactor`**: Restructure content without changing meaning

### Examples
```bash
# Good examples
feat: add authentication tutorial with code examples
fix: correct API endpoint URLs in examples
docs: improve Python SDK installation guide
style: improve mobile responsiveness of code blocks
refactor: reorganize API reference structure

# Also acceptable
Add new tutorial for authentication
Fixed broken links in API docs
Update installation instructions
```

**Don't worry about perfect formatting** - clear communication is more important than strict adherence to format. We can help refine messages during review.

## Pull Request Process

### Before Submitting
1. **Test your changes locally**: Ensure the site builds and looks correct
2. **Check for broken links**: Verify all links work
3. **Review for accuracy**: Ensure technical accuracy
4. **Check spelling and grammar**: Use spell check tools

### Build and Test
```bash
# Build the documentation
npm run build

# Start production build locally
npm run start

# Check for build errors
npm run lint
```

### Submitting Your PR

1. **Push your branch**:
   ```bash
   git push origin docs/your-change-description
   ```

2. **Create a Pull Request** with:
   - Clear title describing the change
   - Description of what was added/changed/fixed
   - Screenshots if visual changes were made
   - Note any breaking changes or updates needed elsewhere

3. **PR Template**:
   ```markdown
   ## Description
   Brief description of documentation changes

   ## Type of Change
   - [ ] New documentation
   - [ ] Fix/correction to existing docs
   - [ ] Improvement to existing content
   - [ ] Structural/organizational change

   ## Screenshots (if applicable)
   Include screenshots of visual changes

   ## Checklist
   - [ ] Content is accurate and up-to-date
   - [ ] All links work correctly
   - [ ] Code examples are tested and functional
   - [ ] Content follows our writing guidelines
   - [ ] Documentation builds without errors
   ```

## Writing Guidelines

### Style and Tone
- **Clear and concise**: Use simple language and short sentences
- **Friendly but professional**: Welcoming to developers of all levels
- **Action-oriented**: Use active voice and imperative mood for instructions
- **Consistent**: Follow established patterns and terminology

### Content Structure
- **Start with overview**: Brief description of what the section covers
- **Logical flow**: Organize from basic to advanced concepts
- **Code examples**: Provide working examples for all concepts
- **Next steps**: Link to related documentation

### Markdown and MDX

#### Headers
```markdown
# Page Title (H1 - only one per page)
## Main Section (H2)
### Subsection (H3)
#### Details (H4 - use sparingly)
```

#### Code Blocks
```markdown
```bash
# Shell commands
npm install brokle
```

```python
# Python examples
from brokle import Brokle

client = Brokle()
```

```javascript
// JavaScript examples
import { Brokle } from 'brokle';

const client = new Brokle();
```
```

#### Callouts and Alerts
```markdown
> **Note**: Important information that users should be aware of.

> **Warning**: Critical information about potential issues.

> **Tip**: Helpful suggestions or best practices.
```

#### Links
```markdown
# Internal links
[Python SDK Guide](./sdk-examples)

# External links
[OpenAI API Reference](https://platform.openai.com/docs/api-reference)

# API reference links
[`/chat/completions`](./api-examples#chat-completions)
```

### Code Examples

#### Complete and Runnable
```python
# ✅ Good: Complete example
from brokle import Brokle

async def main():
    async with Brokle() as client:
        response = await client.chat.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": "Hello!"}]
        )
        print(response.choices[0].message.content)

# ❌ Bad: Incomplete example  
response = client.chat.create(...)
```

#### Language-Specific Examples
Provide examples in multiple languages when relevant:

```markdown
## Python
```python
from brokle import Brokle
client = Brokle()
```

## JavaScript
```javascript
import { Brokle } from 'brokle';
const client = new Brokle();
```

## cURL
```bash
curl -X POST https://api.brokle.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hello!"}]}'
```
```

### Technical Accuracy

- **Test all code examples**: Ensure examples work as written
- **Use real API responses**: Show actual response formats
- **Keep examples up-to-date**: Update when APIs change
- **Include error handling**: Show how to handle common errors

## Local Development

### File Watching
The development server automatically reloads when you make changes to:
- MDX content files
- Configuration files
- Styling

### Building and Testing
```bash
# Development server
npm run dev

# Production build
npm run build

# Serve production build
npm run start

# Run linting
npm run lint
```

### Troubleshooting

**Build failures**: Check the console for specific MDX syntax errors

**Styling issues**: Ensure Tailwind CSS classes are used correctly

**Navigation problems**: Check `_meta.json` for proper page ordering

## Content Guidelines

### API Documentation
- Include request/response examples
- Document all parameters and their types
- Show error responses and status codes
- Provide authentication examples

### SDK Documentation
- Show installation instructions
- Provide quickstart examples
- Document all major features
- Include troubleshooting sections

### Tutorials and Guides
- Start with clear objectives
- Use step-by-step instructions
- Include code examples at each step
- End with summary and next steps

## Getting Help

### Resources
- [Nextra Documentation](https://nextra.site/) (our documentation framework)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### Support
- **Issues**: Use GitHub issues for bugs or content requests
- **Discussions**: For questions about documentation approach
- **Email**: support@brokle.com for sensitive issues

## Review Process

1. **Automated checks**: Build verification and link checking
2. **Technical review**: Accuracy and completeness check
3. **Editorial review**: Grammar, style, and clarity
4. **Final approval**: Maintainer approval and merge

Thank you for helping make Brokle's documentation better! 📚