#!/bin/bash

# aiKODA Market Intelligence Dashboard Deployment Script
# Deploy to aikoda.dev with real market data

echo "🐯 Starting deployment to aikoda.dev..."

# Build the application
echo "📦 Building application..."
npm run build

# Check build success
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Create deployment package
echo "📋 Creating deployment package..."
tar -czf aikoda-market-intelligence-$(date +%Y%m%d-%H%M%S).tar.gz \
    .next/ \
    public/ \
    package.json \
    package-lock.json \
    next.config.ts \
    prisma/ \
    lib/ \
    app/ \
    styles/ \
    components/ \
    types/ \
    middleware.ts

echo "🚀 Deployment package created!"

# Instructions for manual deployment
echo "📝 Manual deployment steps:"
echo "1. Upload the .tar.gz file to your aikoda.dev server"
echo "2. Extract: tar -xzf aikoda-market-intelligence-*.tar.gz"
echo "3. Install dependencies: npm install"
echo "4. Set environment variables in .env.local"
echo "5. Start the application: npm start"
echo ""
echo "🌐 The Market Intelligence Dashboard will be available at:"
echo "   https://aikoda.dev/dashboard/market-intelligence"
echo ""
echo "🔑 Features included:"
echo "   - Real Japan-Indonesia workforce data"
echo "   - 820K skilled foreign workers projection"
echo "   - AI adoption rates (76% Indonesian workers)"
echo "   - Actual salary ranges (JP¥5M-15M, IDR 120M-528M)"
echo "   - Cultural intelligence trends"
echo "   - Skills demand analysis"
echo ""
echo "✨ Ready for your 09:00 AM Brexa meeting!"

# Optional: If you have server access, uncomment these lines
# echo "🌐 Deploying to server..."
# scp aikoda-market-intelligence-*.tar.gz user@aikoda.dev:/var/www/
# ssh user@aikoda.dev 'cd /var/www && tar -xzf aikoda-market-intelligence-*.tar.gz && npm install && pm2 restart aikoda'

echo "🐯 Deployment preparation complete!"