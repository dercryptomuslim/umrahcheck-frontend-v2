#!/bin/bash

# UmrahCheck MCP Booking Agent Setup Script
# This script sets up the MCP booking agent on your system

set -e

echo "🚀 UmrahCheck MCP Booking Agent Setup"
echo "======================================"

# Check if Python 3.11+ is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed"
    exit 1
fi

PYTHON_VERSION=$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
echo "🐍 Python version: $PYTHON_VERSION"

# Check if we have at least Python 3.8
if [[ "$(printf '%s\n' "3.8" "$PYTHON_VERSION" | sort -V | head -n1)" != "3.8" ]]; then
    echo "❌ Python 3.8+ is required (you have $PYTHON_VERSION)"
    exit 1
fi

# Create virtual environment
echo "📦 Creating virtual environment..."
python3 -m venv mcp_agent_env
source mcp_agent_env/bin/activate

# Upgrade pip
echo "⬆️  Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "📚 Installing dependencies..."
pip install -r requirements_mcp_agent.txt

# Install Playwright browsers
echo "🌐 Installing Playwright browsers..."
playwright install chromium

# Make test script executable
chmod +x test_mcp_agent.py

echo ""
echo "✅ Setup completed successfully!"
echo ""
echo "🚀 To start the agent:"
echo "   source mcp_agent_env/bin/activate"
echo "   python mcp_booking_agent.py"
echo ""
echo "🧪 To test the agent (in another terminal):"
echo "   source mcp_agent_env/bin/activate"
echo "   python test_mcp_agent.py"
echo ""
echo "🐳 To use Docker instead:"
echo "   docker-compose -f docker-compose.mcp.yml up -d"
echo ""
echo "📊 Monitor logs:"
echo "   tail -f logs/mcp_agent.log"
echo ""
echo "🌐 API Documentation:"
echo "   http://localhost:8001/docs"
echo ""
echo "✨ Happy booking research! 🕋✈️🏨"