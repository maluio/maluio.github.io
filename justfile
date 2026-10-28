default:
  just --list

# Install dependencies
install:
  uv sync

# Serve site with live reload at localhost:8000
dev:
  uv run invoke livereload

# Build local version of site
build:
  uv run invoke build

# Build production version of site (what CI deploys)
preview:
  uv run invoke preview

# Build, then serve at localhost:8000
serve:
  uv run invoke reserve

# Interactively create a new post
new:
  uv run invoke new

# Remove generated files
clean:
  uv run invoke clean
