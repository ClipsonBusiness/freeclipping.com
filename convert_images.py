#!/usr/bin/env python3
import base64
import os
from pathlib import Path

folder = Path("See What's Possible")
images = sorted(folder.glob('*.png'))

print("Converting images to base64...")
for img in images:
    with open(img, 'rb') as f:
        data = base64.b64encode(f.read()).decode('utf-8')
        print(f'<img src="data:image/png;base64,{data}" alt="Clipping Payout Screenshot" class="payout-image" loading="eager">')
        print(f'<!-- {img.name} -->')

