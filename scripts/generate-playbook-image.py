#!/usr/bin/env python3
"""Generate Facebook Ads Playbook image using Gemini Imagen API."""

import os
import sys

# Add path to resolve_env
sys.path.insert(0, os.path.expanduser('~/.claude/scripts'))

# Use provided API key directly
api_key = "AIzaSyAEY7gEI1nK7qTk39x5pXYFEyw2CcysUS0"

import google.genai as genai

# Initialize client
client = genai.Client(api_key=api_key)

# Generate image with Imagen
prompt = """A premium marketing book cover design for Facebook Ads Playbook.
Features:
- Dark navy blue to purple gradient background
- Abstract geometric shapes representing data flow and ad optimization
- Subtle Facebook blue accent colors
- Modern minimalist design aesthetic
- Professional business/marketing look
- Clean typography area on left side
- Data visualization elements (charts, graphs faded in background)
- Landscape orientation for promotional card use
Style: High-end corporate marketing material, sophisticated, premium feel"""

print("Generating image with Imagen 4.0...")
response = client.models.generate_images(
    model='imagen-4.0-generate-001',
    prompt=prompt,
    config={
        'number_of_images': 1,
        'aspect_ratio': '16:9',
        'safety_filter_level': 'BLOCK_LOW_AND_ABOVE',
    }
)

# Save the image
if response.generated_images:
    img_data = response.generated_images[0].image.image_bytes
    output_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_path = os.path.join(output_dir, 'public/images/facebook-ads-playbook.png')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'wb') as f:
        f.write(img_data)
    print(f'SUCCESS: Image saved to {output_path}')
    print(f'Size: {len(img_data)} bytes')
else:
    print('ERROR: No image generated')
