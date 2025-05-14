# Deploying to cPanel

This guide will help you deploy your React application to a cPanel hosting environment.

## Step 1: Build the application

First, build your React application for production:

```bash
npm run build
```

This will create a `dist` folder with all the files needed for deployment.

## Step 2: Upload files to cPanel

1. Log in to your cPanel account
2. Navigate to the File Manager
3. Go to the public_html directory (or subdirectory where you want to host the site)
4. Upload all files from the `dist` folder to this directory
5. Make sure to also upload the `.htaccess` file

## Step 3: Create or verify .htaccess file

Ensure that the `.htaccess` file is present in your root directory with the following content:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
```

This ensures that your single-page application routes work correctly.

## Step 4: Configure subdirectory (if applicable)

If you're deploying to a subdirectory instead of the root domain, you'll need to adjust the `base` setting in `vite.config.js` to match your subdirectory path before building:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-subdirectory-name/',
})
```

## Step 5: Check file permissions

Make sure your files have the correct permissions:
- HTML, CSS, JS files: 644
- Images and static assets: 644
- Directories: 755

You can set permissions in cPanel File Manager by right-clicking on a file or directory and selecting "Change Permissions".

## Step 6: Test your application

Visit your website URL and verify that:
- The site loads correctly
- All images and assets are displayed
- Navigation works properly
- The site functions as expected

## Troubleshooting

### Images or assets not loading

Check the paths in your code. Make sure they're relative paths. Look for any hardcoded absolute paths.

### Routing issues

If routes don't work when directly accessing them (e.g., example.com/about), ensure your .htaccess file is properly set up and that mod_rewrite is enabled on your hosting.

### 500 Internal Server Error

Check your .htaccess file for syntax errors or unsupported directives. Some hosting providers may have restrictions on certain directives.

### Performance issues

Enable caching and compression in your .htaccess file (already included in the provided .htaccess).

## Additional Resources

- [cPanel Documentation](https://docs.cpanel.net/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html) 