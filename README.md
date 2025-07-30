# Test NPM Package

A basic npm package for GitHub registry demonstration with automated semantic release.

## Installation

This package is published to GitHub Package Registry. Follow the setup instructions below:

### 1. Authenticate with GitHub Package Registry

First, you need to authenticate with GitHub Package Registry. You have several options:

#### Option A: Using Personal Access Token (Recommended)

1. Create a Personal Access Token (PAT) on GitHub:

   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate a new token with `read:packages` scope
   - Copy the token

2. Login to npm with GitHub registry:
   ```bash
   npm login --scope=@ervan0707 --registry=https://npm.pkg.github.com
   ```
   - Username: Your GitHub username
   - Password: Your Personal Access Token
   - Email: Your GitHub email

#### Option B: Using .npmrc File

Create or edit your `~/.npmrc` file:

```bash
@ervan0707:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

#### Option C: Project-specific .npmrc

Create a `.npmrc` file in your project root:

```bash
@ervan0707:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

Then set the environment variable:

```bash
export NPM_TOKEN=your_personal_access_token
```

### 2. Install the Package

Once authenticated, install the package:

```bash
npm install @ervan0707/test-npm-package
```

### 3. Alternative: One-time Installation

For a one-time installation without global configuration:

```bash
npm install @ervan0707/test-npm-package --registry=https://npm.pkg.github.com/
```

## Usage

```javascript
const { greet, add } = require("@ervan0707/test-npm-package");

// Greeting function
console.log(greet()); // "Hello, World! This is a test npm package from GitHub registry."
console.log(greet("Alice")); // "Hello, Alice! This is a test npm package from GitHub registry."

// Math function
console.log(add(2, 3)); // 5
```

## Troubleshooting

### Common Issues

1. **Authentication Error (401)**

   - Verify your Personal Access Token has `read:packages` scope
   - Check that your token hasn't expired
   - Ensure you're using the correct username in the package scope

2. **Package Not Found (404)**

   - Verify the package name matches exactly (case-sensitive)
   - Ensure the package has been published to GitHub Package Registry
   - Check that you have access to the repository

3. **Registry Configuration Issues**
   - Clear npm cache: `npm cache clean --force`
   - Verify registry configuration: `npm config get registry`
   - Check scope configuration: `npm config get @ervan0707:registry`

### Verify Installation

After installation, verify the package works:

```javascript
const { greet, add } = require("@ervan0707/test-npm-package");
console.log(greet("GitHub")); // Should output greeting message
```

## API

### greet(name)

Greets a user with a custom message.

- `name` (string, optional): The name to greet. Defaults to 'World'.
- Returns: A greeting message string.

### add(a, b)

Adds two numbers together.

- `a` (number): First number
- `b` (number): Second number
- Returns: The sum of a and b

## Development

This package uses semantic release for automated versioning and publishing. Follow these guidelines:

### Commit Message Format

This project follows the [Conventional Commits](https://conventionalcommits.org/) specification. Each commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types

- `feat`: A new feature (triggers minor version bump)
- `fix`: A bug fix (triggers patch version bump)
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

#### Breaking Changes

To trigger a major version bump, include `BREAKING CHANGE:` in the commit footer or add `!` after the type:

```
feat!: remove deprecated API
```

### Release Process

1. Create feature branches from `main`
2. Make changes following conventional commit format
3. Create a pull request
4. Once merged to `main`, semantic release will automatically:
   - Analyze commits to determine version bump
   - Generate changelog
   - Create GitHub release
   - Publish to GitHub npm registry

## Publishing to GitHub Registry

This package is configured to publish to GitHub's npm registry automatically via GitHub Actions. Make sure to:

1. Update the package name with your GitHub username
2. Ensure your repository has the correct permissions for GitHub Actions
3. The package will be published automatically on every merge to main/master

## License

MIT
