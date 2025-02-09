import { execSync } from 'child_process';

try {
  // Build the project
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Deploy to GitHub Pages
  console.log('Deploying to GitHub Pages...');
  execSync('git add dist -f');
  execSync('git commit -m "Deploy to GitHub Pages"');
  execSync('git subtree push --prefix dist origin gh-pages');

  console.log('Deployment successful!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}