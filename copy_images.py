#!/usr/bin/env python3
import os
import shutil

# Change to script directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Get the folder - list directories and find it
folders = [f for f in os.listdir('.') if os.path.isdir(f) and 'see' in f.lower()]
if folders:
    folder_name = folders[0]
    print(f"Using folder: '{folder_name}'")
    
    # Get all PNG files
    folder_path = os.path.join('.', folder_name)
    png_files = sorted([f for f in os.listdir(folder_path) if f.endswith('.png')])
    
    print(f"Found {len(png_files)} PNG files")
    
    # Copy each file with a simple name
    for i, filename in enumerate(png_files, 1):
        src = os.path.join(folder_path, filename)
        dest = f"payout-{i}.png"
        try:
            shutil.copy2(src, dest)
            print(f"✓ payout-{i}.png")
        except Exception as e:
            print(f"✗ Failed {filename}: {e}")
    
    print(f"\n✅ Done! Copied {len(png_files)} images")
else:
    print("Error: Could not find the folder")
